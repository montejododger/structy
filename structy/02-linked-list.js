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

var linkedListValues = (head) => {
    const values = [];
    let current = head;

    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }

    return values;
};

// recurssive

var linkedListValues = (head) => {
    const values = [];

    fillValues(head, values);
    return values;
};

var fillValues = (head, values) => {
    if (head === null) return;
    values.push(head.val);
    fillValues(head.next, values);
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
    create a curr starting @head
    while curr isValid
        create a temp node of currs next(so we dont lose the pointer)
        move currs next node ot point to prev
        prev will become curr
        move curr to next

    return prev

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

    create a tail from first head
    create a next for both heads
    create a flag to keep track of which list your on

    while both curr's are valid
        check flag to disinguish which list to take from
        point tail to corresponding next from currs

        move tail to next
        reset flag to opposite

    incase list are uneven then you would add the remaining
    try adding both becuase you wont know which list has more;

    return head1 because thats where we started
*/

var zipperLists = (head1, head2) => {
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

// recursively

var zipperLists = (head1, head2) => {
    // Base Cases
    if (head1 === null && head2 === null) return null;
    if (head1 === null) return head2;
    if (head2 === null) return head1;

    const next1 = head1.next;
    const next2 = head2.next;
    head1.next = head2;

    head2.next = zipperLists(next1, next2);

    return head1;
};

// ############################################################################################################################################

/* TESTS

const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28

const q = new Node(6);
const r = new Node(8);
const s = new Node(9);
const t = new Node(25);
q.next = r;
r.next = s;
s.next = t;
// 6 -> 8 -> 9 -> 25

mergeLists(a, q);
// 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28

const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28

const q = new Node(1);
const r = new Node(8);
const s = new Node(9);
const t = new Node(10);
q.next = r;
r.next = s;
s.next = t;
// 1 -> 8 -> 9 -> 10

mergeLists(a, q);
// 1 -> 5 -> 7 -> 8 -> 9 -> 10 -> 10 -> 12 -> 20 -> 28

const h = new Node(30);
// 30

const p = new Node(15);
const q = new Node(67);
p.next = q;
// 15 -> 67

mergeLists(h, p);
// 15 -> 30 -> 67

*/

/*  GAME PLAN
    create a dummy node

    create a tail
    create curr's for both heads

    while both currs are valid
        check the value of each curr
        point tails next to the lowest
        move corresonding curr to its next

        move tail to its next

    add any left over node to the tail

    return the dummys next
*/

var mergeLists = (head1, head2) => {
    let dummyHead = new Node(null);

    let tail = dummyHead;
    let current1 = head1;
    let current2 = head2;

    while (current1 !== null && current2 !== null) {
        if (current1.val < current2.val) {
            tail.next = current1;
            current1 = current1.next;
        } else {
            tail.next = current2;
            current2 = current2.next;
        }
        //move tail
        tail = tail.next;
    }

    if (current1 !== null) tail.next = current1;
    if (current2 !== null) tail.next = current2;

    return dummyHead.next;
};

// RECURSIVELY

var mergeLists = (head1, head2) => {
    if (head1 === null && head2 === null) return null;
    if (head1 === null) return head2;
    if (head2 === null) return head1;

    if (head1.val < head2.val) {
        const next1 = head1.next;
        head1.next = mergeLists(next1, head2);
        return head1;
    } else {
        const next2 = head2.next;
        head2.next = mergeLists(head1, next2);
        return head1;
    }
};

//  N   ->  a   ->    b   ->   c   ->   d
//  prev    curr      next

// ############################################################################################################################################

/* TESTS

const a = new Node(7);
const b = new Node(7);
const c = new Node(7);

a.next = b;
b.next = c;

// 7 -> 7 -> 7

isUnivalueList(a); // true

const a = new Node(7);
const b = new Node(7);
const c = new Node(4);

a.next = b;
b.next = c;

// 7 -> 7 -> 4

isUnivalueList(a); // false

const u = new Node(2);
const v = new Node(2);
const w = new Node(2);
const x = new Node(2);
const y = new Node(2);

u.next = v;
v.next = w;
w.next = x;
x.next = y;

// 2 -> 2 -> 2 -> 2 -> 2

isUnivalueList(u); // true

const u = new Node(2);
const v = new Node(2);
const w = new Node(3);
const x = new Node(3);
const y = new Node(2);

u.next = v;
v.next = w;
w.next = x;
x.next = y;

// 2 -> 2 -> 3 -> 3 -> 2

isUnivalueList(u); // false

const z = new Node('z');

// z

isUnivalueList(z); // true

const u = new Node(2);
const v = new Node(1);
const w = new Node(2);
const x = new Node(2);
const y = new Node(2);

u.next = v;
v.next = w;
w.next = x;
x.next = y;

// 2 -> 1 -> 2 -> 2 -> 2

isUnivalueList(u); // false
*/

/*  GAME PLAN

    make current variable

    while loop till null

    if current and next values match, move the pointer
    if they dont return false

    return true if all values match

*/

var isUnivalueList = (head) => {
    let current = head;

    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            current = current.next;
        } else {
            return false;
        }
    }

    return true;
};

