import { ISprites } from "./Sprites.interfaces";

export interface IPokemonGetAll {
  name: string;
  url: string;
}

export interface IPokemon {
  name: string;
  sprites: ISprites[]
}