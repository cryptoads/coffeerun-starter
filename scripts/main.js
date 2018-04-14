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
        $('.orderHist').append('<div class="'+i+' col-3 mt-1 ml-1 mr-1 bg-success">');
        for(var j = 0 ; j < array[i].length; j++){
            $('.'+i).append(array[i][j]['name'] + ': ' + array[i][j]['value'] + '<br>');
        }  
        $('.'+i).append('<button class="'+i+'">x</button></div>'); 
    }
};

var lStore = function(object){

    localStorage.setItem('orders', JSON.stringify(formArray));
}

if(pastOrders){
    formArray=pastOrders;
    createOrder(formArray);
};
    console.log(formArray);
});