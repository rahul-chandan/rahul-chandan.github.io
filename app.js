var idx, pubsCards="", pubsHTML="", newsHTML="";

for (idx in publications["Journal Articles"]) {
    pub = publications["Journal Articles"][idx];
    if (idx<4) {
        pubsCards += '<div class="col-lg-3 col-md-6 col-sm-12 mb-4"><a href="#" class="pub" data-toggle="modal" data-target="#myModal" id="'+ 'pub_' + idx + '"><div class="card h-100"><div class="card-body"><h6 class="card-title">' + pub.title + '</h6><h6  class="card-subtitle mb-2 text-muted"><small>' + pub.authors + '</small></h6><p>' + pub.conference + " (" + pub.status + ')</p></div></div></a></div>';
    }
    pubsHTML += '';
}

for (keyIdx in Object.keys(publications)) {
    key = Object.keys(publications)[keyIdx]
    pubsHTML += '<h5>' + key + '</h5><ul style="margin-bottom: 50px">';
    for (pubIdx in publications[key]) {
        pub = publications[key][pubIdx]
        pubsHTML+='<li style="margin-bottom: 15px"><a class="text-capitalize" href="'+pub.url+'" target="_blank">'+pub.title+'</a><br>'+pub.authors+'<br><i>'+pub.conferencelong+'</i> ('+pub.status+'), '+pub.date+'.</li>'
    }
    pubsHTML += "</ul>";
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
    document.getElementById("selpub").innerHTML = pubsCards;
    document.getElementById("publications").innerHTML = pubsHTML;
    document.getElementById("news").innerHTML = newsHTML;
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
