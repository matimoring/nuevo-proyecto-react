import { useContext, useState } from "react"
import { Container, Button } from "@mui/material"
import { Delete, Pages } from "@mui/icons-material"
import CartContext from "../context/CartContext"
import TextField from '@mui/material/TextField';
import Modal from '../components/Modal/Modal'
import '../pages/Cart.css'
import { addDoc, collection } from "firebase/firestore";
import db from "../utils/FirebaseConfig";

const Cart = () => {
    const { cartListItems, totalPrice } = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)
    const [formValue, setFormValue] = useState({
        name:'',
        phone:'',
        mail:''
    })
    const [order, setOrder] = useState({
        buyer: {},
        items: cartListItems.map( (item) =>{
            return{
                id: item.id,
                title: item.title,
                price: item.price
            }
        }),
        total: totalPrice
    })

    const [success, setSuccess] = useState()

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("Prevent submit", formValue)
        setOrder({...order, buyer: formValue})
        saveData({...order, buyer: formValue})
        
    }

    const handleChange = (e) =>{
        setFormValue({...formValue, [e.target.name]: e.target.value })
    }

    const saveData = async (newOrder) => {
        const orderFireBase = collection(db,'ordenes')
        const orderDoc = await addDoc(orderFireBase, newOrder)
        console.log("orden generada", orderDoc.id)
        setSuccess(orderDoc.id)
    }

    

    return(
        <Container className='container-general'> 
        {console.log("order: ", order)}
        <h2>Mi Pedido: </h2>
        <div className='cart-section'>
            <div className='col-cart-table__head'>
                <h2>Producto</h2>
                <h2>Descripcion</h2>
                <h2>Precio Unitario</h2>
                <h2>Cantidad</h2>
                <h2>Quitar</h2>
            </div>
            {cartListItems.map( (item) => {
                const {id, title, image, price} = item
                return(
                    <div className='cart-table__content' key={id}>
                        <div className='cart-table__content-img'>
                            <img src={`/${image}`} />
                        </div>
                        <div className='cart-table__content-title'>
                            <p>{title}</p>
                        </div>
                        <div className='cart-table__content-price'>
                            <p>$ {price}</p>
                        </div>
                        <div className='cart-table__content-quantity'>
                            <p>1</p>
                        </div>
                        <div className='cart-table__content-price'>
                            <button className='btn-delete'>
                                <Delete />
                            </button>
                        </div>
                    </div>
                )
            })}
            <div className='cart-footer'>
                <Button className='btn-custom' >Continuar comprando</Button>
                <div className='cart-checkout-details'>
                    <div className='cart-checkout__subtotal'>
                        <p>Subtotal</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <div className='cart-checkout__total'>
                        <p>Total</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <Button className='btn-custom' onClick={() => setShowModal(true)} >Finalizar Compra</Button>
                </div>
            </div>
        </div>
        <Modal title={success ? "compra realizada con exito":"formulario de contacto"} open={showModal} handleClose={()=>setShowModal(false)}>
            {success ? (

            <div>La compra se genero con exito! nro. de orden: {success}</div>
            ): (
                <form className="form-cart" onSubmit={handleSubmit}>
                <TextField 
                id="outlined-basic" 
                name="name"
                label="Nombre y Apellido" 
                variant="outlined" 
                value={formValue.name}
                onChange={handleChange}
                />
            
                <TextField 
                id="filled-basic" 
                name="phone"
                label="Telefono" 
                variant="filled" 
                value={formValue.phone}
                onChange={handleChange}
                />
                <TextField 
                id="standard-basic" 
                name="mail"
                label="Mail" 
                variant="standard" 
                value={formValue.mail}
                onChange={handleChange}
                />
                <button type="submit"> Enviar </button>
            </form>
            )}
            
        </Modal>
    </Container>
    )
}

export default Cart