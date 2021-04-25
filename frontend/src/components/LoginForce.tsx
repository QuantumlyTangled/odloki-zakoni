import { Auth, Card } from '@supabase/ui';
import React, { useEffect, useState } from 'react';
import { Else, If, Then } from 'react-if';
import { useSupabase } from 'use-supabase';
import { ViewType, AuthDisplay } from './AuthDisplay';

const LoginForce: React.FC = ({ children }) => {
	const supabase = useSupabase();
	const { user } = Auth.useUser();
	const [authView, setAuthView] = useState<ViewType>('sign_in');

	useEffect(() => {
		const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
			if (event === 'PASSWORD_RECOVERY') setAuthView('forgotten_password');
			if (event === 'USER_UPDATED') setTimeout(() => setAuthView('sign_in'), 1000);
			// Send session to /api/auth route to set the auth cookie.
			// NOTE: this is only needed if you're doing SSR (getServerSideProps)!
			await fetch('/api/auth', {
				method: 'POST',
				headers: new Headers({ 'Content-Type': 'application/json' }),
				credentials: 'same-origin',
				body: JSON.stringify({ event, session })
			}).then((res) => res.json());
		});

		return () => {
			authListener!.unsubscribe();
		};
	}, [supabase.auth]);

	return (
		<>
			<If condition={!user}>
				<Then>
					<div className="flex h-screen">
						<div className="m-auto">
							<Card>
								<AuthDisplay view={authView} />
							</Card>
						</div>
					</div>
				</Then>
				<Else>{children}</Else>
			</If>
		</>
	);
};

export default LoginForce;
