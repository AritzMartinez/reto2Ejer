let nodoHtml = document.documentElement;
console.log(nodoHtml.nodeName);

let nodehead = nodoHtml.children[0];
let nodebody = nodoHtml.children[1];


console.log(nodehead.nodeName);


let nodeHead = nodoHtml.firstChild;
console.log(" " + nodeHead.nodeName);

let nodeTitle = nodeHead.children[0];
let nodeScript = nodeHead.children[1];
let nodeScript1 = nodeHead.childNodes[3];

console.log("  "+nodeTitle.nodeName);
console.log("  "+nodeScript.nodeName);
console.log("  "+nodeScript1.nodeName);


let nodoBody = nodoHtml.children[1];
console.log(" " + nodoBody);
