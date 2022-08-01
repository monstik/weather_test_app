export interface ICity {
  id: string;
  name: string;
  cords: { lat: number; lon: number };
}

export interface ICityAdd {
  name: string;
  cords: { lat: number; lon: number };
}
