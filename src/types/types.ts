export interface ShowDataTypes {
  id?: any;
  name: string;
  image: {medium: string, original: string};
  rating: {average: number}
}

export interface ShowDataType {
  id?: any;
  name: string;
  image: {medium: string, original: string};
  rating: {average: number}
  genres: string[];
  summary: string
}

export interface ShowCrewType {
  character: {
  id: number;
  name: string;
  image: {medium: string, original: string};
  }
}