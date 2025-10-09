import React from "react";
import Navbar from "../../Componets/Header/Navbar";
import Footer from "../../Componets/Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import { Suspense } from "react";

const Root = () => {
    const navigation = useNavigation();
  return (
    <div>
      <Navbar></Navbar>

      {navigation.state === "loading" ? (
        <div className="flex justify-center items-center flex-1">
          <span className="loading loading-spinner text-primary w-12 h-12"></span>
        </div>
      ) : (
        <Outlet />
      )}

      <Footer></Footer>
    </div>
  );
};

export default Root;
