import '../containers/App.css';
import type { Robot } from '../types';

const Card = ({ name, email, id } : Robot) => {
	return (
		<div className='card'>
			    <img 
                    alt='robots' 
                    src={`https://robohash.org/robot-${id}?size=250x250`} 
                />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;