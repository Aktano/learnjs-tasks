let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };


// function printList(list) {

//     while (list) {
//         console.log(list.value);
//         list = list.next;
//     }
// }

// printList(list);

function printList(list) {
       console.log (list.value);
       if (list.next) {
        printList(list.next);
       }
    }
    
    printList(list);

// Разница между рекурсивным (0.266-0.322 сек) и циклом (0.29-0.3 сек) во времени крайне мала, рекурсивный способ более читаем.