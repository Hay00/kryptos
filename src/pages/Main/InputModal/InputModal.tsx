import { ChangeEvent, useState } from 'react';

import { Button, Checkbox } from '@/components';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';

import UtilFactory from '../../../utils';

import type { ModalProps } from '../main-page.interface';
import type {
  CheckboxName,
  FieldCanDecode,
  InterfaceInputModal,
  LabelsName,
} from './input-modal.interface';

import {
  ButtonsContainer,
  CancelButtonContainer,
  Content,
  Input,
  InputContainer,
  InputLabel,
  ModalContent,
  ModalTitle,
  Select,
  TextArea,
  Title,
} from './input-modal.styles';

const initialOptions = {
  lowercase: false,
  uppercase: false,
  numbers: false,
  symbols: false,
};

export default function InputModal({
  isOpen,
  item,
  onClose,
}: Readonly<InterfaceInputModal>) {
  const { id, type, title, options } = item;

  // Modal input and output
  const [text, setText] = useState('');
  const [encodedText, setEncodedText] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [passLength, setPassLength] = useState<number>(25);
  const [blockType, setBlockType] = useState('cbc');
  const [checkBoxes, setCheckBoxes] = useState(initialOptions);

  // Create a new util for encoding and decoding input
  const myUtil = UtilFactory.createInstance(id);

  /**
   * Validate user input `text` and properly encode for its type
   */
  async function encode() {
    try {
      if (passLength > 0 || text.length > 0) {
        if (type === 'password') {
          setEncodedText(await myUtil.encode(passLength, checkBoxes));
        } else if (type === 'block') {
          setEncodedText(await myUtil.encode(text, blockType, secretKey));
        } else {
          setEncodedText(await myUtil.encode(text));
        }
      } else {
        const errMsg =
          type === 'password'
            ? 'Password length input is empty!'
            : 'Input is empty!';
        throw new Error(errMsg);
      }
    } catch (e) {
      alert(e);
    }
  }

  /**
   * Validate user input `encodedText` and decode
   */
  function decode() {
    try {
      if (encodedText.length < 1) {
        alert('Output is empty!');
      } else {
        setText(myUtil.decode(encodedText, blockType, secretKey));
      }
    } catch (e) {
      alert(e);
    }
  }

  /**
   * Updates selected options
   * @param {String} name option to update
   * @param {Event} event component event
   */
  function optionChange(name: string, event: ChangeEvent<HTMLInputElement>) {
    setCheckBoxes({ ...checkBoxes, [name]: event.target.checked });
  }

  /**
   * Closes modal and clear local states
   */
  function handleClose() {
    setText('');
    setEncodedText('');
    setCheckBoxes(initialOptions);
    setPassLength(25);
    onClose();
  }

  function shouldBeChecked(name: CheckboxName): boolean {
    return checkBoxes[name] ?? false;
  }

  /**
   * Renders modal input according to item type
   *
   * * Render Function
   * @param {String} type item type
   */
  function modalInput(type: ModalProps['type']) {
    switch (type) {
      case 'password':
        return (
          <ModalContent>
            <InputContainer>
              <InputLabel>Password Length:</InputLabel>
              <Input
                type="number"
                value={passLength}
                onChange={(e) => setPassLength(Number.parseInt(e.target.value))}
              />
            </InputContainer>
            <div style={{ marginTop: '12px' }}>
              {options?.map((item, index) => (
                <Checkbox
                  key={item.name + index}
                  checked={shouldBeChecked(item.name as CheckboxName)}
                  onChange={(e) => optionChange(item.name, e)}
                >
                  {item.title}
                </Checkbox>
              ))}
            </div>
          </ModalContent>
        );
      case 'block':
        return (
          <>
            <ModalContent>
              <Title>Text</Title>
              <TextArea
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </ModalContent>
            <InputContainer>
              <InputLabel>Secret Key:</InputLabel>
              <Input
                type="text"
                size="large"
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
              />
            </InputContainer>
            <InputContainer>
              <InputLabel>Select Mode:</InputLabel>
              <Select
                value={blockType}
                onChange={({ target }) => setBlockType(target.value)}
              >
                <option value="cbc">CBC (Cipher Block Chaining)</option>
                <option value="ecb">ECB (Electronic CodeBook)</option>
                <option value="ctr">CTR (Counter)</option>
              </Select>
            </InputContainer>
          </>
        );

      default:
        return (
          <ModalContent>
            <Title>Text</Title>
            <TextArea value={text} onChange={(e) => setText(e.target.value)} />
          </ModalContent>
        );
    }
  }

  /**
   * Renders modal buttons according to item type
   *
   * * Render Function
   * @param {String} type item type
   */
  function modalButtons(type: ModalProps['type']) {
    const encodeLabels: LabelsName = {
      none: 'None',
      encoder: 'Encode',
      hash: 'Create Hash',
      block: 'Encrypt',
      password: 'Create Password',
      transform: 'Transform Text',
    };

    const canDecode: FieldCanDecode = {
      none: false,
      encoder: true,
      hash: false,
      block: true,
      password: false,
      transform: false,
    };

    return (
      <ButtonsContainer>
        <Button onClick={encode} label={encodeLabels[type]}>
          {canDecode[type] && <BsArrowDown size={24} />}
        </Button>
        {canDecode[type] && (
          <Button onClick={decode} label="Decode">
            <BsArrowUp size={24} />
          </Button>
        )}
      </ButtonsContainer>
    );
  }

  return (
    <Content isOpen={isOpen} onRequestClose={handleClose}>
      <ModalTitle>{title}</ModalTitle>
      {modalInput(type)}
      {modalButtons(type)}
      <ModalContent>
        <Title>Encoded Text</Title>
        <TextArea
          value={encodedText}
          onChange={(e) => setEncodedText(e.target.value)}
        />
      </ModalContent>
      <CancelButtonContainer>
        <Button cancel onClick={handleClose} label="Close" />
      </CancelButtonContainer>
    </Content>
  );
}
