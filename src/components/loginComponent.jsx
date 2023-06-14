import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Components/loginComponent.css';
import Logo from '../img/agriPinasLogo2.png';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { auth } from "../components/firebase";

const LoginPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [fullname, setFullName] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const fetchUserData = async (uid) => {
    try {
      const db = getFirestore();
      const usersCollection = collection(db, 'Users');
      const q = query(usersCollection, where('uid', '==', uid));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const docSnapshot = querySnapshot.docs[0];
        const userData = docSnapshot.data();
        const fullname = userData.fullname;
        console.log('User data:', userData);
        console.log('Full name:', fullname);
        setFullName(fullname);

        if (userData.role === 'Farmer') {
          navigate('/farmerdashboard');
          console.log('User role:', userData.role);
        } else if (userData.role === 'Buyer') {
          navigate('/buyermarketplace');
          console.log('User role:', userData.role);
        } else if (userData.role === 'Admin') {
          navigate('/admindashboard');
          console.log('User role:', userData.role);
        } else {
          console.log('Non-existing user role');
        }
      } else {
        console.error('User data not found for email:', uid);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in');
      setEmail('');
      setPassword('');
      setLoggedIn(true);
      const userUid = user.uid;
      sessionStorage.setItem('userUid', userUid);
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  useEffect(() => {
    if (loggedIn) {
      const userUid = sessionStorage.getItem('userUid');
      console.log('Retrieved user UID:', userUid);
      if (userUid) {
        setLoading(true);
        fetchUserData(userUid);
      } else {
        console.error('Invalid user UID:', userUid);
      }
    }
  }, [loggedIn]);

  return (
    <div className="loginComponent">
      <div className="loginComponentWrapper">
        <div className="loginComponentForm">
          <div className="loginComponentFormText">
          <img className="loginComponentLogo" alt="" src={Logo} />
            <div className="loginComponentMainText">Login</div>
          </div>
          <div className="loginComponentFormFields">
            <input
              className="loginComponentInput"
              id="loginComponentEmail"
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email Address"
            />
            <input
              className="loginComponentInput"
              id="loginComponentPassword"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
            />
          </div>
          <a className="logInPageSubText2" href="reset">
            Forgot Password
          </a>
          <button className="loginComponentButton" onClick={handleSubmit}>
            <div className="loginComponentButtonText">Login</div>
          </button>
          <div className="loginComponentSubTextContainter">
            <span>{`Don’t have an account? `}</span>
            <Link className="loginComponentSignUpLink" to="/signup">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
