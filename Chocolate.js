(function (global) {

    const $ = (selector) => document.querySelector(selector);
    const $$ = (selector) => document.querySelectorAll(selector);
  
    const listenTo = (selector, event, handler) => {
      $$(selector).forEach(el => el.addEventListener(event, handler));
    };
  
    function createEl(tag, attrs = {})
    {
      const el = document.createElement(tag);
      Object.entries(attrs).forEach(([key, value]) => {
        if (key === 'text') el.textContent = value;
        else el.setAttribute(key, value);
      });
      return el;
    }
  
    function appendEl(element, target, isElement = true)
    {
        if (!isElement) {
            // if it's not an element then it's a selector!
            target = $(target);
        }
        target.appendChild(element);
    };

    global.$ = $;
    global.$$ = $$;
    global.listenTo = listenTo;
    global.createEl = createEl;
    global.appendEl = appendEl;

})(window);
  