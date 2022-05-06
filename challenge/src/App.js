import './App.css';
import Navv from './components/navbar.js'
import Abb from './components/about.js'
import Projects from './components/project';
import './css/style.css'
import img1 from '../src/images/proj1.jpg'
import img2 from '../src/images/proj2.jpg'
import img3 from '../src/images/proj3.jpg'
import img4 from '../src/images/proj4.jpg'
function App() {
  const project=[ {name:'project1',src:img1},{name:'project2',src:img2},{name:'project3',src:img3},{name:'project4',src:img4}]
  return (
   <div className="App">
   <Navv name="jhon doe"  />
   <Abb  name="jhon doe"  />
   <Projects project={project} />   
    </div>
  );
}

export default App;
