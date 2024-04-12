import { DataFetched, CharactersFetchedResults, LoginData } from "../interfaces";

const ROOT: string = "https://rickandmortyapi.com/api/";

export const BringCharacters = async (): Promise<DataFetched> => {
  try {
    const response: any = await fetch(`${ROOT}character/?page=2`);

    const dirtyData: CharactersFetchedResults = await response.json();

    const data: DataFetched = {
      success: true,
      message: "Los datos han venido correctamente",
      data: dirtyData.results,
    };
    return data;
  } catch (error) {
    let answer: DataFetched = {
      message: "Ha habido un error",
      data: [],
      success: false,
    };

    return answer;
  }
};

export const LoginMe = async (credentials: LoginData): Promise<DataFetched> => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  };
  
  try {
    const response: any = await fetch(`http://localhost:4000/api/auth/login`, options);

    const data: DataFetched = await response.json();

    if(!data.success){
      throw new Error(data.message)
    }

    return data;
  } catch (error: unknown) {
    let answer: DataFetched = {
      message: "",
      data: [],
      success: false,
    };

    return answer;
  }
}