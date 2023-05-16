export const CountryNotFound = ({ name }: { name: string }) => {
    return (
        <div className="bg-white flex flex-col items-center justify-center mt-20 py-24 px-12 rounded-md border mx-10 min-h-[80vh]">
            <h1 className="text-4xl font-bold text-center uppercase">
                {name} is not a country.
            </h1>

            <p className="text-xl text-center">
                Try searching for a country instead.
            </p>
        </div>
    );
};
