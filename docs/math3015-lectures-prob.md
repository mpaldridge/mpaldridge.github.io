---
layout: page
title: MATH3015 History of Statistics lecture notes
permalink: /teaching/math3015/l12-probability.html
---

*Lectures notes for Lectures 1 and 2 of the ["History of Statistics" section of the module MATH3015 History of Mathematics](./), as lectured in 2019--20.*

## Lecture 1: Probability I

### When did "probability" begin?

A difficult question to answer is when people first started being aware of *probability*. People have certainly used the concept of *randomness* for a very long time.

[***Astragali***](https://en.wikipedia.org/wiki/Astragalomancy) or "knucklebones" (actually a bone from the ankle of sheep) were used as what we would now call a "source of randomness", and were used in games of chance. Like other available sources of randomness, they were also used as a means of foretelling the future. Astragali are found in archaeological site from 40,000 years ago, and were used in games or gambling in Ancient Egypt, Ancient Greece and Ancient Rome.

Due to their irregular shape, astragali had outcomes which were not equally likely. More useful here was the more regular design of the [**dice**](https://en.wikipedia.org/wiki/Dice#History) (4-sided or 6-sided, or later 20-sided), which dates back as far as 2500BC, being found in Persia, India, Greece and Rome.

"Casting of lots" -- that is, making decisions by means of randomness (rolling dice, tossing coins, choosing the short straw, and so one) – was common in Ancient Rome and is mentioned many times in the Bible.

While these examples show use of randomness, it’s not clear to what extent the users of these understood the concept of "probability".

Probability and chance became important for gambling, especially into the 15th and 16th centuries, and this spurred the more systematic or mathematical study of randomness.

One wonders why probability took so long to appear as a serious mathematical subject. Some suggestions include: that social and religious attitudes disapproved of the concept of chance; that the necessary mathematical tools needed to be developed first; or that, as fun as gambling might be, problems involving probability were rarely among the most pressing of their age. All these suggestions are only speculation.

### Classical probability

As probability did become understood and recorded in writing, it was in the form of what we now call *classical* or *enumerative probability*. Here, we have a finite number n of equally likely outcomes. If out of these $n$ outcomes $r$ are favourable and the other $s$ are unfavourable, the favourable outcome was said to have odds of $r : s$ in favour of its outcome. Today, we would say the probability of a favourable outcome is $r / n$. Thus calculating the odds (or probability) of a favourable outcome requires one to count (or enumerate) the number of ways that outcome could occur. For example, rolling a dice has $n = 6$ possible outcomes. If one needs to roll $5$ or more, there are $r = 2$ favourable outcomes and $s = 4$ unfavourable outcomes, for odds in favour of $2 : 4$, or a probability of $2 / 6$.

One of the first people to write systematically about probability was [**Gerolamo Cardano** (Italy, 1501–1576)](https://mathshistory.st-andrews.ac.uk/Biographies/Cardan/). Cardano is best known for publishing a method to find the roots of a cubic equation (and his long feud with Niccolò Fontana Tartaglia over who got there first). We are more interested in his book *Liber de ludo aleae* ("Book on Games of Chance"), which shows his knowledge of general ideas of probability, as well as his keenness for cheating. As regards enumerative probability, he writes:

> So there is one general rule: namely, that we should consider the whole circuit, and the number of those casts which represent in how many ways the favourable result can occur, and compare that number to the remainder of the circuit, and according that proportion should the mutual wagers be laid, so that one may contend on equal terms.

Here, the "circuit" refers to the set of possible outcomes -- what we now would call the "sample space".

Cardano counted and published the number of ways of getting different outcomes from rolling two or three dice – for example, with two dice, there is one way of rolling 2 (1 and 1), but six ways of rolling 7 (1 and 6, 2 and 5, 3 and 4, 4 and 3, 5 and 2, 6 and 1). Such enumerations of dice outcomes were known at least 500 years earlier, and were also published by [**Galileo Galilei** (Italy, 1564–1642)](https://mathshistory.st-andrews.ac.uk/Biographies/Galileo/), the famous astronomer, physicist, engineer, philosopher, mathematician and polymath. 

Cardano also knew that, if a single event had odds of $r : n – r$, then the odds of it occurring m times in a row is $r^m : n^m – r^m$. In modern notation, we would say if the event has probability $p$, then $m$ occurrences of it have probability $p^m$. (We also now know that is important for the events to be independent for this formula to hold.)

### The problem of the points

Many authors track down the genesis of mathematical probability to the solution of the *problem of the points*. The problem is this: two players bet the same amount of money on a game of chance – perhaps tossing a coin – where the first to score a certain number of points is the winner and takes all the money. But suppose the game is interrupted before it’s finished: how should the stakes be divided?

For an example, suppose Alice and Bob are playing a first-to-10 game which is interrupted with Alice 8--6 ahead. What proportion of the money should Alice take?

This problem was discussed in a famous series of letters between [**Pierre de Fermat** (France, 1607–1665)](https://mathshistory.st-andrews.ac.uk/Biographies/Fermat/) and [**Blaise Pascal** (France, 1623–1662)](https://mathshistory.st-andrews.ac.uk/Biographies/Pascal/). Fermat was an amateur mathematician, but a very important one for his work in analysis, geometry and, most of all, number theory. He is perhaps best-known for his conjecture that became known as "Fermat’s last theorem".

Fermat and Pascal realised that what matters is not how many points Alice and Bob each have, but how many points they require win: that is, 8--6 up in a first-to-10 game is just as big an advantage as 98--96 up in a first-to-100 game. In both cases, Alice requires $a = 2$ points, while Bob requires $b = 4$. Fermat and Pascal also agreed that the money should be divided in proportion to their respective odds of winning the game -- now, we would say that each player gets their "expected winnings". The difficulty was how to calculate those odds.

A tempting solution is to enumerate the number of possible continuations to the fame, then take the odds by counting the number of outcomes where Alice wins and where Bob wins. In our example, we would have the following. (Here, for example, ABA means a continuation where Alice wins the next round, then Bob, then Alice, leading to Alice winning 10–7.)

<table>
<thead>
  <tr>
    <th colspan="4"><span style="font-weight:bold">**Alice wins**</span></th>
    <th colspan="2"><span style="font-weight:bold">**Bob wins**</span></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><span style="font-weight:bold">**10--6**</span></td>
    <td><span style="font-weight:bold">**10--7**</span></td>
    <td><span style="font-weight:bold">**10--8**</span></td>
    <td><span style="font-weight:bold">**10--9**</span></td>
    <td><span style="font-weight:bold">**9--10**</span></td>
    <td><span style="font-weight:bold">**8--10**</span></td>
  </tr>
  <tr>
    <td>AA</td>
    <td>ABA</td>
    <td>ABBA</td>
    <td>ABBBA</td>
    <td>ABBBB</td>
    <td>BBBB</td>
  </tr>
  <tr>
    <td></td>
    <td>BAB</td>
    <td>BABA</td>
    <td>BABBA</td>
    <td>BABBB</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>BBAA</td>
    <td>BBABA</td>
    <td>BBABB</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td>BBBAA</td>
    <td>BBBAB</td>
    <td></td>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>4</td>
    <td>1</td>
  </tr>
  <tr>
    <td colspan="4">10</td>
    <td colspan="2">5</td>
  </tr>
</tbody>
</table>

Test table:

| Head one | Head two |
|:--------:|:--------:|
| Content  | here     |
| Some     | more     |

This would suggest that Alice should take the stakes in the ratio $10 : 5 = 2 : 1$. But this is incorrect. The error is that these 15 outcomes are not equally likely: the shorter games are more likely than the longer games. For example, the outcome AA has probability $\frac12 \times \frac12 = \frac14$, where the outcome BBBB has probability $\frac12 \times \frac12 \times \frac12 \times \frac12 = \frac{1}{16}$.

The solution is to look at taking the game out to the maximum number of steps. In a first-to-n game, this means playing -- or pretending to play-- the full $2n - 1$ rounds. From the interruption with $a$ and $b$ points required, that means $a + b - 1$ more rounds. Because these are all the same length, they will be equally likely.

In our example, we pretend to play a full 5 more rounds.

<table>
<thead>
  <tr>
    <th colspan="4"><span style="font-weight:bold">**Alice wins**</span></th>
    <th colspan="2"><span style="font-weight:bold">**Bob wins**</span></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><span style="font-weight:bold">**10--6**</span></td>
    <td><span style="font-weight:bold">**10--7**</span></td>
    <td><span style="font-weight:bold">**10--8**</span></td>
    <td><span style="font-weight:bold">**10--9**</span></td>
    <td><span style="font-weight:bold">**9--10**</span></td>
    <td><span style="font-weight:bold">**8--10**</span></td>
  </tr>
  <tr>
    <td>AA</td>
    <td>ABA</td>
    <td>ABBA</td>
    <td>ABBBA</td>
    <td>ABBBB</td>
    <td>BBBB</td>
  </tr>
  <tr>
    <td></td>
    <td>BAB</td>
    <td>BABA</td>
    <td>BABBA</td>
    <td>BABBB</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>BBAA</td>
    <td>BBABA</td>
    <td>BBABB</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td>BBBAA</td>
    <td>BBBAB</td>
    <td></td>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>4</td>
    <td>1</td>
  </tr>
  <tr>
    <td colspan="4">10</td>
    <td colspan="2">5</td>
  </tr>
</tbody>
</table>

Thus Alice and Bob should in fact share the stakes in the ratio $26 : 6 = 13 : 3$.

The numbers in the penultimate row here are the number of ways Alice can win $k = 5, 4, 3, 2, 1, 0$ rounds out of the $n = 5$ total rounds. These numbers are what we now call *binomial coefficients*. Pascal found a recurrence equation for these numbers, which in modern notation for the binomial coefficient is
$$ \binom{n+1}{k} = \binom{n}{k} + \binom{n}{k-1} .$$
This allows the numbers to be computed quickly using what has become known as Pascal’s triangle. (Note the 1, 5, 10, 10, 5, 1 on the fifth row, as featured in the enumeration of results between Alice and Bob.)

![](math3015-pascal.png) 

Pascal’s triangle was in fact know long before Fermat and Pascal – Indian mathematicians were aware of it at least 1000 years earlier, while Persian and Chinese recordings also predate Pascal's.




### Recommended reading

*	FN David, *Games, Gods and Gambling: A history of probability and statistical ideas*, Dover Publications, 1962.
*	K Devlin, *The Unfinished Game: Pascal, Fermat, and the seventeenth-century letter that made the world modern*, Basic Books, 2008.
*	A Hald, *History of Probability and Statistics and Their Applications Before 1750*, Wiley–Interscience, 1990.
*	LE Maistrov, *Probability Theory: A historical sketch*, Academic Press, 1974.
*	O Ore, *Cardano: The gambling scholar*, Princeton University Press, 1953.
*	Ian Stewart, *Do Dice Play God? The mathematics of uncertainty*, Profile Books, 2019.
*	[The Fermat--Pascal correspondence [PDF]](https://www.york.ac.uk/depts/maths/histstat/pascal.pdf)


