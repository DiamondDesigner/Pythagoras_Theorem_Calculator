// gets the button and calls a function to calculate the opposite
document.getElementById('calculate-opposite').onclick = function () {
    // gets user input
   let hypothenuse = document.getElementById('opposite-hypothenuse').value;
   let adjacent = document.getElementById('opposite-adjacent').value;
    // square values
   let hypothenuseSquared = hypothenuse * hypothenuse;
   let adjacentSquared = adjacent * adjacent;
    // subtract adjacent^2 from hypothenuse^3
   let resultSquared = hypothenuseSquared - adjacentSquared;
    // finds the square root
   let result = Math.sqrt(resultSquared);
// displays the result
document.getElementById('opposite-result').innerHTML = result;

}

// gets the button and calls a function to calculate the adjacent
document.getElementById('calculate-adjacent').onclick = function () {
    // gets user input
   let hypothenuse2 = document.getElementById('adjacent-hypothenuse').value;
   let opposite2 = document.getElementById('adjacent-opposite').value;
    // square values
   let hypothenuseSquared2 = hypothenuse2 * hypothenuse2;
   let oppositeSquared2 = opposite2 * opposite2;
    // subtract opposite^2 from hypothenuse^3
   let resultSquared2 = hypothenuseSquared2 - oppositeSquared2;
    // finds the square root
   let result2 = Math.sqrt(resultSquared2);
// displays the result
document.getElementById('adjacent-result').innerHTML = result2;
}

// gets the button and calls a funtion to calculate the hypothenuse
document.getElementById('calculate-hypothenuse').onclick = function () {
     // gets user input
    let opposite3 = document.getElementById('hypothenuse-opposite').value;
    let adjacent3 = document.getElementById('hypothenuse-adjacent').value;
     // square values
    let oppositeSquared3 = opposite3 * opposite3;
    let adjacentSquared3 = adjacent3 * adjacent3;
     // add opposite^2 and adjacent^2
    let resultSquared3 = oppositeSquared3 + adjacentSquared3;
     // finds the square root
    let result3 = Math.sqrt(resultSquared3);
document.getElementById('hypothenuse-result').innerHTML = result3;
}

