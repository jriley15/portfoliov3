---
path: "/project/jwebsite-base-template"
date: "2019-05-04"
title: "JWebsite Base Template"
emoji: "ℹ️"
github: "https://github.com/jriley15/JWebsite"
demo: "https://jweb.jrdn.tech/"
images:
  [
    "https://images.jrdn.tech/jweb-0.JPG",
    "https://images.jrdn.tech/jweb-1.JPG",
    "https://images.jrdn.tech/jweb-2.JPG",
    "https://images.jrdn.tech/jweb-3.JPG",
    "https://images.jrdn.tech/jweb-4.JPG",
  ]
description: "Website base with user authentication and real time chatting built with React and .Net core"
---

#### Objectives

The main goal of this project was to create a solid website base that I could use for any future projects. I also wanted to explore some of the open source .net core features like entity framework core and signalR.

#### Technology stack

- Front End: React & Redux with Material-UI styling deployed onto AWS S3 with Cloudfront
- Back End: .Net Core 2.2 web api deployed on an AWS EC2 windows server instance running IIS
- Database: PostgreSQL running on AWS RDS

#### Features

- User Authentication
- Uses JWT for a stateless design
- Email comfirmation built in using JWT and AWS SES
- Google OAuth optional for signing in / registering
- Live Chat System
- SignalR for web sockets Allows guests and authenticated users to communicate in real time
