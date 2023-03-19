
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './navbar';
import Hero from './Profil';
import Jumbotron from './jumbotron';
import Corousel from './corousel';
import Footer from './footer';
function App() {
  return (
  <>


<div className="App">
<Navbars/>
<div className="Body mt-4">
<Jumbotron/>
<Hero/>
<div className="mt-5">
<Corousel/>
</div>
<div className="footer">
<Footer/>
</div>
</div>
</div>
  </>

    )
    
}

export default App;
