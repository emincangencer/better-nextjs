'use client';

import React, { useEffect } from 'react';
import { useSession } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';

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
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <Skeleton className="h-10 w-64 mb-4" />
        <Skeleton className="h-6 w-80" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold">Dashboard Page</h1>
      <p>Welcome to your dashboard!</p>
    </div>
  );
};

export default DashboardPage;
