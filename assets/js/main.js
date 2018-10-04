var modal = document.getElementById('form');
var btn = document.getElementById("formTrigger");
var span = document.getElementsByClassName("s-u-close")[0];
var submit = document.getElementsByClassName("s-se-sumbit");

btn.onclick = function() {
    modal.style.display = "flex";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
$(document).ready(function() {
        $(".s-c-form").submit(function(e) {
            e.preventDefault();
            $(".s-c-form").hide(300);
            $(".s-se-thanks").show(300);
        });
    });