import React, { useEffect, useState } from 'react';

import Form from './Form';
import Logo from './Logo';
import PackingList from './PackingList';
import Stats from './Stats';

const initialItems = [
	{ id: 1, description: 'Passports', quantity: 2, packed: false },
	{ id: 2, description: 'Socks', quantity: 12, packed: false },
	{ id: 3, description: 'Charger', quantity: 1, packed: true },
	{ id: 4, description: 'Sunglasses', quantity: 2, packed: true },
];

function App() {
	const [items, setItems] = useState([]);

	const handleAddItems = (item) => {
		setItems((items) => [...items, item]);
	};

	const handleDeleteItem = (id) => {
		setItems((items) => items.filter((item) => item.id !== id));
	};

	useEffect(() => {
		setItems([...initialItems]);
	}, []);

	return (
		<div className='app'>
			<Logo />
			<Form onAddItem={handleAddItems} />
			<PackingList items={items} onDeleteItem={handleDeleteItem} />
			<Stats />
		</div>
	);
}

export default App;
