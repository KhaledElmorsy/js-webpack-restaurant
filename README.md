# js-webpack-restaurant

## Motivation
I made this page to practice using webpack, and to use modules to write more efficient and structured code.

## Details
- I made and used helper modules to consolidate and streamline multi-stage tasks, i.e. element creation > changing inner html > setting classes/attributes
- With the website's card based design, I made a wrapping module that wraps an element or array of elements and an optional title string in a container
- I separated each tab's element creation into its own modules and had each module return an array of elements when called
- I made a tab switching module that imports the tab modules, places them in objects, and gets passed a string with the tab name and runs the appropriate module, returning its array of contents which get appended in the main script.
- I divided general and tab specific assets into a folder heirarchy for easier navigation and importing

[## Live Demo](https://kelmorsy.github.io/js-webpack-restaurant/)
