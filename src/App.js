import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import {PrimaryButton} from 'ds-asistensi-test';

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
      <PrimaryButton label="hola" onClick={e=>console.log(e)}/>
      <Main content={content} handleToggle={handleToggle} />
      {/* <List /> */}
      <Footer text={texts} />
    </div>
  );
}

export default App;
