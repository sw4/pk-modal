pk-modal
========
[![deprecated](http://badges.github.io/stability-badges/dist/deprecated.svg)](https://github.com/sw4/pocketknife) 

Functionality now integrated into [pocketknife ui](https://github.com/sw4/pocketknife)

--------------

[![Build Status](https://travis-ci.org/sw4/pk-modal.svg?branch=master)](https://travis-ci.org/sw4/pk-modal)

Simple helper library written in pure JS to enable modal dialogs


**Licensed under [cc by-sa 3.0](http://creativecommons.org/licenses/by-sa/3.0/) with attribution required**

#####[Demo](http://sw4.github.io/pk-modal)
###Requires

`pk-core.js` and `pk-core.css` as a precursor

###Features

- Automatic centering on display, content change & window resize
- Dragging (requires `pk-draggable.js` and `pk-draggable.css`)
- Close on close button / mask click

###Usage

`pk.modal(opt)`

Where `opt` is an object of the following type:

```javascript
context: // optional, DOM element as a reference point in the document to inject the modal - important in terms of scoping for data driven document libraries (e.g. angular) - defaults to document.body
header: // HTML content of the modal header
content: // HTML content of the modal body
draggable: // true/false, false by default to allow dragging within the document.body
```
