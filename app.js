$(document).ready(function() {
    document.getElementById("nav").innerHTML = 
        "<ul class=\"nav nav-tabs\" style=\"border-bottom-color:white\"> <li class=\"nav-item\"> <a class=\"nav-link active\" id=\"home-btn\" href=\"javascript:void(0);\">Home</a> </li> <li> <a class=\"nav-link\" id=\"software-btn\" href=\"javascript:void(0);\">Software</a> </li></ul>";

    $("#content").load('home.html');
});

$(".nav-link").click(function(event) {
    if ($(this)[0].classList.contains('active')) {
        return;
    }

    $(".active").removeClass('active');
    $(this).addClass('active');
    fileName = $(this)[0].id.split('-')[0]+'.html';
    document.getElementById('content').load(fileName);
});

$(".pub").click(function(event) {
    pubIdx = $(this)[0].id.split('_')[1];
    document.getElementById("modalTitle").innerHTML = publications[pubIdx].title;
    document.getElementById("modalAuthors").innerHTML = "<p><small><b>Authors:</b> " + 
        publications[pubIdx].authors + '</small></p>';
    document.getElementById("modalAbstract").innerHTML = "<p><small><b>Abstract:</b> " + 
        publications[pubIdx].abstract.split('\n').join('</small></p><p><small>') + '</small></p>';
    
    if (publications[pubIdx].url == "") {
        document.getElementById("modalarXiv").removeAttribute("href");
        document.getElementById("modalarXiv").removeAttribute("target");
    } else {
        document.getElementById("modalarXiv").href = publications[pubIdx].url;
        document.getElementById("modalarXiv").target = "_blank";
    }

    if (publications[pubIdx].pdfFile == "") {
        document.getElementById("modalPDF").removeAttribute("href");
        document.getElementById("modalPDF").removeAttribute("target");
    }
    else {
        document.getElementById("modalPDF").href = publications[pubIdx].pdfFile;
        document.getElementById("modalPDF").target = "_blank";
    }

});
