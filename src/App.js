import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Header from "./components/Header/Header";
import "./index.css";
import HomePage from "./pages/HomePages/HomePages";
import NotFound from "./pages/NotFound/NotFound";
import { Provider } from "react-redux";
import { store } from "./redux";
import GamePage from "./pages/GamePage/GamePage";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/app/:id" element={<GamePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
