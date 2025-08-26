'use client';

import React, { useEffect } from 'react';
import { useSession } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const DashboardPage = () => {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (isPending) return; // Do nothing while loading
    if (!session?.user) {
      router.push('/sign-in');
    }
  }, [session, isPending, router]);

  if (isPending || !session?.user) {
    return <div className="flex min-h-screen items-center justify-center">Loading...</div>; // Or a loading spinner
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Dashboard Page</h1>
      <p>Welcome to your dashboard!</p>
    </div>
  );
};

export default DashboardPage;