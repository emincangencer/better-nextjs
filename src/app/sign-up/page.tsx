"use client";

import SignUpForm from "@/components/signup-form";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignUp() {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session?.user) {
            router.push('/dashboard');
        }
    }, [session, router]);

	return (
		<div className="flex min-h-screen items-center justify-center">
			<SignUpForm />
		</div>
	);
}