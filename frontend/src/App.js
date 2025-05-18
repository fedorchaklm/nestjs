import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [tables, setTables] = useState([]);
    useEffect(() => {
        axios.get('/api/tables').then(({data}) => setTables(data));
    }, [])
    return (
        <div>
            {tables.map((table) => <div key={table.id}>{JSON.stringify(table)}</div>)}
        </div>
    );
}

export default App;
