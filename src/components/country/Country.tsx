import { useId } from "react";
import type { ICountry } from "../../types/ICountry";

export const Country = ({ country }: { country: ICountry }) => {
    const id = useId();
    const route = country.name.official.toLowerCase();

    return (
        <a
            id={id}
            href={`/country/${route}`}
            className="bg-white shadow-md flex justify-start items-center flex-col gap-6 h-auto rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-75"
        >
            <figure className="w-full overflow-hidden h-[160px]">
                <img
                    className="w-full h-full object-cover"
                    src={country.flags.svg}
                    alt={country.flags.alt}
                    loading="lazy"
                />
            </figure>

            <header className="w-full pb-4 px-6">
                <h1 className="font-bold text-md mb-6">
                    {country.name.official}
                </h1>

                <ul className="[&>li]:font-light [&>li]:text-sm [&>li>span]:mr-1">
                    <li>
                        <span className="font-semibold">Population:</span>
                        {country.population}
                    </li>
                    <li>
                        <span className="font-semibold">Region:</span>
                        {country.region}
                    </li>
                    <li>
                        <span className="font-semibold">Capital:</span>
                        {country.capital}
                    </li>
                </ul>
            </header>
        </a>
    );
};
