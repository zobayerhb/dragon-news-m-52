import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import LatestNews from "../LatestNews/LatestNews";
import Navbar from "../Navbar/Navbar";
import LeftLayout from "../Layout-Component/LeftLayout";
import RightLayout from "../Layout-Component/RightLayout";

const MainLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
      </header>
      <section>
        <LatestNews></LatestNews>
      </section>
      <nav className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto grid md:grid-cols-12 gap-3">
        <aside className="col-span-3">
          <LeftLayout></LeftLayout>
        </aside>
        <section className="col-span-6">middle content</section>
        <aside className="col-span-3">
          <RightLayout></RightLayout>
        </aside>
      </main>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
