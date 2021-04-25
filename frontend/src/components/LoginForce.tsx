import { Auth, Card } from '@supabase/ui';
import React, { useEffect, useState } from 'react';
import { Else, If, Then } from 'react-if';
import { useSupabase } from 'use-supabase';

const LoginForce: React.FC = ({ children }) => {
	const supabase = useSupabase();
	const { user } = Auth.useUser();
	const [authView, setAuthView] = useState<'sign_in' | 'sign_up' | 'forgotten_password' | 'magic_link'>('sign_in');

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
						<Card className="m-auto">
							<Auth //
								supabaseClient={supabase}
								view={authView}
								socialLayout="horizontal"
								socialButtonSize="xlarge"
							/>
						</Card>
					</div>
				</Then>
				<Else>{children}</Else>
			</If>
		</>
	);
};

export default LoginForce;
