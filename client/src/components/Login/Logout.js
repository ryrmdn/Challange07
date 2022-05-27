import { GoogleLogout } from 'react-google-login';
const clientId = '803014078430-cr81dell3engp9j03hqsp32vnjcjad1a.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log("Logout Success");
    localStorage.setItem("email", "");
    localStorage.setItem("name", "");
    localStorage.setItem("googleId", "");
    window.location.reload(false);
  }

  return (
    <div id='signInButton'>
      <GoogleLogout
        clientId={clientId}
        buttonText='Logout'
        onLogoutSuccess={onSuccess}
      />
    </div>
  )
}

export default Logout;