function load() {
    
    var apiKey = document.getElementById("apiKeyUser").value;
    var profil = document.getElementById("idUser").value;

    var request = document.getElementsByName('request');
    var requestMetod = "GET";

    if(validate("apiKeyUser", "Api key")==false || validate("idUser", "Profil-ID")==false){
        return false;
    }


    function validate(field, fieldUser) {
        var valid = true;
        if(document.getElementById(field).value == ""){
            valid = false;
            alert("Input value for field " + fieldUser);
        }
        return valid;
    }

  

    for (var i =0 ; i < request.length; i++ ){
        if (request[i].checked && request[i].value == 0) {
            break;
        }else{
            requestMetod = "POST";
            break;
        }
    }

    var ajaxObject;

    if(window.XMLHttpRequest){
        ajaxObject = new XMLHttpRequest();
    } else if(window.ActiveXObject){
        ajaxObject = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if(requestMetod == "GET"){
        ajaxObject.onreadystatechange = function() { alertContents(ajaxObject); };
        var params = 'apiKey=' + apiKey +
            '&profil=' + profil;
        ajaxObject.open("GET",'/api/v1/inputRecord?' + params,true);
        ajaxObject.send();
    } else {
        ajaxObject.onreadystatechange = function() { alertContents(ajaxObject); };
        var params = 'apiKey=' + apiKey +
            '&profil=' + profil;
        ajaxObject.open("POST",'/api/v1/inputRecord',true);
        ajaxObject.send("params");
    }


    function alertContents(httpRequest) {

        if (httpRequest.readyState == 4) {
            if (httpRequest.status == 200) {
                alert(httpRequest.responseText);
            } else {
                //alert('Request error');
            }
        }
    }

    return false;
}