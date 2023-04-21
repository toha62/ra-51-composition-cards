import Card from './components/Card';

function App() {
  return (
    <>
      <Card
        title={'Какой-то заголовок'}
        cardText={"Some quick example text to build on the card title and make up the bulk of the card's content."}
      >
        <img src="https://i.etsystatic.com/16754592/r/il/63cb4f/1945247446/il_fullxfull.1945247446_kh4u.jpg" className="card-img-top" alt="..."></img>
      </Card> 
      
      <Card
        title={'Какой-то заголовок 2'}
        cardText={"With supporting text below as a natural lead-in to additional content."}
      ></Card> 
    </> 
    
);
}

export default App
