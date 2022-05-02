---
layout: post
title:  "Notes on randomness"
date:   2021-03-25
categories: writing
permalink: /blog/randomness.html
---

*A recent news story on Nature.com reported on ["the fastest random-number generator ever built"](https://www.nature.com/articles/d41586-021-00562-6). A journalist (who is also a friend of a colleague) was also writing about this new device, and asked me if I could answer a few questions via email on randomness and its importance in computing. And so I am quoted [in this article here](https://masterx.iulm.it/news/tecnologia/sicurezza/) – although since the article in Italian, I'm not sure what it says. If anyone's interested, I copy below the questions I was asked and what my responses were. If you want to point out things I said that are wrong or that I've misunderstood, I'm [@mpaldridge](https://twitter.com/mpaldridge) on Twitter.*

**Why is randomness important for computers?**

Computers use randomness for lots of things. For example, if you want a video game to be unpredictable or different each time, the developer might make things change at random – think about the random choice of which Tetris block comes next, or the random shuffling of the cards in an online card game. More importantly, statisticians and scientists use randomness to investigate the unpredictability of computer programs that model the real world, like weather forecasting or stock pricing.

A very serious way that computers use randomness is for cryptography. If a computer wants to keep some information secret, or send a message securely, it will choose a "key" – essentially like a password – at random, so that it can't be guessed.

**How do we generate randomness?**

There are many computer programs that can generate numbers that appear to be random. Since they're produced by a computer program, they're not *truly* random, but they're good enough for most purposes, like the video game or the weather forecast. But if there's something that it's very, very important is kept secret, you might be worried that an adversary could collect lots of your random numbers and work out what pattern is being used to produce them. The adversary could then "guess your password" in the future, which would be very bad.

For "true randomness" we don't want a computer program, but instead want to take advantage of the physical world. For example, you could toss a coin, or roll a dice, and that would always be unpredicatable. (Or you could take photographs of lava lamps, as in [this amusing recent story](https://qz.com/1642628/cloudflare-uses-lava-lamps-to-generate-a-crucial-resource/).) But these physical methods are very slow – it takes a few seconds to toss a coin, and some computers (say a server running a large website) might need lots and lots of random numbers very quickly.

To get true physical randomness, but extremely quickly, we usually look towards very small-scale things, like atoms or photons (light particles). For example, you could measure the decay of the particles in some radioactive material, which is true physical randomness that can also be measured extremely quickly.

As I understand it, this new device is using the tiny microscopic random fluctuations of photons in a thin beam of light. But I don't know anything more about the physics of how it works than [the article on Nature.com](https://www.nature.com/articles/d41586-021-00562-6).

**How many random numbers can this new device generate per second?**

The most basic random number is just picking a 0 or a 1 at random – like tossing a coin heads (1) or tails (0). The device in the Nature article produces 250 trillion 0s or 1s per second! That's 250,000,000,000,000 coin tosses every second!


**How useful is this new device?**

A typical key (password) might use somewhere between 100 and 2500 of those 0s and 1s, so we're talking somewhere in the region of 100 billion to 2 trillion passwords a second! That's an enormous amount. It's so fast that computers can't process the random numbers quick enough to deal with them! I think the hope is that smaller, cheaper (and, yes, a little bit slower) versions can be made in the future, which could be useful.

But also I think the researchers wanted to show what could be done, even if there's not any immediate use for it.
