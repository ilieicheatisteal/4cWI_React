import logo from "./logo.svg";
import "./App.css";
import TeamContainer from "./components/TeamContainer";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Matchday from "./components/MatchDay"
import Card from "./components/Card"
import Header from "./components/Header"


const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div>
      <Header />
      <TeamContainer /></div>,
  },
  {
    path: "/Matchday",
    element: <div>
      <div><Header /></div>
      <div className="mt-10"><Matchday /></div>
      </div>
  },
]);

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
