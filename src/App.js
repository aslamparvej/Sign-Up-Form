import React, { useState } from 'react';
import FormInput from './components/formInput/FormInput';
import './App.css';

const App = ()=>{
    const [value, Setvalue] = useState({
        username: '',
        email: '',
        fullname: '',
        password: '',
        confirmpassword: ''

    });
    const inputs = [
        {
            id: 1,
            name: 'username',
            errorMessage: '',
            label: 'Username',
            type: 'text',
            placeholder: 'User Name'

        },
        {
            id: 2,
            name: 'email',
            errorMessage: '',
            label: 'Email',
            type: 'email',
            placeholder: 'Email'

        },
        {
            id: 3,
            name: 'fullname',
            errorMessage: '',
            label: 'Full Name',
            type: 'text',
            placeholder: 'Full Name'

        },
        {
            id: 4,
            name: 'password',
            errorMessage: '',
            label: 'Password',
            type: 'password',
            placeholder: 'Password'

        },
        {
            id: 5,
            name: 'confirmpassword',
            errorMessage: '',
            label: 'Confirm Password',
            type: 'password',
            placeholder: 'Confirm Password'

        }
    ];

    const handleSubmit = (e)=>{
        e.preventDefault();

    }

    const onChange =(e) =>{
        Setvalue({...value,[e.target.name]: e.target.value});
    }
    console.log(value)
    return (
        <div className='app'>
            
            <form onSubmit={handleSubmit}>
                <h1>Registation</h1>
                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={value.name} onChange={onChange}/>
                ))}
                
                <button>Submit</button>
            </form>
        </div>
    )
}
export default App; 