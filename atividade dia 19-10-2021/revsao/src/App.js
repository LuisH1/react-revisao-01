import lua  from './lua.jpg';
import sol from './sol.jpg';
import mar from './mar.jpg';
import './App.css';

function App() {
  return (
  
<div> 
  <header className="titulo"> 
    <h1> Galeria De Imagens </h1><h4> Aqui voçe encontra as melhores imagens </h4>
  </header>
    <div className="img">
    <img src={lua} alt="" />
    <img src={sol} alt=""/>
    <img src={mar} alt="" />
    </div>
    <div>
      <footer className="foot">
        Desenvolvido por luis
        </footer>
    </div>
</div> 
  )

  }
export default App;
