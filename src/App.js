
import Navbar from "./Components/Navbar";
import "./styles.css";
import Home from "./routes/Home";
import About from "./routes/About";
import CompanyList from "./routes/CompanyList";
import SignUp from "./components/SignUp";
import UserPool from "./UserPool";
import Tasks from "./routes/Tasks";
import Login from "./routes/Login";


function App() {
  let component
  switch (window.location.pathname){
   case "/":
    component = <Home />
    break

    case "/about":
        component = <About />
      break
      case "/tasks":
        component = <Tasks />
      break
    case "/companyList":
        component = <CompanyList />
      break
    case "/SignUp":
        component = <SignUp />
        break
    case "/Login":
        component = <Login />
        break
  }
  return (
   
    <>
      <Navbar />
      {component}

      
      </>

      
  )
}

export default App;
