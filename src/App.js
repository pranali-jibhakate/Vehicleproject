import NavBar from './NavBar';
import About from './About';

import{BrowserRouter,Route,Routes}from 'react-router-dom';
import Home from "./Home";
import VehicleList from './VehicleList';
import AddVehicle from './AddVehicle';
import UpdateVehicle from './UpdateVehicle';

function MyVehicle(){
  return (
    <>
    <h1>Automobile Company</h1>
    <NavBar/>

  <BrowserRouter>
  <Routes>
    <Route path ="/about" element={<About/>}/>
    <Route path ="/home" element={<Home/>}/>
    <Route path ="/vehiclelist" element={<VehicleList/>}/>
    <Route path ="/addvehicle" element={<AddVehicle/>}/>
    <Route path ="/updatevehicle/:id" element={<UpdateVehicle/>}/>
  </Routes>
  </BrowserRouter>

  </>
  )


  
    
  
}

export default MyVehicle;
