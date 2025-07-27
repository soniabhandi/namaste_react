const RestaurantCard = ({ resData }) => {
  const { image, name, tags = [], rating, caloriesPerServing } = resData;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" src={image} alt={name} />
      <h3>{name}</h3>
      <h4>{tags?.length ? tags.join(", ") : "No tags"}</h4>
      <h4>{rating} stars</h4>
      <h4>₹{caloriesPerServing / 100} FOR TWO</h4>
    </div>
  );
};
export default RestaurantCard;
