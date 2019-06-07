var prog = {
  "program1":"C",
  "program2":"C#",
  "program3":"C++",
  "program4":"Objective-C",
  "program5":"Swift",
  "program6":"Python",
  "program7":"Java Script",
  "program8":"R",
  "program9":"PHP",
  "program10":"Fortran",
  "program11":"Ruby",
  "program12":"Basic",
  "program13":"Java",
};



$(document).ready(function() {
  $("button#action2").click(function(event){
    alert("yes you do")
    $("button#action2").hide()
    event.preventDefault()
  });
  $("button#action1").click(function(event){
    $("button#action1").hide()
    $("button#action2").hide()
    $("form#questionnaire").show()
    event.preventDefault()


    $("form#questionnaire").submit(function(event) {
      var prom1 = $("#name1").val().length;
      var prom2 = parseInt($("#age1").val());
      var prom3 = parseInt($("#num1").val());
      var prom4 = $("input:radio[name=question1]:checked").val();
      var prom5 = $("#question2").val();
      var prom6 = $("#question3").val();
      var prom7 = $("#question4").val();

      if ((prom1>0)&&(prom2>0)){
        $("#errorAge").hide()
        $("#errorName").hide()
        var result = (prom1*prom2*prom7*prom4*prom5*prom6*prom7)
        if (prom3>0){
          result+=prom3;
          lang_num=(result%13)+1
        } else {
          lang_num=(result%13)+1

        }
        var lang_name = prog["program"+lang_num]


        $("#reveal").show()
        $("#languageReveal p").remove();
        $("#languageReveal").append("<p></p>");
        $("#languageReveal p").append(lang_name);
        event.preventDefault()

      } else {
        $("#reveal").hide()
        if ((prom1===0)&&(prom2)){
          $("#errorAge").hide()
          $("#errorName").show()
        } else if ((!prom2) && (prom1)) {
          $("#errorName").hide()
          $("#errorAge").show()
        } else {
          $("#errorAge").show()
          $("#errorName").show()
        }
        event.preventDefault()
      }
    });
  });
});
