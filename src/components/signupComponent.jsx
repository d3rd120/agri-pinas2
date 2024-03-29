import React, { useEffect, useRef } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import "../css/Components/signupComponent.css";
import { auth, registerWithEmailAndPassword } from "./firebase";
import Logo from '../img/agriPinasLogo2.png';
import { I18nextProvider } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';


const Signup = () => {
  const { t } = useTranslation();
  const [birthdate, setBirthdate] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [age, setAge] = React.useState("");
  const [role, setRole] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmpassword, setConfirmPassword] = React.useState("");
  const [fullname, setFullName] = React.useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!fullname) alert("Please enter name");
    registerWithEmailAndPassword(fullname, contact, address, birthdate, age, email, role, password);
    navigate("/login");
  };

  const calculateAge = (event) => {
    const selectedDate = new Date(event.target.value);
    const today = new Date();
    let age = today.getFullYear() - selectedDate.getFullYear();

    const hasBirthdayPassed =
      today.getMonth() > selectedDate.getMonth() ||
      (today.getMonth() === selectedDate.getMonth() &&
        today.getDate() >= selectedDate.getDate());

    if (!hasBirthdayPassed) {
      age--;
    }

    setAge(age);
    setBirthdate(event.target.value);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/signup");
  }, [user, loading]);

  const registerButtonRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        registerButtonRef.current.click();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <I18nextProvider i18n={i18n}> 
    <div className="signupComponent">
      <div className="signupComponentWrapper">
        <div className="signupComponentForm">
          <div className="signupComponentFormText">
            <img className="signUpComponentLogo" alt="" src={Logo} />
            <div className="signupComponentMainText">{t('registerComponentText1')}</div>
          </div>
          <div className="signupComponentFormFields">
            <input className="signupComponentFormInput" id="signupComponentFullName" type="text" value={fullname}
              onChange={(e) => setFullName(e.target.value)} placeholder={t('registerComponentText2')} required />
            <input className="signupComponentFormInput" id="signupComponentContactNumber" type="text" placeholder={t('registerComponentText3')} value={contact}
              onChange={(e) => setContact(e.target.value)} required />
            <input className="signupComponentFormInput" id="signupComponentAddress" type="text" placeholder={t('registerComponentText4')} value={address}
              onChange={(e) => setAddress(e.target.value)} required />
            <input className="signupComponentFormInput" id="signupComponentBirthday" type="date" placeholder="Birthday" onInput={calculateAge} value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)} required />
            <input className="signupComponentFormInput" id="signupComponentAge" type="text" placeholder={t('registerComponentText5')} value={age}
              onChange={(e) => setAge(e.target.value)} readOnly />
            <input className="signupComponentFormInput" id={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder={t('registerComponentText6')} required />
            <select className="signupComponentFormInput" id="signupComponentRole" value={role} onChange={(e) => setRole(e.target.value)} required>
              <option value="" disabled>{t('registerComponentText7')}</option>
              <option value="Farmer">Farmer</option>
              <option value="Buyer">Buyer</option>
            </select>
            <input className="signupComponentFormInput" id={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder={t('registerComponentText8')} required />
            <input className="signupComponentFormInput" id={confirmpassword} type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder={t('registerComponentText9')} required />
          </div>
          <button ref={registerButtonRef} className="signupComponentButton" onClick={register}>
            <div className="signupComponentButtonText">Register</div>
          </button>
          <div className="signupComponentSubTextContainer">
            <span>{t('registerComponentText10')}</span>
            <Link className="signupComponentLoginLink" to='/login'>Login</Link>
          </div>
        </div>
      </div>
    </div>
    </I18nextProvider>
  );
};

export default Signup;
