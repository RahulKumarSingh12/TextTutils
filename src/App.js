import logo from './logo.svg';
import './Appa.css';
import Navbar from './components/Navbar';
import React,{ useState } from 'react' ;
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter as Router , Route , Routes , Link } from 'react-router-dom';

let name="Rahul Kumar Singh";

function App() {

  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    
    setAlert({
      msg:message,
      type:type
    });

    setTimeout(()=>{
      setAlert(null);
    },3000);

  }

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }



  const toggleMode=(cls)=>{

     //removeBodyClasses();

    // console.log(cls);

    //  document.body.classList.add('bg-'+cls);

    if(mode==='light'){
      setMode('dark');

      document.body.style.backgroundColor='#042743';

      showAlert(" Dark Mode Has Been Enabled ","success");

      document.title=" Textutils - Dark Mode ";

      setInterval(()=>{
        document.title=" Install TextTutils Now ";
      })

    }
    else{
      setMode('light');

      document.body.style.backgroundColor='white';

      showAlert(" Light Mode has been enabled ","success");

      document.title=" Texttutils - Light Mode "

    }

  }



  return (
    <>
    <Router>
    <Navbar title="Textutils" mode={mode} aboutText="About Textutils" toggleMode={toggleMode} />
    {/* <Navbar title={3} aboutText="About Textutils"/> */}
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
      <Route exact path="/" element={ <TextForm showAlert={showAlert} heading=" Textutils - Word Counter , Character Counter ,Remove extra spaces  "  mode={mode}/>} />
        <Route exact path="/about"  element={<About   mode={mode}/>} />
      </Routes>
    
    {/* <About/> */}
    </div>
    </Router>

    </>
  );
}

export default App;












// <Alert alert={alert}/>
// <TextForm/>            
// <About></About>
// <Routes>                         
// <Router>
 // <Navbar mode={Mode} toggleMode={toggleMode}/>
 //   <Route element={About}/>
// </Routes>
// </Router>




// <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>