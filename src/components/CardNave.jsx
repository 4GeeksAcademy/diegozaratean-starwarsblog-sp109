import { Link } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";




export const CardNave = (props) => {

    const {store, dispatch} =useGlobalReducer()
    return(
	<div className="card" style={{width: "18rem"}}>
        <img src={rigoImageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Nave: {props.name}</h5>
            <p className="card-text">info nave.</p>
            <Link to={'/nave/'+props.uid} className="btn btn-primary">ver {props.uid} </Link>
            <button onClick={()=>{
                dispatch({
                    type:'toggle_fav_ship',
                    payload:{nameShip: props.name}
                })
            }}>cambiar texto</button>
        </div>
    </div>
);
} 