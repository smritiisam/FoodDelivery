import { useEffect, useState } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import {getRestaurants} from '../services/Api.jsx'

export default function Home(){
  const [restaurants, setRestaurants] = useState([]);
  useEffect(()=>{
  // temporary stub

      getRestaurants()
        .then(setRestaurants)
        .catch((err) => console.error('Error fetching:', err));
  },[])


return (
<div className="container">
<h1>Restaurants</h1>
<div className="grid">
{restaurants.map(r => <RestaurantCard key={r._id} restaurant={r} />)}
</div>
</div>
)
}