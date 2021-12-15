import Header from "./components/Header";
import Expenses from "./components/Expenses";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container p-3">
      <Header />
      <Expenses />
      <Footer />
    </div>
  );
}

export default App;
