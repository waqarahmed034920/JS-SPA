function loadContent() {
    console.log('hash value:', window.location.hash);
    var pageName = window.location.hash.substr(1);
    console.log('page name:', pageName);

    if (!pageName.trim().length) {
        pagename = 'home';
    }

    getContent(pageName, function(htmlfromFiles) {
        const contentDiv = document.getElementById('contentDiv');
        contentDiv.innerHTML = htmlfromFiles;    
    });

};


function getContent(pagename, someFunction) {
    const request = new XMLHttpRequest();

    request.addEventListener('load', function() {
        someFunction(request.responseText);
    })

    var url = "public/" + pagename + '.html';
    request.open('GET', url);
    request.send({});
}

loadContent();

window.addEventListener('hashchange', loadContent);
