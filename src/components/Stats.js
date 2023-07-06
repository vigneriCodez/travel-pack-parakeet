import React from 'react';

function Stats({ items }) {
	if (!items.length)
		return (
			<p className='stats'>
				<em>Start adding some items to your list!🚀</em>
			</p>
		);

	const itemsCount = items.length;
	const itemsPacked = items.filter((item) => item.packed).length;
	const packedPercentage = Math.round((itemsPacked / itemsCount) * 100);

	return (
		<footer className='stats'>
			<em>
				{packedPercentage === 100
					? 'You got everything ready to go!!! ✈️'
					: `👜 You have ${itemsCount} items on your list and you already packed ${itemsPacked} (${packedPercentage}%)`}
			</em>
		</footer>
	);
}
export default Stats;
