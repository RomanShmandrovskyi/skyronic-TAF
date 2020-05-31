##Getting started

1. Clone repository to your local machine:\
`git clone https://github.com/RomanShmandrovskyi/skyronic-TAF.git`
2. Load cloned repository folder and install needed node modules:\
`cd skyronic-TAF; npm install`

##Run tests
After all modules ware installed you can run tests in several modes:
####A. Standard run
Just to run Cypress tests on default settings use next command:
`./node_modules/.bin/cypress run`\
Tests will be runned on default settings:
- all founded test files will be runned
- on Electron browser
- in headless mode

####B. On Chrome
To run tests on Chrome browser just add flag `-b` (`--browser`) to command before:
`./node_modules/.bin/cypress run -b chrome`\
Using this command Cypress will run tests on Chrome browser in opened mode

####C. On Chrome in headless mode
To run tests on Chrome in headless mode just add `--headless` flag to command:\
`./node_modules/.bin/cypress run -b chrome --headless`

####D. No-exit mode
To prevent the Cypress Test Runner from exiting after running tests in a spec file, use `--no-exit` flag:\
`./node_modules/.bin/cypress run -b chrome --no-exit`
