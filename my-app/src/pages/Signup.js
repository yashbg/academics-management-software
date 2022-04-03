import { React, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Signup = function () {
    const formStyle = {
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
        padding: "20px 20px 20px 20px",
        margin: "auto",
        maxWidth: "70%",
        minWidth: "200px"
    }

    const inputStyle = {
        width: "40%",
        fontSize: "20px",
        padding: "12px 20px",
        margin: "8px"
    }

    const buttonStyle = {
        width: "10%",
        backgroundColor: "#474948",
        color: "white",
        padding: "10px 10px",
        margin: "8px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        justifyContent: "center"
    }

    const [inputs, setInputs] = useState({});
    const baseUrl = 'http://localhost:3000/';

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);

        axios.post(baseUrl + 'signup', inputs)
            .then(function (res) {
                console.log(res);
                if (res.status === 200) {
                    console.log("Success")
                    alert("User registered successfully!")
                    this.props.history.push('/login')
                }
                else if (res.status === 208) {
                    alert("User already exists")
                }
                else {
                    console.log("error1");
                    alert("Invalid user credentials")
                }
            }).catch(function (error) {
                console.log(error);
            });
    }

    return (
        <form className='notes-form' onSubmit={handleSubmit}>
            <div>
                <h1>SignUp</h1>
            </div>
            <div>
                <input
                    type="text"
                    name="username"
                    placeholder='usename'
                    value={inputs.username || ""}
                    style={inputStyle}
                    onChange={handleChange}
                />
            </div>
            <div>
                <input
                    type="text"
                    name="rollNo"
                    placeholder='IITK rollnumber'
                    value={inputs.age}
                    style={inputStyle}
                    onChange={handleChange}
                />
            </div>
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder='IITK registered name'
                    value={inputs.name}
                    style={inputStyle}
                    onChange={handleChange}
                />
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    placeholder='password'
                    value={inputs.password}
                    style={inputStyle}
                    onChange={handleChange}
                />
            </div>
            <div>
                <Link to='/' >
                    <button style={buttonStyle}>Cancel</button>
                </Link>
                <input type="submit" value="Submit" style={buttonStyle} />
            </div>

        </form>
    )
}

export default Signup;