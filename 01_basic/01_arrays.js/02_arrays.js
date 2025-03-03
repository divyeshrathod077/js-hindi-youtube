const marvel_heros=["thor","ironman","spiderman"]
const da_heros=["superman","flsh","batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

marvel_heros.concat(da_heros)
console.log(marvel_heros);

const all_new_heros =[...marvel_heros,...dc_heros]
console.log(all_new_heros);
