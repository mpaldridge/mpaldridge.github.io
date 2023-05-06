---
layout: post
title:  "Longest LRB articles (coauthored with ChatGPT)"
date:   2024-03-29
categories: writing
permalink: /blog/long-lrb.html
---

For a while last year, as a hobby, I spent many evenings browsing old issues of *The New Yorker* online. Some articles I read, some I skimmed, most I skipped, and many I kept a note of to maybe read later. As I did this, I also kept a note of the very long articles, just out of curiosity, and made [a reasonably comprehensive list of them – see this earlier blog post](long-new-yorker.html).

The other day, I was reading an article in the *London Review of Books*. I noticed that the article had a wordcount at the top – as do all *LRB* articles. Indeed, [their whole archive back to 1979](https://www.lrb.co.uk/archive) is properly digitised with helpful wordcounts. So it should be possible to make a “longest articles in the *LRB*” list not by spending months browsing back issues but automatically, by writing a little computer program to go through all the issues of the magazine, then all the articles in those issues, and text-scraping all the wordcounts.

Unfortunately, while this is not really difficult, it’s not something I can do. (Most of our MSc Data Science students learn how to do this, but, slightly embarrassingly, I’ve just never learned myself.) However, there’s a tool now that could write the program for me – [ChatGPT](https://chat.openai.com/). I told ChatGPT what I wanted doing, what the URL structure for issues of the paper is, and where in the HTML for each article the wordcount can be found. Then ChatGPT wrote me a little Python script that goes through them all and writes me a textfile with all the wordcounts of every *LRB* article. Once I’d installed some Python things on my computer, the script worked perfectly first time. Thanks, ChatGPT!

This is the first time I’ve used one of these AI things to actually do a useful task for me that I genuinely wanted doing (rather than learning how to use it, just playing around, or getting it to make a picture that I wanted to look obviously AI-generated). I’m very sure it’s not the last time, but rather it was my first little glimpse of what the future might be like.

Anyway, if I’ve done it right – and if ChatGPT’s done it right – this should be a list of every *LRB* article longer than 25,000 words (this century) or longer than 15,000 words (last century):

* [**The European Coup**](https://www.lrb.co.uk/the-paper/v42/n24/perry-anderson/the-european-coup), [**Ever Closer Union?**](https://www.lrb.co.uk/the-paper/v43/n01/perry-anderson/ever-closer-union), and [**The Breakaway**](https://www.lrb.co.uk/the-paper/v43/n02/perry-anderson/the-breakaway) by Perry Anderson (2020–21, 46k words). Three essays about, and sceptical of, the European Union. Parts of the book *Ever Closer Union?*
* [**The Suitcase**: Part One](https://www.lrb.co.uk/the-paper/v42/n15/frances-stonor-saunders/the-suitcase), [Part Two]([https://www.lrb.co.uk/contributors/frances-stonor-saunders](https://www.lrb.co.uk/the-paper/v42/n16/frances-stonor-saunders/the-suitcase-part-two)), and [Part Three](https://www.lrb.co.uk/the-paper/v42/n17/frances-stonor-saunders/the-suitcase-part-three) by Frances Stonor Saunders (2020, 43k words). A memoir of the author and her father. Book of the same title.









* The Contingency of Language, The Contingency of Selfhood and The Contingency of Community by Richard Rorty (1986, 25k words). I don’t really understand what this is about, but it’s something philosophical. Part of the book Contingency, Irony, Solidarity.
* Criminal Justice by Ronan Bennett (1993, 24k words). On the case of the Guildford Four.
* The Clothes They Stood Up In by Alan Bennett (1996, 21k words). Fictional short story. Collected in Three Stories (and other books).
* A Feeling for Ice by Jenny Diski (1997, 17k words). A memoir of the author’s childhood and a voyage to Antarctica. Book: Skating to Antarctica.
* The Uninvited by Jeremy Harding (2000, 32k words). On refugees and migrants to rich countries. Books: The Uninvited and Border Vigils.
* You Muddy Fools and The Price by Dan Jacobson (2002, 31k words). The last interview with the critic, poet and editor Ian Hamilton. Book: Ian Hamilton in Conversation with Dan Jacobson.
* Giving Up the Ghost, Little Miss Neverwell and Memories of Catriona by Hillary Mantel (2003, 26k words). Memoir of the author and her illnesses. Part of the book Giving Up the Ghost.
* Germs: A Memoir and The Girl in the Shiny Boots by Richard Wollheim (2004, 29k words). Childhood memoir of the philosopher. Book: Germs.
* Kemalism and After Kemal by Perry Anderson (2008, 30k words). On Kemal Atatürk, Kemalism and Turkey. Part of the book The Old New World.
* Gandhi Centre Stage, Why Partition? and After Nehru by Perry Anderson (2012, 47k words). On the history of an independent India. Book: The Indian Ideology.
* Ghosting by Andrew O’Hagan (2015, 26k words). On ghostwriting Julian Assange’s autobiography. Collected in the book The Secret Life.
* One Exceptional Figure Stood Out and Imitation Democracy by Perry Anderson (2015, 26k words). On the political scientist Dmitri Furman and post-communist Russia.
* The Satoshi Affair by Andrew O’Hagan (2016, 34k words). On Satoshi Nakamoto, anonymous inventor of Bitcoin. Collected in the book The Secret Life.
* The Tower by Andrew O’Hagan (2018, 60k words). On the Grenfell Tower tragedy and its aftermath.
* Different Speeds, Same Furies and Time Unfolded by Perry Anderson (2018, 26k words). On Anthony Powell, compared to Marcel Proust. Part of the book Different Speeds, Same Furies.



The longest fictional piece I found was The Uncommon Reader by Alan Bennett (2007, 23k words, book of the same title).

Art Spiegelman’s comic In the Shadow of No Towers was serialised in the paper (10 parts, 2003).

I didn’t count Jenny Diski’s memoir series about cancer, Doris Lessing, and other things (17 articles, 2014-16, 80k words, book: *In Gratitude*).

I didn’t count Alan Bennett’s series of annual diaries (36 articles, 1984–present, 200k words, books: Writing Home, Untold Stories, Keep On Keeping On, House Arrest)
