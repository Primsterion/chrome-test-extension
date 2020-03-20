const newsCards = document.querySelectorAll('.news-card');

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    console.log(sendResponse);
    for(const card of newsCards){
        const headerText = card.querySelector('h1 a').innerHTML;
        const regexp = new RegExp(message, 'i');

        if(headerText.match(regexp)){
            card.parentElement.style.display = 'block';
        }else{
            card.parentElement.style.display = 'none';
        }
    }
});