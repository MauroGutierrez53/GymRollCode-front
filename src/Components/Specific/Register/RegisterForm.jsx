import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import SubmitButton from '../../generals/SubmitButton/SubmitButton';
import InputForm from '../../generals/InputForm/InputForm';
import '../Register/StyleRegisterForm.css'


const RegisterForm = () => {
  const [registerForm, setRegisterForm] = useState({
    name: '',
    lastName:'',
    email: '',
    password: '',
  });


  const handleChange = (event) => {
    const { name, value } = event.target;

    setRegisterForm((prevState)=>({
      ...prevState,
    [name] : value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nameRegex = /^[A-Za-z]{3,12}$/;
    const lastNameRegex = /^[A-Za-z]{3,12}$/;
    const emailRegex = /^\S+@\S+\.\S+$/;
    const passwordRegex = /^.{8,}$/;

    if (!nameRegex.test(registerForm.name)) {
      alert('El campo debe tener entre 3 y 12 carecteres');
      return;
    }

    if (!lastNameRegex.test(registerForm.lastName)) {
      alert('El campo debe tener entre 3 y 12 carecteres');
      return;
    }

    if (!emailRegex.test(registerForm.email)) {
      alert('El correo electronico no es valido');
      return;
    }

    if (!passwordRegex.test(registerForm.password)) {
      alert('La contraseña debe tener al menos 8 caracteres');
      return;
    }


    axios.post('/register', registerForm)
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
    .finally(()=> alert('Se ha registrado con exito'));


  };
  

  return (
    <div className='container-fluid gradientRegister'>
      <img src="../src/assets/logoPagina3.png" className='logoSize w-25 py-3' alt="" />
      <h1 className='tituloRegister'>Registro</h1>
      <div className='row justify-content-center py-4 '>
          <form className='form col-md-6 col-12 p-4 colorFormReg'onSubmit={handleSubmit} >
            <InputForm label='Nombre' name={'name'} type='text'handleChange={(event) => handleChange(event)}  />
            <InputForm label='Apellido' name={'lastName'} type='text' handleChange={(event) =>handleChange(event)} />
            <InputForm label='Email' name={'email'} type='email'handleChange={(event) => handleChange(event)} />
            <InputForm label='Password' name={'password'} type='password'handleChange={(event) => handleChange(event)} />
            <div className='btn btn-secondary py-1 '>
            <SubmitButton contenText='Registrarse'/>
            </div>
          </form>
        </div>
          <a href="/" className='w-25 btn btn-outline-success p-1'> Home </a>
    </div>
  )
};

export default RegisterForm;