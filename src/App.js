import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Footer } from './Footer' 
import { ContactUs } from './ContactUs'
import "./App.css";
import { Switch, Route } from "react-router-dom";



const App = () => {
  return (
    <> 
      <Switch> 
      <Route path="/" exact> 
       <ContactUs/> 
       </Route>
      </Switch> 
      <Footer />
    
      
    </>
  );
};

export default App;