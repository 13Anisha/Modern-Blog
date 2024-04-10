import { Alert, Button, Label, Spinner } from 'flowbite-react';
import React, { useState } from 'react'
import {Link,useNavigate } from "react-router-dom";
import { TextInput } from 'flowbite-react';
import {useDispatch,useSelector} from 'react-redux';
import { signInStart,signInSucess,signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';


export default function SignIn() {
  const [formData,setFormData]=useState({});
  
  const {loading,error:errorMessage}=useSelector(state=>state.user);
  const dispatch=useDispatch();
  const navigate=useNavigate();


  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value.trim()});
  };
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!formData.email||!formData.password)
    {
      return dispatch(signInFailure('Please fill all the fields'));
    }
    try {
      dispatch(signInStart());
      const res=await fetch('/api/auth/signin',{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(formData),

      });
      const data=await res.json();
      if(data.success === false)
      {
        dispatch(signInFailure(data.message));
      }

      if(res.ok)
      {
        dispatch(signInSucess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
      
    }
  }
   

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5' >
        {/* left */}
        <div className='flex-1'>
        
          <Link to="/" className='font-bold dark:text-white text-6xl'>            
             BlogBuzz
          </Link>
          <p className='text-md mt-5'>BlogBuzz: Where Ideas Take Flight.</p>

        </div>

        {/* right */}

        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            
            <div>
              <Label value="Email"  />
              <TextInput
                  type='email'
                  placeholder='xyz@gmail.com'
                  id='email' onChange={handleChange}/>

            </div>

            <div>
              <Label value="Password"  />
              <TextInput
                  type='password'
                  placeholder='***********'
                  id='password' onChange={handleChange}/>

            </div>  
            <Button gradientDuoTone="purpleToBlue" type='submit' disabled={loading}>
              {
                loading ?(
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading....</span>
                </>
                 ):'Sign In'
              }
            </Button>    

            <OAuth /> 
            

          </form>

          <div className='flex gap-2 text-sm mt-5'>
            <span>Don't have an Account?</span>
            <Link to='/sign-up' className='text-blue-600' >
              Sign Up
            </Link>
          </div>
          {
            errorMessage && (
              <Alert className='mt-5' color='failure'>
                {errorMessage}

            
              </Alert>
            )
          }
          

        </div>
                

      </div>
    
    </div>
  );
}
