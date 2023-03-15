let data = {
    "Рыбы": {
      "форель": {},
      "лосось": {}
    },

    "Деревья": {
      "Огромные": {
        "секвойя": {},
        "дуб": {}
      },
      "Цветковые": {
        "яблоня": {},
        "магнолия": {}
      }
    }
  };

  function createTree(container, obj) {
    container.innerHTML = createTreeText(obj);
  }

  function createTreeText(obj) { 
    let li = '';
    let ul;
    for (let i in obj) {
      li += '<li>' + i + createTreeText(obj[i]) + '</li>';
    }
    if (li) {
      ul = '<ul>' + li + '</ul>'
    }
    return ul || '';
  }

  createTree(container, data);