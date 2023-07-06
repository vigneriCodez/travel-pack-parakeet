import React from 'react';

import Item from './Item';

function PackingList({ items }) {
	return (
		<div className='list'>
			<ul>
				{items.map((item) => {
					return (
						<Item
							key={item.id}
							description={item.description}
							quantity={item.quantity}
							packed={item.packed}
						/>
					);
				})}
			</ul>
		</div>
	);
}
export default PackingList;
