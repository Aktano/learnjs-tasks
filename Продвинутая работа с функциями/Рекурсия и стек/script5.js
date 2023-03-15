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


function printList(list) {
    let arr =[];
    while (list) {
        arr.push(list.value);
        list = list.next;
    }
    for (i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

printList(list);

// function printList(list) {
//        if (list.next) {
//         printList(list.next);
//        }
//        console.log (list.value);
//     }
    
//     printList(list);