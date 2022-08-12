function Validate() {
    var uname = document.getElementById("username").value;
    var eid = document.getElementById("eid").value;
    var ceid = document.getElementById("ceid").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("txtConfirmPassword").value;
    var cnumber = document.getElementById("cnumber").value;
    atpos = eid.indexOf("@");
    dotpos = eid.lastIndexOf(".");
    if (uname=="") {
        alert("Username should not be empty");
        return false;
    }
    
    else if (eid != ceid) {
        alert("Email Id should be same");
        return false;
    }
        
    
    else if (password != confirmPassword) {
        alert("Password do not match");
        return false; 
           
    }
    else if (password =="") {
        alert("Password should not be empty");
        return false; 
           
    }
    
    else if (cnumber=="") {
        alert("Contact number should not be empty");
        return false;
    }
    
         
    else if (atpos < 1 || ( dotpos - atpos < 2 )) {
        alert("Please enter correct email ID")
        document.myForm.EMail.focus() ;
        return false;
    }
    else {
        document.location.href="index.html"
    }
}