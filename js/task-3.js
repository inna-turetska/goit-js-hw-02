 function getElementWidth(content,padding,border) {
    content = Number.parseFloat(content);
    padding = Number.parseFloat(padding)*2;
    border = Number.parseFloat(border)*2;
    const getElementWidth = content + padding + border;
    return getElementWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 