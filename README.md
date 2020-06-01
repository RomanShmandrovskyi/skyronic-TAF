## Getting started

1. Clone repository to your local machine:
```
git clone https://github.com/RomanShmandrovskyi/skyronic-TAF.git
```
2. Open terminal, load cloned repository folder and install needed node modules:
```
cd skyronic-TAF; npm install
```

## Run tests
After all modules ware installed you can run tests in several modes:
#### A. Standard run
Just to run Cypress tests on default settings use next command:
```
./node_modules/.bin/cypress run
```
Tests will be runned on default settings:
- all founded test files will be runned
- on Electron browser
- in headless mode

#### B. On Chrome
To run tests on Chrome browser just add flag `-b` (`--browser`) to command before and specify browser name:
```
./node_modules/.bin/cypress run -b chrome
```
Using this command Cypress will run tests on Chrome browser in opened mode

#### C. On Chrome in headless mode
To run tests on Chrome in headless mode just add `--headless` flag to command:
```
./node_modules/.bin/cypress run -b chrome --headless
```

#### D. No-exit mode
To prevent the Cypress Test Runner from exiting after running tests in a spec file, use `--no-exit` flag:
```
./node_modules/.bin/cypress run -b chrome --no-exit
```
Usage of `--headless` and `--no-exit` flags at the same time no make any sense.

To stop `no-exit` mode - press `Ctrl+c` shortcut  in terminal.

## Testing of responsive websites
To test the same UI in different resolutions, we need:
1. At first, specify how different it is on different devices (tablets, leptops, phones). 
2. Investigate how much DOM tree will be transformed, after screen rosolution will be changed:
   - DOM tree is the same, but in some way using JS on frontend was changed: one columns -> two columns, images resolution was reduced, like a size of text. In this way will be OK to use the same TAF for testing without any changes (it is possible to use some additional methods to scroll to some elements, like `scrollIntoView()`, and so on);
   - DOM tree is the same but with some rerendered components like: hide nav bar to burger menu, hide left menu to a single column and so on. It still will be OK to use the same TAF, but must add some new component objects to represent them on minimised screen resolution;
   - DOM tree is fully different and stored on separated host (like `someService.com` -> `m.someService.com`). In this case the best practice will be to create a fully new TAF to provide testing on lower resolution.
