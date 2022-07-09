import './App.css';
import Mensaje from './Mensaje';
//App es un componente, tiene que ir con mayuscula, retorna una especie de html
//pero no es html, es jsx, el compilador lo transforma en js



const App = () => {
  return (
    <div className="App">
      <Mensaje color='green' message='Estamos trabajando' />
      <Mensaje color='yellow' message='En un curso' />
      <Mensaje color='red' message='En react' />
    </div>
  );
}

export default App;
