import { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import type { Robot, DummyUserResponse } from '../types';

function App() {
        const [loading, setLoading] = useState(true);
        const [robots, setRobots] = useState<Robot[]>([]);
        const [searchfield, setSearchfield] = useState<string>("");
        const [error, setError] = useState<string | null>(null); // voor fouten


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://dummyjson.com/users?limit=80');
                const data: DummyUserResponse = await response.json();
                const mappedUsers: Robot[] = data.users.map(user => ({
                    id: user.id,
                    name: `${user.firstName} ${user.lastName}`,
                    email: user.email
                }));
                setRobots(mappedUsers);
                setLoading(false);
            } 
                catch (error) {
                    console.error(error);
                    setError("Failed to fetch");
                    setLoading(false);
                }
        };

        fetchUsers();
    }, []);


    const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchfield(event.target.value)
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    if (loading) {
        return <h1 className='loading'>Loading...</h1>
    }

    if (error) {
        return <h1 className='loading'>Error: {error}</h1>
    }

	return(
        <div className='app-container'>
            <h1 className='app-title'>Robo Friends</h1>
            <SearchBox onSearchChange={onSearchChange}/>
            <Scroll>
                <CardList robots={filteredRobots}/>
            </Scroll>
        </div>
	)
}

export default App;