import { BringCharacters } from "../../services/apiCalls";
import { DataFetched } from "../../interfaces";
import { useEffect, useState } from "react";
import "./Home.css";

export const Home: React.FC = () => {
  const [characters, setCharacters] = useState<any[]>([]);
  const [error, setError] = useState<string>("");
  const [firstFetch, setFirstFetch] = useState<boolean>(false);

  useEffect(() => {
    const bringData = async () => {
      const fetched: DataFetched = await BringCharacters();

      if (fetched.success) {
        console.log(fetched, "hola soy fetched");
        setFirstFetch(true);
        setCharacters(fetched.data);
      } else {
        setError(fetched.message);
      }
    };

    if (!firstFetch) {
      bringData();
    }
  }, [characters]);

  return (
    <div>
      {characters.length === 0 ? (
        <div>{error}</div>
      ) : (
        <div>
          {characters.map((person) => {

            if(person.name.includes("Aqua")){

                return <div key={person.id}>{person.name}</div>;
            }
          })}
        </div>
      )}
    </div>
  );
};
