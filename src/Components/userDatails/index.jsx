import { Container, Name, Username, Description } from './styles';

const UserDatails = (props) => (
  <Container>
    <Name>{props?.name}</Name>
    <Username>{props?.login}</Username>
    <Description>{props?.bio}</Description>
  </Container>
);

export default UserDatails;
