# Zendesk ticket reader

## Basic information

This web app contains a React frontend and a Node.js backend. It is a zendesk ticket reader. 

It supports wrong credentials or API being unavaliable.

## Usage

There are some scripts/command to run in order to start the app. 

### `sh ./add_secret.sh`

This should be run first. You should be prepared to enter your (or mine, if you are the admin) email and API token.

### `sh ./start_server.sh`

It installs the dependencies and start the server. 

### `yarn start`

It starts the frontend. Run it under the zendesk-ticket-viewer folder. 

### `sh ./run_tests.sh`

It runs the frontend and backend tests. Please press `q` after the frontend tests finished or `a` if you want to try again. 
