// 04 GRAPH

// ############################################################################################################################################

/* TESTS

*/

/*  GAME PLAN

*/

const hasPath = (graph, src, dst) => {
    if (src === dst) return true;

    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst) === true) {
            return true;
        }
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
