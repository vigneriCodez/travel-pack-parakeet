import React from 'react';

import Form from './Form';
import Logo from './Logo';
import PackingList from './PackingList';
import Stats from './Stats';

function App() {
	return (
		<div className='app'>
			<Logo />
			<Form />
			<PackingList />
			<Stats />
		</div>
	);
}

export default App;
