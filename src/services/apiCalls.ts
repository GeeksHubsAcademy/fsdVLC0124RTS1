import { CharactersFetched, CharactersFetchedResults } from "../interfaces";

const ROOT: string = "https://rickandmortyapi.com/api/";

export const BringCharacters = async (): Promise<CharactersFetched> => {
  try {
    const response: any = await fetch(`${ROOT}character/?page=2`);

    const dirtyData: CharactersFetchedResults = await response.json();

    const data: CharactersFetched = {
      success: true,
      message: "Los datos han venido correctamente",
      data: dirtyData.results,
    };
    return data;
  } catch (error) {
    let answer: CharactersFetched = {
      message: "Ha habido un error",
      data: [],
      success: false,
    };

    return answer;
  }
};
