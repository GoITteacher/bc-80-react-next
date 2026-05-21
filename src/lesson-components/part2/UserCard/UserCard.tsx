interface UserCardProps {
  name: string;
  age: number;
  city?: string;
  country?: string;
  isAdmin?: boolean;
}

const UserCard = ({ name, age, city, country, isAdmin }: UserCardProps) => {
  return (
    <div>
      <hr />

      <p>Name: {name}</p>
      <p>Age: {age}</p>
      {city && <p>City: {city}</p>}
      {country && <p>Country: {country}</p>}
      <p>UserType: {isAdmin ? "Admin" : "User"}</p>
      <hr />
    </div>
  );
};

export default UserCard;
