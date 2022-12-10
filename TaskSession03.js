let resume = {
	name : {
			firstName : "Kishor" ,
			middleName : "Suresh" ,
			lastName : "Pawar"
			},
	qualification : "BE Computer Science" ,
	experience : 3 ,
	currentOrganization : "bb Softwares" ,
	address : {
				permanentAddr : {
									street : "MG Road",
									District : "North",
									state	: "Goa"
								},
				tempAddr : {
								street : "MG Road",
								District : "North",
								state	: "Goa"
							}
				}
}

console.log(resume);

// NOTE : forEach , for of and for loop will not work for object

for (const i in resume ) {
	if( i === "name"){
		let nameobj = resume[i];
		for (const j in nameobj){
			console.log(`${j}: ${nameobj[j]}`);
		}
	}
	else if( i === "address"){
		let addobj = resume[i];
		for (const j in addobj){
			if( j === "permanentAddr")
			{	
				console.log("Permanent Address :");
				let pmobje = addobj[j]
				for(const k in pmobje){
					console.log(`${k}: ${pmobje[k]}`);
				}
			}
			else if( j === "tempAddr"){
				console.log("Temporary Address :");
				let tempobj = addobj[j];
				for(const k in tempobj){
					console.log(`${k}: ${tempobj[k]}`)
				}
			}	
		}
	}
	else{
		console.log(`${i}: ${resume[i]}`);
	}
}

/*
************** Window - Screen - Object *******************

window is the main JavaScript object root, aka the global object in a browser, 
and it can also be treated as the root of the document object model. You can access it as window.

window.screen or just screen is a small information object about physical screen dimensions.

window.document or just document is the main object of the potentially visible 
(or better yet: rendered) document object model/DOM.

Since window is the global object, you can reference any properties of it with 
just the property name - so you do not have to write down window. - it will be figured out by the runtime.

*/