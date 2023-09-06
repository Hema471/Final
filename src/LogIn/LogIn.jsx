import React from 'react';
import { Link } from 'react-router-dom';
import "./MyLogIn.css"
import myImage from './LoginImg.gif'; 
function LogIn() {
  return (
 
    <body style={{ background: 'white', backgroundImage: 'url(Abstract20072.gif)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', display: 'block' }} className='MyLogIn'>
      <section className="form my-4 mx-5 " style={{ opacity: 0.9 }}>
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-5">
              <img src={myImage} style={{ height: '650px' }} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-7 px-5 pt-5">
            {/* style={{textAlign:"center"}} */}
              <h1  ><b>MovieVerse</b></h1>
              <h4 style={{color : "black"}}>Sign in</h4>
              <form action="">
                <div className="form-row">
                  <div className="col-lg-7">
                    <input type="text" placeholder="Username" id="UserLogIn" className="form-control my-3 p-2" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input type="password" placeholder="*********" id="UserPass" className="form-control my-3 p-2 UserPass" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <button type="button" className="btn1 mt-3 mb-5" onClick={LogIn}>Login</button>
                  </div>
                </div>
                <Link to="ForgetPass">Forgot password?</Link>
                <p style={{color : "black"}}>Dont have an account? <Link to="SignUp">register here</Link></p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </body>

  );
}

export default LogIn;

// function LogIn() {
//   // Implement your login logic here
// }
