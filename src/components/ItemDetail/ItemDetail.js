import { width } from "@mui/system"

const ItemDetail = ({data}) =>{
    return (
        <div className="card-detail">
            <div>
                <img src={`../${data.image}`}/>
            </div>
            <h2>{data.title}</h2>
            <p>$ {data.price}</p>
            <p classname="card-detail img">< img img src={`./${data.image}`} /></p>
        </div>
    )
}
export default ItemDetail 