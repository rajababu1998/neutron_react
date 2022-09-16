import React, {useState,useEffect} from "react";
import axios from "axios"
import { nanoid } from 'nanoid'

const ContactApp = () => {
    const [contactList, setContactList] = useState([]);

    
    const initialValues = {id : '', name : '', email : ''}
    const [formData,setFormData] = useState(initialValues);


    const callApi = () => {
        fetch(`http://localhost:3006/contacts`)
        .then(data => {
            return data.json();
        })
        .then(response => {
            console.log(response);
            setContactList(response);
        })
    }

    const apiCallPost = (formData) => {
        formData.id = nanoid();
        axios.post('http://localhost:3006/contacts',formData)
        .then(response => {
            console.log(response);
            callApi();
            // setContactList(response);
            setFormData(initialValues);
        })
    }

    const handleChange = (event) => {
        console.log('event', event.target.value, event.target.name);
        console.log(event.target.name);
        setFormData({...formData,[event.target.name] : event.target.value})
        // ...formData : it means we are getting old value present in form data.
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        
        // console.log('FormData', username, email, password);
        console.log('FormData Submitted...', formData);
        // api call
        apiCallPost(formData);
        setFormData(initialValues);
        
    }

    const deleteContact = (id) => {
        axios.delete(`http://localhost:3006/contacts/${id}`)
        .then(response => {
            console.log(response);
            callApi();
            
        })
    }

    // componentDidMount : just one time triggered.
    useEffect(() => {
        callApi();
    },[])



    return(
        <>
            <h2>Contact App</h2>
            <table className="table table-striped table-responsive">
                    <thead>
                        <tr>
                            <th>Sr No.</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                            <th></th>e
                        </tr>
                    </thead>
                    <tbody>
                    {
                    contactList && contactList.map((item,index) => (
                        <tr>
                            <td>{index+1}</td>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td><button onClick={() => deleteContact(item.id)}>Delete</button></td>
                            <td><button>Edit</button></td>
                            
                        </tr>
                    ))
                    }
                    </tbody>
                </table>
            <br></br>
            <div>--------------------------------------------------</div>
            <br></br>
            <h3>Add New Contact</h3>
            <form>
                ID:
                <input type="text" name='id' onChange = {handleChange} value={formData.id}/>
                <br></br>
                Name:
                <input type="text" name='name' onChange = {handleChange} value={formData.name}/>
                <br></br>
                Email:
                <input type="email" name='email' onChange = {handleChange} value={formData.email}/>
                <br></br>
                <button type = "submit" onClick={handleSubmit}>Register</button>
                <br></br>
            </form>
        </>
    )
}
export default ContactApp