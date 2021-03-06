# Mastered Tutors

<!-- [Visit the website] our websit link here  -->

Mastered Tutors is a website for students to find tutors or become tutors. 

# Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
  - [Purpose](#purpose)
  - [Technologies and Architecture](#technologies-and-architecture)
    - [Frontend](#frontend)
      - [Tech Stack](#tech-stack)
      - [Architecture (Components)](#architecture-components)
    - [Backend](#back;end)
      - [Tech Stack](#tech-stack-1)
      - [Architecture (APIs)](#architecture-apis)
- [Features](#features)
- [Getting Started](#getting-started)
  
# Overview

> For a full motivational and technical overview, [see this](https://docs.google.com/document/d/1Bi95rcIHIHZSbaWN5iSHNnja8-2kWTVF6D5rMML8D34/edit?usp=sharing)

## Purpose

Mastered Tutors offers cheap, convenient, and effective educational help by providing a platform to 
connect students with others like them. Those looking to tutor can signup through Mastered Tutors through 
a pain-free registration and receive consistent opportunities to tutor. Those looking for tutoring can find
a tutor at a convenient time for them.

## Technologies and Architecture

### Frontend

#### Tech Stack

1. React
2. CSS for styling

#### Architecture (Components)

   Banner, Header, Home, Login, Register, 
   Postlist, tutorform

### Backend

#### Tech Stack

1. Node.js
2. Express.js and Mongoose middleware
3. MongoDB


# Features
Users can sign up, login, create posts, search for posts,  
and like posts.

# Getting Started

1. Download the repo

```
$ git clone https://github.com/Firius0408/MasterTutoring.git
```

2. Install dependenices in the frontend
```
$ cd MasterTutoring/frontend
$ npm install
```
3. Launch frontend
```
$ npm start
```

4. Install dependencies in the backend
```
$ cd ../backend
$ npm install
```

5. Install environmental variable to backend
```
$ echo MONGO_DATABASE_URL=insert_url_to_mongo_database_here > .env
```


6. Launch backend
```
$ npm start
```
