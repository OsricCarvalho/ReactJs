import logo from './logo.svg';
import './App.css';
// import Info from './Info';
// import Addition from './Addition';
// import Information from './Information';
import SalarySlip from './SalarySlip';


function App() {
  return (
    <>
   <h1>
    <center>
      WELCOME TO REACT JS TRAINING
    </center>
   </h1>
   {/* <Info/> */}
   <br>
   </br>
   {/* <Addition/> */}
   {/* <Information/> */}
   {/* <Information  name="osric" city="London"/>
   <Information  name="Jo" city="Arsenal"/> */}

   <SalarySlip name = "Osric" salary = "10000"/>
   <SalarySlip name = "James" salary = "1000"/>
   </>
  );
}

export default App;

