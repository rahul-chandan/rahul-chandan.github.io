var idx, pubsHTML="", newsHTML="";

// jPubs = publications.journalPublications;
// cPubs = publications.conferencePublications;

for (idx in publications) {
    pubsHTML += '<div class="col-sm-6"><a href="#" class="pub" data-toggle="modal" data-target="#myModal" id="'+ 'pub_' + idx + '"><div class="card mb-3"><div class="card-body"><h5 class="card-title">' + publications[idx].title + '</h5><h6  class="card-subtitle mb-2 text-muted"><small>' + publications[idx].authors + '</small></h6><p>' + publications[idx].conference + " (" + publications[idx].status + ')</p></div></div></a></div>';
}

for (idx in news) {
    newsHTML += "<div class=\"col-sm-12\"><p id=\""+ "news_" + idx + "\">" + news[idx].date + " - " + news[idx].body;
    if (news[idx].url == "") {
        newsHTML += "</p></div>";
    } else {
        newsHTML += " <a href=" + news[idx].url + ">Link</a></p></div>";
    }
    
}

$(document).ready(function() {
    $("#content").load('./home.html')

    document.getElementById("latestPublications").innerHTML = pubsHTML;
    document.getElementById("latestNews").innerHTML = newsHTML;
    document.getElementById("nav").innerHTML = 
        "<ul class=\"nav nav-tabs\" style=\"border-bottom-color:white\"> <li class=\"nav-item\"> <a class=\"nav-link active\" id=\"home-btn\">Home</a> </li> <li> <a class=\"nav-link\" id=\"software-btn\">Software</a> </li></ul>";
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
    // console.log(publications[pubIdx]);
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