// RECURSIVELY

var isUnivalueList = (head, prevVal = null) => {
    if (head === null) return true;

    if (prevVal === null || prevVal === head.val) {
        return isUnivalueList(head.next, head.val);
    } else {
        return false;
    }
};

//  N   ->  a   ->    b   ->   c   ->   d
//  prev    curr      next

// ############################################################################################################################################

/* TESTS

const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 5 -> 5 -> 7 -> 7 -> 7 -> 6

longestStreak(a); // 3


const a = new Node(3);
const b = new Node(3);
const c = new Node(3);
const d = new Node(3);
const e = new Node(9);
const f = new Node(9);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 3 -> 3 -> 3 -> 3 -> 9 -> 9

longestStreak(a); // 4

const a = new Node(9);
const b = new Node(9);
const c = new Node(1);
const d = new Node(9);
const e = new Node(9);
const f = new Node(9);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 9 -> 9 -> 1 -> 9 -> 9 -> 9

longestStreak(a); // 3

const a = new Node(5);
const b = new Node(5);

a.next = b;

// 5 -> 5

longestStreak(a); // 2

const a = new Node(4);

// 4

longestStreak(a); // 1

longestStreak(null); // 0



*/

/*  GAME PLAN


    catch edge case of null

    create a curr
    create 2 trackers for current streak and longest streak

    while curr.next is valid
        check the val of curr and next
        increment strek
            else
            adjust long streak if needed
            reset streak

        move curr to next

    double check the long vs the curr streak

    return long streak

*/

