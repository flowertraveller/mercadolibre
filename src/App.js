import logo from './assets/logo.png';
import './App.scss';
import { Search }  from '@material-ui/icons';
import pc from './assets/notebook.png';
import pc2 from './assets/notebook2.png';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <img src={logo} alt="logo" />
        
          <div className="search-input">
            <input type= "text" placeholder= "Buscar productos, marcas y más"></input>
            
            <button> 
                <Search /> 
            </button>

          </div>
        </nav>
      </header>
      <body>
        <aside>
          
          <h2>Notebooks</h2>
            <h3>30.906 resultados</h3>
              <h4>Categorías</h4>
          <ul>
            <li>Categoria 1</li>
            <li>Categoria 2</li>
            <li>Categoria 3</li>
            <li>Categoria 4</li>
            <li>Categoria 5</li>
          </ul>
       
        </aside>
        <div className= "products">
           
          <div className="square">
            <img src = { pc } alt = "pc" />
          </div>
          <div className="square">
            <img src = { pc2 } alt = "pc" />
          </div>
          <div className="square">
            <img src = { pc } alt = "pc" />
          </div>
          <div className="square">
            <img src = { pc2 } alt = "pc" />
          </div>
          <div className="square">
            <img src = { pc } alt = "pc" />
          </div>
          <div className="square">
            <img src = { pc2 } alt = "pc" />
          </div>
         
        </div>
          
      </body>
      
      
    </div>
  );
}

export default App;
