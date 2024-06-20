
import './App.css';
import Container from './component/introduction/Container/Container';
import Information from './component/introduction/informations/Information';
import Principale from './component/introduction/principale/Principale';
import {BrowserRouter,HashRouter,Routes,Route} from "react-router-dom";
import ContainerPageProjetCssJs from './component/introduction/PageProjetCssJs/containerPageProjetCssJs/ContainerPageProjetCssJs';
import ContainerPageProjetJava from './component/introduction/PageProjetCssJs/containerPageProjetJava/ContainerPageProjetJava';
import ContainerPageProjetReact from './component/introduction/PageProjetCssJs/containerPageProjetReact.js/ContainerPageProjetReact';

function App() {
  return (
    <div className="App">
        <HashRouter hashType="hashbang">
          <Routes>
              <Route path="/" element={<Container/>}/>
              <Route path="/principale" element={<Principale/>}/>
              <Route path="/pageProjetCssJs" element={<ContainerPageProjetCssJs/>}/>
              <Route path="/pageProjetJava" element={<ContainerPageProjetJava/>}/>
              <Route path="/pageProjetReact" element={<ContainerPageProjetReact/>}/>

          </Routes>
        </HashRouter>
  
    </div>
  );
}

export default App;
