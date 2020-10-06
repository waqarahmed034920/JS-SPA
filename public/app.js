function loadContent() {
    var pageName = window.location.hash.substr(1);
    
    if (!pageName.trim().length) {
        pageName = 'home';
    }

    getContent(pageName, function(htmlfromFiles) {
        const contentDiv = document.getElementById('contentDiv');
        contentDiv.innerHTML = htmlfromFiles;
    });

};


function getContent(pageName, someFunction) {
    var url;
    switch(pageName) {
        case 'home':
        case 'about':
        case 'contact':
            url = "public/"+ pageName +".html";
            break;
        case 'empList':
            url = "public/emp/list/empList.html";
            break;
        case 'empAdd':
            url = "public/emp/create/empAdd.html";
            break;
    }

    const request = new XMLHttpRequest();
    request.addEventListener('load', function() {
        console.log('yea wali html:', request.responseText);
        someFunction(request.responseText);
    })
    request.open('GET', url);
    request.send({});
}

loadContent();

window.addEventListener('hashchange', loadContent);
