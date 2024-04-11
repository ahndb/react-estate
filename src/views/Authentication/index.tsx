import React, { ChangeEvent, useState } from 'react';
import './style.css';

import SignInBackground from 'assets/image/sign-in-background.png';
import SignUpBackground from 'assets/image/sing-up-background-image.png';
import InputBox from 'components/Inputbox';

type AuthPage = 'sign-in' | 'sign-up';

interface Props {
  onLinkClickHandler : () => void;
}

function SignIn ({onLinkClickHandler}: Props) {

  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };
  const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  
  const onSignInButtonClickHandler = () => {
    alert(`아이디 : ${id} / 비밀번호 ${password}`);
    setId('');
    setPassword('');
    alert(`아이디 : ${id} / 비밀번호 ${password}`);
    
  };

  return (
    <div className='authentication-contents'>
      <div className='authentication-input-container'>
        <InputBox label={'아이디'} type={'text'} value={id} placeholder={'아이디를 입력해주세요'} onChangeHandler={onIdChangeHandler}  />
        <InputBox label={'패스워드'} type={'password'} value={password} placeholder={'비밀번호를 입력해주세요'} onChangeHandler={onPasswordChangeHandler}  />
      </div>
      <div className='authentication-button-container'>
        <div className="primary-button full-width" onClick={onSignInButtonClickHandler}> 로그인</div>
        <div  className="text-link" onClick={onLinkClickHandler}>회원가입</div>
      </div>
      <div className='short-divider'></div>
      <div className='authentication-sns-container'></div>
    </div>
  )
};

function SignUp ({onLinkClickHandler}: Props) {

  const onSignUpButtonClickHandler = () => {

  };

  return (
    <div className='authentication-contents'>
    <div className='authentication-sns-container'></div>
    <div className='short-divider'></div>
    <div className='authentication-input-container'></div>
    <div className='authentication-button-container'>
      <div className="primary-button full-width" onClick={onSignUpButtonClickHandler}> 회원가입</div>
      <div  className="text-link" onClick={onLinkClickHandler}>로그인</div>
    </div>
  </div>
  )
};

export default function Authentication() {

  const [page, setPage] = useState<AuthPage>('sign-in'); //useState는 컴포넌트 내부에 선언되어야 함

  const onLinkClickHandler = () => {
    if  (page === 'sign-in') setPage('sign-up');
    else setPage('sign-in');
  };

  const AuthenticationContents = 
  page === 'sign-in' ? 
  <SignIn onLinkClickHandler={onLinkClickHandler} /> : 
  <SignUp onLinkClickHandler={onLinkClickHandler} />

  const imageBoxStyle = { backgroundImage: `url(${page === 'sign-in' ? SignInBackground : SignUpBackground})`}

  return (
    <div id="authentication-wrapper">
      <div 
        className='authentication-image-box' 
        style={imageBoxStyle}></div>
      <div className='authentication-box'>
        <div className='authentication-container'>
          <div className='authentication-title h1'>{'임대 주택 가격 서비스'}</div>
          { AuthenticationContents }
        </div>
      </div>
    </div>
  )
}
