//bind returns a function
this.count = 2;
function some(){
	console.log('count: ', this.count)
}
some()
newSome = some.bind( {count:3} )
newSome()
some()

//call takes object as an argument
this.count = 2;
function some(){
	console.log('count: ', this.count)
}
some()
some.call( {count:3} )
some()

//apply takes both object and array as an argument
this.count = 2;
function some(){
	console.log('count: ', this.count)
}
some()
some.apply( {count:3} )
some()
