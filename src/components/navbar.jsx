
import '../styles/navbar.css'
import logo from'../assets/logo.png'
import { FaSquarePhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";


function Navbar() {

    return (
      <>
        <div className="navbar">
            <div className="nav-logo">
               <a href="/"> <img src= {logo} alt="logo" /></a>
            </div>

            <div className="nav-options">
                <ul>
                    <li><a href="">Doctors</a></li>
                    <li><a href="">Consult Online</a></li>
                    <li><a href="">Hospital</a></li>
                    <li><a href="">Lab Tests</a></li>
                    <li><a href="">Health Blogs</a></li>
                </ul>
            </div>

            <div className="nav-buttons">
                <a href='' className='nav-phone'><FaSquarePhone /></a>
                <a href='' className='profile'><IoPerson /></a>
            </div>

        </div>
      </>
    )
  }
  
  export default Navbar