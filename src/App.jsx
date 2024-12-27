import About from "./components/About"
import Achivement from "./components/Achivement"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Header from "./components/Header"
import Home from "./components/Home"


function App() {
  

  return (
    <>
     <Header/> 
     <div id = "Home"><Home/></div>
     <div id = "About" className="my-4"><About/></div>
     <div id = "Achivement"><Achivement/></div>
     <div id = "Gallery"><Gallery/></div>
     <div id = "Contact"><Contact/></div>
     <Footer/>
    </>
  )
}

export default App
