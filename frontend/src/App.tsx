import * as React from "react";

type Fruit = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function App() {
  const [fruits, setFruits] = React.useState<Fruit[] | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await fetch("http://localhost:8000/api");
        const res = await fetch("/api");
        const json: React.SetStateAction<Fruit[] | null> = await res.json();
        setFruits(json);
      } catch (e: unknown) {
        // if (e instance of Error) {
        //   console.error(e.message);
        // }
        console.error("Err");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container fruitsList">
      <h1>Fruits Store</h1>

      {fruits?.map((fruit) => (
        <div key={fruit.id}>
          <figure>
            <img src={fruit.image}alt={fruit.name}/>
          </figure>
          <div className="text">
            <h2>{fruit.name}</h2>
            <p>{`￥${fruit.price}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};