import '../containers/App.css';
import type { ScrollProps } from '../types';

const Scroll = ({ children } : ScrollProps) => {
	return (
		<div className='scroll-container'>
			{children};
		</div>

	);
};

export default Scroll;