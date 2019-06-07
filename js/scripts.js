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

  $("form#questionnaire").submit(function(event) {
    var prom1 = $("#name1").val().length;
    var prom2 = parseInt($("#age1").val());
    var prom3 = parseInt($("#num1").val());
    var prom4 = $("input:radio[name=question1]:checked").val();
    var prom5 = $("#question2").val();
    var prom6 = $("#question3").val();
    var prom7 = $("#question4").val();


    if ((prom2>0)&&(prom1>0)){
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
      debugger;
      $("#languageReveal").append("<p></p>");
      $("#languageReveal p").append(lang_name);
      alert("hi")
      event.preventDefault()
    } else {
      alert("this program requires your age and your name");
    }


    // if ((prom1)||(prom2===N)) {
    //   alert("you must enter your age and name")
    // } else {
    //   alert(prom1*prom2)
    // }




  });
});
