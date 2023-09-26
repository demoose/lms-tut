"use client";

import { UserButton } from "@clerk/nextjs";

const NavbarRoutes = () => {
  return (
    <div className="flex gap-x-2 ml-auto">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default NavbarRoutes;
