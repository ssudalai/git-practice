//a.Get all the countries from Asia continent /region using Filter function

const asiaCountries = data.filter(country => country.continents.includes("Asia"));

console.log(asiaCountries);

//b.Get all the countries with a population of less than 2 lakhs using Filter function
const countriesWithLessPopulation = data.filter(country => country.population < 200000);

console.log(countriesWithLessPopulation);

//c.Print the following details name, capital, flag, using forEach function
data.forEach(country => {
    console.log("Name:", country.name.common);
    console.log("Capital:", country.capital[0]);
    console.log("Flag:", country.flags.svg); 
    console.log("--------------------------");
});

//d Print the total population of countries using reduce function


const countries = [
    {
        "name": {
            "common": "Sri Lanka",
            ...
        },
        ...
    },
    {
        "name": {
            "common": "Hong Kong",
            ...
        },
        ...
    }
];

const totalPopulation = countries.reduce((total, country) => total + country.population, 0);

console.log("Total population of countries:", totalPopulation);




