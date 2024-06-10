import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../index.css";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";
function App() {
  const status = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />

      <FetchItems />
      {status.currentlyFetching ? <Spinner /> : <Outlet />}

      <Footer />
    </>
  );
}

export default App;
