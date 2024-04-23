import logo from "../assets/logo.webp"
import Auth from "../component/Auth"
import "../css/home.css" 
const Home = ()=>{



    return <>
    
    <nav>
        
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
        </div>
       
       
        <div className="input-container">
            <input className="search-box" type="text" name="search" placeholder="search..."></input>
        </div>
       <Auth/>
    </nav>
    </>
}


export default Home;