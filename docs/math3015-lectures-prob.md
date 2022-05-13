---
layout: page
title: MATH3015 History of Statistics lecture notes
permalink: /teaching/math3015/l12-probability.html
use_math: true
---

*Lectures notes for Lectures 1 and 2 of the ["History of Statistics" section of the module MATH3015 History of Mathematics](./), as lectured in 2019--20.*

#### Contents

* [**Lecture 1:** History of Probability 1](#lecture-1-history-of-probability-1)
* [**Lecture 2:** History of Probability 2](#lecture-2-history-of-probability-2)

## Lecture 1: History of Probability 1

### When did "probability" begin?

A difficult question to answer is when people first started being aware of *probability*. People have certainly used the concept of *randomness* for a very long time.

[***Astragali***](https://en.wikipedia.org/wiki/Astragalomancy) or "knucklebones" (actually a bone from the ankle of sheep) were used as what we would now call a "source of randomness", and were used in games of chance. Like other available sources of randomness, they were also used as a means of foretelling the future. Astragali are found in archaeological site from 40,000 years ago, and were used in games or gambling in Ancient Egypt, Ancient Greece and Ancient Rome.

Due to their irregular shape, astragali had outcomes which were not equally likely. More useful here was the more regular design of the [**dice**](https://en.wikipedia.org/wiki/Dice#History) (4-sided or 6-sided, or later 20-sided), which dates back as far as 2500BC, being found in Persia, India, Greece and Rome.

"Casting of lots" -- that is, making decisions by means of randomness (rolling dice, tossing coins, choosing the short straw, and so one) – was common in Ancient Rome and is mentioned many times in the Bible.

While these examples show use of randomness, it’s not clear to what extent the users of these understood the concept of "probability".

Probability and chance became important for gambling, especially into the 15th and 16th centuries, and this spurred the more systematic or mathematical study of randomness.

One wonders why probability took so long to appear as a serious mathematical subject. Some suggestions include: that social and religious attitudes disapproved of the concept of chance; that the necessary mathematical tools needed to be developed first; or that, as fun as gambling might be, problems involving probability were rarely among the most pressing of their age. All these suggestions are only speculation.

### Classical probability

As probability did become understood and recorded in writing, it was in the form of what we now call *classical* or *enumerative probability*. Here, we have a finite number $$n$$ of equally likely outcomes. If out of these $$n$$ outcomes $$r$$ are favourable and the other $$s = n - r$$ are unfavourable, the favourable outcome was said to have odds of $$r : s$$ in favour of its outcome. Today, we would say the probability of a favourable outcome is $$r / n$$. Thus calculating the odds (or probability) of a favourable outcome requires one to count (or enumerate) the number of ways that outcome could occur. For example, rolling a dice has $$n = 6$$ possible outcomes. If one needs to roll 5 or more, there are $$r = 2$$ favourable outcomes (5 or 6) and $$s = 4$$ unfavourable outcomes (1, 2, 3 or 4), for odds of $$2 : 4$$, or a probability of $$2 / 6$$.

One of the first people to write systematically about probability was [**Gerolamo Cardano** (Italy, 1501–1576)](https://mathshistory.st-andrews.ac.uk/Biographies/Cardan/). Cardano is best known for publishing a method to find the roots of a cubic equation (and his long feud with Nicolo Tartaglia over who got there first). We are more interested in his book *Liber de ludo aleae* ("Book on Games of Chance"), which shows his knowledge of general ideas of probability, as well as his keenness for cheating. As regards enumerative probability, he writes:

> So there is one general rule: namely, that we should consider the whole circuit, and the number of those casts which represent in how many ways the favourable result can occur, and compare that number to the remainder of the circuit, and according that proportion should the mutual wagers be laid, so that one may contend on equal terms.

Here, the "circuit" refers to the set of possible outcomes -- what we now would call the "sample space".

Cardano counted and published the number of ways of getting different outcomes from rolling two or three dice – for example, with two dice, there is one way of rolling 2 (1 and 1), but six ways of rolling 7 (1 and 6, 2 and 5, 3 and 4, 4 and 3, 5 and 2, 6 and 1). Such enumerations of dice outcomes were known at least 500 years earlier, and were also published by [**Galileo Galilei** (Italy, 1564–1642)](https://mathshistory.st-andrews.ac.uk/Biographies/Galileo/), the famous astronomer, physicist, engineer, philosopher, mathematician and polymath. 

Cardano also knew that, if a single event had odds of $$r : n – r$$, then the odds of it occurring $$m$$ times in a row are $$r^m : n^m – r^m$$. In modern notation, we would say if the event has probability $$p = r/n$$, then the probability of getting $$m$$ consecutive occurrences of it is $$p^m = r^m/n^m$$. (We also now know that is important for the events to be independent for this formula to hold.)

### The problem of the points

Many authors track down the genesis of mathematical probability to the solution of the [***problem of the points***](https://en.wikipedia.org/wiki/Problem_of_points). The problem is this: two players bet the same amount of money on a game of chance -- perhaps tossing a coin -- where the first player to score a certain number of points is the winner and takes all the money. But suppose the game is interrupted before it’s finished: how should the stakes be divided?

For an example, suppose Alice and Bob are playing a first-to-10 game which is interrupted with Alice 8--6 ahead. What proportion of the money should Alice take?

This problem was discussed in a famous series of letters between [**Pierre de Fermat** (France, 1607–1665)](https://mathshistory.st-andrews.ac.uk/Biographies/Fermat/) and [**Blaise Pascal** (France, 1623–1662)](https://mathshistory.st-andrews.ac.uk/Biographies/Pascal/). Fermat was an amateur mathematician, but a very important one for his work in analysis, geometry and, most of all, number theory, where is perhaps best-known for his conjecture that became known as "Fermat’s last theorem". Pascal was a polymath: a philosopher, a theologian, a mathematician, a physicist.

Fermat and Pascal realised that what matters is not how many points Alice and Bob already have, but how many points they require win: that is, 8--6 up in a first-to-10 game is just as big an advantage as 98--96 up in a first-to-100 game. In both cases, Alice requires $$a = 2$$ points to win, while Bob requires $$b = 4$$ points to win. Fermat and Pascal also agreed that the money should be divided in proportion to their respective odds of winning the game -- now, we would say that each player gets their "expected winnings". The difficulty was how to calculate those odds.

A tempting solution is to enumerate the number of possible continuations of the game until one player wins, then calculate the odds by counting the number of outcomes where Alice wins and where Bob wins. In our example, where Alice is 8--6 up in a fist-to-ten game, we would have the following. (Here, for example, ABA means a continuation where Alice wins the next round, then Bob, then Alice, leading to Alice winning 10--7.)

<table>
<thead>
  <tr>
    <th style="text-align: center" colspan="4">Alice wins</th>
    <th style="text-align: center" colspan="2">Bob wins</th>
  </tr>
  <tr>
    <th style="text-align: center">10&ndash;6</th>
    <th style="text-align: center"><strong>10&ndash;7</strong></th>
    <th style="text-align: center"><strong>10&ndash;8</strong></th>
    <th style="text-align: center"><strong>10&ndash;9</strong></th>
    <th style="text-align: center"><strong>9&ndash;10</strong></th>
    <th style="text-align: center"><strong>8&ndash;10</strong></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td style="text-align: center">AA</td>
    <td style="text-align: center">ABA</td>
    <td style="text-align: center">ABBA</td>
    <td style="text-align: center">ABBBA</td>
    <td style="text-align: center">ABBBB</td>
    <td style="text-align: center">BBBB</td>
  </tr>
  <tr>
    <td style="text-align: center"></td>
    <td style="text-align: center">BAA</td>
    <td style="text-align: center">BABA</td>
    <td style="text-align: center">BABBA</td>
    <td style="text-align: center">BABBB</td>
    <td style="text-align: center"></td>
  </tr>
  <tr>
    <td style="text-align: center"></td>
    <td style="text-align: center"></td>
    <td style="text-align: center">BBAA</td>
    <td style="text-align: center">BBABA</td>
    <td style="text-align: center">BBABB</td>
    <td style="text-align: center"></td>
  </tr>
  <tr>
    <td style="text-align: center"></td>
    <td style="text-align: center"></td>
    <td style="text-align: center"></td>
    <td style="text-align: center">BBBAA</td>
    <td style="text-align: center">BBBAB</td>
    <td style="text-align: center"></td>
  </tr>
  <tr>
    <td style="text-align: center">1</td>
    <td style="text-align: center">2</td>
    <td style="text-align: center">3</td>
    <td style="text-align: center">4</td>
    <td style="text-align: center">4</td>
    <td style="text-align: center">1</td>
  </tr>
  <tr>
    <td style="text-align: center" colspan="4">10</td>
    <td style="text-align: center" colspan="2">5</td>
  </tr>
</tbody>
</table>

This would suggest that the players should share the stakes in the ratio $$10 : 5$$; that is, Alice takes 67p out of every £1. But this calculation is incorrect. The error is that these 15 outcomes are not equally likely: the shorter games are more likely than the longer games. For example, the outcome AA has probability $$\frac12 \times \frac12 = \frac14$$, where the outcome BBBB has probability $$\frac12 \times \frac12 \times \frac12 \times \frac12 = \frac{1}{16}$$.

The correct solution, as Fermat and Pascal eventually realised, is to look at taking the game out to the maximum number of steps, even if the winner is known before the end. In a first-to-n game, this means playing -- or pretending to play-- the full $$2n - 1$$ rounds, even if the winner is known before all $$2n - 1$$ rounds are up. From the interruption of the game with $$a$$ and $$b$$ points required, that means playing (or pretending to play) $$a + b - 1$$ more rounds. The key point is that because these continuations are all the same length, they are now equally likely, so the "classical probability" paradigm applied.

In our example, we pretend to play a full 5 more rounds. In the outcome AAAAA, for example, after just the AA, we know Alice has reached 10 points will definitely win, but continue anyway; this way, all the listed outcomes have probability $$(\frac12)^5 = \frac{1}{32}$$.

<table>
<thead>
  <tr>
    <th style="text-align: center" colspan="4">Alice wins</th>
    <th style="text-align: center" colspan="2">Bob wins</th>
  </tr>
  <tr>
    <th style="text-align: center">13&ndash;6</th>
    <th style="text-align: center"><strong>12&ndash;7</strong></th>
    <th style="text-align: center"><strong>11&ndash;8</strong></th>
    <th style="text-align: center"><strong>10&ndash;9</strong></th>
    <th style="text-align: center"><strong>9&ndash;10</strong></th>
    <th style="text-align: center"><strong>8&ndash;11</strong></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td style="text-align: center">AAAAA</td>
    <td style="text-align: center">AAAAB</td>
    <td style="text-align: center">AAABB</td>
    <td style="text-align: center">AABBB</td>
    <td style="text-align: center">ABBBB</td>
    <td style="text-align: center">BBBBB</td>
  </tr>
  <tr>
    <td style="text-align: center"></td>
    <td style="text-align: center">AAABA</td>
    <td style="text-align: center">AABAB</td>
    <td style="text-align: center">ABABB</td>
    <td style="text-align: center">BABBB</td>
    <td style="text-align: center"></td>
  </tr>
  <tr>
    <td style="text-align: center"></td>
    <td style="text-align: center">AABAA</td>
    <td style="text-align: center">AABBA</td>
    <td style="text-align: center">ABBAB</td>
    <td style="text-align: center">BBABB</td>
    <td style="text-align: center"></td>
  </tr>
  <tr>
    <td style="text-align: center"></td>
    <td style="text-align: center">ABAAA</td>
    <td style="text-align: center">ABAAB</td>
    <td style="text-align: center">ABBBA</td>
    <td style="text-align: center">BBBAB</td>
    <td style="text-align: center"></td>
  </tr>
  <tr>
    <td style="text-align: center"></td>
    <td style="text-align: center">BAAAA</td>
    <td style="text-align: center">ABABA</td>
    <td style="text-align: center">BAABB</td>
    <td style="text-align: center">BBBBA</td>
    <td style="text-align: center"></td>
  </tr>
  <tr>
    <td style="text-align: center"></td>
    <td style="text-align: center"></td>
    <td style="text-align: center">ABBAA</td>
    <td style="text-align: center">BABAB</td>
    <td style="text-align: center"></td>
    <td style="text-align: center"></td>
  </tr>
  <tr>
    <td style="text-align: center"></td>
    <td style="text-align: center"></td>
    <td style="text-align: center">BAAAB</td>
    <td style="text-align: center">BABBA</td>
    <td style="text-align: center"></td>
    <td style="text-align: center"></td>
  </tr>
  <tr>
    <td style="text-align: center"></td>
    <td style="text-align: center"></td>
    <td style="text-align: center">BAABA</td>
    <td style="text-align: center">BBAAB</td>
    <td style="text-align: center"></td>
    <td style="text-align: center"></td>
  </tr>
  <tr>
    <td style="text-align: center"></td>
    <td style="text-align: center"></td>
    <td style="text-align: center">BABAA</td>
    <td style="text-align: center">BBABA</td>
    <td style="text-align: center"></td>
    <td style="text-align: center"></td>
  </tr>
  <tr>
    <td style="text-align: center"></td>
    <td style="text-align: center"></td>
    <td style="text-align: center">BBAAA</td>
    <td style="text-align: center">BBBAA</td>
    <td style="text-align: center"></td>
    <td style="text-align: center"></td>
  </tr>
  <tr>
    <td style="text-align: center">1</td>
    <td style="text-align: center">5</td>
    <td style="text-align: center">10</td>
    <td style="text-align: center">10</td>
    <td style="text-align: center">5</td>
    <td style="text-align: center">1</td>
  </tr>
  <tr>
    <td style="text-align: center" colspan="4">26</td>
    <td style="text-align: center" colspan="2">6</td>
  </tr>
</tbody>
</table>

Thus Alice and Bob should in fact share the stakes in the ratio $$26 : 6$$; that is, Alice takes 81p out of every £1.

The numbers in the penultimate row here are the number of ways Bob can win $$k = 0, 1, 2, 3, 4, 5$$ rounds (or Alice can win $$n - k = 5, 4, 3, 2, 1, 0$$ rounds) out of the $$n = 5$$ total rounds. These numbers are what we now call *binomial coefficients*. Pascal found a recurrence equation for these numbers, which in modern notation for the binomial coefficient is

$$
\binom{n+1}{k+1} = \binom{n}{k} + \binom{n}{k+1} 
$$

This allows the numbers to be computed quickly using what has become known as [***Pascal’s triangle***](https://en.wikipedia.org/wiki/Pascal%27s_triangle), where each number $$\binom{n+1}{k+1}$$ is the sum of the two numbers $$\binom{n}{k}$$ and $$\binom{n}{k+1}$$ above it. (Note the 1, 5, 10, 10, 5, 1 on the fifth row, as featured in the enumeration of results between Alice and Bob.)

```
               1
             1   1
           1   2   1
         1   3   3   1
       1   4   5   3   1
     1   5  10  10   5   1
   1   6  15  20  15   6   1
 1   7  21  35  35  21   7   1
```

"Pascal's triangle" was in fact know long before Fermat and Pascal -- Indian mathematicians were aware of it at least 1000 years earlier, while Persian and Chinese recordings also predate Pascal's.


### Recommended reading

(Books with links are available in the University of Leeds library.)

*	FN David, [*Games, Gods and Gambling: A history of probability and statistical ideas*](https://leeds.primo.exlibrisgroup.com/permalink/44LEE_INST/13rlbcs/alma991011810039705181), Dover Publications, 1962.
*	K Devlin, *The Unfinished Game: Pascal, Fermat, and the seventeenth-century letter that made the world modern*, Basic Books, 2008.
*	A Hald, [*A History of Probability and Statistics and Their Applications Before 1750*](https://leeds.primo.exlibrisgroup.com/permalink/44LEE_INST/13rlbcs/alma991015280459705181), Wiley–Interscience, 1990.
*	LE Maistrov, [*Probability Theory: A historical sketch*](https://leeds.primo.exlibrisgroup.com/permalink/44LEE_INST/13rlbcs/alma991013099789705181), Academic Press, 1974.
*	O Ore, [*Cardano: The gambling scholar*](https://leeds.primo.exlibrisgroup.com/permalink/44LEE_INST/13rlbcs/alma991015441939705181), Princeton University Press, 1953.
*	Ian Stewart, *Do Dice Play God? The mathematics of uncertainty*, Profile Books, 2019.

*	[The Fermat--Pascal correspondence [PDF]](https://www.york.ac.uk/depts/maths/histstat/pascal.pdf)


## Lecture 2: History of Probability 2


