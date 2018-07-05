var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];
var sorter = function(a,b,fnc) {
  a.sort(function(a,b){
  if (a.name === b.name) {//if age is same
   return a.age < b.age;
  }
  return a.name > b.name;//
  fnc();
})}
sorter(students);
console.log(students)