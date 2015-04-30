/*fff
* Practice using `prompt`, `confirm`, and `alert` try the following. You may want to look them up on **MDN**.
  * Ask the user for the their `firstName`. Then `alert` it.
   Ask the `user` `"have we met before?"`. If `true` then respond `"nice to meet you"`.
 */

//prompt
var firstName = prompt("What is your firstName?");
alert(firstName);

//met?
var met = confirm("Have we met before?");
if (met){
	console.log("nice meet you again")
}else{
	console.log("HI")
}

//Get the temperature from the user and alert it back in Celsius.
//Deduct 32, then multiply by 5, then divide by 9
var  fahrenheit = prompt("What is the temp?");
celsius = ((fahrenheit - 32) * 5 ) / 9
alert(celsius);

/* Confirm if a user has three friends? 
Use a loop and `prompt` to collect the names of the `friends`. Alert back the names of the `friends`.
*/


var friends = confirm("Do you have friends?");
var arrayNames = [];
if (friends){
	for(i = 0; i < 3; ++i){
		arrayNames[i] = prompt("Enter a name")
	}
}
alert(arrayNames);

//Prompt the user to give a word. Then alert back the number of vowels.
var word = prompt("Give a word");
alert(word.match(/[aeiouAEIOU]/g));


/*
* Write a loop to solve the following riddle. 
I am a number between `2` and `100`. I am even and a multiple of 3. 
I end in `2`. My digits sum to `9`.
*/

for (var i = 2; i <= 100; ++i){
	if(i % 3 === 0 && i % 2 === 0){
		if (i.toString()[1]==="2"){
			if (parseInt(i.toString()[1]) + parseInt(i.toString()[0]) === 9){
				console.log(i)
			}

		}
	}
}

/*
* Hard: Generate a random number between 1 and 100, an integer and not a float. Prompt the user to guess the number. 
Continue prompting the user for a guess using a loop, telling them each time if the number is lower or higher. 
*/


var rand = Math.floor((Math.random() * 100) + 1)
var rand = 20; //for faster testing
guess = prompt("Guess what number?");

while (guess != rand){
	if (rand < guess){
		guess = prompt("Too High");
	}else if(rand > guess){
		guess = prompt("Too Low");
	}else{
		console.log("They match!")
	}
}

// * Super Challenge: Given an array of friends
// write a loop to alert them in some random order. 
//VERY DIIFICULT

var friends = [
                  "larry",
                  "moe",
                  "curly",
                  "huey",
                  "louie",
                  "dewey"
                  ];

var rand = Math.floor((Math.random() * 5) + 1)

for (var i = friends.length - 1; i >= 0; i--) {
	friends[i]
};





 





























