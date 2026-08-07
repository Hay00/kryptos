import { ChangeEvent, useState } from 'react';

import { Button, Checkbox, Input } from '@/components';

import type { PasswordActionProps } from '../Actions/actions.interface';
import type { CheckboxName } from '../modal.interface';

import { ButtonsContainer, ModalContent } from '../modal.styles';

const initialOptions = {
  lowercase: true,
  uppercase: true,
  numbers: true,
  symbols: false,
};

export default function PasswordModal({
  options,
  doPassword,
}: Readonly<PasswordActionProps>) {
  const [passLength, setPassLength] = useState<number>(32);
  const [checkBoxes, setCheckBoxes] = useState(initialOptions);

  function shouldBeChecked(name: CheckboxName): boolean {
    return checkBoxes[name] ?? false;
  }

  /**
   * Handles the change of an option checkbox.
   * @param name  The name of the checkbox.
   * @param event The change event.
   */
  function optionChange(name: string, event: ChangeEvent<HTMLInputElement>) {
    setCheckBoxes({ ...checkBoxes, [name]: event.target.checked });
  }

  return (
    <>
      <ModalContent>
        <Input
          label="Password Length:"
          type="number"
          value={passLength}
          onChange={(e) => setPassLength(Number.parseInt(e.target.value))}
        />
        <div style={{ marginTop: '12px' }}>
          {options?.map((item, index) => (
            <Checkbox
              key={item.type + index}
              checked={shouldBeChecked(item.type as CheckboxName)}
              onChange={(e) => optionChange(item.type, e)}
            >
              {item.title}
            </Checkbox>
          ))}
        </div>
      </ModalContent>
      <ButtonsContainer>
        <Button
          onClick={() => doPassword(passLength, checkBoxes)}
          label="Create Password"
        />
      </ButtonsContainer>
    </>
  );
}
