import {useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function AddVehicle(){
    const navigate=useNavigate();

    const formik =useFormik(
        {
            initialValues:{
                image:'',
                name:'',
                description:''
            },
            validationSchema:Yup.object({
                image:Yup.string().required('Image URL is required'),
                name:Yup.string().min(5,'Name must be atleast 5 character').required('name is required')
            }),
            onSubmit:(values)=>{
                axios.post('http://localhost:5000/vehicles',values)
                .then(Response=>{
                    navigate('/vehiclelist')
                })
                .catch(error=>{
                    console.log(error);
                }
                )
            }
        }
    );
    return(
        <div className='container mt-4'>
            <h2>Add Vehicle</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='image' className='form-label'>Image URL</label>
                    <input id='image' name='image' type='text' className='form-control' value={formik.values.image} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                </div>
                {
                    formik.touched.image && formik.errors.image ? <div className='text-danger'>{formik.errors.image}</div>:null
                }

                <div className='mb-3'>
                    <label htmlFor='name' className='form-label'>Name</label>
                    <input id='name' name='name' type='text' className='form-control' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                </div>
                {
                    formik.touched.image && formik.errors.name ? <div className='text-danger'>{formik.errors.name}</div>:null
                }
                <div className='mb-3'>
                    <label htmlFor='description' className='form-label'>Description</label>
                    <input id='description' name='description' type='text' className='form-control' value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                </div>
                {
                    formik.touched.description && formik.errors.description ? <div className='text-danger'>{formik.errors.description}</div>: null
                }
                <button type='submit' className='btn btn-primary'>Add</button>

            </form>
        </div>
    

    )
}
export default AddVehicle;