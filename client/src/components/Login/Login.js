import { GoogleLogin } from 'react-google-login';
const clientId = '803014078430-cr81dell3engp9j03hqsp32vnjcjad1a.apps.googleusercontent.com';

function Login() {
  const onSuccess = (response) => {
    localStorage.setItem("email", response.profileObj.email);
    localStorage.setItem("name", response.profileObj.name);
    localStorage.setItem("googleId", response.profileObj.googleId);

    console.log("Login Success: ", response.profileObj);
    window.location.reload(false);
  }

  const onFailure = (response) => {
    console.log("Login Failed: ", response);
  }

  return (
    <div >
      <div id='signInButton'>
        <GoogleLogin
          clientId={clientId}
          buttonText='Sign in with Google'
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      </div>
    </div>
  )
}

export default Login;