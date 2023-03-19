
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './navbar';
import Corousel from './corousel';
import Footer from './footer';
function App() {
  return (
  
 <div className="App">
    <Navbars/>
          <div className="corousel">
             <Corousel/>
            </div>
             <div className="footer">
               <Footer/>
          </div>
  </div>


    )
    
}

export default App;
