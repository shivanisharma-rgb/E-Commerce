function Profile() {
  const name = "Shivani Sharma";
  const age = 18;

  const img =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTASRxFyaNowGqsRb4ET3t4iOUKzZ-kEJQ0ES5PUjAroGoXI2RB3kMjLgA-&s=10";

  return (
    <div className="profile">
      <img src={img} alt={name} />

      <h2>{name}</h2>

      <p>Age: {age}</p>
    </div>
  );
}

export default Profile;