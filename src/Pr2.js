import React, { useEffect, useState } from "react";

const Pr2 = () => {
    const initialValues = {
        userName: " ", email: " ", mobile:" ", password:" "
    }

    const [formData, setFormData] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [status, setStatus] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault();

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
            error = "please enter your username";
        }
        return error;
    }

    useEffect(() => {
        setTimeout(() => {
            setStatus(false);
        },5000)
    },[status])


    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    return (
        <>
            <h3 className="text-center">Registration Form</h3>
            <br></br>
            <form>
                <label for="name">Name</label>
                <input type="text" id="username" name="username" onChange={handleChange} />
                <div className="text-danger">{formErrors.userName}</div>
                <br></br><br></br>
                <label for="email">Email</label>
                <input type="text" id="email" name="email" onChange={handleChange}/>
                <br></br><br></br>
                <label for="mobile">Mobile</label>
                <input type="number" id="number" name="number" onChange={handleChange}/>
                <br></br><br></br>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" onChange={handleSubmit}/>
                <br></br>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>

            {status && <div> form successfully submitted </div>}
        </>
    )
}

export default Pr2;