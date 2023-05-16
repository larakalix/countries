import { Children } from "react";
import type { ICountry } from "../../types/ICountry";
import { Country } from "./Country";

export const Countries = ({ countries }: { countries: ICountry[] }) => {
    return (
        <section className="flex items-center justify-center flex-col w-full m-auto md:max-w-5xl lg:max-w-7xl px-2 md:px-4">
            <div className=" w-full grid gap-2 md:gap-8 lg:gap-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {Children.toArray(
                    countries.map((country: ICountry) => (
                        <Country country={country} />
                    ))
                )}
            </div>
        </section>
    );
};
