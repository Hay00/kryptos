import { Button } from '@/components';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import CipherModal from '../Cipher/Cipher';
import { ButtonsContainer } from '../modal.styles';
import PasswordModal from '../Password/Password';
import { ActionsProps } from './actions.interface';

export default function Actions({
  type,
  kind,
  options,
  doTransform,
  doPlaintext,
  doPassword,
}: Readonly<ActionsProps>) {
  switch (type) {
    case 'converter':
    case 'encoder':
      return (
        <ButtonsContainer>
          <Button onClick={doTransform} label="Encode">
            <BsArrowDown size={24} />
          </Button>
          <Button onClick={doPlaintext} label="Decode">
            <BsArrowUp size={24} />
          </Button>
        </ButtonsContainer>
      );

    case 'hashing':
      return (
        <ButtonsContainer>
          <Button onClick={doTransform} label="Create Hash" />
        </ButtonsContainer>
      );

    case 'cipher':
      return (
        <CipherModal doTransform={doTransform} doPlaintext={doPlaintext} />
      );

    case 'misc':
      if (kind === 'password') {
        return <PasswordModal doPassword={doPassword} options={options} />;
      }

      if (kind === 'oneWay') {
        return (
          <ButtonsContainer>
            <Button onClick={doTransform} label="Transform">
              <BsArrowDown size={24} />
            </Button>
          </ButtonsContainer>
        );
      }

      break;

    default:
      return null;
  }
}
