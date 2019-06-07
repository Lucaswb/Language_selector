
$(document).ready(function() {

  $("form#questionnaire").submit(function(event) {
    var prom1 = $("#name1").val().length;
    if (prom1===0) {
      alert("you must enter a name")
    } else {
      alert("you entered a name")
    }


  });
});
