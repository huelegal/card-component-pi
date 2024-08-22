import { Container, Image, Title, Description } from "./styles";

function Card(props) {
  return (
    <Container>
      <Image src={props.card.image} />
      <div>
        <Title>{props.card.title}</Title>
        <Description>{props.card.description}</Description>
      </div>
    </Container>
  );
}

export default Card;
