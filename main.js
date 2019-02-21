const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  // forEach

companies.forEach( company => {
    console.log(company.name);
});

  // filter 21 and older

//   let canDrink = [];

//   for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
//   }

//   const canDrink = ages.filter(age => {
//     if(age >= 21) {
//         return true;
//     }
//   })

const canDrink = ages.filter(age => age >= 21);

  // filter retail companies
  
//   const retailCompanies = companies.filter(function(company) {
//       if(company.category === 'Retail') {
//           return true;
//       }
//   });

const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies);

    // filter 80's companies

const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
console.log(eightiesCompanies);

    // filter companies that lasted 10 years or more

const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
console.log(lastedTenYears);

    // map
    // Create array of company names
const companyNames = companies.map(company => company.name);
console.log(companyNames);

const agesSquare = ages.map(age => Math.sqrt(age));
console.log(agesSquare);

const agesTimesTwo = ages.map(age => age * 2);
console.log(agesTimesTwo);

const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);
console.log(ageMap);

    // sort

    //sort companies by start year

// const sortedCompanies = companies.sort(function(c1, c2) {
//     if(c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1)); // Using ternary operator: state condition, ? means if condition is true, return statement after ?. : means else, return value after :

console.log(sortedCompanies);

    // sort ages

const sortAges = ages.sort((a, b ) => a - b);
console.log(sortAges);

    // reduce

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//     ageSum +- ages[i];
// };

// const ageSum = ages.reduce(function(total, age) {
//     return total + age;
// }, 0);

const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);