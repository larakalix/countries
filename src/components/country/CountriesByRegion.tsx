import { Children, useId } from "react";
import type { ICountry } from "../../types/ICountry";
import { Countries } from "./Countries";

export const CountriesByRegion = ({
    region,
    countries,
}: {
    region: string;
    countries: ICountry[];
}) => {
    return (
        <section className="flex items-center justify-center flex-col w-full m-auto md:max-w-5xl lg:max-w-7xl py-8 min-h-screen">
            <h1 className="font-bold text-5xl mb-12 uppercase">{region}</h1>

            <Countries countries={countries} />
        </section>
    );
};
