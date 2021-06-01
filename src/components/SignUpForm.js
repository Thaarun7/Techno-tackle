import React, { useEffect, useState } from 'react';
import validation from './Validation';

function SignUpForm({ submitForm }) {
	const [values, setValue] = useState({
		email: '',
		password: '',
	});

	const [error, setError] = useState({});
	const [dataIsCorrect, setDataIsCorrect] = useState(false);

	const handleChange = (event) => {
		setValue({
			...values,
			[event.target.name]: event.target.value,
		});
	};
	const handleFormSubmit = (event) => {
		event.preventDefault();
		setError(validation(values));
		setDataIsCorrect(true);
	};

	useEffect(() => {
		if (Object.keys(error).length === 0 && dataIsCorrect) {
			submitForm(true);
		}
	});

	return (
		<div className='container'>
			<div className='app-wrapper'>
				<div>
					<h1 className='title-heading'>Techno-Tackle</h1>
					<h5 className='title-sub'>software solution coimbatore</h5>
					<h2 className='title'> Create Account</h2>
				</div>
				<form className='form-wrapper'>
					<div className='email'>
						<label className='label'>Email</label>
						<input
							className='input'
							type='email'
							name='email'
							value={values.email}
							onChange={handleChange}></input>
						{error.email && <p className='error'>{error.email}</p>}
					</div>
					<div className='Password'>
						<label className='label'>Password</label>
						<input
							className='input'
							type='Password'
							name='password'
							value={values.password}
							onChange={handleChange}></input>
						{error.password && <p className='error'>{error.password}</p>}
					</div>
				</form>
				<div>
					<button className='submit' onClick={handleFormSubmit}>
						Login
					</button>
				</div>
			</div>
		</div>
	);
}

export default SignUpForm;
