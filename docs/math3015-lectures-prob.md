---
layout: page
title: MATH30015: History of Statistics lecture notes
use_math: true
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


## Lecture 2: Probability II


The law of large numbers 

Classical probability (see the last lecture) was all very well for a simple problem with a small number of equally likely outcomes. But often, in the real world, the outcomes are not equally likely. How, then, can we calculate probabilities for events in this more difficult case?
It became appreciated that if one can repeat an experiment many times, then the proportion of times the favourable outcome occurs is very close to its probability. So if a dice were tossed 600 times, the number of occasions a 6 appears will be very close to 100. Further, the larger the number of repeated experiments, the more accurate the probability becomes. Cardano (see the last lecture) was certainly aware of this.
 An important breakthrough came from Jacob Bernoulli (Switzerland, 1654–1705). Jacob Bernoulli was one of the members of the Bernoulli family of mathematicians. Jacob was crucial in the development of the calculus of variations, and, by calculating compound interest, discovered the number e (later named after Leonhard Euler). Jacob’s son Johann Bernoulli was an early proponent of infinitesimal calculus, while Johann’s son Daniel Bernoulli was a very prominent physicist and mathematician, best known for his work in fluid mechanics.
Jacob Bernoulli wrote Ars Conjectandi (‘The Art of Conjecturing’, or, more loosely, ‘How to Guess Well’) in the 1680s, although it wasn’t published until after his death. Perhaps the most important result was his ‘golden theorem’, which showed that the long run proportion of times an event occurs is very close to the probability. 
The result is this: Suppose an experiment is repeated n times, and has a probability p of success each time. Let Y count the number of successes. Then the proportion of successes Y/n is very close to p when n is large. More precisely,
P(|Y/n-p|>ε)→0     "as " n→∞.
We would now call Y a binomial random variable, and would recognise Bernoulli’s golden theorem as (a special case of) the law of large numbers. As a reminder, the weak law of large numbers says this: Let X1, X2, … be a sequence of independent and identically distributed random variables with finite expectation EX= μ, and write X ̅_n=(∑_(i=1)^n▒X_i )/n for the sample mean; then
P(|X ̅_n-μ|>ε)→0     "as " n→∞.
Perhaps the first formal proof of the law of large numbers in most of its generality was by Pafnuty Chebychev (Russia, 1821–1894) using the result we call Chebychev’s inequality. Chebyshev was known for his work in probability as well as his results concerning prime numbers in number theory. Chebyshev’s inequality (conjectured by his friend and colleague Irénée-Jules Bienaymé) is the result that, for a random variable X with mean μ and variance σ^2, we have
P(|X-μ|>ε)≤σ^2/ϵ^2 .
Applying this to the sample mean X ̅_n, which has mean μ and variance σ^2/n, we get that
P(|X-μ|>ε)≤σ^2/〖nϵ〗^2 .
Provided the random variables have finite variance, the term on the right-hand side tends to 0, thus proving the result.

The central limit theorem

Bernoulli’s law of large numbers says that the proportion of successes in a large number trials is close to the probability – but it’s not exactly the probability, so probabilists where then interested in what the typical size of the deviation from the probability.
 An important breakthrough here was made by Abraham de Moivre (France, 1667–1754). De Moivre was among the first people to formalise ideas in probability such as expectation, independence, and conditional probability. He is also well known for de Moivre’s formula 
(cos⁡x+"i"  sin⁡x )^n=cos⁡nx+"i"  sin⁡nx,
which later led to Euler’s formula e^("i" x)=cos⁡x+"i"  sin⁡x, of which it is an easy consequence.
De Moivre showed that the number of success from n fair trials with p = 1/2, was not only n/2 on average, but was in fact described well by the normal distribution with mean n/2 and variance n/4. This was a special case of what we now know as the central limit theorem, that for IID random variables with finite mean and variance, we have
(∑_(i=1)^n▒X_i -nμ)/√(nσ^2 )→"N" (0,1)      "in distribution".
If the Xi are Bernoulli trials with probability 1/2, then then we get back de Moivre’s result.
De Moivre’s result was, in many ways, far ahead of its time, and got relatively little attention in his own lifetime. It was rescued from obscurity by Pierre-Simon Laplace (France, 1749–1827). Laplace was a polymath, famed for his work in probability, for introducing calculus to the study of classical mechanics, and most of all for his pioneering work in mathematical physics. Laplace extended de Moivre’s central limit theorem for binomial trials with p = 1/2 to those with any value of p. In particular, he introduced the use of the characteristic function Φ_X (t)= E"e" ^("i" tX) to the problem.  Normal distributions are precisely those where the log of this characteristic function is quadratic in t. The most common modern proof of the central limit theorem uses a Taylor expansion of the log of the characteristic equation – a quadratic approximation to the log characteristic function gives the normal approximation of the central limit theorem.
It took a long time for the central limit theorem to be formally proved in a form we would understand today – we could perhaps attribute such a proof to the Russian mathematician Aleksandr Lyapunov in 1901.

Probability as pure mathematics

Probability has continued to progress in the twentieth century. One of the most important was the formalisation of probability as following strict mathematical rules – these are sometimes known as the axioms of probability. The axiomisation of probability in the most common form used today was due to Andrey Kolmogorov (Russia, 1902–1987). Kolmogorov was perhaps the most important probabilist of the twentieth century, but also did important work in mathematical physics and crucial foundational work in areas we might now consider to be computer science. (Kolmogorov was also my PhD supervisor’s PhD supervisor’s PhD supervisor’s PhD supervisor, or my academic great-great-grandfather.) 
Kolmogorov’s axioms go as follows. We have a sample space Ω which represents the set of all possible outcomes. Then a probability measure P is a function that takes subsets A of Ω (called ‘events’) and assigns them a probability P(A), that obeys the following rules:
	P(A) is always a number between 0 and 1.
	P(Ω)=1; that is, the probability of observing an outcome from the sample space is 1.
	If A_1,A_2,A_2,… are a countably infinite sequence of disjoint events (that is, where at most one of the events happens at a time), then we have the ‘or’ addition rule:
P(⋃_(n=1)^∞▒A_n )=∑_(n=1)^∞▒P (A_n ).
Perhaps surprisingly, using just these three axioms, we can prove all the other rules that we know about probability, including the ‘and’ multiplication rule (for independent events) and the ‘not’ rule that P("not " A)=1-P(A).
There have been many other developments in recent probability that we don’t have space for here, particularly those inspired by applications in statistical physics and in finance.

Recommended reading

	WJ Adams, The Life and Times of the Central Limit Theorem, second edition, American Mathematical Society, 2009.
	FN David, Games, Gods and Gambling: A history of probability and statistical ideas, Dover Publications, 1962.
	S Gerovitch, The man who invented modern probability theory, Nautilus, 4, 2013. http://nautil.us/issue/4/the-unlikely/the-man-who-invented-modern-probability 
	LE Maistrov, Probability Theory: A historical sketch, Academic Press, 1974.
	E Seneta, A tricentenary history of the law of large numbers, Bernoulli, 19:4, 1088–1121, 2013.

