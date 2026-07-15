import { FrameProps } from './frame.interface';
import { Container, Title, Content } from './frame.styles';

export default function Frame({ title, children }: Readonly<FrameProps>) {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  );
}
