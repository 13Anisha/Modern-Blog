import { Button, Label } from 'flowbite-react';
import React from 'react'
import {Link } from "react-router-dom";
import { TextInput } from 'flowbite-react';

export default function Signup() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5' >
        {/* left */}
        <div className='flex-1'>
        
          <Link to="/" className='font-bold dark:text-white text-4xl'>            
             BlogBuzz
          </Link>
          <p className='text-sm mt-5'>BlogBuzz: Where Ideas Take Flight.</p>

        </div>

        {/* right */}

        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value="Username"  />
              <TextInput
                  type='text'
                  placeholder='Username'
                  id='username' />

            </div>


            <div>
              <Label value="Email"  />
              <TextInput
                  type='text'
                  placeholder='xyz@gmail.com'
                  id='email' />

            </div>

            <div>
              <Label value="Password"  />
              <TextInput
                  type='text'
                  placeholder='Password'
                  id='password' />

            </div>  
            <Button gradientDuoTone="purpleToBlue" type='submit'>Sign up</Button>        
            

          </form>

          <div className='flex gap-2 text-sm mt-5'>
            <span>Already have an Account?</span>
            <Link to='/sign-in' className='text-blue-600' >
              Sign in
            </Link>
          </div>
        </div>
                

      </div>
    
    </div>
  );
}
