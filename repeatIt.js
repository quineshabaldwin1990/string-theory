function repeatIt(str, n) {
	let output = "";

	for (let i = 0; i < n; i++) {
		output = output + str;
	}
	return output;
}

console.log("\nrepeatIt function:");
console.log(repeatIt("beetlejuice", 3));
console.log(repeatIt("oh hi!", 8));