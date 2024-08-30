This project of mine is a weird spinoff of taboo. Its just really watered down.

The concept itself is simple, you have **Two pages**: 
**index.html**,
**display.html**,

They each are linked with eachother, and they both have to work perfectly or else The program will break.


###index.html
This is the backend display of the program, you can control **display.html** from here. You get a total of six options:
Reveal Hint 1,
Reveal Hint 2,
Reveal Hint 3,
Reveal Hint 4,
Reveal Word,
Change Current Entry

The json file included with the program has a total of four hints, and if you click the reveal button it will reveal all of the hints and the chosen word. Change Current Entry is a simple one, it just refreshes the display and the **Hidden** class, allowing for a new phrase to take the old ones place.

###Display.html
This is the part that most people will be seeing, and it displays the information sent by **index.html**. If the **reveal hint** buttons are pressed, it will remove the hidden class from the hintboxes, allowing for you to veiw them one at a time.
