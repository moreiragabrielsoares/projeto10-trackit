import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import UserContext from "./contexts/UserContext";

import LoginPage from "./components/LoginPage";
import SingUpPage from "./components/SingUpPage";
import HabitsPage from "./components/HabitsPage";
import TodayPage from "./components/TodayPage";
import HistoryPage from "./components/HistoryPage";



function App() {
  return (
    <BrowserRouter>
      <UserContext.Provider>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<SingUpPage />} />
            <Route path="/hoje" element={<TodayPage />} />
            <Route path="/habitos" element={<HabitsPage />} />
            <Route path="/historico" element={<HistoryPage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
