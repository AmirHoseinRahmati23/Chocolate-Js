(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD (like RequireJS)
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node.js / CommonJS
        module.exports = factory();
    } else {
        // Browser global
        root.Chocolate = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {

    const $ = (selector, root = document) => root.querySelector(selector);
    const $$ = (selector, root = document) => root.querySelectorAll(selector);

    const listenTo = (selector, event, handler, root = document) => 
    {
        $$(selector, root).forEach(el => el.addEventListener(event, handler));
    };

    function createEl(tag, attrs = {}, root = document) 
    {
        const el = root.createElement(tag);
        Object.entries(attrs).forEach(([key, value]) => {
            if (key === 'text') el.textContent = value;
            else el.setAttribute(key, value);
        });
        return el;
    }

    function appendEl(element, target, isElement = true, root = document) 
    {
        if (!isElement) target = $(target, root);
        target.appendChild(element);
    }

    function log(...args)
    {
        if (typeof console !== 'undefined') {
            console.log('%c🍫 Chocolate.js:', 'color: chocolate; font-weight: bold;', ...args);
        }
    }
    return { $, $$, listenTo, createEl, appendEl, log};

}));
