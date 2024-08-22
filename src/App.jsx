import GlobalStyles from "./styles/GlobalStyles";
import CardList from "./components/CardList";

function App() {
  const cards = [
    {
      id: 0,
      title: "Pokémon!",
      image: "https://pngimg.com/uploads/pokemon/small/pokemon_PNG9.png",
      description: "Temos que pegar eu sei!",
    },
    {
      id: 1,
      title: "Pokémon!",
      image: "https://pngimg.com/uploads/pokemon/small/pokemon_PNG9.png",
      description: "Temos que pegar eu sei!",
    },
    {
      id: 2,
      title: "Pokémon!",
      image: "https://pngimg.com/uploads/pokemon/small/pokemon_PNG9.png",
      description: "Temos que pegar eu sei!",
    },
    {
      id: 3,
      title: "Pokémon!",
      image: "https://pngimg.com/uploads/pokemon/small/pokemon_PNG9.png",
      description: "Temos que pegar eu sei!",
    },
    {
      id: 4,
      title: "Pokémon!",
      image: "https://pngimg.com/uploads/pokemon/small/pokemon_PNG9.png",
      description: "Temos que pegar eu sei!",
    },
  ];

  return (
    <>
      <GlobalStyles />
      <CardList cards={cards} />
    </>
  );
}

export default App;
