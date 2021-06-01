function Validation(values) {
	let error = {};
	if (!values.email) {
		error.email = 'please fill this field';
	}
	if (!values.password) {
		error.password = 'please fill this field';
	}
	return error;
}

export default Validation;
