$(function(){
   if(!$(window).data('data')){
       $.getJSON('data.json',function(array){
            $(window).data('data',array.reverse());
       });
   }
});
