var pk = pk || {};
(function (pk) {
    pk.modal = function (opt) {      
        var e = opt.element || document.body;
        var h = opt.header;
        var c = opt.content;        
        if (!e) return;
        var content = document.createElement('div');
        var mask = document.createElement('div');
        var box = document.createElement('div');
        var close = document.createElement('span');
        var header = document.createElement('div');
        var boxH = 0;
        header.innerHTML = h;
        content.innerHTML = c;
        pk.addClass(box, 'pk-modal-box');
        pk.addClass(close, 'pk-modal-close');
        pk.addClass(header, 'pk-modal-header').appendChild(close);
        pk.addClass(content, 'pk-modal-content');
        box.appendChild(header);
        box.appendChild(content);
        pk.addClass(mask, 'pk-modal-mask').appendChild(box);
        e.parentNode.appendChild(mask);
        function closeModal() {
            pk.addClass(pk.removeClass(mask, 'pk-show'), 'pk-hide');
            var cleanup = setTimeout(function () {
                mask.parentNode.removeChild(mask);
            }, 500);
        }
        var drag = false;
        pk.bindEvent("click", mask, function (e) {
            if (e.target != mask) return;
            closeModal();
        });
        pk.bindEvent("click", close, closeModal);
        pk.bindEvent("resize", window, function (event) {
            pk.center(box);
        });
        pk.addClass(mask, 'pk-show');
        boxH = box.offsetHeight;
        var resizeMonitor = setInterval(function () {
            var boxHN = box.offsetHeight;
            if (boxH != boxHN) {
                pk.center(box);
                boxH = boxHN;
            }
        }, 500);
        pk.center(box);
        opt.draggable && pk.draggable && pk.draggable({
            element: box,
            handle: header,
            move: true
        });
    };
    return pk;
})(pk);
