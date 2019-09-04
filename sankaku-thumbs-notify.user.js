// ==UserScript==
// @name         sankaku-thumbs-notify.user.js
// @version      1.1
// @description  Notify The Current Number of Thumbs Loaded
// @author       Dark.Kuro
// @match        https://*.sankakucomplex.com/?tags=*
// @grant        none
// ==/UserScript==

const notifier = document.body.appendChild(document.createElement('span'))
notifier.id = '#notify-thumbs-count';
notifier.style.color = '#FFF';
notifier.style.backgroundColor = 'rgba(0,0,0,0.5)';
notifier.style.fontSize = '50px';
notifier.style.bottom = '50px';
notifier.style.right ='10px';
notifier.style.position= 'fixed';
notifier.style.height = '50px';

document.addEventListener('DOMNodeInserted', function() {
    var thumbs = document.querySelectorAll('span.thumb');
    if(notifier.innerText!=thumbs.length) notifier.innerText = thumbs.length
}, false);
