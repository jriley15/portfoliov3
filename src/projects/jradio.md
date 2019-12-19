---
path: "/project/jradio"
date: "2019-08-05"
title: "JRadio"
emoji: "🎵"
github: "https://github.com/jriley15/jradio"
demo: "https://radio.jrdn.tech/"
images:
  [
    "https://images.jrdn.tech/radio-0.JPG",
    "https://images.jrdn.tech/radio-1.JPG",
  ]
description: "Online radio web app for listening to Youtube and Soundcloud audio with others"
---

#### Objectives

The goal of this project was to create an online radio for people to listen to Youtube and Soundcloud music together. The inspiration for thiscame from lifting with friends at the gym and wanting some type of free cross-platform service for listening to music/mixes together at a synchronizedrate. I decided that the easiest way to create this radio was to make the front-end a responsive web app. I made the back-end with express.

#### Technology stack

- Front End: React with Material UI being rendered server-side by Next.js
- Back End: Express back-end running on an Amazon Linux EC2 instance

#### Features

- Supports all valid Youtube links
- Supports all valid Soundcloud links
- Music downloads and streams to listeners at synchronized time
- Audio is disposed of when song is done playing
- Songs can be skipped
- Live user chat
- Real-time
- Uses web sockets
