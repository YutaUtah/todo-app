import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Protected } from "../components/molecules/Protected";
import { Account } from "../components/pages/Account";
import { Board } from "../components/pages/Board";
import { Home } from "../components/pages/Home";
import { SignIn } from "../components/pages/SignIn";
import { Tasks } from "../components/pages/Tasks";
import { Stats } from "../components/pages/Stats";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const BaseRoute = () => {
  return (
    <BrowserRouter>
      <HeaderLayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/account"
          element={
            <Protected>
              <Account />
            </Protected>
          }
        />
        <Route path="/board" element={<Board />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </BrowserRouter>
  );
};
