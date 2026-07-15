import { Container, Title } from './item-button.styles';
import { ItemButtonProps } from './item-button.interface';

export default function ItemButton({
  onClick,
  children,
}: Readonly<ItemButtonProps>) {
  return (
    <Container onClick={onClick}>
      <Title>{children}</Title>
    </Container>
  );
}
