---
path: "/post/portfolio-v1"
date: "2019-08-19"
title: "Portfolio v1"
description: "A reflection on the technical decisions and various things I learned from creating my first professional portfolio."
previewImage: "https://images.jrdn.tech/p1.JPG"
---

![](https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/portfolio_website_lidw.svg)

Link to project details (with more images): https://portfolio.jrdn.tech/project/portfolio-1

Every aspiring software developer needs a portfolio, right? Whether it's a website showcasing all of your projects or just a list of things you've worked on in your resume. I built my first portfolio in the first semester of my junior year in college, and since then i've created two more revisions from scratch. Each portfolio I've created has gotten exponentially better in every aspect from the previous.

#### Technical Decisions

Although I'm not referencing the actual first portfolio I ever made in this post, I still consider this one to be my first professional one. All I knew going into making it is that I wanted to use React. Knowing I didn't want to have to create all of the css from scratch, I researched a few different React UI libraries and came across Material-UI. Since then, I've used Material UI on tons of projects - but this portfolio was my first time experimenting with it. For the back-end custom CMS, I decided to use Microsoft's .Net Core 2.2 (this has been my go to back-end for this year just because I love C# and work with .Net framework a lot at work which has some similarities).

#### Lessons learned

Always opt for a static site generator or server side rendering for SEO
I made the mistake of using plain create-react-app for this project which costed me some search engine ranking points. Most search engine crawlers don't render javascript when they're scanning your pages, making a full react web app pretty useless for most crawlers since javascript is what renders the whole DOM in the browser. Instead of converting this project over to a new framework I decided to just start from scratch in my next portfolio revision.

##### 1. Don't try to make your own CMS

When coming up with a way to dynamically render my personal projects in the portfolio, I came up with the idea of making a simple RESTful back-end that would manage the creating/fetching of the projects in a database - along with my own mark down editor/renderer on the front-end. There are tons of free cloud hosted CMS options available that I should've looked into more before spending tons of time writing my own. Either way, it was a good learning experience that I wouldn't take back. I also ended up making my own responsive image gallery for viewing project images which took longer than I'd planned, when their are tons of open source solutions I could've picked from.

##### 2. Come up with design before building

I sort of designed the UI/UX of the web app as I built it without having any real visual picture or reference to look at, which resulted in me having to go back and re-arrange / re-style things a lot due to indicisiveness.
