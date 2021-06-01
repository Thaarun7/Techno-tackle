import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import SignUpFormSucess from './SignUpFormSucess';

function Form() {
	const [formIsSubmitted, setFormIsSubmitted] = useState(false);
	const submitForm = () => {
		setFormIsSubmitted(true);
	};

	return (
		<div className="main">
			<img className="img" src='./img/computer.jpg' alt='' />

			<div>
				{!formIsSubmitted ? (
					<SignUpForm submitForm={submitForm} />
				) : (
					<SignUpFormSucess />
				)}
			</div>
		</div>
	);
}

export default Form;
