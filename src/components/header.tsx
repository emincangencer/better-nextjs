import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import SignOutButton from './signout-button';

const Header = async () => {
  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <header className="bg-card text-card-foreground p-4 border-b border-border">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <Link href="/">
          <h1 className="text-xl font-bold">My App</h1>
        </Link>
        {session?.user ? (
          <div className="flex items-center space-x-4">
            <Link href="/dashboard">
              <Button variant="ghost" className="cursor-pointer">Dashboard</Button>
            </Link>
            <SignOutButton user={session.user} />
          </div>
        ) : (
          <Link href="/sign-in">
            <Button className="cursor-pointer">Sign In</Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;