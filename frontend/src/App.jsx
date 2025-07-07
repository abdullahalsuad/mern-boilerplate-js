import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./pages/shared/Navbar";
import Footer from "./pages/shared/Footer";
import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      <header>
        <Navbar />
      </header>

      <div className="flex-1">
        <Outlet />
      </div>

      <footer>
        <Footer />
      </footer>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
