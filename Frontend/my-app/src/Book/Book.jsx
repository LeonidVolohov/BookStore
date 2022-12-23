import '../App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
import BookEdit from '../ui/modul/BookEdit';
import "bootstrap/dist/css/bootstrap.min.css";

function Book() {
	const [newModal, newData] = useState(false);
	const [data, setData] = useState([]);
	const [editModal, editData] = useState(false);
	const [deleteModal, deleteData] = useState(false);

	const [authors, setAuthors] = useState('');
	const [description, setDescription] = useState('');
	const [name, setName] = useState('');
	const [publisher, setPublisher] = useState('');
	const [sellPrice, setSellPrice] = useState(0);

	useEffect(() => {
		fetch('http://127.0.0.1:8080/book')
			.then(response => response.json())
			.then(
				(result) => setData(result),
				(err) => console.warn("Fetch faile", err)
			)
	}, [data])

	function putBook(authors, description, name, publisher, sellPrice) {
		axios.put('http://127.0.0.1:8080/book/1', {
			authors: authors,
			description: description,
			name: name,
			publisher: publisher,
			sellPrice: sellPrice,

		})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	function postBook(authors, description, name, publisher, sellPrice) {
		axios.post('http://127.0.0.1:8080/book', {
			authors: authors,
			description: description,
			name: name,
			publisher: publisher,
			sellPrice: sellPrice,

		})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});

		newData(true)
	}

	function deleteBook(id) {
		axios.delete(`http://127.0.0.1:8080/book/${id}`, {})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	function getBookInfo(id, authors, description, name, publisher, sellPrice) {
		editData(true);

		return {
			id, authors, description, name, publisher, sellPrice
		}
	}

	return (
		<div>
			<div className="Book">
				<h1>List of Books</h1>
				<table>
					<thead>
						<tr>
							<th>id</th>
							<th>authors</th>
							<th>description</th>
							<th>name</th>
							<th>publisher</th>
							<th>sellPrice</th>
						</tr>
					</thead>
					<tbody>
						{
							data.map((data, key) =>
								<tr key={key}>
									<td className='table-data'>{data.id}
										{/* <button className='edit_button' onClick={() => editData(true)}>Редактировать</button> */}
										<button className='edit_button' onClick={() => getBookInfo(data.id, data.authors, data.description, data.name, data.publisher, data.sellPrice)}>Edit</button>
										<button className='delete_button' onClick={() => deleteBook(data.id)}>X</button>
									</td>
									<td className='table-data'>{data.authors}</td>
									<td className='table-data'>{data.description}</td>
									<td className='table-data'>{data.name}</td>
									<td className='table-data'>{data.publisher}</td>
									<td className='table-data'>{data.sellPrice}</td>
								</tr>
							)
						}
						<BookEdit visible={editModal} setVisible={editData}>
							<div style={{ display: 'grid', gridAutoRows: 30 }}>
								<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>Authors</label>
									<input
										style={{ float: 'right' }}
										value={authors}
										onChange={e => setAuthors(e.target.value)}
										type='text' />
								</div>

								<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>Description</label>
									<input
										style={{ float: 'right' }}
										value={description}
										onChange={e => setDescription(e.target.value)}
										type='text' />
								</div>

								<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>Name</label>
									<input
										style={{ float: 'right' }}
										value={name}
										onChange={e => setName(e.target.value)}
										type='text' />
								</div>

								<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>Publisher</label>
									<input
										style={{ float: 'right' }}
										value={publisher}
										onChange={e => setPublisher(e.target.value)}
										type='text' />
								</div>

								<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>Sell price</label>
									<input
										style={{ float: 'right' }}
										value={sellPrice}
										onChange={e => setSellPrice(e.target.value)}
										type='text' />
								</div>

								<button className='post' onClick={() => putBook(authors, description, name, publisher, sellPrice)}>Update</button>
							</div>
						</BookEdit>
					</tbody>
				</table>

				<div className="bottom-sidebar">
					<button className="active bottom_button" onClick={() => newData(true)}>Add new book</button>
					<BookEdit visible={newModal} setVisible={newData}>
						<div style={{ display: 'grid', gridAutoRows: 30 }}>
							<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>Authors</label>
								<input
									style={{ float: 'right' }}
									value={authors}
									onChange={e => setAuthors(e.target.value)}
									type='text' />
							</div>

							<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>Description</label>
								<input
									style={{ float: 'right' }}
									value={description}
									onChange={e => setDescription(e.target.value)}
									type='text' />
							</div>

							<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>Name</label>
								<input
									style={{ float: 'right' }}
									value={name}
									onChange={e => setName(e.target.value)}
									type='text' />
							</div>

							<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>Publisher</label>
								<input
									style={{ float: 'right' }}
									value={publisher}
									onChange={e => setPublisher(e.target.value)}
									type='text' />
							</div>

							<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>Sell price</label>
								<input
									style={{ float: 'right' }}
									value={sellPrice}
									onChange={e => setSellPrice(e.target.value)}
									type='text' />
							</div>

							<button className='post' onClick={() => postBook(authors, description, name, publisher, sellPrice)}>Create new</button>
						</div>
					</BookEdit>
				</div>
			</div>
		</div>
	)
}

export default Book;
