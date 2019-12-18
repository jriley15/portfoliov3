---
path: "/post/portfolio-v2"
date: "2019-06-18"
title: "Portfolio v2"
description: "In-depth reflection of the technical decisions and design of my second portfolio project featuring some of the latest front-end technology."
previewImage: "https://images.jrdn.tech/p2.JPG"
---

![](https://images.jrdn.tech/p2.JPG)

Link to project details (with more images): https://portfolio.jrdn.tech/project/portfolio-2

(Update 10-4-2019 - ended up switching back to Gatsby for static data fetching reasons)

#### Introduction

About a year after creating my first portfolio last month I got the sudden itch to go back and try to improve on it before I graduate. Since the completion of my first portfolio, I've tackled several other projects where I learned a ton of new stuff that I could apply. I also knew that I'd want to spend a lot more time on the planning phase since I'm more familiar with different open source solutions that I could integrate and use to make the best portfolio possible.

#### Technical Decisions

I knew from the beginning that I'd want to make the website static (and with react), since the data rendered on the page wasn't going to be changing much (occasional blog posts and new projects). I considered using either Gatsby or Next js for the front-end since both of these frameworks offer a static site generator feature for react apps. Statically generating a react app makes it super fast and you don't have to worry about spinning up a node server just to get your content sever side render ed for SEO. After doing some more research, I decided to pick Next Js since i'd previously done a project with it and plan on doing more in the future (Next offers SSR as well as SSG exporting).

The next thing I needed to pick was a headless CMS for my SSG to use to fetch and render static content. I did some research on several different CMS's and ended up picking Sanity.io. Sanity has a great free option with plenty of features and data limits for developers to use. They offer up to two data sets and a fully customizable and hosted api that's very intuitive to use. Another huge seller for me was the fact that they have an easy way to trigger web hooks in other systems to kick off CI/CD jobs, which brings me to the next decision.

I've always pretty much used AWS for all of my cloud hosting needs - more specifically EC2 and S3 with cloudfront. I wanted to pick a more streamlined and automated approach to my CI/CD pipeline for this project so I looked into using a few different platforms. The one I ended up going with is Netlify. Netlify offers so many features for hosting front-ends in the cloud, the main things that sold me are the automated continuous deployment/build system they have which integrates with Github and free static web hosting. I have two branches for dev and production in my Github repository that Netlify watches and continuously kicks off builds / deployments whenever anything new is pushed or merged. Since my site is completely static, this works out great in combination with their CDN for fast loading times. Another feature that they offer that I'm using is their cloud hosted forms - where they build a form submission end-point for you and will even add an email send hook to send the forms to any email you want. I use this for my contact form.

For the UI library I went ahead and stuck with Material UI since I'm really familiar with it at this point and it satisfies all the customization needs I have. The website architecture is broken up into pages and reusable react components using the new hooks api. That wraps up the big decisions I made in the beginning for this project, with the main goal to have an automated pipeline and not have to host my own back-end.
