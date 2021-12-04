import Countries from "./components/Countries";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Partners from "./components/Partners";
import Services from "./components/Services";
import Summary from "./components/Summary";
import Testimony from "./components/Testimony";


function App() {
  return (
    <div className="App">
      <Landing />
      <Summary />
      <Countries />
      <Services />
      <Partners />
      <Testimony />
      <Footer />
    </div>
  );
}

export default App;
