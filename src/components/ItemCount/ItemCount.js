import Button from '@mui/material/Button';
import { useState } from 'react';


const ItemCount = () => {
    const [count, setCount] = useState(1);

    const addCount = () => {
        setCount(count + 1);
    };

    const removeCount = () => {
        setCount(count - 1);
    };

    return (
        <div className="count-item">
        <Button onClick={removeCount} disabled={count == 1}> - </Button>
        <p> {count} </p>
        <Button onClick={addCount} disabled={count == 5}> + </Button>
        </div>
    );
    };

export default ItemCount;