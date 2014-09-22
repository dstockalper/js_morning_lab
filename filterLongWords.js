var arrOfWords = ["giraffe", "precambrian", "unfortunately", "easy", "pry", "web", "development"];
maxLength = 8;

newArr = []

for(var i = 0; i<arrOfWords.length; i++) {
	if(arrOfWords[i].length < maxLength) {
		newArr.push(arrOfWords[i]);
	}
}

console.log(newArr);