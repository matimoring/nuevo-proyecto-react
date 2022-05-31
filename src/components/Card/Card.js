import './Card.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


//Functional component
    const CardItem = ({ image, title, price, id}) => {
            const [open, setOpen] = useState(false)

        const handleClose = () => {
            setOpen(false) 
        }

        return (
        <Card sx={{ minWidth: 275 }}  >
            <CardContent>
                <div className="card-item">
                    <div>
                        <img src={`./${image}`} />
                    </div>
                    <p>{title}</p>
                    <span>$ {price}</span>
                    <div>
                        <ItemCount />
                    </div>
                    <Button variant={'contained'} color="inherit" onClick={() => setOpen(true)}> Agregar al Carrito</Button>
                </div>
            </CardContent>
            <Modal handleClose={handleClose} open={open}>
                <h2>Agregado al carrito!</h2>
            </Modal>
        </Card>
        )
    }

export default CardItem