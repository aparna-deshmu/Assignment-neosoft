
import {useState,useEffect} from "react";

export const useFetch = () =>{
    const [players,setPlayers] = useState([]);
    useEffect(() => {
      const fetchAPI = async () => {
        const response = await fetch(
          "https://api.npoint.io/20c1afef1661881ddc9c"
        );
        const result = await response.json();
        
        setPlayers(result.playerList);
 
      };
      fetchAPI();
    }, []);
      return [players];
};

export async function fetchData(){
  const response = await fetch("https://api.npoint.io/20c1afef1661881ddc9c");
  const result = await response.json();
  return result.playerList;
} 