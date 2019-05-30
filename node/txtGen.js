//js file to work on implementing generative text into twitter bot
//Idea is to use Markov chains with n_grams to predict
//probability

var txt = "This is a piece of example text to get started with.";
var order = 3;
var ngrams = {};


function setup() {

    //loop through text
    for (var i = 0; i <= txt.length - order; i++){
        //pull out tri-grams
        var gram = txt.substring(i, i+ 3);
        //when a new gram is found make an array. This array 
        //will be populated to show common following tri grams
        if(!ngrams[gram]){
            ngrams[gram] = [];
        } 
        ngrams[gram].push(txt.charAt(i+3));

    }
    console.log(ngrams);

}

setup();
