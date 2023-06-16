import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ShackEdit from "./pages/ShackEdit";
import ShackIndex from "./pages/ShackIndex";
import ShackNew from "./pages/ShackNew";
import ShackProtectedIndex from "./pages/ShackProtectedIndex";
import ShackShow from "./pages/ShackShow";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import mockUsers from "./mockUsers";
import mockShacks from "./mockShacks";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [shacks, setShacks] = useState([]);

  const url = "http://localhost:3000";

  // const login = (userInfo) => {
  //   fetch(`${url}/login`, {
  //     body: JSON.stringify(userInfo),
  //     header: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     method: "POST",
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw Error(response.statusText);
  //       }
  //       localStorage.setItem("token", response.headers.get("Authorization"));
  //       return response.json();
  //     })
  //     .then((payload) => {
  //       setCurrentUser(payload);
  //     })
  //     .catch((error) => console.log("login errors: ", error));
  // };

  const signup = (userInfo) => {
    fetch(`${url}/signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        // store the token
        localStorage.setItem("token", response.headers.get("Authorization"));
        return response.json();
      })
      .then((payload) => {
        setCurrentUser(payload);
      })
      .catch((error) => console.log("login errors: ", error));
  };

  const logout = () => {
    fetch(`${url}/logout`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"), //retrieve the token
      },
      method: "DELETE",
    })
      .then((payload) => {
        localStorage.removeItem("token"); // remove the token
        setCurrentUser(null);
      })
      .catch((error) => console.log("log out errors: ", error));
  };

  return (
    <>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp signup={signup} />} />
        <Route path="/login" element={<LogIn login={login} />} />
        <Route path="/shackindex" element={<ShackIndex shacks={shacks} />} />
        <Route path="/shackshow/:id" element={<ShackShow shacks={shacks} />} />
        {currentUser && (
          <Route
            path="/myshacks"
            element={
              <ShackProtectedIndex currentUser={currentUser} shacks={shacks} />
            }
          />
        )}
        <Route
          path="/shacknew"
          element={
            <ShackNew createShack={createShack} currentUser={currentUser} />
          }
        />
        <Route path="/shackedit" element={<ShackEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
