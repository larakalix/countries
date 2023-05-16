export type ICountry = {
    flags: Flags;
    name: Name;
    currencies: { [key: string]: Currency };
    capital: string[];
    languages: { [key: string]: string };
    flag: string;
    population: number;
    region: string;
    subregion: string;
    independient: boolean;
    tld: string[];
};

export type Currency = {
    name: string;
    symbol: string;
};

export type Flags = {
    png: string;
    svg: string;
    alt: string;
};

export type Name = {
    common: string;
    official: string;
    nativeName: { [key: string]: NativeName };
};

export type NativeName = {
    official: string;
    common: string;
};
