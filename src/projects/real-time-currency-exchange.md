---
path: "/project/real-time-currency-exchange"
date: "2019-08-01"
title: "Real-Time Currency Exchange"
emoji: "💵"
github: "https://github.com/jriley15/cst361"
demo: ""
images:
  [
    "https://images.jrdn.tech/cst361-5.png",
    "https://images.jrdn.tech/cst361-3.png",
    "https://images.jrdn.tech/cst361-4.png",
    "https://images.jrdn.tech/cst361-6.png",
    "https://images.jrdn.tech/cst361-1.png",
    "https://images.jrdn.tech/cst361-2.png",
  ]
description: "Full stack currency exchange web application that me and my partner built for CST-361 (Design patterns in Java) at GCU with JavaEE, JAX-RS, ASP.NET Core worker service, JBoss EAP, and Google charts."
---

#### Objectives

Our general technical approach was to create a simulated “IoT device” as an ASP.NET Core worker service that runs in a time interval loop and queries a third party currency API to fetch currency values. Once the new data is returned from the third party currency API, the worker service then sends it via a POST request to one of our Reporting App’s endpoints. We created our Reporting App with JavaEE and JSF and have functionality for user authentication and a graphical view for displaying the currency exchange rates. Our Reporting App adds and/or updates currency values in a MySQL database that are delivered to its POST endpoint. We use Bootstrap, Google’s Geo Chart API, and a JSF DataTable on the front-end for our GUI. Our JavaEE application is designed using an N-layered architecture with the business and data layers separated on top of the MVC pattern. For our database, we are currently using a Heroku MySQL database and the data layer uses JDBC to connect to it.

#### Tech stack

- JavaEE
- Jax-RS
- JSF
- JDBC
- ASP.NET Core
- MySQL

#### Design

![](https://images.jrdn.tech/cst361-1.png)
![](https://images.jrdn.tech/cst361-2.png)
