// Immediately invoked Function Expressions (IIFE)
// i) Immdiately execute ii) global scope pollution pblm
(
    // Named iife
    function connect(){
    console.log(`Database Connected`);
    } 
) () ; // ; for ending execution
// Learn trick : connect() generally -> (connect fn)()

// using Arrow function + parameters pass(UNNAMED IIFE)
(
    (name) => {
        console.log(`Databse 2 Connected for ${name}`);
        
    }
) ("sushmita");