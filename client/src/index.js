// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { AuthContextProvider } from "./context/AuthContext";
// import { SearchContextProvider } from "./context/SearchContext";
// import { DarkModeContextProvider } from "./context/darkModeContext";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <AuthContextProvider>
//       <SearchContextProvider>
//         <DarkModeContextProvider>
//           <App />
//         </DarkModeContextProvider>
//       </SearchContextProvider>
//     </AuthContextProvider>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { alpha } from "@material-ui/core/styles";
import Navbar from "./components/navbar/Navbar";
import SideBar from "./components/sidebar/sidebar";

import { reducers } from "./reducers";
import App from "./App";
// import "./index.css";

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
