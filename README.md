[![Build Status](https://travis-ci.org/Habu-Kagumba/listy-app.svg?branch=master)](https://travis-ci.org/Habu-Kagumba/listy-app)


# Listy Application

This is a simple micro ~~CR~~UD application built in React + Redux. The application is consuming the https://jsonplaceholder.typicode.com/ dummy json API.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need `node` inorder to run the application locally.
for OS specific instructions, you can go thought this guide. [Installing Node](https://github.com/nodejs/node/wiki/Installation).

An alternative is installing a version manager inorder to easily run different versions of node. My favorite is [asdf](https://github.com/asdf-vm/asdf).

This project was developed with Node v8.

### Installing

These are instructions to get you up and running locally.

Note: You can also use `yarn`.

First clone the repository and change into the directory:

```sh
git clone https://github.com/Habu-Kagumba/listy-app.git
```

Change into the directory, these command may vary according to your OS. For Linux, the command would be `cd listy-app`. Next you need to install project dendencies using `npm`:

```sh
npm install
```

To start the development server, runthis command. For OSX users, this will automatically open the page for you on the browser.

```sh
npm run start
```
The application looks like this:

![Listy-app screenshot](http://res.cloudinary.com/habu-kagumba/image/upload/c_scale,r_7,w_3840/v1516262533/Screen_Shot_2018-01-18_at_11.00.47_aqbvd7.png)

#### Manual build

You can build the project which will create a build folder in the project root directory.

```sh
npm run build
```

#### Testing

The project uses Jest. To run the tests, use this command:

```sh
npm run test
```

To also include coverage, you can run:

```sh
npm run coverage
```

#### Linting

The project uses ES-Lint, the command to link the project is:

```sh
npm run lint
```
