import logo from './logo.svg';
import './App.css';

import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';

function App() {

  const content = {
    text: 'Hola, soy un texto que habla de cosas',
    like: true
}

  const texts = {
    header: '!Hola! Soy un encabezado',
    footer: '!Hola! Soy un pie'
  }

  return (
    <div className="App">
      <Header text={texts} />
      <Main content={content} />
      <Footer text={texts} />
    </div>
  );
}

export default App;
