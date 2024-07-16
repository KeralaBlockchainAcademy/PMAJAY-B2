 //type conversion or coercion
 console.log("20" +5); //205 - string concatenation
 console.log("20" -5); // 15
 console.log("20" *5); //100
 console.log(true +5); //6
 
 console.log(Number("42")); //42
 console.log(Number("hello")); //NaN
 
 console.log(typeof String(123));// "123" 
 console.log(String(true)); //"true"

 console.log(Boolean(0)); //false
 console.log(Boolean('')); //false
 console.log(Boolean("hello")) //true

 console.log(parseInt("15.99")); //15
 console.log(parseInt("hello")); //NaN

 console.log(parseFloat("3.14")); //3.14