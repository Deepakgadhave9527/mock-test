// 1. Find the maximum element in an array.

const array = [5, 2, 8, 10, 3];

let max=array[0]

const maxFun =()=>{
    
    for(let i=0;i<array.length;i++){
        // console.log(i)
        if(max<array[i]){
            max=array[i]
        }
    }

    return max
}
console.log(maxFun(array)
)
// 2. Find the minimum element in an array.


// how convert array to object

const arrayToObject = (arr) => {
    const obj = {};
    arr.forEach((item, index) => {
      obj[index] = item;
    });
    return obj;
  };
  
  const myArray = ['a', 'b', 'c'];
  const myObject = arrayToObject(myArray);
  console.log(myObject);


//================================\//================================\


function createShoppingCart() {
    let items = []; // Private variable to store items in the cart
    
    function addItem(item) {
      items.push(item);
      console.log(item.name + " added to cart.");
    }
    
    function removeItem(item) {
      let index = items.findIndex(i => i.id === item.id);
      if (index !== -1) {
        items.splice(index, 1);
        console.log(item.name + " removed from cart.");
      } else {
        console.log("Item not found in cart.");
      }
    }
    
    function getCartItems() {
      return items.slice(); // Return a copy of items array
    }
    
    return {
      addItem,
      removeItem,
      getCartItems
    };
  }
  
  // Creating a closure by calling createShoppingCart
  const shoppingCart = createShoppingCart();
  
  // Adding items to the shopping cart
  shoppingCart.addItem({ id: 1, name: "Product 1", price: 10 });
  shoppingCart.addItem({ id: 2, name: "Product 2", price: 20 });
  
  // Retrieving the items from the cart
  const cartItems = shoppingCart.getCartItems();
  console.log("Items in the cart:", cartItems);
  
  // Removing an item from the cart
  shoppingCart.removeItem({ id: 1, name: "Product 1", price: 10 });
  
  // Retrieving the updated items from the cart
  const updatedCartItems = shoppingCart.getCartItems();
  console.log("Updated items in the cart:", updatedCartItems);
  
  




