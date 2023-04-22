import React from 'react';
import './App.css';

//Import Components
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import {Route, Routes} from 'react-router-dom';
// import HeaderSignIn from './components/HeaderSignIn.js';

//Import Pages
import Home from './pages/Home.js';
// import Show from './pages/Show.js';

//Import Pages Specific Sports
import HomeSoccer from './pages/HomeSports/HomeSoccer.js';
import HomeBasketball from './pages/HomeSports/HomeBasketball.js';

//Import Show Specific Sports
import ShowSoccer from './pages/ShowSports/ShowSoccer.js';
import ShowBasketball from './pages/ShowSports/ShowBasketball.js';

//Import Team 
import Team from './pages/TeamPages/Team.js';
import TeamSquad from './pages/TeamPages/TeamSquad';
import TeamPreviousGame from './pages/TeamPages/TeamPreviousGame';

//Import Sign In Info
import SignIn from './components/SignIn.js';
import Register from './components/Register';

//import useToken from './components/useTokens.js'; //test
// import  useToken  from './components/useTokens.js';

function App() {
  const URL = "https://scorecast-scores.herokuapp.com/";

  // const { token, setToken } = useToken();

  // if (!token) { //if token is not set, then show the sign in page
  //   return (
  //     <div >
  //       <HeaderSignIn />
        
  //       <Routes>
  //       <Route path="/" element={<SignIn setToken={setToken} />} />
  //       <Route path="/register" element={<Register setToken={setToken} />} />
  //       </Routes>

  //       <Footer />
  //     </div>
  //   );
  // }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/soccer" element={<HomeSoccer/>} />
        <Route path="/basketball" element={<HomeBasketball/>} />
        <Route path="/basketball/show/:id" element={<ShowBasketball URL={URL} />} />
        <Route path="/soccer/show/:id" element={<ShowSoccer URL={URL} />} />
        <Route path="/team/:id" element={<Team URL={URL}/>} />
        <Route path="/team/:id/squad" element={<TeamSquad URL={URL}/>} />
        <Route path="/team/:id/games" element={<TeamPreviousGame URL={URL}/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    
      <Footer />
   
      
    </div>
  );
}

export default App;