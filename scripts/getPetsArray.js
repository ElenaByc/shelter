export function getPetsArray(array) {
	fetch("../../scripts/pets.json")
		.then((response) => {
			return response.json();
		})
		.then((pets) => {
		  pets.forEach((pet, index) => array.push({...pet, id: index}));
		});
}
