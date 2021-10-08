var idx, pubsCards="", pubsHTML="", newsShort="", newsLong="";

selPubs = [];
selPubs.push(publications["Working Papers"]["w3"]);
selPubs.push(publications["Working Papers"]["w2"]);
selPubs.push(publications["Working Papers"]["w1"]);
selPubs.push(publications["Journal Articles"]["j2"]);
for (idx in selPubs) {
    pub = selPubs[idx];
    if (idx<4) {
        if (pub.status == "working") {
            pubsCards += '<div class="col-lg-3 col-md-6 col-sm-12 mb-4"><a href="#" class="pub" data-toggle="modal" data-target="#myModal" onclick="fillModal(selPubs['+idx+'])" id="'+ 'pub_' + idx + '"><div class="card h-100"><div class="card-body"><h6 class="card-title text-capitalize">' + pub.title + '</h6><h6  class="card-subtitle mb-2 text-muted"><small>' + pub.authors + '</small></h6><p><i>Working Paper</i></p></div></div></a></div>';
        } else {
            pubsCards += '<div class="col-lg-3 col-md-6 col-sm-12 mb-4"><a href="#" class="pub" data-toggle="modal" data-target="#myModal" onclick="fillModal(selPubs['+idx+'])" id="'+ 'pub_' + idx + '"><div class="card h-100"><div class="card-body"><h6 class="card-title text-capitalize">' + pub.title + '</h6><h6  class="card-subtitle mb-2 text-muted"><small>' + pub.authors + '</small></h6><p>' + pub.conference + " (" + pub.status + ')</p></div></div></a></div>';
        }
    }
}

// pubsHTML += '<h3 style="margin-top:30px; margin-bottom: 15px">Publications</h3>'
for (keyIdx in Object.keys(publications)) {
    key = Object.keys(publications)[keyIdx]
    pubsHTML += '<h5>' + key + '</h5><ul style="margin-bottom: 50px">';
    for (pubIdx in publications[key]) {
        pub = publications[key][pubIdx];
        if (pub.status == "working") {
            pubsHTML+='<li style="margin-bottom: 15px"><a class="text-capitalize" href="'+pub.url+'" target="_blank">'+pub.title+'</a><br>'+pub.authors+', '+pub.date+'.</li>';
        } else {
            pubsHTML+='<li style="margin-bottom: 15px"><a class="text-capitalize" href="'+pub.url+'" target="_blank">'+pub.title+'</a><br>'+pub.authors+'<br><i>'+pub.conferencelong+'</i> ('+pub.status+'), '+pub.date+'.</li>';
        }
    }
    pubsHTML += "</ul>";
}

for (idx in news) {
    newsItm = "";
    newsItm += "<div class=\"col-sm-12\"><p id=\""+ "news_" + idx + "\">" + news[idx].date + " - " + news[idx].body;
    if (news[idx].url == "") {
        newsItm += "</p></div>";
    } else {
        newsItm += " [<a href=" + news[idx].url + ">Link</a>]</p></div>";
    }

    if (idx < 4) {
        newsShort += newsItm;
    }
    newsLong += newsItm;
}
newsShort += "<div class=\"col-sm-12\"><a href=\"javascript:void(0)\" onclick=\"newsExpand()\">See More</a></div>"
newsLong += "<div class=\"col-sm-12\"><a href=\"javascript:void(0)\" onclick=\"newsShrink()\">See Less</a></div>"

$(document).ready(function() {
    document.getElementById("selpub").innerHTML = pubsCards;
    document.getElementById("publications").innerHTML = pubsHTML;
    document.getElementById("news").innerHTML = newsShort;
});

function newsShrink() {
    document.getElementById("news").innerHTML = newsShort;
};

function newsExpand() {
    document.getElementById("news").innerHTML = newsLong;
};

// function fillModal(elt) {
    // pubIdx = elt.id.split('_')[1];
    // pub = selPubs[pubIdx];
function fillModal(pub) {
    // console.log(pub);
    document.getElementById("modalTitle").innerHTML = pub.title;
    document.getElementById("modalAuthors").innerHTML = "<p><small><b>Authors:</b> " + 
        pub.authors + '</small></p>';
    document.getElementById("modalAbstract").innerHTML = "<p><small><b>Abstract:</b> " + 
        pub.abstract.split('\n').join('</small></p><p><small>') + '</small></p>';
    
    if (pub.url == "") {
        document.getElementById("modalarXiv").removeAttribute("href");
        document.getElementById("modalarXiv").removeAttribute("target");
    } else {
        document.getElementById("modalarXiv").href = pub.url;
        document.getElementById("modalarXiv").target = "_blank";
    }

    if (pub.pdfFile == "") {
        document.getElementById("modalPDF").removeAttribute("href");
        document.getElementById("modalPDF").removeAttribute("target");
    }
    else {
        document.getElementById("modalPDF").href = pub.pdfFile;
        document.getElementById("modalPDF").target = "_blank";
    }

};
