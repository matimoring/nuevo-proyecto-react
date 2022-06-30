import { Link } from "@mui/material"
import ItemCount from "../ItemCount/ItemCount"
import { Button } from "@mui/material"

const ItemDetail = ({data}) =>{
    return (
        <>
        <div className="card-detail">
            <div>
                <img src={`../${data.image}`}/>
            </div>
            <h2>{data.title}</h2>
            <p>$ {data.price}</p>
            <p>{data.cantidad}</p>

            <div>
            <ItemCount data={data}/>
            </div>
        </div>
        </>
    )
}
export default ItemDetail 