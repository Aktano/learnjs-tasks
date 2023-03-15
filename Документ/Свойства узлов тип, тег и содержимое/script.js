for(i of document.querySelectorAll('li')) {
    let text = i.firstChild.data;

    text = text.trim();

    let count = i.getElementsByTagName('li').length;
    alert(text + ': ' + count);
}