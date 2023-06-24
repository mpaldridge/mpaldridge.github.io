---
layout: post
title:  "Longest LRB articles (coauthored with ChatGPT)"
date:   2023-03-29
categories: writing
permalink: /blog/long-lrb.html
---

For a while last year, as a hobby, I spent many evenings browsing old issues of *The New Yorker* online. Some articles I read, some I skimmed, most I skipped, and many I kept a note of to maybe read later. As I did this, I also kept a note of the very long articles, just out of curiosity, and made [a reasonably comprehensive list of them – see this earlier blog post](long-new-yorker.html).

The other day, I was reading an article in the *London Review of Books*. I noticed that the article had a wordcount at the top – as do all *LRB* articles. Indeed, [their whole archive back to 1979](https://www.lrb.co.uk/archive) is properly digitised with helpful wordcounts. So it should be possible to make a “longest articles in the *LRB*” list not by spending months browsing back issues but automatically, by writing a little computer program to go through all the issues of the magazine, then all the articles in those issues, and text-scraping all the wordcounts.

Unfortunately, while this is not really difficult, it’s not something I can do. (Most of our MSc Data Science students learn how to do this, but, slightly embarrassingly, I’ve just never learned myself.) However, there’s a tool now that could write the program for me – [ChatGPT](https://chat.openai.com/). I told ChatGPT what I wanted doing, what the URL structure for issues of the paper is, and where in the HTML for each article the wordcount can be found. Then ChatGPT wrote me a little Python script that goes through them all and writes me a textfile with all the wordcounts of every *LRB* article. Once I’d installed some Python things on my computer, the script worked perfectly first time. Thanks, ChatGPT!

This is the first time I’ve used one of these AI things to actually do a useful task for me that I genuinely wanted doing (rather than learning how to use it, just playing around, or getting it to make a picture that I wanted to look obviously AI-generated). I’m very sure it’s not the last time, but rather it was my first little glimpse of what the future might be like.

Anyway, if I’ve done it right – and if ChatGPT’s done it right – this should be a list of every *LRB* article longer than 25,000 words (this century) or longer than 15,000 words (last century):

* [**The European Coup**](https://www.lrb.co.uk/the-paper/v42/n24/perry-anderson/the-european-coup), [**Ever Closer Union?**](https://www.lrb.co.uk/the-paper/v43/n01/perry-anderson/ever-closer-union), and [**The Breakaway**](https://www.lrb.co.uk/the-paper/v43/n02/perry-anderson/the-breakaway) by Perry Anderson (2020–21, 46k words). Three essays about, and sceptical of, the European Union. Parts of the book *Ever Closer Union?*
* [**The Suitcase**: Part One](https://www.lrb.co.uk/the-paper/v42/n15/frances-stonor-saunders/the-suitcase), [Part Two](https://www.lrb.co.uk/the-paper/v42/n16/frances-stonor-saunders/the-suitcase-part-two), and [Part Three](https://www.lrb.co.uk/the-paper/v42/n17/frances-stonor-saunders/the-suitcase-part-three) by Frances Stonor Saunders (2020, 43k words). A memoir of the author and her father. Book of the same title.
* [**Different Speeds, Same Furies**](https://www.lrb.co.uk/the-paper/v40/n14/perry-anderson/different-speeds-same-furies) and [**Time Unfolded**](https://www.lrb.co.uk/the-paper/v40/n15/perry-anderson/time-unfolded) by Perry Anderson (2018, 26k words). On Anthony Powell, compared to Marcel Proust. Part of the book *Different Speeds, Same Furies*.
* [**The Tower**](https://www.lrb.co.uk/the-paper/v40/n11/andrew-o-hagan/the-tower) by Andrew O’Hagan (2018, 60k words). On the Grenfell Tower tragedy and its aftermath.
* [**The Satoshi Affair**](https://www.lrb.co.uk/the-paper/v38/n13/andrew-o-hagan/the-satoshi-affair) by Andrew O’Hagan (2016, 34k words). On Satoshi Nakamoto, anonymous inventor of Bitcoin. Collected in the book *The Secret Life*.
* [**One Exceptional Figure Stood Out**](https://www.lrb.co.uk/the-paper/v37/n15/perry-anderson/one-exceptional-figure-stood-out) and [**Imitation Democracy**](https://www.lrb.co.uk/the-paper/v37/n16/perry-anderson/imitation-democracy) by Perry Anderson (2015, 26k words). On the political scientist Dmitri Furman and post-communist Russia.
* [**Ghosting**](https://www.lrb.co.uk/the-paper/v36/n05/andrew-o-hagan/ghosting) by Andrew O’Hagan (2015, 26k words). On ghostwriting Julian Assange’s autobiography. Collected in the book *The Secret Life*.
* [**Gandhi Centre Stage**](https://www.lrb.co.uk/the-paper/v34/n13/perry-anderson/gandhi-centre-stage), [**Why Partition?**](https://www.lrb.co.uk/the-paper/v34/n14/perry-anderson/why-partition), and [**After Nehru**](https://www.lrb.co.uk/the-paper/v34/n15/perry-anderson/after-nehru) by Perry Anderson (2012, 47k words). On the history of an independent India. Book: *The Indian Ideology*.
* [**Kemalism**](https://www.lrb.co.uk/the-paper/v30/n17/perry-anderson/kemalism) and [**After Kemal**](https://www.lrb.co.uk/the-paper/v30/n18/perry-anderson/after-kemal) by Perry Anderson (2008, 30k words). On Kemal Atatürk, Kemalism, and Turkey. Part of the book *The Old New World*.
* [**Germs**: A Memoir](https://www.lrb.co.uk/the-paper/v26/n08/richard-wollheim/germs-a-memoir) and [**The Girl in the Shiny Boots**](https://www.lrb.co.uk/the-paper/v26/n10/richard-wollheim/the-girl-in-the-shiny-boots) by Richard Wollheim (2004, 29k words). Childhood memoir of the philosopher. Book: *Germs*.
* [**Giving Up the Ghost**](https://www.lrb.co.uk/the-paper/v25/n01/hilary-mantel/giving-up-the-ghost), [**Little Miss Neverwell**](https://www.lrb.co.uk/the-paper/v25/n02/hilary-mantel/little-miss-neverwell), and [**Memories of Catriona**](https://www.lrb.co.uk/the-paper/v25/n03/hilary-mantel/memories-of-catriona) by Hillary Mantel (2003, 26k words). Memoir of the author and her illnesses. Part of the book *Giving Up the Ghost*.
* [**You Muddy Fools**](https://www.lrb.co.uk/the-paper/v24/n02/dan-jacobson/you-muddy-fools) and [**The Price**](https://www.lrb.co.uk/the-paper/v24/n04/dan-jacobson/the-price) by Dan Jacobson (2002, 31k words). The last interview with the critic, poet and editor Ian Hamilton. Book: *Ian Hamilton in Conversation with Dan Jacobson*.
* [**The Uninvited**](https://www.lrb.co.uk/the-paper/v22/n03/jeremy-harding/the-uninvited) by Jeremy Harding (2000, 32k words). On refugees and migrants to rich countries. Books: *The Uninvited* and *Border Vigils*.
* [**A Feeling for Ice**](https://www.lrb.co.uk/the-paper/v19/n01/jenny-diski/a-feeling-for-ice) by Jenny Diski (1997, 17k words). A memoir of the author’s childhood and a voyage to Antarctica. Book: *Skating to Antarctica*.
* [**The Clothes They Stood Up In**](https://www.lrb.co.uk/the-paper/v18/n23/alan-bennett/the-clothes-they-stood-up-in) by Alan Bennett (1996, 21k words). Fictional short story. Collected in *Three Stories* (and other books).
* [**Criminal Justice**](https://www.lrb.co.uk/the-paper/v15/n12/ronan-bennett/criminal-justice) by Ronan Bennett (1993, 24k words). On the case of the Guildford Four.
* [**The Contingency of Language**](https://www.lrb.co.uk/the-paper/v08/n07/richard-rorty/the-contingency-of-language), [**The Contingency of Selfhood**](https://www.lrb.co.uk/the-paper/v08/n08/richard-rorty/the-contingency-of-selfhood), and [**The Contingency of Community**](https://www.lrb.co.uk/the-paper/v08/n13/richard-rorty/the-contingency-of-community) by Richard Rorty (1986, 25k words). I don’t really understand what this is about, but it’s something philosophical. Part of the book *Contingency, Irony, Solidarity*.

I didn’t count [Alan Bennett](https://www.lrb.co.uk/contributors/alan-bennett)’s series of annual diaries (36 articles, 1984–present, 200k words, books: Writing Home, Untold Stories, Keep On Keeping On, House Arrest)

I didn’t count [Jenny Diski](https://www.lrb.co.uk/contributors/jenny-diski)’s memoir series about cancer, Doris Lessing, and other things (17 articles, 2014-16, 80k words, book: *In Gratitude*).

The longest fictional piece I found was [**The Uncommon Reader**](https://www.lrb.co.uk/the-paper/v29/n05/alan-bennett/the-uncommon-reader) by Alan Bennett (2007, 23k words, book of the same title).

Art Spiegelman’s comic [**In the Shadow of No Towers**](https://www.lrb.co.uk/the-paper/v25/n05/art-spiegelman/in-the-shadow-of-no-towers-episodes-1-2) was serialised in the paper (10 parts, 2003).
