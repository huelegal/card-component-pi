import { Container } from "./styles";
import Card from "../Card";

const CardList = (props) => {
  const cards = props.cards;

  return (
    <Container>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </Container>
  );
};

export default CardList;
