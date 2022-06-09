// export function getPetsArray(callback) {
// 	fetch("../../scripts/pets.json")
// 		.then((response) => {
// 			return response.json();
// 		})
// 		.then((pets) => {
//       const array = [];
// 			pets.forEach((pet, index) => array.push({ ...pet, id: index }));
//       callback(array);  
//     });
// };

export async function fetchPetsJSON() {
	const response = await fetch("../../scripts/pets.json");
	const pets = await response.json();
	return pets.map((pet, index) => ({ ...pet, id: index }));
}
