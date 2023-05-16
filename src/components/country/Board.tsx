import { ChangeEvent, MouseEvent, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Countries } from "./Countries";
import { getCountriesByName } from "../../logic/getCountries";

import type { ICountry } from "../../types/ICountry";

export const Board = ({ countries }: { countries: ICountry[] }) => {
    const [state, setState] = useState<ICountry[]>(countries);
    const [search, setSearch] = useState("");

    const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        try {
            if (!search) return;

            const response = await getCountriesByName(search, false);
            setState(response);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    return (
        <>
            <section className="w-full m-auto md:max-w-5xl lg:max-w-7xl py-12 px-2 md:px-4">
                <div className="w-full flex items-center justify-between">
                    <div className="relative flex items-center w-full md:w-[400px]">
                        <button
                            className="mr-5 absolute left-6"
                            onClick={handleSubmit}
                        >
                            <BsSearch />
                        </button>
                        <input
                            type="text"
                            name="search"
                            id="name"
                            value={search}
                            placeholder="Search for a country"
                            className="w-full flex items-center pl-16 py-5 px-8 font-light text-sm bg-white rounded-md shadow-md focus:outline-0"
                            onChange={handleInputChange}
                        />
                    </div>
                    {/* <div>
                        <select>
                            <option>Filter by Region</option>
                            <option value="Africa">Africa</option>
                            <option value="America">America</option>
                            <option value="Asia">Asia</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                        </select>
                    </div> */}
                </div>
            </section>

            <Countries countries={state} />
        </>
    );
};
