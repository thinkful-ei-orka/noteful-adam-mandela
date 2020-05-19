-main
-dynamic folder
-dynamic note

each will have: header/main section/sidebar
**Header will be the same for each route, title will be link to main

main:
  path == /
  will display all available notes (modified name/date)
  sidebar will display list of folders (none selected)

folder:
  path == /folder/folderid
  folderid = id reference for a folder
  only display notes in that folder
  sidebar will show the selected folder

note:
  path == /note/noteid
  noteid = note id reference
  display currently selected notes name, modified date, and content
  sidebar will show selected note and "back button"