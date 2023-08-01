# E-planner (backend)

## Overview

This repository is the backend for the
[Event Planner](https://github.com/BlackyHat/E-planner) application, developed
as part of the **_NodeJS_** course.

## Installation and Usage

To get started with the server, follow these steps:

1. Clone this repository to your local machine.
2. Open the terminal and navigate to the project directory.
3. Run the following commands:

```
npm i
npm start (for production)
npm run dev (for development)
```

## Endpoints

The server provides the following endpoints:

- /events: Provides endpoints for managing a user's events:
  - GET /events: Retrieves a collection of events.
  - POST /events: Creates a new event.
  - PATCH /events/{id}: Updates an existing event.
  - DELETE /events/{id}: Deletes an existing event.

## Technologies Used

- Node.js
- Express.js
