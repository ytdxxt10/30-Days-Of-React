const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
];

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
];

const temp1 = [];
const temp2 = Array(6).fill(0);
temp2.length;
console.log(temp2);

const firstItem = temp2.shift();
const middleItem = temp2[2];
const lastItem = temp2.pop();

const mixedDataTypes = ['hello', 4, 9, 1, [2, 3], { key: 3 }];
console.log(mixedDataTypes, mixedDataTypes.length);

const itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon',
];
console.log(
  itCompanies,
  itCompanies[0],
  itCompanies[3],
  itCompanies[itCompanies.length - 1],
);

console.log(itCompanies[0].toUpperCase());
