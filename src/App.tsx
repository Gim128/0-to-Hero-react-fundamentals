import ListGroup from "./components/ListGroup";

function App() {

  const items = ["France", "Mexico", "German", "Sri Lanka", "ENgland"];

  const handleSelectItem = (items: string) => {
    console.log(items);
    
  }

  return <div>
    <ListGroup items={items} heading="cities" onSelectItem={handleSelectItem}/>
  </div>
}

export default App;