const longestStreak = (head) => {
    if (!head) return 0;

    let currentStreak = 1;
    let longestStreak = 1;

    let current = head;
    let nextNode = head.next;

    while (nextNode !== null) {
        if (current.val === nextNode.val) {
            currentStreak++;
        } else {
            longestStreak = Math.max(longestStreak, currentStreak);
            currentStreak = 1;
        }
        current = nextNode;
        nextNode = nextNode.next;
    }
    longestStreak = Math.max(longestStreak, currentStreak);

    return longestStreak;
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

removeNode(a, "c");
// a -> b -> d -> e -> f

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");

x.next = y;
y.next = z;

// x -> y -> z

removeNode(x, "z");
// x -> y


const q = new Node("q");
const r = new Node("r");
const s = new Node("s");

q.next = r;
r.next = s;

// q -> r -> s

removeNode(q, "q");
// r -> s

const node1 = new Node("h");
const node2 = new Node("i");
const node3 = new Node("j");
const node4 = new Node("i");

node1.next = node2;
node2.next = node3;
node3.next = node4;

// h -> i -> j -> i

removeNode(node1, "i");
// h -> j -> i

const t = new Node("t");

// t

removeNode(t, "t");
// null



*/

/*  GAME PLAN

    current var

    while loop(till curr is null)
    check if current val equals target val
    reroute prev.next ot current.next
    break

    move prev to current
    move current to current.next node



    return head
*/

const removeNode = (head, targetVal) => {
    if (head.val === targetVal) return head.next;

    let prev = null;
    let current = head;

    while (current !== null) {
        if (current.val === targetVal) {
            prev.next = current.next;
            break;
        }
        prev = current;
        current = current.next;
    }

    return head;
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

insertNode(a, 'x', 2);
// a -> b -> x -> c -> d

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

insertNode(a, 'v', 3);
// a -> b -> c -> v -> d

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

insertNode(a, 'm', 4);
// a -> b -> c -> d -> m

const a = new Node("a");
const b = new Node("b");

a.next = b;

// a -> b

insertNode(a, 'z', 0);
// z -> a -> b


*/

/*  GAME PLAN

    consider edge case of index being 0

    if index is 0, create a new head and point next to old head


    current and current index variable
    while loop (till null)
        if place === index -1
        save current next
        change current next to new next
        change the next next to the old next

    increment current index
    move current point forward



*/

const insertNode = (head, value, index) => {
    if (index === 0) {
        const newHead = new Node(value);
        newHead.next = head;
        return newHead;
    }

    let current = head;
    let place = 0;

    while (current !== null) {
        if (place === index - 1) {
            const next = current.next;
            current.next = new Node(value);
            current.next.next = next;
        }
        place++;
        current = current.next;
    }

    return head;
};

// ############################################################################################################################################

/* TESTS
createLinkedList(["h", "e", "y"]);
// h -> e -> y

createLinkedList([1, 7, 1, 8]);
// 1 -> 7 -> 1 -> 8

createLinkedList(["a"]);
// a

createLinkedList([]);
// null
*/

/*  GAME PLAN

*/

var createLinkedList = (values) => {
    let dummyhead = new Node(null);
    let tail = dummyhead;

    for (let i = 0; i < values.length; i++) {
        tail.next = new Node(values[i]);
        tail = tail.next;
    }

    return dummyhead.next;
};

var createLinkedList = (values) => {
    if(values.length === 0) return null;

    let dummy = new Node(null);
    let curr = dummy;


    let i = 0;

    while(i < values.length){
        curr.next = new Node(values[i]);
        curr = curr.next

        i++;
    }

    return dummy.next;
};
// ############################################################################################################################################

/* TESTS
//   621
// + 354
// -----
//   975

const a1 = new Node(1);
const a2 = new Node(2);
const a3 = new Node(6);
a1.next = a2;
a2.next = a3;
// 1 -> 2 -> 6

const b1 = new Node(4);
const b2 = new Node(5);
const b3 = new Node(3);
b1.next = b2;
b2.next = b3;
// 4 -> 5 -> 3

addLists(a1, b1);
// 5 -> 7 -> 9

//  7541
// +  32
// -----
//  7573

const a1 = new Node(1);
const a2 = new Node(4);
const a3 = new Node(5);
const a4 = new Node(7);
a1.next = a2;
a2.next = a3;
a3.next = a4;
// 1 -> 4 -> 5 -> 7

const b1 = new Node(2);
const b2 = new Node(3);
b1.next = b2;
// 2 -> 3

addLists(a1, b1);
// 3 -> 7 -> 5 -> 7

//   39
// + 47
// ----
//   86

const a1 = new Node(9);
const a2 = new Node(3);
a1.next = a2;
// 9 -> 3

const b1 = new Node(7);
const b2 = new Node(4);
b1.next = b2;
// 7 -> 4

addLists(a1, b1);
// 6 -> 8

//   89
// + 47
// ----
//  136

const a1 = new Node(9);
const a2 = new Node(8);
a1.next = a2;
// 9 -> 8

const b1 = new Node(7);
const b2 = new Node(4);
b1.next = b2;
// 7 -> 4

addLists(a1, b1);
// 6 -> 3 -> 1

//   999
//  +  6
//  ----
//  1005

const a1 = new Node(9);
const a2 = new Node(9);
const a3 = new Node(9);
a1.next = a2;
a2.next = a3;
// 9 -> 9 -> 9

const b1 = new Node(6);
// 6

addLists(a1, b1);
// 5 -> 0 -> 0 -> 1
*/

/*  GAME PLAN

*/

const addLists = (head1, head2) => {
    asdflkjh;

    const dummyHead = new Node(null);
    let tail = dummyHead;
    let carry = 0;

    let curr1 = head1;
    let curr2 = head2;

    while (curr1 !== null || curr2 !== null || carry === 1) {
        const val1 = curr1 === null ? 0 : curr1.val;
        const val2 = curr2 === null ? 0 : curr2.val;
        const sum = val1 + val2 + carry;
        carry = sum > 9 ? 1 : 0;

        const digit = sum % 10;

        if (curr1 !== null) curr1 = curr1.next;
        if (curr2 !== null) curr2 = curr2.next;

        tail.next = new Node(digit);
        tail = tail.next;
    }

    return dummyHead.next;
};

// Recursive
const addLists = (head1, head2, carry = 0) => {
    // base case
    if (head1 === null && head2 === null && carry === 0) return null;

    const val1 = head1 === null ? 0 : head1.val;
    const val2 = head2 === null ? 0 : head2.val;

    const sum = val1 + val2 + carry;
    const nextCarry = sum > 9 ? 1 : 0;
    const digit = sum % 10;

    const resultNode = new Node(digit);

    const next1 = head1 === null ? null : head1.next;
    const next2 = head2 === null ? null : head2.next;

    resultNode.next = addLists(next1, next2, nextCarry);

    return resultNode;
};

// ############################################################################################################################################
