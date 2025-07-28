const RestaurantCard = ({ resData }) => {
  const { image, name, tags = [], rating, caloriesPerServing } = resData;

  return (
    <div
      className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200 transition-all  "
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img className="w-[250px] h-[150px] rounded-lg" src={image} alt={name} />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{tags?.length ? tags.join(", ") : "No tags"}</h4>
      <h4>{rating} stars</h4>
      <h4>₹{caloriesPerServing / 100} FOR TWO</h4>
    </div>
  );
};
export default RestaurantCard;

export const withDifficultlyLevel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="bg-black text-white rounded-lg p-2 m-2">
          Difficulty Level
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};
