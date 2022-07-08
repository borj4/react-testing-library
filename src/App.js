import './App.css';

import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';

function App() {
  
  const texts = {
    header: '!Hola! Soy un encabezado',
    footer: '!Hola! Soy un pie'
  }

  const content = {
    text: 'Hola, soy un texto que habla de cosas',
    like: true
  }

  const handleToggle = () => {
    content.like = !content.like;
  }

  return (
    <div className="App">
      <Header text={texts} />
      <Main content={content} handleToggle={handleToggle} />
      <Footer text={texts} />
    </div>
  );
}

export default App;
