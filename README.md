# metapix
This project is a reverse image search engine that allows you to perform reverse image searches using multiple APIs, including Google Reverse Image Search API and TinEye API.

Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Before you get started, make sure you have the following software installed:

Node.js
npm or yarn
A text editor such as Visual Studio Code or Atom

Installing
Follow these steps to install the project on your local machine:

## Clone the project repository to your local machine:

git clone https://github.com/[username]/metapix.git

## Change into the project directory:

cd metapix

## Install the dependencies:

npm install
OR
yarn install

Create a .env file in the root directory and set the following environment variables:

GOOGLE_API_KEY=<your-google-api-key>
TINEYE_API_KEY=<your-tineye-api-key>

## Start the development server:
sql npm start
or
sql yarn start

## Open your web browser and navigate to http://localhost:3000 to view the application.

Usage
The reverse image search engine allows you to perform reverse image searches by uploading an image. You can choose to search using Google Reverse Image Search API or TinEye API. The results of the search will be displayed, along with the image's EXIF data. You can also export the results to a searchable PDF format.

Built With
React - A JavaScript library for building user interfaces
Node.js - A JavaScript runtime for server-side applications
Express - A Node.js web application framework
axios - A JavaScript library for making HTTP requests
TinEye API - A reverse image search API
Google Reverse Image Search API - A reverse image search API
React-to-PDF - A React component that generates PDFs
Exif-js - A JavaScript library for reading EXIF data from image files

Contributing
If you would like to contribute to this project, please follow these steps:

Fork the project repository
Create a new branch for your changes
Make the changes and commit them
Push the changes to your fork
Submit a pull request
License
This project is licensed under the MIT License - see the LICENSE file for details.
