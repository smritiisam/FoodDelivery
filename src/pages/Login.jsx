import { useState } from 'react';

export default function Login(){
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		// stub: handle login
		console.log('login', { email, password });
	}

	return (
		<div className="container">
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Email
					<input value={email} onChange={e => setEmail(e.target.value)} />
				</label>
				<label>
					Password
					<input type="password" value={password} onChange={e => setPassword(e.target.value)} />
				</label>
				<button type="submit">Login</button>
			</form>
		</div>
	)
}
