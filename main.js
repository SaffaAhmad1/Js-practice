// Program 1
for (let year = 2014; year <= 2050; year++)
    {
    let a = new Date(year, 0, 1);
    if ( a.getDay() === 0 )
    console.log("1st January is being a Sunday  "+year);
    }

    console.log("------------------------------");

    // Program 2
    
    let today = new Date();
    let christmas =  new Date(today.getFullYear(), 11, 25);
    let dayMilliseconds = 1000 * 60 * 60 * 24;
    let daysLeft = Math.ceil( (christmas.getTime() - today.getTime()) /(dayMilliseconds) );
    console.log("There are " + daysLeft +" days left until Christmas.");

    console.log("------------------------------");

    // Program 3

    function checkNumber(x) {
        return ((Math.abs(100 - x) <= 20) || (Math.abs(400 - x) <= 20));
      }

      console.log(checkNumber(95));
      console.log(checkNumber(150));
      console.log(checkNumber(85));
      console.log(checkNumber(200));


      console.log("------------------------------");

      // Program 4

      function largestNumber(num1, num2, num3){
          if(num1 >= num2 && num1 >= num3){
              return num1;
          }
          else if(num2 > num1 && num2 > num3){
            return num2;
        }
        else{
            return num3;
        }
      }

      console.log("The largest number is " +largestNumber(30,40,15));
      console.log("The largest number is " +largestNumber(357,775,500));
      console.log("The largest number is " +largestNumber(-2,-5,-10));



      console.log("------------------------------");

      // Program 5

      function capital(words) {
          words = words.split(" ");

          for (let i = 0; i < words.length; i++) {
           words[i] = words[i][0].toUpperCase() + words[i].substring(1);
          }
        return words.join(" ");
     }
     console.log(capital("my name is safa"));


     console.log("------------------------------");

      // Program 6


      function withoutFristLast(Str) {
        return Str.substring(1, Str.length-1);

      }
      console.log(withoutFristLast("I live in Cairo"));

      console.log("------------------------------");

      // Program 7

      function rotate(array){
        return [array[1], array[2], array[0]];
}
console.log(rotate([4,5,6]));


console.log("------------------------------");

      // Program 8

function firstLastQual(array){
    let end = array.length - 1;
    if (array.length >= 1){
       return array[0] === array[end];
    } else return false;
}

console.log(firstLastQual(["10",30,"10"]));
console.log(firstLastQual([10,30,10]));
console.log(firstLastQual([20,30,10]));
console.log(firstLastQual([10,30,"10"]));