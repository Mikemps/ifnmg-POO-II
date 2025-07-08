import { useRouter } from 'next/navigation';
import React from 'react';

export default function Account() {
	const router = useRouter();
	return (
		<div>
			<div className="flex flex-col items-center justify-center min-h-screen p-8 gap-4">
				<h1 className="text-2xl font-bold">Account Page</h1>
				<p className="text-lg">This is the account page.</p>
			</div>

			<div>
				<button onClick={() => router.push('/login')}>
					Login
				</button>
				<button onClick={() => router.push('/account')}>
					Account
				</button>
				<button onClick={() => router.push('/onboard')}>
					Onboard
				</button>
			</div>
		</div>
	);
}

