
function jsx(...args: any) {
    return args
};

function Fragment(...args: any) {  
    return ["", ...args];
}

export {
    jsx,
    jsx as jsxs,
    Fragment
};
