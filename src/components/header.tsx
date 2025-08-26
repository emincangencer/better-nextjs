
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-card text-card-foreground p-4 border-b border-border">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <Link href="/">
          <h1 className="text-xl font-bold">My App</h1>
        </Link>
        <Button className="cursor-pointer">Sign In</Button>
      </div>
    </header>
  );
};

export default Header;
