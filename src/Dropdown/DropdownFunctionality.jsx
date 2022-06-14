import React, { useState } from 'react';

function Dropdown({ title, items, multiSelect = false }) {
  const [open, setOpen] = useState(false);
	const [selection, setSelection] = ([]);

	function handleOnclick(item) {}
	return  (
		<div className="dd-wrapper">
			<div 
			tabIndex={0} 
			className="dd-header" 
			role="button" 
			onKeyPress={() => toggle(!open)}
			onClick={() => toggle(!open)}>
				<div className="dd-header__title"></div>
			</div>
		</div>
	)
}
