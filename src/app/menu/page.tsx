import MenuGrid from "@/components/menugrid/MenuGrid";
import React from "react";

const Menu = () => {
  return (
    <section className="min-h-[100vh] bg-zinc-950 w-screen flex flex-col justify-start items-center">
      <h1 className="pt-32 text-5xl">BB MENU</h1>
      <MenuGrid></MenuGrid>
    </section>
  );
};

export default Menu;
