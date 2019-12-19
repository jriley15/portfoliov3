---
path: "/project/tetris"
date: "2019-08-03"
title: "Tetris"
emoji: "🕹️"
github: "https://github.com/jriley15/Games"
demo: "https://games.jrdn.tech/tetris"
images:
  [
    "https://images.jrdn.tech/tetris-0.gif",
    "https://images.jrdn.tech/tetris-0.JPG",
  ]
description: "Tetris emulation built using node/express with web sockets"
---

#### Objectives

The goal of this project was to explore web sockets with express using node. I decided to re-make Tetris since it's an easy yet challenging game concept to implement. I used web sockets instead of a completelyclient side solution because my original plan was to make the game multi-player. After implementing all of thecore game logic, I decided to start working on something else instead of adding a multi-player mode.

#### Technology stack

- Front End: HTML5 canvas and Javascript (Socket-io-client)
  Back End: Express with Socket-IO running with Node on an Amazon EC2 Linux Distro

#### Features

- Line clearing
- Collision Detection
- With side & bottom walls
- With other shapes
- With side walls while rotating
- Shape Rotation
