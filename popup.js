const btn = document.querySelector('.search-btn');
const reset = document.querySelector('.reset-btn');
const query = document.querySelector('#search');

btn.addEventListener('click', function(){
    const params = {
        active: true,
        currentWindow: true
    }

    chrome.tabs.query(params, function(tab){
        const message = query.value;
        chrome.tabs.sendMessage(tab[0].id, message);
    })
});

reset.addEventListener('click', function(){
    const params = {
        active: true,
        currentWindow: true
    }

    query.value = '';

    chrome.tabs.query(params, function(tab){
        chrome.tabs.sendMessage(tab[0].id, '');
    });
});

