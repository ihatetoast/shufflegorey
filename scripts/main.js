$(document).ready(() => {
	//fisher-yates shuffle prototype
	Array.prototype.shuffle = function(){
		var index = this.length, randomIndex, temp;
		// console.log("I'm here.");
		while(--index > 0) {
			//get the random number
			randomIndex = Math.floor(Math.random() * (index+1));
			//assign the random number to temp holder
			temp = this[randomIndex];
			//the swapping:
			this[randomIndex] = this[index];
			this[index] = temp;
		}
		return this;
	}
	let version = 0;
	$("#helpless").click(() => {
		$("#shuffledStory").html("")
		let newStory = goreyArray.shuffle().join('');
		version +=1;	
		$("#shuffledStory").prepend(`
			<div class="shuffledStory">
			<h3>The Helpless Doorknob, v${version}</h3>
			<p class="story">${newStory}</p>
			</div>
			`);
	});
	$("#clear").click(() =>{
		$("#shuffledStory").html(`<img  class="image" src="http://ep.yimg.com/ay/pomegranate/the-helpless-doorknob-a-shuffled-story-by-edward-gorey-125.jpg" >`);
	})
	
})