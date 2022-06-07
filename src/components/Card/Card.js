import './Card.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


//Functional component
    const CardItem = ({ image, title, price, id, amount}) => {
            const [open, setOpen] = useState(false)

        const handleClose = () => {
            setOpen(false) 
        }

        return (
        <Card sx={{ minWidth: 275 }}  >
            <CardContent>
                <div className="card-item">
                    <div>
                        <img src={`/${image}`} />
                    </div>
                    <p>{title}</p>
                    <span>$ {price}</span>
                    <div>
                        <ItemCount
                        />
                    </div>
                    
                    <Link to={`/product/${id}`}><Button variant={'outlined'} color="inherit">    Ver Detalle </Button></Link>
                    
                </div>
            </CardContent>

        </Card>
        )
    }

export default CardItem