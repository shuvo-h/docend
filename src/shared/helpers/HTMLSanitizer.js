export const afterSanitizeAttributes = currentNode => {
    if ('target' in currentNode) {
    currentNode.setAttribute('target', '_blank');
    }
};
const uponSanitizeElement = () => {
    // This hook is called before DOMPurify sanitizes an HTML element.
    // Do something with the node
    // console.log(currentNode);
};


export const domPurifyConfig = {
    hooks: {
        uponSanitizeElement,
        afterSanitizeAttributes,
    },
};
