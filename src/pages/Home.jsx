import { useEffect, useState } from 'react';
import RestaurantCard from '../components/RestaurantCard';


export default function Home(){
const [list, setList] = useState([]);
useEffect(()=>{
// temporary stub
setList([
{ _id: 'r1', name: 'Sunrise Diner', cuisine: 'Indian', address: 'MG Road', rating: 4.4},
{ _id: 'r2', name: 'Pasta Place', cuisine: 'Italian', address: 'Sector 12', rating: 4.2}
])
},[])


return (
<div className="container">
<h1>Restaurants</h1>
<div className="grid">
{list.map(r => <RestaurantCard key={r._id} restaurant={r} />)}
</div>
</div>
)
}