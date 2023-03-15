let li = document.getElementsByTagName('li');

for (let i of li) {
  let x = i.getElementsByTagName('li').length;
  if (!x) continue;
  i.firstChild.data += ' [' + x + ']';
}