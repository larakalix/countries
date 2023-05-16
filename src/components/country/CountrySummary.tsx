import type { ICountry } from "../../types/ICountry";

export const CountrySummary = ({ country }: { country: ICountry }) => {
    return (
        <div className="grid grid-cols-2 gap-y-4 gap-x-20 [&>p]:font-light [&>p>span]:mr-[6px]">
            <p>
                <span className="font-semibold">Native Name:</span>
                {country.name.common}
            </p>
            <p>
                <span className="font-semibold">Population:</span>
                {Intl.NumberFormat("en-US").format(country.population)}
            </p>
            <p>
                <span className="font-semibold">Currencies:</span>
                {Object.values(country.currencies)
                    .map((currency) => currency.name)
                    .join(", ")}
            </p>
            <p>
                <span className="font-semibold">Region:</span>
                {country.region}
            </p>
            <p>
                <span className="font-semibold">Languages:</span>
                {Object.values(country.languages).join(", ")}
            </p>
            <p>
                <span className="font-semibold">Subregion:</span>
                {country.subregion}
            </p>
            <p>
                <span className="font-semibold">Capital</span>
                {country.capital}
            </p>
        </div>
    );
};
