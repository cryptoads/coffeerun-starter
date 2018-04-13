$(function(){

var formArray = [];
var pastOrders;
pastOrders = JSON.parse(localStorage.getItem('orders'));


var getArray = $( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    formArray.push($( this ).serializeArray());
    createOrder(formArray);
    lStore(formArray);
});

var createOrder = function (array) {
    $('.orderHist').empty();
    for(var i =0; i < array.length; i++){
        for(var j = 0 ; j < array[i].length; j++){
            $('.orderHist').append(array[i][j]['name'] + ': ' + array[i][j]['value'] + '<br>');
        }
    }
};

var lStore = function(object){

    localStorage.setItem('orders', JSON.stringify(formArray));
}

if(pastOrders){
formArray=pastOrders;
createOrder(formArray);
};

});