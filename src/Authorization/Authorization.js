const Authorization = (props) => {
	return (
		<div>
			<p>
				It'll be proper authorization and registration there, but now just click
				the button below (:
			</p>
			<button onClick={() => props.signIn('pojo')}>Sign in</button>
		</div>
	);
};

export default Authorization;
