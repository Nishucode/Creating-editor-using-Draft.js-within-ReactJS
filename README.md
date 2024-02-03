This project implements an editor using Draft.js within ReactJS. The editor allows users to format text based on specific input characters, save their content, and retrieve it from local storage.
Features
Typing # as the first string in a line & pressing space makes the following text appear as a heading format.
Typing * as the first string in a line & pressing space makes the following text appear in bold format.
Typing ** as the first string in a line & pressing space makes the following text appear in red font.
Typing *** as the first string in a line & pressing space makes the following text appear underlined.
Pressing the Save button persists everything typed in the editor into local storage.
On refreshing the page, the saved information is refilled into the editor.

Components
1) App.js
Contains the main structure of the application.
Integrates the MyEditor component.
2) MyEditor.js
Implements the editor functionality using Draft.js.
Handles the formatting of text based on specific input characters.
Saves and retrieves content from local storage.
3) CSS file
App.css contains styles for the main application layout.

