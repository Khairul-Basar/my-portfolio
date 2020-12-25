import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Stack from "./components/Stack";
import Work from "./components/work";
import Contact from "./components/contact";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
        <Work/>
      <Stack />
      <Contact/>
    </div>
  );
}

export default App;
