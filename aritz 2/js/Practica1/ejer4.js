let nodoHtml = document.documentElement;
console.log(nodoHtml.nodeName);

let nodeList = nodoHtml.children;
console.log(nodeList);

let nodeHead = nodoHtml.firstChild;
console.log(nodeHead.nodeName);
let headList= nodeHead.children;
console.log(headList);

let nodeTitle = nodeHead.children[0];
let nodeScript = nodeHead.children[1];

console.log(nodeTitle.nodeName);
console.log(nodeScript.nodeName);


