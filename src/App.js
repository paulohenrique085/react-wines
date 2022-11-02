
import Banner from './components/Banner';
import TextField from './components/TextField';

function App() {
  return (
    <div className="App">
      <Banner/>

      <div className=''>
        <TextField label="Nome" placeholder="Digite o nome do vinho"/>
        <TextField label="Ano" placeholder="Digite o ano"/>
        <TextField label="Foto" placeholder="Insira o link de uma foto do vinho"/>
     
      </div>
    </div>
  );
}

export default App;
