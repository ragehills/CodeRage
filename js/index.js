$(document).ready(function(){
var e = .Event("keyup");

e.which = 38; // up key
e.which = 40; // down key
$("id_to_element").trigger(e);