//A. Odd numbers from array

let returnOdd = function(arr) {
	for(let i=0;i<arr.length;i++){
		if(arr[i]%2!== 0){
			console.log(arr[i]);
		}
	}
}
returnOdd([2,4,5,3,7]);
//console.log(returnOdd([2,4,5,3,7]));

//B. Convert all the strings to title caps in a string array
let TitleCase = function(inpString){
    let arr = inpString.split(" ");
    for(let i=0;i<arr.length;i++){
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);    
        }
        return arr.join(' ');
    }
    
console.log(TitleCase("how are you"));


//C. SUM of numbers from array

let SumOfNum = function(arr) {
	let sum = 0;
	for(let i=0;i<arr.length;i++){
		sum += arr[i];
	}
	return sum;
}
console.log("SUM OF Numbers from Array.");
console.log(SumOfNum([2,4,5,3,7]));
//console.log(returnOdd([2,4,5,3,7]));

//D. PRIME numbers from array

let PrimeNum = function(Num){
	let cnt = 0;
	for(let i=2;i<(Num/2);i++){
		if(Num%i == 0){
			cnt++;
		}
	}
	if(cnt >= 1){
		console.log(Num+" Number is not a PRIME Number.");
	}
	else{
		console.log(Num+" Number is a PRIME Number");
	}
}
console.log("Prime Number or NOT");
console.log(PrimeNum(7));


//E. String Palindrome 

let palindrome = function(inpString){
    let mid = parseInt((inpString.length)/2);
    let j = inpString.length-1;
    for(let i=0;i<=mid;i++,j--)
    {
        if(inpString[i] === inpString[j])
        {
            if(i===mid && j===mid)
            {
                console.log(inpString+" String is Palindrome..");
                break;
            }
            continue;
        }
        else
        {
            console.log(inpString+" String is NOT a palindrome..");
            break;
        }
    }
}
console.log(palindrome("nitin"));

//F. Median of two sorted array
const median = function (ar1, ar2, n)
{
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
 
    for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
}

console.log(median([1,2,3,4], [5,6,7,8], 4));

//G. ROTATE Array
const rotateArray = function(arr, k) { 
    return arr.concat(arr).slice(k, k+arr.length)
};
let arr = rotateArray([2,3,4,5], 3);
console.log(arr);

//H. Remove Duplicates

const rmduplicates = function(arr) { 
    for(let i=0;i<arr.length;i++){
        var unique = [];
        for(i=0; i < arr.length; i++){  
            if(unique.indexOf(arr[i]) === -1) {  
                unique.push(arr[i]);  
            }  
        }
        return unique;
    }

    //return arr.concat(arr).slice(k, k+arr.length)
};
let arr = rmduplicates([2,3,6,5,6]);
console.log(arr);

