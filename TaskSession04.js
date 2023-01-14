// Problem No.1: TWO JSONs 

var obj1 = { name: "Person1", age:"5" };
var obj2 = { age:"5", name: "Person1" };

//console.log(Object.entries(obj1).toString() === Object.entries(obj2).toString());
let keyobj1 = Object.keys(obj1);
let keyobj2 = Object.keys(obj2);

let valobj1 = Object.values(obj1);
let valobj2 = Object.values(obj2);

let flagkey = false;
let flagvalue = false;
let cntkey = 0;
let cntval = 0;

for(let i =0;i<keyobj2.length;i++){
	for(const keys in obj1){
		console.log(keyobj2[i] , keys);
		if(keyobj2[i] === keys){
			flagkey = true;
			cntkey++;
			break;
		}
		if(flagkey = false){
			break;
		}
	}
}

for(let i =0;i<valobj2.length;i++){
	for(const keys in obj1){
		console.log(valobj2[i] , obj1[keys]);
		if(valobj2[i] === obj1[keys]){
			flagvalue = true;
			cntval++;
			break;
		}
		if(flagvalue = false){
			break;
		}
	}
}
//console.log("cntval :"+cntval);
if( (cntkey === keyobj1.length) && ( cntval === keyobj1.length ) && (cntkey === keyobj2.length) && ( cntval === keyobj2.length )){
	console.log("JSON Matched true")
}
console.log(flagkey);
console.log(flagvalue);


// To display all the country flags

const request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v3.1/all');
request.onload = function (){
    let s = JSON.parse(request.response);
    let arr = [];
    for(let index=0;index<s.length;index++){
		let reg = [];
		const {region, flag} = s[index];
		console.log('region:', region, 'flags:', flag );
    }
    console.log(request.status);  	  
};

request.onerror = function (){
    console.log(request.response);
    console.log(request.status);        
};
request.send();


// To display REGION, SUBREGION and POPULATIONS
const request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v3.1/all');
request.onload = function (){
    let s = JSON.parse(request.response);
    let arr = [];
    for(let index=0;index<s.length;index++){
		let reg = [];
		const {region, subregion, population} = s[index];
		console.log('region:', region, 'subregion:', subregion, 'population:', population );
    }
    console.log(request.status);  	  
};

request.onerror = function (){
    console.log(request.response);
    console.log(request.status);        
};
request.send();