import { Content, Options, ContentType } from '@/data';
import { CheckboxChecked } from '../modal.interface';
import { AESBlockType } from '@/libs/ciphers/aes/aes.interface';

export interface BaseActionsProps {
  options?: Options[];
  doTransform: (blockType?: AESBlockType, secretKey?: string) => void;
  doPlaintext: (blockType?: AESBlockType, secretKey?: string) => void;
}

export interface PasswordActionProps {
  options?: Options[];
  doPassword: (passwordLength: number, options: CheckboxChecked) => void;
}

export interface ActionsProps extends BaseActionsProps {
  type: ContentType;
  kind: Content['kind'];
  doPassword: (passwordLength: number, options: CheckboxChecked) => void;
}
