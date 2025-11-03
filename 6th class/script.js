const companies = [
  { name: "Company One", category: "Tech", start: 1981, end: 2000 },
  { name: "Company Two", category: "Finance", start: 1990, end: 2005 },
  { name: "Company Three", category: "Tech", start: 2000, end: 2010 },
  { name: "Company Four", category: "Health", start: 1985, end: 1995 },
  { name: "Company Five", category: "Tech", start: 2010, end: 2020 },
  { name: "Company Six", category: "Finance", start: 2000, end: 2015 },
  { name: "Company Seven", category: "Health", start: 1995, end: 2005 },
  { name: "Company Eight", category: "Tech", start: 2015, end: 2023 },
  { name: "Company Nine", category: "Finance", start: 1980, end: 1990 },
];
const ages = [32, 45, 29, 40, 50, 38, 60, 25, 33, 27, 41, 39, 31, 46, 44, 37];

// for loop
// {
//   for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i].name);
//   }
// }

// forEach
// {
//   companies.forEach(function (company) {
//     console.log(company.name);
//   });
// }

// const Godini = ages.forEach(function (age) {
//   if (age >= 21) {
//     console.log(`${age}`);
//   }
// });

// console.log(Godini);

// filter

// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// console.log(canDrink);

// const canDrink = ages.filter(function (age) {
//   if (age >= 21) {
//     return true;
//   }
// });
// console.log(canDrink);

// const canDrink = ages.filter((age) => age >= 21);

// console.log(canDrink);

// const retailCoompanies = companies.filter(function (company) {
//   if (company.category === "Tech") {
//     return true;
//   }
// });
// console.log(retailCoompanies);

// const retailCoompanies = companies.filter(
//   (company) => company.category === "Tech"
// );

// console.log(retailCoompanies);

// get 80s companies
// const eightiesCompanies = companies.filter(function (company) {
//   if (company.start >= 1980 && company.end < 2000) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(eightiesCompanies);

// const eightiesCompanies = companies.filter(
//   (company) => company.start >= 1980 && company.end < 1990
// );
// console.log(eightiesCompanies);

// get companies that lasted 10 years or more

// const lastedTenYears = companies.filter(
//   (company) => company.end - company.start >= 15
// );
// console.log(lastedTenYears);
// 14m

// map

// create array of company names

// const companyNames = companies.map(function (company) {
//   return company.name;
// });

// const test = companies.map(function (company) {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });

// const testMap = companies.map(
//   (company) => `${company.name} [${company.start} - ${company.end}]`
// );
// console.log(testMap);

// const agesSquare = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
// console.log(agesSquare);

// sort
// const sortedCompanies = companies.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// console.log(sortedCompanies);

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// console.log(sortedCompanies);

// // sort ages

// const sortAges = ages.sort((a, b) => a - b);

// console.log(sortAges);

// reduce

// let ageSum = 0;

// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce(function (total, age) {
//   return total + age;
// }, 0);

// const ageSum = ages.reduce((total, age) => total + age, 0);

// console.log(ageSum);

// gettotal years for all companies

// const totalYears = companies.reduce(function (total, company) {
//   return total + company.end - company.start;
// }, 0);

// console.log(totalYears);

// const totalYearsArrow = companies.reduce(
//   (total, company) => total + company.end - company.start,
//   0
// );

// console.log(totalYearsArrow);

// combine methods

const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 80)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);

// da naprajme nasa niza i da si vezbame sami so nasa niza ili external api
