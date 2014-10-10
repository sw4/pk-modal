pk-draggable
========

Simple helper library written in pure JS to enable modal dialogs

###Requires

`pk-base.js` and `pk-base.css` as a precursor

###Features

- Automatic centering on display, content change & window resize
- Dragging (requires `pk-draggable.js` and `pk-draggable.css`)
- Close on close button / mask click

###Usage

`pk.modal(opt)`

Where `opt` is an object of the following type:

```javascript
element: // DOM element as a reference point in the document to inject the modal - important in terms of scoping for DD libraries (e.g. angular) - defaults to document.body
header: // HTML content of the modal header
content: // HTML content of the modal body
draggable: // true/false, false by default to allow dragging within the document.body
```
