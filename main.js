var name_of_student_array=[];

function submit(){
    var name_1=document.getElementById("Name_of_the_student_1").value;
    var name_2=document.getElementById("Name_of_the_student_2").value;
    var name_3=document.getElementById("Name_of_the_student_3").value;
    var name_4=document.getElementById("Name_of_the_student_4").value;

 name_of_student_array.push(name_1);
 name_of_student_array.push(name_2);
 name_of_student_array.push(name_3);
 name_of_student_array.push(name_4);

 //test screen
 console.log(name_of_student_array);

 //for final output (submit button)
 document.getElementById("display_name").innerHTML=name_of_student_array;
 document.getElementById("submit_button").style.display="none";
 document.getElementById("sort_button").style.display="inline-block";
}
function sort() {
    name_of_student_array.sort();

     //test screen for sort button
 console.log(name_of_student_array);
    
 //for sort when clicked
 document.getElementById("display_name").innerHTML=name_of_student_array;
}