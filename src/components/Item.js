import React from 'react';

function Item({ description, packed, quantity }) {
	return (
		<li>
			<button>O</button>
			<span style={packed ? { textDecoration: 'line-through' } : {}}>
				{quantity} {description}
			</span>
			<button>X</button>
		</li>
	);
}
export default Item;
