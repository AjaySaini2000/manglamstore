import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ClipLoader } from 'react-spinners'; // Import the spinner

import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [message, setMessage] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [formdata, setFormdata] = useState({
        email: '',
        password: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false); // Track button state
    const navigate = useNavigate()

  //   useEffect(() => {
  //     // console.log(loginstatus);
  //     if (loginstatus) {
  //         navigate('/')
  //     } else {
  //         navigate('/sign_in')
  //     }
  // }, [loginstatus])

  const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      if (type === 'checkbox') {
          setRememberMe(checked); // Update checkbox value
      } else {
          setFormdata({ ...formdata, [name]: value });
      }
      setMessage('');
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      setMessage(''); // Clear any previous messages
      setIsSubmitting(true); // Set to true when submission starts

      try {
          const response = await axios.post(`${BaseUrl}/login`, formdata);
          if (response.status === 200) {
              // console.log(response.data.data);
              // dispatch(login(response.data.data))
              setMessage(response.data.message)
          }
      } catch (error) {
          setMessage('An error occurred. Please try again.');
      } 
      finally {
          setIsSubmitting(false); // Re-enable button after submission
      }
  };


  return (
    
        <div className='w-full h-[100vh] bg-[rgba(255,255,255,0.6)] flex justify-center items-center'>
            <div className='lg:w-[400px] md:w-[300px] w-[300px]'>
                <div className='w-[50%] mx-auto mb-2'>
                    <img src="/manglam_logo.png" alt="logo" />
                </div>
                <div className='bg-white px-5 py-7 rounded-md font-Roboto'>
                    <div>
                        <h2 className='text-2xl font-semibold text-[rgb(38,44,56)]'>Sign In</h2>
                        {message && <p className="text-warning mt-2 text-xs">{message}</p>}
                        <div className="mt-5">
                            <form onSubmit={handleSubmit} method='post'>
                                <div className="mb-4">
                                    <label className="block text-[rgb(38,44,56)] text-xs font-bold mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="focus:shadow appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  text-sm disabled:opacity-75"
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="name@example.com"
                                        value={formdata.email}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-[rgb(38,44,56)] text-xs font-bold mb-2" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        className="focus:shadow appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  text-sm disabled:opacity-75"
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        value={formdata.password}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center">
                                        <input
                                            id="remember"
                                            type="checkbox"
                                            checked={rememberMe}
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                            className="form-checkbox h-4 w-4 text-gray-600 disabled:opacity-75"
                                        />
                                        <label htmlFor="remember" className="ml-2 text-xs text-gray-600 font-medium">Remember Me!</label>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <button type="submit" className={`h-10 rounded-md text-white w-full ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-[#be1044] hover:text-lg'}`}
                                    >
                                        {isSubmitting ? (
                                            <ClipLoader color="#ffffff" size={24} /> // Show spinner while submitting
                                        ) : (
                                            'Sign In'
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
}

export default SignIn