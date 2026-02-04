function fetchCartPrice(cartId, callback) {
    setTimeout(() => {
        callback(1000);
    }, 200);
}
function checkoutWithCallback(cartId) {
    console.log("checkout started");

    fetchCartPrice(cartId, price => {
        console.log("final price", price);
    });

    console.log("user can continue browsing");
}
checkoutWithCallback();
