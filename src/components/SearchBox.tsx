import "../containers/App.css";
import type { SearchBoxProps } from '../types';

const SearchBox = ({ onSearchChange } : SearchBoxProps) => {
	return (
	<div className='searchbox'>
		<input
			className='searchbox-input'
			type='search'
			placeholder='Search robots'
			onChange={onSearchChange}
		/>
	</div>
	);
}

export default SearchBox;