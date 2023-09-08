---
layout: post
title:  "Fixing the Guardian's line spacing"
date:   2023-08-04
categories: notmaths
permalink: /blog/guardian-breaks.html
---

Recently – some time Monday morning, I think – the Guardian changed the linespacing in stories on its website. This gif compares the old linespacing (nicer looking, more generous) with the new linespacing (tighter, more cramped).

![](https://github.com/mpaldridge/guardian-breaks/blob/main/demo.gif)

I think the new, tighter line spacing is just ugly. (At least on desktop – it's more defensible on mobile.) But even if one likes the tighter spacing, one has to be disappointed at just how half-assedly they've done it. Look at the "drop cap" – that big capital O as the first letter of the story. In the old version, the drop cap is exactly the same height as four lines of text, and the fifth line snuggles in just below it. In the new version, the drop cap has stayed the same size, which is now kind of four-and-a-bit lines high, with an ugly gap below it until the sixth line starts. If you're going to change the line spacing (and I think you shouldn't!) at least be bothered to change the drop-cap size to match!

Anyway, this has been bothering me so much that I've written **[a userscript to fix it, which is available on Github](https://github.com/mpaldridge/guardian-breaks/)**. I think this brings back most of the old spacing.

If you haven't used [userscripts](https://en.wikipedia.org/wiki/Userscript) before, they're little programs that modify the appearance of webpages in your browser. (My favourite is [this one](https://github.com/mullummer/racecenter) that displays race statistics during the Tour de France.) You'll need to install a userscript manager to use them – you're probably on Chrome, so can use [Violentmonkey](https://violentmonkey.github.io); I'm weird and use Safari, so have [Userscripts](https://github.com/quoid/userscripts).

I should also say that I've never written a userscript before – or any Javascript at all. But cowriting this with ChatGPT made it dead easy. I'm surprised how quickly ChatGPT has become the answer to "How can I write some code that's a bit outside what I know how to do?" (See also [finding the longest articles in the LRB](https://mpaldridge.github.io/blog/long-lrb.html).) Anecdotally, this is by far the biggest use case of the new suite of AI tools among the people I talk to about this kind of thing. (Illustrations for Substack posts is the other. I don't know anyone who regularly uses ChatGPT to actually write text for them yet.)
