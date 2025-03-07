const exp = require("constants");

//give another function as an argument and call it inside the function
//const spy =chai.spy();
//receives function (spy) as an argument
//expect(spy).to.have.been.called();
function receivesAFunction(callback){
    callback();// calls the function that was passed in

}
//returns a named function
function returnsANamedFunction(){
    return function namedFunction(){//named function
        console.log("I am a named function");

    };
}
//returns an anonymous function
function returnsAnAnonymousFunction(){
    return function(){
        console.log("I am an anonymous function");
    };
}