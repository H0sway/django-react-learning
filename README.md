# How to Combine React With Django

## Introduction
React is my favorite technology to use as a web developer. I love working through things like conditional rendering logic while building out projects using React. Additionally I like to see a visual representation of what I've built, which isn't as clear when working on the back-end for a project. Django is a popular Python server framework that many companies use for their sites. When I decided to teach myself Django I knew I wanted to learn how to use React for the views.

I followed [this](https://www.valentinog.com/blog/tutorial-api-django-rest-react/) tutorial by Valentino Gagliardi before moving on to add new things myself. The app allows users to leave "messages" along with their names and email addresses. They can also view everyone's messages. One of the reasons why I chose this tutorial was that it used Webpack as a bundler rather than using Create-React-App to handle the React part of the project. I prefer using Webpack for full stack projects as I feel it keeps combining the front-end and the back-end more simple.

## Learning Topics

1. Render Views With React

  Just the basics. There's a lot of subtleties with React and Django that aren't covered by this tutorial. So far I've managed to render some basic views through React, but I'm looking to see how it works with more complicated things, like once I add in React Router.

 2. Configure Django Admin

  While you don't need to do anything special normally to have Django's admin show up, once you add in React it seems to break it. Currently I have admin access up and running and the basics configured. I'm currently planning on learning more about how to use Django's admin package.

3. Full CRUD Functionality

  CRUD stands for Create, Read, Update, and Delete. Four basic activities users will generally want from an application. Right now basic users can only Create, but full CRUD is possible for Admins.

4. Upload Pictures to the Database

  Something I've wanted to learn how to do for a while, not just with Django. I want to learn how to allow users to upload and store photos that I can then render in the views the same way they can see their messages. A common feature on sites, but not something I've ever needed to learn how to use in past projects.
