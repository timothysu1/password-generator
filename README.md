# Portfolio - Timothy Su
This webpage allows for the user to create a randomly generated password they can use. The user is allowed to choose the desired length of the password and what type of characters that will compose the password.

## Built With
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Git](https://git-scm.com/)
## Deployed Link

* [See Live Site](https://timothysu1.github.io/password-generator/)

## Usage
The user is brought to a page where they are prompted to click a button to initiate the password making process. The user will then enter the desired character length of the password. The user will then be prompted to choose what type of characters they want in their password. Once all of the prompts are answered, then the password will be created for the user to copy. If the user wishes to make another password, then they can press the button again to repeat the process.

## Learning Points 
* Using JavaScript to give functionality to a webpage
* Using pseudocode to deconstruct a problem into manageable pieces
* How Javascript can interact with the HTML file
* Creating and recalling data from arrays
* Utilizing functions to perform a task

## Important Code

```js
var pass = "";
  for (var i = 0; i < charaLen; i++) {
    var index = Math.floor(Math.random() * userChara.length);
    pass += userChara[index];
  }
return pass;
```

This loop adds randomly generated characters to the variable "pass". This process continues until the desired password length is reached. The password is then sent when the variable "pass" is returned.

## Author Info

### Timothy Su

* [LinkedIn](https://www.linkedin.com/in/timothysu1/)
* [Github](https://github.com/timothysu1)


## Credits
Converting all letters in an array to upper case: https://askjavascript.com/how-to-convert-an-array-to-uppercase-in-javascript/

## License

Please refer to license in the repo. 