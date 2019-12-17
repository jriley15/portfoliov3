---
path: "/post/test"
date: "2019-05-04"
title: "My first blog post"
description: "test description"
---

Speaking CSS is like speaking English, or any other spoken language - there are many words, but you only end up using a small subset of them on a daily basis. Just like reading a dictionary isn't an efficient way to learn a language, looking at a [big list of properties](https://www.w3.org/Style/CSS/all-properties.en.html) isn't helpful to learn CSS.

Some people think CSS is really hard and it's too much of a hassle to learn. Some people think that since it's not a programming language ([or is it?](https://notlaura.com/is-css-turing-complete/)), it's so easy that you don't even have to bother learning it. Ultimately, there's a lot to CSS, but it doesn't have to be overwhelming. If you learn a few key concepts, you should feel confident looking at or thinking of any design and turning it into reality.

I'm going to go over some of the parts of CSS that are important on a daily basis, and give some of tips and tricks I've come to learn over the years.

> If you just want some hints on how to make your design look pretty or consistent, check out [Design for Developers](https://www.taniarascia.com/design-for-developers/). I also think [Web Design in 4 Minutes](https://jgthms.com/web-design-in-4-minutes/) by [Jeremy Thomas](https://jgthms.com/) has an excellent, interactive introduction to the concepts of web design.

#### Who is this article for?

If you're a seasoned front end developer who already knows everything about CSS, please close this tab immediately and run as fast as you can to the nearest exit. If you've never heard of or used CSS before and don't know how to load CSS into an HTML page, this resource is also not for you.

This article is for the middleground of people who have had to touch CSS a few times here and there but ultimately don't feel like they know what they're doing, or struggle with making basic layouts.

#### Topics covered

##### HTML 101

- [HTML Fundamentals](#html-fundamentals)

##### CSS 101

- [CSS Syntax](#css-syntax)
- [CSS Selectors](#css-selectors)
- [CSS Specificity](#css-specificity)
- [CSS Properties](#css-properties)

##### Working with CSS

- [Spacing Out](#spacing-out-padding-and-margins)
  - `padding`, `margin`, `border`
- [Box Model](#box-model)
  - `content-box` vs. `border-box`
- [Shorthand Properties](#shorthand-properties)
- [Layouts: Display](#layouts-display)
  - `inline`, `inline-block`, `block`
- [Layouts: Positioning](#layouts-positioning)
  - `static`, `fixed`, `absolute`, `relative`
- [Layouts: Flex](#layouts-flex)
  - flex containers (`flex` display), flex items (`flex` property)
- [Responsive: Media Queries](#responsive-media-queries)
  - `min-width`, `max-width`
- [Other Considerations](#other-considerations)
