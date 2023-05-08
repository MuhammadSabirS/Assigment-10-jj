// 1. Write a js program to find cube of any number using function.
//  function cube()

let x = 3 ;
let cube = x*x*x;
console.log(cube);

// 3. Write a js program to find maximum and minimum between two numbers using functions.
 function comperision()

{
    let a = 10;
    let b= 5;
    if(a > b){
        console.log(" the number of a =", a, " is greater then the number of b =", b);
    }
    else{
        console.log(" the number of b =", b, " is greater then the number of a =", a);
    }

}
console.log(comperision());

// 4. Write a js program to check whether a number is even or odd using functions.
function checknum()
{
    let c =16;
    if(c%2==0)
    {
        console.log("the number ", c, "is even");
    }
    else
    {
        console.log("the number ", c, "is odd");
    }
}
console.log(checknum());


// 9. Write a js program to print all perfect numbers between given interval using functions.
console.log("find perfect number");
let num = prompt("Plz enter a number for check it is perfect or not")
function is_perfect(number)
{
var temp = 0;
   for(var i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === number && temp !== 0)
        {
       console.log("It is a perfect number.");
        } 
     else
        {
       console.log("It is not a perfect number.");
        }   
 } 
is_perfect(num);

// 10. Write a js program to find power of any number using function.
function power()
{
    let d = prompt(" plz enter a number ");
    let e= d*d;
    return e;
}
console.log(power());

// 11. Write a js program to print all natural numbers between 1 to n using function.
function naturalnum()
{
    let f = 10;
    console.log("the natural number 1 to n is");
    for (i = 1; i <= f; i++) {
    console.log( i);
        
    }
}
console.log(naturalnum());


//12. Write a js program to print all even or odd numbers in given range using function.
function evenodd()
{
    let g = 20;
    
        console.log("The even number is");
        for(i=1;i<=g;i++)
        {
            
            if(i%2==0)
            {
                console.log(i)
                

            }
        }
        console.log("The Odd number is");
        for(i=1;i<=g;i++)
        {
            
            if(i%2==1)
            {
                console.log(i)
                

            }
        }
        
    
}
console.log(evenodd());

// 13. Write a js program to find sum of all natural numbers between 1 to n using function.
function sumofallnatural()
{
   let sum = 0;
   let h = 10;
   console.log("The sum of nutural number 1-to 10 is");
   for( i=1 ; i <=h ; i++)

   {
    sum += i;
   }
   return sum;
}
console.log(sumofallnatural());


// 14. Write a js program to find sum of all even or odd numbers in given range using function.
function evenodd()
{
    let j = 20;
    let total ;
    
        console.log("The total of even number is");
        for(i=1;i<=j;i++)
        {
            
            if(i%2==0)
            {
                total += i;
            }
           
        }
                console.log("The Odd number is");
        for(i=1;i<=j;i++)
        {
            
            if(i%2==1)
            {
                console.log(i)
                

            }
        }
        return total;
        
    
}
console.log(evenodd());


// 15. Write a js program to find reverse of any number using function.
console.log("The array before reverse ");
let k = [2,5,6,-7,8,1-1,15,3,2,0,1]
console.log(k);
console.log("The array after reverse ");
let l = k.reverse();
console.log(l);

// 16. Write a js program to check whether a number is palindrome or not using function.

function Palnum()
			{
				var rem, temp, final = 0;
				var number = prompt("plz enter number");

				temp = number;
				while(number>0)
				{
					rem = number%10;
					number = parseInt(number/10);
					final = final*10+rem;
				}
				if(final==temp)
				{
					console.log("number is Palindrome");
				}
				else
				{
					console.log("number is not palindrome");
				}
			}
            console.log(Palnum());

 // 17. Write a js program to find sum of digits of a given number using function.

var value = 2568,
sum = 0;
console.log("the sum of dight is" , value);

while (value) {
sum += value % 10;
value = Math.floor(value / 10);
}

console.log(sum);

// 18. Write a js program to find factorial of any number using function.
let range = prompt("Plz enter the factorial range");
console.log("The factorial of 1 to", range);
let fact =1;
for(i=1; i<=range;i++)
{
 fact *= i;
 
}
console.log(fact);

// 19. Write a js program to generate nth Fibonacci term using function.

console.log("The Fabonacci series is");
var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonacci_series(8));

 // 20. Write a js program to find GCD (HCF) of two numbers using function.

let hcf;
const number1 = prompt('Enter a first positive integer: ');
const number2 = prompt('Enter a second positive integer: ');


for (let i = 1; i <= number1 && i <= number2; i++) {

  
    if( number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    }
}


console.log("HCF of" ,number1 , "and", number2, "is", hcf);

// 21. Write a js program to find LCM of two numbers using function.
console.log("The lcm of two number is");
const num1 = 4;
const num2 = 6;
const findLCM = (num1, num2) => {
   let hcf;
   for (let i = 1; i <= num1 && i <= num2; i++) {
      if( num1 % i == 0 && num2 % i == 0) {
         hcf = i;
      };
   };
   let lcm = (num1 * num2) / hcf;
   return lcm;
};
console.log(findLCM(num1, num2));


// 22. Write a js program to display all array elements using function.
console.log("The element og array given below");
let color = ["red","blue", "pink","gold","black"];
for( i=0 ; i< color.length; i++)
{
    console.log(color[i]);
}


// 23. Write a js program to find sum of elements of array using function.

let array = [2,5,14,15,25,4,6,2,1];
let total = 0;
console.log("The sum of element of array", array);
for(i=0; i< array.length; i++)
{
    total += array[i];
}

console.log(total);


// 24. Write a js program to find maximum and minimum elements in array using function.
let array1 = [2,5,14,15,25,4,6,2,1];
console.log("In this given array", array1);
console.log("the maxcimum number of array is", Math.max(...array1));
console.log("In this given array", array1);
console.log("the minimum number of array is", Math.min(...array1));