import React, { useEffect, useState } from "react";

const Pr1 = () => {

    const initialValues = {
        username: '', email: '', password: '', mobile: ''
    }

    const [formData, setFormData] = useState(initialValues);
    const [status, setStatus] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

        const errorRet = formValidation(formData);
        setFormErrors(errorRet);

        if(Object.keys(errorRet).length === 0) {
            setStatus(true);
            setFormData(initialValues);
        }
        
    }

    const formValidation = (formData) => {
        let error = {};
        if(!formData.username) {
            error.username = "please enter your username"
        }
        if(formData.password.length < 5) {
            error.password = "enter atleast 5 character"
        }
        return error; 
    }

    useEffect(() => {
        setTimeout(() => {
            setStatus(false)
        },5000)
    },[status])

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]:event.target.value});
        console.log(event.target.value)
    }

    return (
        <>
            <h3 className="text-center">Registration Form</h3>
            <br></br>
            <form>
                <label for="name">Name</label>
                <input type="text" id="name" name="username" onChange={handleChange} value={formData.username}/>
                <div className="text-danger">{formErrors.username}</div>
                <br></br><br></br>
                <label for="email">Email</label>
                <input type="text" id="email" name="email" onChange={handleChange} value={formData.email}/>
                <div className="text-danger">{formErrors.email}</div>
                <br></br><br></br>
                <label for="mobile">Mobile</label>
                <input type="number" id="mobile" name="mobile" onChange={handleChange} value={formData.mobile}/>
                <div className="text-danger">{formErrors.mobile}</div>
                <br></br><br></br>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" onChange={handleChange} value={formData.password}/>
                <div className="text-danger">{formErrors.password}</div>

                <button type="submit" onClick={handleSubmit}>Submit</button>

                
            </form>

            {status && <div>form successfully submited</div>}
        </>
    )
}

export default Pr1;