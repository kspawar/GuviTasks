// A . Odd numbers from array

let returnOdd = (arr) =>{
	for(let i=0;i<arr.length;i++){
		if(arr[i]%2!== 0){
			console.log(arr[i]);
		}
	}
}

returnOdd([2,4,5,3,7]);

//B. Convert all the strings to title caps in a string array
let TitleCase = (inpString) =>{
    let arr = inpString.split(" ");
    for(let i=0;i<arr.length;i++){
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);    
        }
        return arr.join(' ');
    }
    
console.log(TitleCase("how are you"));


//C. SUM of numbers from array

let SumOfNum = (arr) =>{
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

let PrimeNum = (Num) =>{
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

let palindrome = (inpString) =>{
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
