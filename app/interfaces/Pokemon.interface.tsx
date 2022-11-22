import { ISprite } from "./Sprite.interfaces";

export interface IPokemonGetAll {
  name: string;
  url: string;
}

export interface IPokemon {
  name: string;
  sprite: ISprite;
  health: number;
  type: string
}