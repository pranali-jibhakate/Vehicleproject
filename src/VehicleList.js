import { useEffect, useState } from "react";
import axios from 'axios'
import {  useNavigate } from "react-router-dom";

function VehicleList(){
    const[vehicles,setVehicles]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        fetchvehicles();
    },[]);

    

    const fetchvehicles=()=>{
        axios.get('http://localhost:5000/vehicles')
        .then(Response=>{
            setVehicles(Response.data);
        })
        .catch(error=>{
            console.log('There was an error fetching the vehicle data !',error);
        });
        

    }

    const handleDelete=(id)=>{
        axios.delete(`http://localhost:5000/vehicles/${id}`)
        .then(()=>{
            fetchvehicles();
        })
        .catch(error=>{
            console.log('There was an error deleting the vehicle data !',error);
        });

    }
    
    return(
        <div className="container mt-4">
            <h2>Vehicle list</h2>
            <div className="row">
                {vehicles.map(vehicle=>(
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow-5m">
                            <img src={vehicle.image} className="card-img-top" alt={vehicle.name}/>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{vehicle.name}</h5>
                                <p className="card-text">{vehicle.description}</p>
                                <button className="btn btn-warning me-2" onClick={()=> navigate(`/updatevehicle/${vehicle.id}`)}> Update </button>
                                <button className="btn btn-danger" onClick={()=>handleDelete(vehicle.id)}>DELETE</button>
                            </div>
                        </div>
                
                   </div>
                ))}
            </div>
            </div>
    )
    
}
export default VehicleList;