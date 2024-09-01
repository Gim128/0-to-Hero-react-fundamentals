import ListGroup from "./components/ListGroup";

function App() {

  const items = ["France", "Mexico", "German", "Sri Lanka", "ENgland"];

  return <div>
    <ListGroup items={items} heading="cities"/>
  </div>
}

export default App;