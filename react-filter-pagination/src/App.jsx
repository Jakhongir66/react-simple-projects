import React from 'react';
import {BrowserRouter} from "react-router-dom";
import TheNavbar from "./components/Navbar/TheNavbar.jsx";
import AppRouter from "./components/AppRouter.jsx";
import TheFooter from "./components/Footer/TheFooter.jsx";
import './App.css'

const App = () => {
   return (
   <div className="wrapper">
      <BrowserRouter>
         <TheNavbar/>
         <main className="page">
            <AppRouter/>
         </main>
         <TheFooter/>
      </BrowserRouter>
   </div>
   );
};

export default App;
