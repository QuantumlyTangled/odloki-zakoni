import { Button, IconInbox, IconKey, IconLock, IconMail, Input, Space, Typography } from '@supabase/ui';
import React, { useEffect, useState } from 'react';
import { Case, Switch } from 'react-if';
import { useSupabase } from 'use-supabase';

export type ViewType = 'sign_in' | 'forgotten_password' | 'magic_link';

export interface ViewsMap {
	[key: string]: ViewType;
}

export const VIEWS: ViewsMap = {
	SIGN_IN: 'sign_in',
	FORGOTTEN_PASSWORD: 'forgotten_password',
	MAGIC_LINK: 'magic_link'
};

export interface AuthDisplayEmailProps {
	authView: string;
	setAuthView: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthDisplayEmail: React.FC<AuthDisplayEmailProps> = ({ authView, setAuthView }) => {
	const supabase = useSupabase();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError('');
		setLoading(true);
		if (authView === 'sign_in') {
			const { error: signInError } = await supabase.auth.signIn({
				email,
				password
			});
			if (signInError) setError(signInError.message);
		}
		setLoading(false);
	};

	useEffect(() => {
		setEmail('');
		setPassword('');
	}, [authView]);

	return (
		<form onSubmit={handleSubmit}>
			<Space size={6} direction={'vertical'}>
				<Space size={3} direction={'vertical'}>
					<Input
						label="Email address"
						autoComplete="email"
						defaultValue={email}
						icon={<IconMail size={21} stroke={'#666666'} />}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
					/>
					<Input
						label="Password"
						type="password"
						defaultValue={password}
						autoComplete="current-password"
						icon={<IconKey size={21} stroke={'#666666'} />}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
					/>
				</Space>
				<Space direction="vertical" size={6}>
					<Space style={{ justifyContent: 'space-between' }}>
						{authView === VIEWS.SIGN_IN && (
							<Typography.Link onClick={() => setAuthView(VIEWS.FORGOTTEN_PASSWORD)}>Forgot your password?</Typography.Link>
						)}
					</Space>
					<Button htmlType="submit" type="primary" block size="large" icon={<IconLock size={21} />} loading={loading}>
						{authView === VIEWS.SIGN_IN ? 'Sign in' : 'Sign up'}
					</Button>
				</Space>
				<Space direction="vertical" style={{ textAlign: 'center' }}>
					{authView === VIEWS.SIGN_IN && (
						<Typography.Link onClick={() => setAuthView(VIEWS.MAGIC_LINK)}>Sign in with magic link</Typography.Link>
					)}
					{error && <Typography.Text type="danger">{error}</Typography.Text>}
				</Space>
			</Space>
		</form>
	);
};

export interface AuthDisplayMagicLinkProps {
	authView: string;
	setAuthView: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthDisplayMagicLink: React.FC<AuthDisplayMagicLinkProps> = ({ authView, setAuthView }) => {
	const supabase = useSupabase();
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);

	const handleMagicLinkSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError('');
		setMessage('');
		setLoading(true);
		const { error } = await supabase.auth.signIn({ email });
		if (error) setError(error.message);
		else setMessage('Check your email for the magic link');
		setLoading(false);
	};

	useEffect(() => {
		setEmail('');
	}, [authView]);

	return (
		<form onSubmit={handleMagicLinkSignIn}>
			<Space size={4} direction={'vertical'}>
				<Space size={3} direction={'vertical'}>
					<Input
						label="Email address"
						placeholder="Your email address"
						icon={<IconMail size={21} stroke={'#666666'} />}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
					/>
					<Button block size="large" htmlType="submit" icon={<IconInbox size={21} />} loading={loading}>
						Send magic link
					</Button>
				</Space>
				<Typography.Link onClick={() => setAuthView(VIEWS.SIGN_IN)}>Sign in with password</Typography.Link>
				{message && <Typography.Text>{message}</Typography.Text>}
				{error && <Typography.Text type="danger">{error}</Typography.Text>}
			</Space>
		</form>
	);
};

export interface AuthDisplayProps {
	view: string;
}

export const AuthDisplay: React.FC<AuthDisplayProps> = ({ view }) => {
	const [authView, setAuthView] = useState(view);

	return (
		<>
			<Switch>
				<Case condition={authView === VIEWS.SIGN_IN}>
					<AuthDisplayEmail authView={authView} setAuthView={setAuthView} />
				</Case>
				<Case condition={authView === VIEWS.MAGIC_LINK}>
					<AuthDisplayMagicLink authView={authView} setAuthView={setAuthView} />
				</Case>
			</Switch>
		</>
	);
};

export default AuthDisplay;
