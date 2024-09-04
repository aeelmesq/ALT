import "./style.css";
import Header from "./components/Header/Header.js";
import SearchBar from "./components/Header/SearchBar/SearchBar.js";
import Footer from "./components/Footer/Footer.js";
import RenderPage from "./components/Pages/RenderPage.js";
import { getUlrParam } from "./components/utilits.js";

function fullPage() {
  const page = getUlrParam("page");
}

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <RenderPage />
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
