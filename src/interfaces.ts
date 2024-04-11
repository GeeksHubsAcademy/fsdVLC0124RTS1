
export interface CharactersFetched {
    message: string,
    data: any[],
    success: boolean
}

export interface CharactersFetchedResults {
    info: CharactersInfo,
    results: any[]
}

export interface CharactersInfo {

    count: number,
    pages: number,
    next: string | null,
    prev: string | null
}

export interface CharactersData {

    characters: any[]
}

