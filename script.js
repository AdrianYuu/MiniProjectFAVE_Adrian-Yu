document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();
    let inputNameValue = document.getElementById("name").value;
    let inputEmailValue = document.getElementById("email").value;
    let inputMessageValue = document.getElementById("message").value;
    let inputMessageCount = document.getElementById("message").value.trim().split(/\s+/).length;
    let regex = new RegExp('[a-z0-9]+@[a-z]+.com');
    let flag = 0, flag1 = 0, flag2 = 0;

    if(inputNameValue == ""){
        document.getElementById("validationName").innerText =  "Name cannot be empty";
        document.getElementById("validationName").style.color = "red";
    } else if(inputNameValue.length >= 3){
        document.getElementById("validationName").innerText =  "Name is valid";
        document.getElementById("validationName").style.color = "green";
        flag = 1;
    } else{
        document.getElementById("validationName").innerText =  "Name must contain atleast 3 characters";
        document.getElementById("validationEmail").style.color = "red";
    }

    if(inputEmailValue == ""){
        document.getElementById("validationEmail").innerText =  "Email cannot be empty";
        document.getElementById("validationEmail").style.color = "red";
    } else if(regex.test(inputEmailValue) == true){
        document.getElementById("validationEmail").innerText =  "Email is valid";
        document.getElementById("validationEmail").style.color = "green";
        flag1 = 1;
    } else {
        document.getElementById("validationEmail").innerText =  "Email must contain '@' and there must be a word before '.com'";
        document.getElementById("validationEmail").style.color = "red";
    }

   if(inputMessageValue == ""){
        document.getElementById("validationMessage").innerText =  "Message cannot be empty";
        document.getElementById("validationMessage").style.color = "red";
    } else if(inputMessageCount >= 3){
        document.getElementById("validationMessage").innerText =  "Message is valid";
        document.getElementById("validationMessage").style.color = "green";
        flag2 = 1;
    } else{
        document.getElementById("validationMessage").innerText =  "Message must contain atleast 3 words";
    }

    if(flag == 1 && flag1 == 1 && flag2 == 1){
        document.getElementById("form").submit();
        alert("Message successfully sent!");
    }
  
});