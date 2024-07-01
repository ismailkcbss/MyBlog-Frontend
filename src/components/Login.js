import React, { useEffect, useState } from 'react'

export default function Login() {

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [activeButton, setActiveButton] = useState(false);


  const validateEmail = () => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === '') {
      setEmailError('Please enter your email address.');
    } else if (emailRegex.test(email)) {
      setEmailError('');
    } else {
      setEmailError('Please enter a valid email address.');
    }
  };

  const validatePassword = () => {
    if (password.length < 5) {
      setPasswordError('The password is missing or entered incorrectly.');
    } else {
      setPasswordError('');
    }
  };


  useEffect(() => {
    const emailValid = email !== '' && !emailError;
    const passwordValid = password.length >= 6 && !passwordError;
    setActiveButton(emailValid && passwordValid);
  }, [email, emailError, password, passwordError])


  return (
    <div className='login_container'>
      <form method='post' action='/'>
        <div className='login_form'>
          <div className='login_header'>
            <h2>Login</h2>
            <p>Please enter your credentials to login.</p>
          </div>
          <div className='login_main'>
            <div className='login_main-input'>
              <input
                id="email"
                name='email'
                type='email'
                className={`login-input ${emailError ? 'validate-error' : ''}`}
                autoComplete="email"
                placeholder="E-mail: example@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
              />
              <span id="email_error" className={`login-span ${emailError ? 'validate-error' : ''}`}>{emailError}</span>
            </div>
            <div className='login_main-input'>
              <input
                type='password'
                id='pass'
                className={`login-input ${passwordError ? 'validate-error' : ''}`}
                autoComplete='current-password'
                placeholder='Password: Min 6 characters'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validatePassword();
                }}
              />
              <span id="password_error" className={`login-span ${passwordError ? 'validate-error' : ''}`}>{passwordError}</span>
            </div>
            <div className='login_main-button'>
              <button type='submit' disabled={!activeButton} className="btn btn--block btn--primary">Login</button>
            </div>
          </div>
        </div>

      </form>

    </div>
  )
}
