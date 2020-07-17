var btnOne = document.getElementById("btn1");
var btnTwo = document.getElementById("btn2");
var btnThree = document.getElementById("btn3");
var btnFour = document.getElementById("btn4");
var btnFive = document.getElementById("btn5");

var fName = document.getElementById("first-name");
var mName = document.getElementById("middle-name");
var lName = document.getElementById("last-name");

var pNumber = document.getElementById("phone-number");
var conPNumber = document.getElementById("alt-phone-number");
var email = document.getElementById("email");

var password = document.getElementById("password");
var conPassword = document.getElementById("confirm-password");
var confPassword = document.getElementById("con-password");

var errMsg = document.getElementById("error");
var errMsgOne = document.getElementById("error1");
var errMsgTwo = document.getElementById("error2");
var errMsgThree = document.getElementById("error3");
var errMsgFour = document.getElementById("error4");
var errMsgFive = document.getElementById("error5");
var errMsgSix = document.getElementById("error6");
var errMsgSeven = document.getElementById("error7");


var formOne = document.getElementById("form1");
var formTwo = document.getElementById("form2");
var formThree = document.getElementById("form3");



fName.addEventListener("blur", () => {
  if (fName.value.length >= 5) {
    errMsg.style.display = "none";
  } else {
    errMsg.style.display = "block";
  }
});
mName.addEventListener("blur", () => {
  if (mName.value.length >= 5) {
    errMsgOne.style.display = "none";
  } else {
    errMsgOne.style.display = "block";
  }
});
lName.addEventListener("blur", () => {
  if (lName.value.length >= 5) {
    errMsgTwo.style.display = "none";
  } else {
    errMsgTwo.style.display = "block";
  }
});
btnOne.addEventListener("click", () => {
  formOne.style.display = "none";
  formTwo.style.display = "block";
});

btnTwo.addEventListener("click", () => {
  formOne.style.display = "block";
  formTwo.style.display = "none";
});

btnThree.addEventListener("click", () => {
  formTwo.style.display = "none";
  formThree.style.display = "block";
});

btnFour.addEventListener("click", () => {
  formThree.style.display = "none";
  formTwo.style.display = "block";
});

pNumber.addEventListener("blur", () => {
    if (pNumber.value.length === 11) {
      errMsgThree.style.display = "none";
    } else {
      errMsgThree.style.display = "block";
    }
});

conPNumber.addEventListener("blur", () => {
    if (conPNumber.value.length === 11) {
      errMsgFour.style.display = "none";
    } else {
      errMsgFour.style.display = "block";
    }
});

email.addEventListener("blur", () => {
    if (email.value.length > 11) {
      errMsgFive.style.display = "none";
    } else {
      errMsgFive.style.display = "block";
    }
});
conPassword.addEventListener("blur", () => {
    if (password.value === conPassword.value) {
      errMsgSix.style.display = "none";
    } else {
      errMsgSix.style.display = "block";
    }
});

confPassword.addEventListener("blur", () => {
    if (password.value === confPassword.value) {
      errMsgSeven.style.display = "none";
    } else {
      errMsgSeven.style.display = "block";
    }
});

