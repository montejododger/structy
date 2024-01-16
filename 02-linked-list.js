// 2. Linked List

/*
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
*/

// ############################################################################################################################################

/* TESTS
const x = new Node("x");
const y = new Node("y");

x.next = y;

// x -> y

linkedListValues(x); // -> [ 'x', 'y' ]

const q = new Node("q");

// q

linkedListValues(q); // -> [ 'q' ]

linkedListValues(null); // -> [ ]

*/

/*  GAME PLAN

    create an empty arr
    create a current
    while loop till nul,
    push the current value into array
    move the head to the next node
    return arr
*/

const linkedListValues = (head) => {
    const values = [];
    let current = head;

    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }

    return values;
};

// ############################################################################################################################################

/* TESTS
const x = new Node(38);
const y = new Node(4);

x.next = y;

// 38 -> 4

sumList(x); // 42

const z = new Node(100);

// 100

sumList(z); // 100

sumList(null); // 0


*/

/*  GAME PLAN

*/

const sumList = (head) => {
    let sum = 0;
    let current = head;

    while (current !== null) {
        sum += current.val;
        current = current.next;
    }

    return sum;
};

// ############################################################################################################################################

/* TESTS

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

linkedListFind(a, "c"); // true

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

linkedListFind(a, "d"); // true

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

linkedListFind(a, "q"); // false

const node1 = new Node("jason");
const node2 = new Node("leneli");

node1.next = node2;

// jason -> leneli

linkedListFind(node1, "jason"); // true

const node1 = new Node(42);

// 42

linkedListFind(node1, 42); // true

const node1 = new Node(42);

// 42

linkedListFind(node1, 100); // false


*/

/*  GAME PLAN

    create current
    while loop till null
    check the value to the target
    if a match , return true

    no matches at all return false


*/

const linkedListFind = (head, target) => {
    let current = head;

    while (current !== null) {
        console.log(current.val);
        if (current.val === target) return true;

        current = current.next;
    }

    return false;
};

// ############################################################################################################################################

/* TESTS

*/

/*  GAME PLAN

*/

// ############################################################################################################################################

/* TESTS

*/

/*  GAME PLAN

*/

// ############################################################################################################################################

/* TESTS

*/

/*  GAME PLAN

*/

// ############################################################################################################################################

/* TESTS

*/

/*  GAME PLAN

*/

// ############################################################################################################################################

/* TESTS

*/

/*  GAME PLAN

*/

// ############################################################################################################################################

/* TESTS

*/

/*  GAME PLAN

*/

// ############################################################################################################################################

/* TESTS

*/

/*  GAME PLAN

*/

// ############################################################################################################################################

/* TESTS

*/

/*  GAME PLAN

*/

// ############################################################################################################################################

/* TESTS

*/

/*  GAME PLAN

*/

// ############################################################################################################################################

/* TESTS

*/

/*  GAME PLAN

*/

// ############################################################################################################################################
