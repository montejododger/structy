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

    create a sum variable
    create a current
    while loop till null
    add current value to sum
    move current to next

    return sum

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
    move current to next

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

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

getNodeValue(a, 2); // 'c'

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

getNodeValue(a, 3); // 'd'

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

getNodeValue(a, 7); // null

const node1 = new Node("banana");
const node2 = new Node("mango");

node1.next = node2;

// banana -> mango

getNodeValue(node1, 0); // 'banana'

const node1 = new Node("banana");
const node2 = new Node("mango");

node1.next = node2;

// banana -> mango

getNodeValue(node1, 1); // 'mango'

*/

/*  GAME PLAN

    create a count variable
    create a current
    whle loop till null
    check if count equals index // return current val if so
    move current to next node
    increment count

    return null if not found

*/

const getNodeValue = (head, index) => {
    let count = 0;
    let current = head;

    while (current !== null) {
        if (count === index) return current.val;
        current = current.next;
        count++;
    }

    return null;
};

// ############################################################################################################################################

/* TESTS

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f

reverseList(a); // f -> e -> d -> c -> b -> a

const x = new Node("x");
const y = new Node("y");

x.next = y;

// x -> y

reverseList(x); // y -> x

const p = new Node("p");

// p

reverseList(p); // p
*/

/*  GAME PLAN
    create a null node
    move the null nodes next to current until the end


*/

//  N   ->  a   ->    b   ->   c   ->   d
//  prev    curr      next

const reverseList = (head) => {
    let prev = null;
    let current = head;

    while (current !== null) {
        const next = current.next; // so we dont lose the pointer to the next node

        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
};

// ############################################################################################################################################

/* TESTS
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

zipperLists(a, x);
// a -> x -> b -> y -> c -> z

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// a -> b -> c -> d -> e -> f

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

zipperLists(a, x);
// a -> x -> b -> y -> c -> z -> d -> e -> f

const s = new Node("s");
const t = new Node("t");
s.next = t;
// s -> t

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
one.next = two;
two.next = three;
three.next = four;
// 1 -> 2 -> 3 -> 4

zipperLists(s, one);
// s -> 1 -> t -> 2 -> 3 -> 4

const w = new Node("w");

// w

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
one.next = two;
two.next = three;
// 1 -> 2 -> 3

zipperLists(w, one);
// w -> 1 -> 2 -> 3

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
one.next = two;
two.next = three;
// 1 -> 2 -> 3

const w = new Node("w");
// w

zipperLists(one, w);
// 1 -> w -> 2 -> 3
*/

/*  GAME PLAN

*/

let zipperLists = (head1, head2) => {
    let tail = head1;
    let current1 = head1.next;
    let current2 = head2;
    let flag = false;

    while (current1 !== null && current2 !== null) {
        if (flag === false) {
            tail.next = current2;
            current2 = current2.next;
        } else {
            tail.next = current1;
            current1 = current1.next;
        }

        tail = tail.next;
        flag = !flag;
    }

    if (current1 !== null) tail.next = current1;
    if (current2 !== null) tail.next = current2;

    return head1;
};

// ############################################################################################################################################

/* TESTS

*/

/*  GAME PLAN

*/

//  N   ->  a   ->    b   ->   c   ->   d
//  prev    curr      next

// ############################################################################################################################################

/* TESTS

*/

/*  GAME PLAN

*/

//  N   ->  a   ->    b   ->   c   ->   d
//  prev    curr      next

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
