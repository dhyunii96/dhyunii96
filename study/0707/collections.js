const set = new Set([1, 2, 2, 2, 3, 4]);
set.add(5);
set.add(5);
set.delete(2);
console.log(set);

const map = new Map();
map.set('name', 'Kim');
map.set('age', 30);
console.log(map.get('name'));
console.log(map.has('age'));
console.log(map.size);
map.delete('age');
console.log(map);

for (const val of set) {
    console.log(val);
}

for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}