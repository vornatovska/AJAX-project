function load(apiKeyU, idU) {
    var apiKey = document.getElementById(apiKeyU).value;
    var profil = document.getElementById(idU).value;


    var ajaxObject;

    if(window.XMLHttpRequest){
        ajaxObject = new XMLHttpRequest();
    } else if(window.ActiveXObject){
        ajaxObject = new ActiveXObject("Microsoft.XMLHTTP");
    }

    ajaxObject.onreadystatechange = function() { alertContents(ajaxObject); };


    var params = 'apiKey=' + apiKey +
        '&profil=' + profil;
    ajaxObject.open("GET",'inputRecord?' + params,true);
    ajaxObject.send();

    function alertContents(httpRequest) {

        if (httpRequest.readyState == 4) {
            if (httpRequest.status == 200) {
                alert(httpRequest.responseText);
            } else {
                alert('Request error');
            }
        }
    }
}