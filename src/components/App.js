import React, { useState } from 'react';

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
	const [items, setItems] = useState([...initialItems]);

	const handleAddItems = (item) => {
		setItems((items) => [...items, item]);
	};

	return (
		<div className='app'>
			<Logo />
			<Form onAdditem={handleAddItems} />
			<PackingList items={items} />
			<Stats />
		</div>
	);
}

export default App;
