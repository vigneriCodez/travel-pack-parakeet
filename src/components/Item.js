import React from 'react';

function Item({ item, onDeleteItemDrill }) {
	return (
		<li>
			<button>O</button>
			<span style={item.packed ? { textDecoration: 'line-through' } : {}}>
				{item.quantity} {item.description}
			</span>
			<button
				style={{ color: 'red' }}
				onClick={() => onDeleteItemDrill(item.id)}
			>
				X
			</button>
		</li>
	);
}
export default Item;
