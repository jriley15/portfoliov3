---
path: "/project/hax-ball"
date: "2019-08-02"
title: "Hax Ball"
emoji: "⚽"
github: "https://github.com/jriley15/Games"
demo: "https://games.jrdn.tech/haxball"
images:
  ["https://images.jrdn.tech/hax-0.JPG", "https://images.jrdn.tech/hax-1.JPG"]
description: "Soccer game remake using express and web sockets"
---

#### Objectives

The goal of this project was to explore web sockets with express using node. My friends and Iused to play an old flash soccer game called Haxball that inspired me to do this remake of it sinceI figured it'd be some what of a challenge to implement some of the math and 2d graphics. It's fully multiplayer but I never got around to adding in scoring or multiple games/rooms.

#### Technology stack

- Front End: HTML5 canvas and Javascript
- Back End: Express with Socket-IO running on an Amazon EC2 Linux Distro
- Features
- Fully multiplayer
- Any amount of players can join single game
- Uses web sockets
- High refresh rate with low latency
- Light physics engine
- Player & Ball collision
- Ball kicking (with spacebar)
- Bounds collision
- Ball and Player momentum
