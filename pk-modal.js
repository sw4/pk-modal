// MAIN PK MODAL DECLARATION
var pk = pk || {};
(function (pk) {
    pk.modal = function (h, c) {        
        if (!h || !c) return;
        // HELPER FUNCTIONS
        function getStyle(obj, style) {
            var css = window.getComputedStyle(obj);
            return css.getPropertyValue(style);
        }
        function addClass(thisEl, cssClass) {
            var cssClasses = thisEl.getAttribute('class');
            cssClasses = cssClasses || '';
            if (cssClasses && cssClasses.indexOf(cssClass) > -1) return;
            thisEl.setAttribute('class', (cssClasses ? cssClasses + ' ' : '') + cssClass);
            return thisEl;
        };
        function removeClass(thisEl, cssClass) {
            var cssClasses = thisEl.getAttribute('class');
            if (!cssClasses) return;
            thisEl.setAttribute('class', cssClasses.replace(cssClass, ''));
            return thisEl;
        };
        function bindEvent(ev, thisEl, fn) {
            
            
            if (thisEl.addEventListener) {
                thisEl.addEventListener(ev, fn, false);
            } else {
                thisEl.attachEvent("on" + ev, fn);
            }
        }                
        // INIT SCROLL STRUCTURE  
        var el=document.createElement('div');  
        var mask=document.createElement('div');  
        var container=document.createElement('div');
        var box=document.createElement('div');
        var close=document.createElement('span');
        var header=document.createElement('div');
        header.innerHTML=h;    
        el.innerHTML=c;
        addClass(box, 'pk-modal-box');
        addClass(close, 'pk-modal-close');
        addClass(header, 'pk-modal-header').appendChild(close);        
        addClass(el, 'pk-modal-content');
        box.appendChild(header);
        box.appendChild(el);        
        addClass(container, 'pk-modal-container').appendChild(box);          
        addClass(mask, 'pk-modal-mask').appendChild(container);        
        document.body.appendChild(mask);
        
        function preventBubble(e) {
            if (e.preventDefault) e.preventDefault();
            if (e.stopPropagation) e.stopPropagation();
            e.cancelBubble = true; // IE events
            e.returnValue = false; // IE events
            return false;
        }
        function closeModal(e){
            
            preventBubble(e);
            addClass(removeClass(mask, 'pk-show'), 'pk-hide');
            var cleanup=setTimeout(function(){
             //   mask.parentNode.removeChild(mask);
            },2000);
        }
        bindEvent("click", mask, closeModal);
        bindEvent("click", close, closeModal);        
        addClass(mask, 'pk-show');
    }
    return pk;
})(pk);

