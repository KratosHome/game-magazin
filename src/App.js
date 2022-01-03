import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import "./index.css";
import HomePage from "./pages/HomePages/HomePages";
import NotFound from "./pages/NotFound/NotFound";
import { Provider } from "react-redux";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header />
        </BrowserRouter>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
