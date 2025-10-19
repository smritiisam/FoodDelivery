export default function RestaurantCard({restaurant}){
return (
<article className="card">
<h3>{restaurant.name}</h3>
<p>{restaurant.cuisine} — {restaurant.address}</p>
</article>
)
}