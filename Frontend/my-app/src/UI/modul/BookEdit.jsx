import React from 'react';
import cl from "./BookEdit.module.css"

function BookEdit({ children, visible, setVisible }) {

	const rootClasses = [cl.BookEdit]
	if (visible) {
		rootClasses.push(cl.active);
	}

	return (
		<div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
			<div className={cl.BookEditContent} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}

export default BookEdit