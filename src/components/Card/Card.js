import './Card.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CircularProgress } from '@mui/material';
import Modal from '../Modal/Modal';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';


//Functional component
    const CardItem = ({ image, title, price, id, amount}) => {
        const [open, setOpen] = useState(false)

        const handleClose = () => {
            setOpen(false) 
        }

        const [txt, setTxt] = useState(false);

        const changeText = () => {
            setTxt(!txt);
        };

        return (
        <Card sx={{ minWidth: 275 }}  >
            <CardContent>
                <div className="card-item">
                    <div>
                        <img src={`/${image}`} />
                    </div>
                    <p>{title}</p>
                    <span>$ {price}</span>

                    
                    <Link style={{textDecoration: 'none'}} to={`/product/${id}`}>
                        <div className="btn-custom-card">
                            <Button 
                                className="btn-custom-card"
                                onClick={changeText}
                                
                                >    
                                    VER DETALLE 
                            </Button>
                        </div>
                    </Link>
                </div>
            </CardContent>

        </Card>
        )
    }

export default CardItem