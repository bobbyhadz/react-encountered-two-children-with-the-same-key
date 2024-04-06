import './App.css';

const App = () => {
  const people = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Alice'},
  ];

  // 👇️ now using index for key
  return (
    <div>
      {people.map((person, index) => {
        return (
          <div key={index}>
            <h2>{person.id}</h2>
            <h2>{person.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default App;
