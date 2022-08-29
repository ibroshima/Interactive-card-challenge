# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Links

- Solution URL: (https://github.com/ibroshima/Interactive-card-challenge)
- Live Site URL: (https://moonlit-manatee-285504.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Learnt to use events like keyup, keydown and keypress. e.g I used it to limit the length of characters to be entered in an input field.
```html
<input onkeypress="if(this.value.length==3) return false;"/>
```
I also learnt the major difference between display: none; and visibility: hidden;

I learnt how to return multiple values in JS as an array or an object.
```js
  return [valid, firstName, names];
```
Overall i was able to play around with js in this project. I intend to work on more projects and also improve on this with time. 

### Useful resources

- (https://www.javascripttutorial.net/javascript-dom/javascript-form-validation/) - This helped me to understand how to structure my code for validation of form. I will also be using his structure of his form in future projects.

- (https://www.w3schools.com) 

## Author

- Frontend Mentor - [@ibroshima](https://www.frontendmentor.io/profile/ibroshima)
- Twitter - [@ibroshima](https://www.twitter.com/ibroshima)
- Github - (https://github.com/ibroshima)


