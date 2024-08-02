import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Main from './components/Main';
import GrandParent from './components/GrandParent';
import Countprops from './components/Countprops';
import Conditionalrendering from './components/Conditionalrendering';
import Apicalluseeffect from './components/Apicalluseeffect';
import Navigate from './components/Navigate';
import Dashboard from './components/Dashboard';
import Userefhook from './components/Userefhook';
import Filter from './components/Filter';

function App() {
  return (
   <>
    
    <Router>
       
       <Main/>
       

       <Routes>
      
      <Route path='/Main' element = {<GrandParent/>}/>
      
      <Route path='/Countprops' element = {<Countprops/>}/>
    
      <Route path='/Conditionalrendering' element = {<Conditionalrendering/>}/>

      <Route path='/Apicalluseeffect' element = {<Apicalluseeffect/>}/>

      <Route path='/Navigate' element = {<Navigate/>}/>

      <Route path='/Dashboard' element = {<Dashboard/>}/>

      <Route path='/Userefhook' element = {<Userefhook/>}/>

      <Route path='/Filter' element = {<Filter/>}/>


       </Routes>


    </Router>
        
   
   </>
  );
}

export default App;
