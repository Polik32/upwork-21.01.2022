$(".sign__form-confirm").on("keyup", function() {
    var value_input1 = $(".sign__form-password").val();
    var value_input2 = $(this).val(); 

    if(value_input1 != value_input2) {
    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = "#confirm:before {background-image: url(./images/signUp/confirm-icon-error.svg);}";
    $("#submit").attr("disabled", "disabled");

    } else {
        var styleElem = document.head.appendChild(document.createElement("style"));
        styleElem.innerHTML = "#confirm:before {background-image: url(./images/signUp/confirm-icon-checked.svg);}";
        $("#submit").removeAttr("disabled");
    }
});


$(".sign__form-recovery").on("keyup", function() { 
    var reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    var value_input = $(this).val();

    if(reg.test(value_input) == false) {
    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = "#recovery:after {background-image: url(./images/signUp/confirm-icon-error.svg);}";
    $("#submit").attr("disabled", "disabled");

    } else { 
        var styleElem = document.head.appendChild(document.createElement("style"));
        styleElem.innerHTML = "#recovery:after {background-image: url(./images/signUp/confirm-icon-checked.svg);}";
        $("#submit").removeAttr("disabled");
    }
});


