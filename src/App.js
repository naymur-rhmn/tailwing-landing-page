import "./App.css";
import Banner from "./components/Banner/Banner";
import Cta from "./components/Cta/Cta";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Index";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Feature />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
