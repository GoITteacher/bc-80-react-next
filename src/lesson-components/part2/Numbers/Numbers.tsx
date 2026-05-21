const Numbers = () => {
  const arr = [1, 2, 4, 4, 1, 2, 5, 7, 7, 21, 2, 4];

  return (
    <div>
      <ul>
        {arr.map((el) => {
          return <li>{el}</li>;
        })}
      </ul>
    </div>
  );
};

export default Numbers;
