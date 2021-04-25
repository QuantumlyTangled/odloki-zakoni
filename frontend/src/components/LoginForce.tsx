import { Auth } from '@supabase/ui';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';

const LoginForce: React.FC = ({ children }) => {
	const { user } = Auth.useUser();
	const router = useRouter();

	useEffect(() => {
		if (!user) void router.replace('/login');
	}, [router, user]);

	return <>{children}</>;
};

export default LoginForce;
