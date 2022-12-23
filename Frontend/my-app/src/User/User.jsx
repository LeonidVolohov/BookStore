import '../App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
import UserEdit from '../UI/modul/BookEdit';

function User() {
	const [newModal, newData] = useState(false);
	const [data, setData] = useState([]);
	const [editModal, editData] = useState(false);
	const [deleteModal, deleteData] = useState(false);

	const [username, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [patronymic, setPatronymic] = useState('');
	const [info, setInfo] = useState('');
	const [phone, setPhone] = useState('');
	const [role, setRole] = useState('');

	useEffect(() => {
		fetch('http://127.0.0.1:8080/user')
			.then(response => response.json())
			.then(
				(result) => setData(result),
				(err) => console.warn("Fetch faile", err)
			)
	}, [data])

	function putUser(username, password, firstName, lastName, patronymic, info, phone, role) {
		axios.put('http://127.0.0.1:8080/user', {
			username: username,
			password: password,
			firstName: firstName,
			lastName: lastName,
			patronymic: patronymic,
			info: info,
			phone: phone,
			role: role,
		})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	function postUser(username, password, firstName, lastName, patronymic, info, phone, role) {
		axios.post('http://127.0.0.1:8080/user', {
			username: username,
			password: password,
			firstName: firstName,
			lastName: lastName,
			patronymic: patronymic,
			info: info,
			phone: phone,
			role: role,
		})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});

		newData(true)
	}

	function deleteUser(id) {
		axios.delete(`http://127.0.0.1:8080/user/${id}`, {})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	function getUserInfo(username, password, firstName, lastName, patronymic, info, phone, role) {
		editData(true);

		return {
			username, password, firstName, lastName, patronymic, info, phone, role
		}
	}

	return (
		<div>
			<div className="User">
				<h1>List of Users</h1>
				<table>
					<thead>
						<tr>
							<th>id</th>
							<th>username</th>
							<th>password</th>
							<th>firstName</th>
							<th>lastName</th>
							<th>patronymic</th>
							<th>info</th>
							<th>phone</th>
							<th>role</th>
						</tr>
					</thead>
					<tbody>
						{
							data.map((data, key) =>
								<tr key={key}>
									<td className='table-data'>{data.id}
										{/* <button className='edit_button' onClick={() => editData(true)}>Редактировать</button> */}
										<button className='edit_button' onClick={() => getUserInfo(username, password, firstName, lastName, patronymic, info, phone, role)}>Edit</button>
										<button className='delete_button' onClick={() => deleteUser(data.id)}>X</button>
									</td>
									<td className='table-data'>{data.username}</td>
									<td className='table-data'>{data.password}</td>
									<td className='table-data'>{data.firstName}</td>
									<td className='table-data'>{data.lastName}</td>
									<td className='table-data'>{data.patronymic}</td>
									<td className='table-data'>{data.info}</td>
									<td className='table-data'>{data.phone}</td>
									<td className='table-data'>{data.role}</td>
								</tr>
							)
						}
						<UserEdit visible={editModal} setVisible={editData}>
							<div style={{ display: 'grid', gridAutoRows: 30 }}>
								<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>username</label>
									<input
										style={{ float: 'right' }}
										value={username}
										onChange={e => setUserName(e.target.value)}
										type='text' />
								</div>

								<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>password</label>
									<input
										style={{ float: 'right' }}
										value={password}
										onChange={e => setPassword(e.target.value)}
										type='text' />
								</div>

								<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>firstName</label>
									<input
										style={{ float: 'right' }}
										value={firstName}
										onChange={e => setFirstName(e.target.value)}
										type='text' />
								</div>

								<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>lastName</label>
									<input
										style={{ float: 'right' }}
										value={lastName}
										onChange={e => setLastName(e.target.value)}
										type='text' />
								</div>

								<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>patronymic</label>
									<input
										style={{ float: 'right' }}
										value={patronymic}
										onChange={e => setPatronymic(e.target.value)}
										type='text' />
								</div>
								
								<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>info</label>
									<input
										style={{ float: 'right' }}
										value={info}
										onChange={e => setInfo(e.target.value)}
										type='text' />
								</div>
								
								<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>phone</label>
									<input
										style={{ float: 'right' }}
										value={phone}
										onChange={e => setPhone(e.target.value)}
										type='text' />
								</div>
								
								<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>role</label>
									<input
										style={{ float: 'right' }}
										value={role}
										onChange={e => setRole(e.target.value)}
										type='text' />
								</div>

								<button className='post' onClick={() => putUser(username, password, firstName, lastName, patronymic, info, phone, role)}>Update</button>
							</div>
						</UserEdit>
					</tbody>
				</table>

				<div className="bottom-sidebar">
					<button className="active bottom_button" onClick={() => newData(true)}>Add new user</button>
					<UserEdit visible={newModal} setVisible={newData}>
							<div style={{ display: 'grid', gridAutoRows: 30 }}>
								<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>username</label>
									<input
										style={{ float: 'right' }}
										value={username}
										onChange={e => setUserName(e.target.value)}
										type='text' />
								</div>

								<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>password</label>
									<input
										style={{ float: 'right' }}
										value={password}
										onChange={e => setPassword(e.target.value)}
										type='text' />
								</div>

								<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>firstName</label>
									<input
										style={{ float: 'right' }}
										value={firstName}
										onChange={e => setFirstName(e.target.value)}
										type='text' />
								</div>

								<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>lastName</label>
									<input
										style={{ float: 'right' }}
										value={lastName}
										onChange={e => setLastName(e.target.value)}
										type='text' />
								</div>

								<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>patronymic</label>
									<input
										style={{ float: 'right' }}
										value={patronymic}
										onChange={e => setPatronymic(e.target.value)}
										type='text' />
								</div>
								
								<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>info</label>
									<input
										style={{ float: 'right' }}
										value={info}
										onChange={e => setInfo(e.target.value)}
										type='text' />
								</div>
								
								<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>phone</label>
									<input
										style={{ float: 'right' }}
										value={phone}
										onChange={e => setPhone(e.target.value)}
										type='text' />
								</div>
								
								<div style={{ display: 'inline' }}> <label style={{ float: 'left' }}>role</label>
									<input
										style={{ float: 'right' }}
										value={role}
										onChange={e => setRole(e.target.value)}
										type='text' />
								</div>

								<button className='post'  onClick={() => postUser(username, password, firstName, lastName, patronymic, info, phone, role)}>Create new</button>
							</div>
						</UserEdit>
				</div>
			</div>
		</div>
	)
}

export default User;
