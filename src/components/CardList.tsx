import Card from './Card';
import '../containers/App.css';
import type { CardListProps } from '../types';


const CardList = ({ robots } : CardListProps) => {
	return(
        <div>
            {robots.map((user) => (
                <Card
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    email={user.email}
                />
            ))}
      </div>
	);
}

export default CardList;