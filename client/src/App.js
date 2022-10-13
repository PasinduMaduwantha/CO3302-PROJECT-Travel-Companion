import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/components/Home/Home";
// import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Explore from "./pages/Explore/Explore.js";
import Plan from "./pages/Plan/Plan";
import Reminders from "./pages/Reminders/Reminders";
import Support from "./pages/Support/Support";
import Logout from "./pages/Logout/Logout";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";
import TimeLine from "./pages/TimeLine/TimeLine";
import CreatorOrTag from "./pages/home/components/CreatorOrTag/CreatorOrTag";
import PostDetails from "./pages/home/components/PostDetails/PostDetails";
import Auth from "./pages/home/components/Auth/Auth";

function App() {
  const user = JSON.parse(localStorage.getItem("profile"));
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          //pass props to component
          <Route path="/hotels/:id" element={<Hotel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/timeline" element={<TimeLine />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/reminders" element={<Reminders />} />
          <Route path="/support" element={<Support />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/" exact component={Home} />
          <Route path="/" exact component={() => <Navigate to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" exact component={PostDetails} />
          {/* <Route
            path={["/creators/:name", "/tags/:name"]}
            exact
            component={CreatorOrTag}
          /> */}
          {/* <Route
            path="/auth"
            exact
            component={() => (!user ? <Auth /> : <Navigate to="/posts" />)}
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
