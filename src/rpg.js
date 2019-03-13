export class Player {
  constructor(name) {
    this.name = name;
  }

}

class Stats extends Player {
  constructor(strength, knowledge) {
    this.strength = strength;
    this.knowledge = knowledge;
  }
}

class Inventory extends Player {
  constructor(metal, money) {
    this.metal = metal;
    this.money = money;
  }
}

export function timeStart() {
  let day = 1;
  const timer = setInterval(timeUp(), 10000);
  function timeUp() {
    day++;
  }


  var myTimer = setInterval;
  function myTimer() {
    if (day > 0){
    	day++;
    	document.getElementById("timer").innerHTML = day;
      day +=1;
    }
    $("#score-count").text(player.score);
  }


}
