import React, { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import eddieVideo from '../assets/eddieciou.mp4';
import logo from '../assets/eddieLogo.png';

import { client } from '../client';

const Login = () => {
  const navigate = useNavigate();

  const handleCallback = (response: { credential: string }) => {
    const userObject: { sub: string; family_name: string; given_name: string; picture: string } =
      jwtDecode(response.credential);
    localStorage.setItem('user', JSON.stringify(userObject));

    const {
      sub: googleId,
      picture: imageUrl,
      given_name: givenName,
      family_name: familyName,
    } = userObject;
    const doc = {
      _id: googleId,
      _type: 'user',
      userName: givenName + familyName,
      image: imageUrl,
    };

    client.createIfNotExists(doc).then(() => {
      navigate('/', { replace: true });
    });
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_API_TOKEN || '',
      callback: handleCallback,
    });

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
    });
  }, []);

  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video
          src={eddieVideo}
          loop
          controls={false}
          muted
          autoPlay
          className='w-full h-full object-cover'
        />
      </div>
      <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50'>
        <div className='p-5'>
          <img src={logo} width='200px' alt='logo' />
        </div>
        <div className='shadow-2xl'>
          <div id='signInDiv'></div>
          {/* <GoogleLogin*/}
          {/*   clientId={process.env.REACT_APP_GOOGLE_API_TOKEN || ''}*/}
          {/*   render={(renderProps) => (*/}
          {/*     <button*/}
          {/*       type='button'*/}
          {/*       className='bg-white flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'*/}
          {/*       onClick={renderProps.onClick}*/}
          {/*       disabled={renderProps.disabled}*/}
          {/*     >*/}
          {/*       <FcGoogle className='mr-4' /> Sign in with Google*/}
          {/*     </button>*/}
          {/*   )}*/}
          {/*   onSuccess={responseGoogle}*/}
          {/*   onFailure={responseGoogle}*/}
          {/*   cookiePolicy='single_host_origin'*/}
          {/* />*/}
        </div>
      </div>
    </div>
  );
};

export default Login;
