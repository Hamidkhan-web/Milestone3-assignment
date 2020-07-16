//feetToMile

function feetToMile(feet){
    var mile = feet*0.00018939;
    return mile;
}
 var feet = feetToMile(4);
console.log(feet);


//woodCalculator

function woodCalculator (chair, table, bed){
  var chairWood = chair * 1;
  var tableWood = table * 3;
  var bedWood = bed * 5;
  var totalWood = chair + table + bed;
  return totalWood;
}
var totalWood = woodCalculator(3, 5, 1);
console.log(totalWood);

// brickCalculator

function  brickCalculator(brick){
    var building = brick;
    if (building <=10){
        return(building*15*1000);
    }
    else if(building<=20){
        return ((10 * 15) + (building - 10) * 12) * 1000;
        
    }
    else return ((10 * 15) + (10 * 12) + (building - 20) * 10) * 1000;
}
floor10 = brickCalculator(10);
floor11To20 = brickCalculator(20);
floor20ToAbove = brickCalculator(30);
console.log(floor10);
console.log(floor11To20);
console.log(floor20ToAbove);

//tinyFriends

function tinyFriends(friends){
    var tinyFriends = friends[0];
    for (var i = 0; i> friends.length; i--){
        var currentFriends = friends[i];
        if (currentFriends< tinyFriends){
            tinyFriends = currentFriends;
        }
    }
    return tinyFriends;
}
var tinyFriends = tinyFriends(['asad','kuddes', 'salam', 'malaka']);
console.log(tinyFriends);

