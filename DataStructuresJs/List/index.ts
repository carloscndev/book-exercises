import List from "./List.ts";

let names = new List<string>();

names.append('Carlos');
names.append('Fatima');

console.log(names.toString())