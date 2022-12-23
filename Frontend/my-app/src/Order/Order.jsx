import '../App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
import OrderEdit from '../UI/modul/BookEdit';

function Order() {
	const [newModal, newData] = useState(false);
	const [data, setData] = useState([]);
	const [editModal, editData] = useState(false);
	const [deleteModal, deleteData] = useState(false);

	const [idBook, setIdBook] = useState(0);
	const [idUser, setIdUser] = useState(0);
	const [pricePerBook, setPricePerBook] = useState(0);
	const [count, setCount] = useState(0);
	const [buyDate, setBuyDate] = useState(0);
	const [summaryPrice, setSummaryPrice] = useState(0);

	useEffect(() => {
		fetch('http://127.0.0.1:8080/order')
			.then(response => response.json())
			.then(
				(result) => setData(result),
				(err) => console.warn("Fetch faile", err)
			)
	}, [data])

	function putOrder(idBook, idUser, pricePerBook, count, buyDate, summaryPrice) {
		axios.put('http://127.0.0.1:8080/order', {
			idBook: idBook,
			idUser: idUser,
			pricePerBook: pricePerBook,
			count: count,
			buyDate: buyDate,
			summaryPrice: summaryPrice,
		})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	function postOrder(idBook, idUser, pricePerBook, count, buyDate, summaryPrice) {
		axios.post('http://127.0.0.1:8080/order', {
			idBook: idBook,
			idUser: idUser,
			pricePerBook: pricePerBook,
			count: count,
			buyDate: Date.now(),
			summaryPrice: summaryPrice,
		})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});

		newData(true)
	}

	function deleteOrder(id) {
		axios.delete(`http://127.0.0.1:8080/order/${id}`, {})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	function getOrderInfo(idBook, idUser, pricePerBook, count, buyDate, summaryPrice) {
		editData(true);

		return {
			idBook, idUser, pricePerBook, count, buyDate, summaryPrice
		}
	}

	return (
		<div>
			<div className="Order">
				<h1>List of Orders</h1>
				<table>
					<thead>
						<tr>
							<th>id</th>
							<th>idBook</th>
							<th>idUser</th>
							<th>pricePerBook</th>
							<th>count</th>
							<th>buyDate</th>
							<th>summaryPrice</th>
						</tr>
					</thead>
					<tbody>
						{
							data.map((data, key) =>
								<tr key={key}>
									<td className='table-data'>{data.id}
										{/* <button className='edit_button' onClick={() => editData(true)}>Редактировать</button> */}
										<button className='edit_button' onClick={() => getOrderInfo(data.id, data.idBook, data.idUser, data.pricePerBook, data.count, data.buyDate, data.summaryPrice)}>Edit</button>
										<button className='delete_button' onClick={() => deleteOrder(data.id)}>X</button>
									</td>
									<td className='table-data'>{data.idBook}</td>
									<td className='table-data'>{data.idUser}</td>
									<td className='table-data'>{data.pricePerBook}</td>
									<td className='table-data'>{data.count}</td>
									<td className='table-data'>{data.buyDate}</td>
									<td className='table-data'>{data.summaryPrice}</td>
								</tr>
							)
						}
						<OrderEdit visible={editModal} setVisible={editData}>
							<div style={{ display: 'grid', gridAutoRows: 30 }}>
								<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>idBook</label>
									<input
										style={{ float: 'right' }}
										value={idBook}
										onChange={e => setIdBook(e.target.value)}
										type='text' />
								</div>

								<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>idUser</label>
									<input
										style={{ float: 'right' }}
										value={idUser}
										onChange={e => setIdUser(e.target.value)}
										type='text' />
								</div>

								<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>pricePerBook</label>
									<input
										style={{ float: 'right' }}
										value={pricePerBook}
										onChange={e => setPricePerBook(e.target.value)}
										type='text' />
								</div>

								<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>count</label>
									<input
										style={{ float: 'right' }}
										value={count}
										onChange={e => setCount(e.target.value)}
										type='text' />
								</div>

								<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>buyDate</label>
									<input
										style={{ float: 'right' }}
										value={buyDate}
										onChange={e => setBuyDate(e.target.value)}
										type='text' />
								</div>

								<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>summaryPrice</label>
									<input
										style={{ float: 'right' }}
										value={summaryPrice}
										onChange={e => setSummaryPrice(e.target.value)}
										type='text' />
								</div>

								<button className='post'  onClick={() => putOrder(idBook, idUser, pricePerBook, count, buyDate, summaryPrice)}>Update</button>
							</div>
						</OrderEdit>
					</tbody>
				</table>

				<div className="bottom-sidebar">
					<button className="active bottom_button" onClick={() => newData(true)}>Add new order</button>
					<OrderEdit visible={newModal} setVisible={newData}>
						<div style={{ display: 'grid', gridAutoRows: 30 }}>
							<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>idBook</label>
								<input
									style={{ float: 'right' }}
									value={idBook}
									onChange={e => setIdBook(e.target.value)}
									type='text' />
							</div>

							<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>idUser</label>
								<input
									style={{ float: 'right' }}
									value={idUser}
									onChange={e => setIdUser(e.target.value)}
									type='text' />
							</div>

							<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>pricePerBook</label>
								<input
									style={{ float: 'right' }}
									value={pricePerBook}
									onChange={e => setPricePerBook(e.target.value)}
									type='text' />
							</div>

							<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>count</label>
								<input
									style={{ float: 'right' }}
									value={count}
									onChange={e => setCount(e.target.value)}
									type='text' />
							</div>

							<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>buyDate</label>
								<input
									style={{ float: 'right' }}
									value={buyDate}
									onChange={e => setBuyDate(e.target.value)}
									type='text' />
							</div>

							<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>summaryPrice</label>
								<input
									style={{ float: 'right' }}
									value={summaryPrice}
									onChange={e => setSummaryPrice(e.target.value)}
									type='text' />
							</div>

							<button className='post'  onClick={() => postOrder(idBook, idUser, pricePerBook, count, buyDate, summaryPrice)}>Create new</button>
						</div>
					</OrderEdit>
				</div>
			</div>
		</div>
	)
}

export default Order;
