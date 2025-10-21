// import { useState } from 'react';

// export default function Signup(){
// 	const [name, setName] = useState('');
// 	const [email, setEmail] = useState('');
// 	const [password, setPassword] = useState('');

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		// stub: handle signup
// 		console.log('signup', { name, email, password });
// 	}

// 	return (
// 		<div className="container">
// 			<h1>Sign up</h1>
// 			<form onSubmit={handleSubmit}>
// 				<label>
// 					Name
// 					<input value={name} onChange={e => setName(e.target.value)} />
// 				</label>
// 				<label>
// 					Email
// 					<input value={email} onChange={e => setEmail(e.target.value)} />
// 				</label>
// 				<label>
// 					Password
// 					<input type="password" value={password} onChange={e => setPassword(e.target.value)} />
// 				</label>
// 				<button type="submit">Create account</button>
// 			</form>
// 		</div>
// 	)
// }


export default function Signup() {
  return (
    <div className="container">
      <h1>Signup</h1>
      <p>Signup form will go here soon.</p>
    </div>
  );
}
