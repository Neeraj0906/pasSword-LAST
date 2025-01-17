// src/App.jsx
import { BrowserRouter as  BrowserRouter } from "react-router-dom"; 
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {
    return (
        
        <>
            <BrowserRouter>
            <div>
            <Register />
            <Login />
            <ForgotPassword />
            <ResetPassword />
            </div>
            </BrowserRouter>
            
            
            
            </>
    );
};

export default App;