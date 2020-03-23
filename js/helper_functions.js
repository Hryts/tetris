var getCurrentObject =  () => objects.find(object => object.state === 'falling');
var createPlayground = () => (new Array(10).fill().map( el => (new Array(5).fill())));
function lowest(obj){
    let res = [];
    let lowest = Number.POSITIVE_INFINITY;
    let tmp;
    for (let i=obj.position.length-1; i>=0; i--) {
        tmp = obj.position[i][0];
        if (tmp < lowest) lowest = tmp
    }
    for (let i=obj.position.length-1; i>=0; i--) {
        if (obj.position[i][0] === lowest) res.push(obj.position[i])
    }
    return res
}
function somethingLower(obj) {
    let res = true;
    obj.position.forEach(pos => (res = res &&
        (!playground[pos[0]-1][pos[1]] && !obj.position.includes([pos[0]-1, pos[1]])) ))
    return !res
}
function leftest(obj){
    let res = [];
    let leftest = Number.POSITIVE_INFINITY;
    let tmp;
    for (let i=obj.position.length-1; i>=0; i--) {
        tmp = obj.position[i][1];
        if (tmp < leftest) leftest = tmp
    }
    for (let i=obj.position.length-1; i>=0; i--) {
        if (obj.position[i][1] === leftest) res.push(obj.position[i])
    }
    return res
}
function somethingLefter(leftest) {
    let res = true;
    leftest.forEach(pos => (res = res && !playground[pos[0]][pos[1]-1]))
    return !res
}
function rightest(obj){
    let res = [];
    let rightest = Number.NEGATIVE_INFINITY;
    let tmp;
    for (let i=obj.position.length-1; i>=0; i--) {
        tmp = obj.position[i][1];
        if (tmp > rightest) rightest = tmp
    }
    for (let i=obj.position.length-1; i>=0; i--) {
        if (obj.position[i][1] === rightest) res.push(obj.position[i])
    }
    return res
}
function somethingRighter(rightest) {
    let res = true;
    rightest.forEach(pos => (res = res && !playground[pos[0]][pos[1]+1]))
    return !res
}