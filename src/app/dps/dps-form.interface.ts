import { Character } from "./models/character";

export interface DpsForm<T = any> {
  enable(): void;
  disable(): void;
  isValid(): boolean;
  sync(character: Character): void;
  getStatus(): T;
}
