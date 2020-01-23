import React from 'react';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';


function App() {
  return (
    <div>
      <header>
        <div className="container-lg">
          <div className="row">
        <div className="col-6 col-md-4">
        <img className="facebookLogo float-left" src="https://i.ya-webdesign.com/images/facebook-white-logo-png-3.png" alt="Facebook Logo"/>
        </div>
        <div className="loginInfo col-6 col-md-2">
           </div>
        <div className="loginInfo col-6 col-md-6">
          <Login /></div>
            
          </div>
        </div>          
      </header>
      <main>

      <div class="container-lg">
  <div class="row">
    <div class="col-5">
      <p className="leftPage">
      Facebook membantu Anda terhubung dan berbagi dengan orang-orang dalam kehidupan Anda.
      </p>
      <img className="worldMap" src="https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/OBaVg52wtTZ.png" alt="World Map"/>
    </div>
    <div class="col-1">
      
    </div>
    <div class="col-6">
      <Registration />
    </div>
  </div>
    </div>


      </main>
    </div>
  );
}

export default App;
