import React from 'react';
import { Link } from 'react-router-dom';

const OtherPage = () => {
	return (
		<div>
			I'm some other page!
			<br />
			<br />
			<Link to="/">Home</Link>
		</div>
	);
};

export default OtherPage;
