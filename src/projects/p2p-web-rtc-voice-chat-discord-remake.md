---
path: "/project/p2p-web-rtc-voice-chat-discord-remake"
date: "2019-07-29"
title: "P2P Web RTC Voice Chat (Discord remake)"
emoji: "💬"
github: ""
demo: ""
images: ["https://images.jrdn.tech/discord-0.JPG"]
description: "Peer to Peer voice chat app built with web sockets and peerjs ontop of node and WebRTC"
---

#### Objectives

I created this project to learn more about the WebRTC protocol and peer to peer connections in browsers.The UI has a discord theme and gives users the option to chat with text or through their microphones aftergranting the browser access. Signaling is done via web sockets.

#### Technology stack

- Front End: React with peerjs
- socket-io
- hark (for volume detection)
- Back End: Express with peerjs and socket-io

#### Features

- Voice chat
- Users can be muted
- Users can mute themselves
- Usernames are highlighted when volume is coming from their mic
- Text Chat
- Users can send messages
