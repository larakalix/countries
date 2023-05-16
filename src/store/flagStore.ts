import { atom } from "nanostores";
import type { ICountry } from "../types/ICountry";

export const countriesStore = atom<ICountry[]>([]);

export const setFlagStore = (countries: ICountry[]) => {
    countriesStore.set(countries);
};
