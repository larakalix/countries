import type { ICountry } from "../types/ICountry";

const URI = "https://restcountries.com/v3.1";
const FIELDS =
    "fields=name,flags,flag,population,capital,currencies,languages,region";

export const getCountries = async (): Promise<ICountry[]> => {
    return (await fetch(`${URI}/all?${FIELDS}`).then((res) =>
        res.json()
    )) as ICountry[];
};

export const getCountriesByName = async (
    name?: string,
    fullText: boolean = true
): Promise<ICountry[]> => {
    try {
        if (!name) return [];

        const data = (await fetch(
            `${URI}/name/${name.toLowerCase()}?${FIELDS},subregion,tld?fullText=${fullText}`
        ).then((res) => res.json())) as ICountry[];

        return data || null;
    } catch (error) {
        return [];
    }
};

export const getCountry = async (
    name?: string,
    fullText: boolean = true
): Promise<ICountry | null> => {
    try {
        if (!name) return {} as ICountry;

        const data = (await fetch(
            `${URI}/name/${name.toLowerCase()}?${FIELDS},subregion,tld?fullText=${fullText}`
        ).then((res) => res.json())) as ICountry[];

        return data[0] || null;
    } catch (error) {
        return null;
    }
};

export const getCountriesByRegion = async (
    region?: string
): Promise<ICountry[]> => {
    if (!region) return [];

    return (await fetch(`${URI}/region/${region}?${FIELDS}`).then((res) =>
        res.json()
    )) as ICountry[];
};
