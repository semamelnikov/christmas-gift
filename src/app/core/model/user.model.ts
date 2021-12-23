export interface User {
  name: string;
  password: string;
  city: City;
}

export enum City {
  Ptz = 'ptz',
  Krasnodar = 'krasnodar'
}
