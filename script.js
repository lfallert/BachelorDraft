const input = require('readline-sync');
const data = require('./contestants.json');

let katiesGuys = ["Aaron", "Andrew M.", "Andrew S.", "Austin", "Brandon", "Brendan", "Christian", "Cody", "Connor B.", "Conor C.", "David", "Gabriel", "Garrett", "Greg", "Hunter", "James", "Jeff", "John", "Josh", "Justin", "Karl", "Kyle", "Landon", "Marcus"]


// creates an instance of bachelorDraft that will eventually be an empty array
let bachelorDraft;

class DraftPicks {
    constructor (name, picks = []) {
        this.name = name;
        this.picks = picks;
    }
    printPicks() { 
        return `${this.name}'s Picks: ${this.picks}`
    }

    getScore(array) {
        let score = 0;
        for (let i=0;i<array.length;i++) {
            for (let j=0;j<bachelorDraft[i].picks.length;j++) {
                if(array[i].includes(bachelorDraft[i].picks[j])){
                    score = score + 1
                }
            }
        }
        return score;
    }
}



// createDraft creates an array of participants instances from the DraftPicks class
function createDraft() {
    bachelorDraft = [];
    console.log(`Welcome to 'Best League Ever.' The Greatest Bachelorette Fantasy League You Can Find on the Internet!\nPlease begin by entering the names of the league participants.\n\nEnter 'Done' when all participants have been added.\n`);

    let addParticipants = true;

    while (addParticipants) {
        let participantName = input.question("Enter participant name or 'Done' to stop:\n");
        user = new DraftPicks (participantName);
        bachelorDraft.push(user);

        if (participantName.toLowerCase() === "done") {
            addParticipants = false;
            bachelorDraft.splice(bachelorDraft.length-1);
        }
        
    }
    return bachelorDraft

}


//create Roster asks each participant instancefor roster selection and add its to their picks array

// Can I do a nested do while loop in a for loop where the do would stop once the bachelor draft participant's team has 5 guys?

function createRoster () {
    for (let i=0;i<bachelorDraft.length;i++) {

        let selection = input.question(`${bachelorDraft[i].name}, who is your pick? `);
            
        if (katiesGuys.includes(selection)) {
            bachelorDraft[i].picks.push(selection);

            // Code below if you don't want anyone else to choose that bachelor contestant
            //katiesGuys.splice(katiesGuys.indexOf(selection), 1);
        }
        
        if (!katiesGuys.includes(selection)) {
            newSelection = input.question( `${selection} is not an option or is already in your roster. Please select a different contestant.`)
            bachelorDraft[i].picks.push(newSelection);
            }
            
    }
}



// getScore takes an array of winners argument, and compares it to each participant instances' picks and returns a score, should this be a method of the instance class?



createDraft();
createRoster();

console.log(bachelorDraft)
console.log(bachelorDraft[0].printPicks());

winners = ["Aaron"]

bachelorDraft[0].getScore(winners);
bachelorDraft[1].getScore(winners);








