
var news; 
window.onload = function() {
	$.getJSON("https://schalia1-295ee.firebaseio.com/.json", function (data) {
    console.log(data);
    news = data;
    
  });
};

var nro = 0; 
var paused = false;
/*function newsNro() {
	
}
*/
function showNews() {
   news, function (data) {    
       $('#otsikko').hide().html(data.news[nro].otsikko).fadeIn("slow"); 
       $('#paivanmaara').hide().html(data.news[nro].paivanmaara).fadeIn("slow");
       $('#sisalto').hide().html(data.news[nro].sisalto).fadeIn("slow");
    
}
    
}

document.onload = function () {
	showNews();
}
