import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Book from './Book/Book';
import LocalHeader from './LocalHeader';
import User from './User/User';
import Order from './Order/Order';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<LocalHeader/>
			<Routes>
				<Route path="/book" element={<Book/>} />
				<Route path="/order" element={<Order/>} />
				<Route path="/user" element={<User/>} />
				<Route path="*" element={<div className='not_found'>404. Not Found!</div>} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
