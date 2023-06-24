function test() {
    var uid = document.getElementById("username").value;
    var pw = document.getElementById("password").value
   var em = document.getElementById("email").value
    

   var user = localStorage.setItem("uid",uid);
   var pass = localStorage.setItem("pw",pw);
   var em = localStorage.setItem("em",em);
}
