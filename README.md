# Unit 11 Express Homework: Note Taker

## Description
 Note taking application designed to write, save, and delete notes, written to and retrieved from a back end JSON file.


## You can click [here](https://lit-wildwood-85399.herokuapp.com/) for deployed application

---

![Muck-up](./public/assets/images/noteTaker.JPG);

![Muck-up](./public/assets/images/notes.JPG)

## Challenge
I struggled with finding a working method for the delete function. Eventually after some debugging I found the best method to remove a note using my unique IDs was to use a filter that would return an array with every entry except the entry I was looking for. By rewriting the unique IDs of each entry after the removal, I was able to ensure that every note's ID was equal to their position in the array, thus the delete function would remove only the selected note every time.

## Github Repo
[Note-taker](https://github.com/Lauracejas/Note-Taker)







