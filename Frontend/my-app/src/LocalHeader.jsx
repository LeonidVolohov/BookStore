import React from 'react'
import { Link } from 'react-router-dom';

function LocalHeader() {
	return (
		<header className='topbar'>
			<Link to="/book">Book</Link>
			<Link to="/order">Order</Link>
			<Link to="/user">User</Link>
		</header>
	);
};

export default LocalHeader;
