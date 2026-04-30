"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
  const path = usePathname()
  const res = path == href
  return (
    <div className={`${res? 'border-b-2 border-purple-800': ''}`}>
      <Link href={href}>{children}</Link>
    </div>
  );
};

export default NavLink;