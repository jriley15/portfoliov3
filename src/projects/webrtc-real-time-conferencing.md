---
path: "/project/webrtc-real-time-conferencing"
date: "2019-08-08"
title: "WebRTC Real-time Conferencing"
emoji: "📹"
github: ""
demo: "https://chat.jrdn.tech/rooms"
images:
  [
    "https://images.jrdn.tech/jchat-0.PNG",
    "https://images.jrdn.tech/jchat-1.PNG",
    "https://images.jrdn.tech/jchat-2.PNG",
    "https://images.jrdn.tech/jchat-3.PNG",
  ]
description: "WebRTC conferencing platform with support for video and audio chatting in a room based system."
---

#### Objectives

The goal of this project was to build something with the WebRTC protocol. I did some research and decided to use the open source Kurento Media server for the media aspect of the project since it's free and supports WebRTC selective forwarding. I decided to build the application/signaling server in .net core since it's my go-to framework. I decided to also learn react hooks in this project as I built out the front-end.

#### Technology stack

- Front End: React (16.8.6 with hooks)
- Redux for state management and Material UI for styling
- Back End (application / signaling server): asp.net core 2.2
- Back End (media server): Kurento Media Server
- Back End (turn server): Coturn

#### Features

- Real-time conferencing
- Video/web cam chat support
- Audio chat support
- Text-based chat support
- public / private room based system
- Low-latency scalable media server
- Uses Selective forwarding unit instead of P2P to cut down on client bandwidth
- Signaling server communicates with media server via JSON-RPC
- Deployed on an AWS ec2 ubuntu instance
