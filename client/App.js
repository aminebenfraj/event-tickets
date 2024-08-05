import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/api')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    return (
        <div className="App">
            <h1>Data from API</h1>
            <ul>
                {data.map(item => (
                    <li key={item._id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
