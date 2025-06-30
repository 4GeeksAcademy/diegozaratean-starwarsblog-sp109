import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { CardNave } from "../components/CardNave.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

  useEffect(()=>{
	fetch('https://www.swapi.tech/api/starships')
	.then( (response)=> response.json())
	.then( (data)=> {
		dispatch({
			type: 'load_ships',
			payload: data.results
		})
	
	})
  },[])

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
		
			<h1>Naves desde STORE </h1>
			<div className="row flex-row flex-nowrap overflow-scroll " > 

				{store.naves.map( (nave)=> <CardNave key={nave.uid} uid={nave.uid}  name={nave.name}/>)}
			</div>

		</div>
	);
}; 