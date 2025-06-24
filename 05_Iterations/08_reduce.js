// reduce method : 
// generally used for  returning total bills (sum of ele values)

const nos = [1,2,3,4]

const myTotal = nos.reduce( (acc,currval) => {
    // console.log(`acc : ${acc} and currval : ${currval}`);
    return acc+currval
} , 3  ) // initial values is 3

// console.log(`Total of nos : ${myTotal}`)

const shoppingCart = [
    {
        itemName : "rackets",
        price : 2999
    },
    {
        itemName : "bat",
        price : 3673
    },
    {
        itemName : "football",
        price : 3432
    }
]

const billAmt = shoppingCart.reduce( (acc,item) => (acc + item.price) , 0 )
console.log(billAmt);
