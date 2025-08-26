"use client";

import SignInForm from "@/components/signin-form";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignIn() {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session?.user) {
            router.push('/dashboard');
        }
    }, [session, router]);

    return (
        <div className="flex flex-1 items-center justify-center">
            <SignInForm />
        </div>
    );
}
