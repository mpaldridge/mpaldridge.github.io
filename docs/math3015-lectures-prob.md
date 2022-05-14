---
layout: page
title: MATH3015 History of Statistics lecture notes
permalink: /teaching/math3015/l12-probability.html
use_math: true
---

*Lectures notes for Lectures 1 and 2 of the ["History of Statistics" section of the module MATH3015 History of Mathematics](./), as lectured in 2019--20.*

#### Contents

* [**Lecture 1:** History of Probability 1](#lecture-1-history-of-probability-1) until 1700
* [**Lecture 2:** History of Probability 2](#lecture-2-history-of-probability-2) since 1700

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

### The law of large numbers 

Classical probability was all very well for a simple problem with a small number of equally likely outcomes. But often, in the real world, the outcomes are not equally likely. How, then, can we calculate probabilities for events in this more difficult case?

It became appreciated that if one can repeat an experiment many times, then the proportion of times the favourable outcome occurs is very close to its probability. So if a dice is tossed 600 times, the number of occasions a 6 appears will be very close to 100. Further, the larger the number of repeated experiments, the more accurate the probability becomes. Cardano (see the last lecture) was certainly aware of this.

An important breakthrough came from [**Jacob Bernoulli** (Switzerland, 1654–1705)](https://mathshistory.st-andrews.ac.uk/Biographies/Bernoulli_Jacob/). Jacob Bernoulli was one of the members of the Bernoulli family of mathematicians. Jacob was crucial in the development of the calculus of variations, and, by calculating compound interest, discovered the number e (later named after Leonhard Euler). Jacob’s son Johann Bernoulli was an early proponent of infinitesimal calculus, while Johann’s son Daniel Bernoulli was a very prominent physicist and mathematician, best known for his work in fluid mechanics.

Jacob Bernoulli wrote *Ars Conjectandi* ("The Art of Conjecturing", or, more loosely, "How to Guess Well") in the 1680s, although it wasn’t published until after his death. Perhaps the most important result was his "golden theorem", which showed that the long run proportion of times an event occurs is very close to the probability. 

The result is this: Suppose an experiment is repeated $$n$$ times, and has a probability $$p$$ of success each time. Let $$Y$$ count the number of successes. Then the proportion of successes $$Y/n$$ is very close to $$p$$ when $$n$$ is large. More precisely,

$$
\mathbb{P}\left(\left|\frac{Y}{n} - p \right| > \epsilon\right) \to 0 \qquad \text{as } n \to \infty .
$$

We would now call $$Y$$ a binomial random variable, and would recognise Bernoulli’s golden theorem as (a special case of) the [***law of large numbers***](https://en.wikipedia.org/wiki/Law_of_large_numbers). As a reminder, the weak law of large numbers says this: Let $$X_1, X_2, \dots$$ be a sequence of independent and identically distributed random variables with finite expectation $$\mathbb X= \mu$$, and write $$\overline X_n = (\sum_{i = 1}^n X_i) / n$$ for the sample mean; then

$$
\mathbb{P}\big(|\overline X_n - \mu| > \epsilon \big) \to 0  \qquad \text{as } n \to \infty .
$$

If we let $$X_i = 1$$ denote experiment $$i$$ being a success and $$X_i = 0$$ denote experiment $$i$$ being a failure, then we recover Bernoulli's golden theorem.

Perhaps the first formal proof of the law of large numbers in most of its generality was by [**Pafnuty Chebychev** (Russia, 1821–1894)](https://mathshistory.st-andrews.ac.uk/Biographies/Chebyshev/) using the result we call Chebychev’s inequality. Chebyshev was known for his work in probability as well as his results concerning prime numbers in number theory. *Chebyshev’s inequality* (conjectured by his friend and colleague Irénée-Jules Bienaymé) is the result that, for a random variable $$X$$ with expectation $$\mu$$ and variance $$\sigma^2$$, the probability that $$X$$ is far away from its expectation is bounded by

$$
\mathbb{P} \big(|X - \mu| > \epsilon\big) \leq \frac{\sigma^2}{\epsilon^2} .
$$

Applying this to the sample mean $$\overline X_n$$, which has expectation $$\mu$$ and variance $$\sigma^2/n$$, we get that

$$
\mathbb{P} \big(|\overline X_n - \mu| > \epsilon\big) \leq \frac{\sigma^2}{n\epsilon^2} .
$$

Provided the random variables have finite variance, the term on the right-hand side tends to $$0$$, thus proving the result.

### The central limit theorem

Bernoulli’s law of large numbers says that the proportion of successes in a large number trials is close to the probability -- but it’s unlikely to be *exactly* the probability, so probabilists where then interested in what the typical size of the deviation from the probability is.

An important breakthrough here was made by [**Abraham de Moivre** (France, 1667–1754)](https://mathshistory.st-andrews.ac.uk/Biographies/De_Moivre/). De Moivre was among the first people to formalise ideas in probability such as expectation, independence, and conditional probability. He is also well known for *de Moivre’s formula*

$$
(\cos ⁡x + \mathrm i \sin ⁡x)^n = \cos ⁡nx + \mathrm i \sin⁡ nx ,
$$

which later led to Euler’s formula $$\mathrm e^{\mathrm i x} = \cos ⁡x + \mathrm i \sin ⁡x$$, of which it is an easy consequence.

De Moivre showed that the number of success from $$n$$ fair trials with $$p = 1/2$$, was not only $$n/2$$ on average, but was in fact described well by the normal distribution with expectation $$n/2$$ and variance $$n/4$$. This was a special case of what we now know as the [***central limit theorem***](https://en.wikipedia.org/wiki/Central_limit_theorem). The central limit theorem says that for IID random variables $$X_1, X_2, \dots$$ with expectation $$\mu$$ and variance $$\sigma^2$$, we have $$\sum_{i=1}^n X_i \approx \mathrm{N}(n\mu, n\sigma^2)$$, or, more precisely, that

$$
\frac{\sum_{i=1}^n X_i - n\mu}{\sqrt{n\sigma^2}} \to \mathrm N(0,1) \qquad \text{in distribution as } n \to \infty .
$$

If the $$X_i$$ are Bernoulli trials with probability $$\frac12$$, then then we get back de Moivre’s result.

De Moivre’s result was, in many ways, far ahead of its time, and got relatively little attention in his own lifetime. It was rescued from obscurity by [**Pierre-Simon Laplace** (France, 1749–1827)](https://mathshistory.st-andrews.ac.uk/Biographies/Laplace/). Laplace was a polymath, famed for his work in probability, for introducing calculus to the study of classical mechanics, and most of all for his pioneering work in mathematical physics. Laplace extended de Moivre’s central limit theorem for binomial trials with $$p = \frac12$$ to those with any value of $$p$$. In particular, he introduced the use of the characteristic function $$\Phi_X(t) = \mathbb E \mathrm e^{\mathrm itX}$$ to the problem.  Normal distributions are precisely those where the log of this characteristic function is quadratic in $$t$$. The most common modern proof of the central limit theorem uses a Taylor expansion of the logarithm of the characteristic equation. A first-order (linear) Taylor approximation of the log-characteristic function gives an alternative proof of the law of large numbers, while a second-order (quadratic) Taylor approximation to the log characteristic function gives the normal approximation of the central limit theorem.

It took a long time for the central limit theorem to be formally proved in a form we would understand today – we could perhaps attribute such a proof to the Russian mathematician Aleksandr Lyapunov in 1901.

### Probability as pure mathematics

Probability has continued to progress in the twentieth century. One of the most important was the formalisation of probability as following strict mathematical rules – these are sometimes known as the *axioms* of probability. The axiomisation of probability in the most common form used today was due to [**Andrey Nikolaevich Kolmogorov** (Russia, 1902–1987)](https://mathshistory.st-andrews.ac.uk/Biographies/Kolmogorov/) in 1933. Kolmogorov was perhaps the most important probabilist of the twentieth century, but also did important work in mathematical physics and crucial foundational work in areas we might now consider to be computer science. (Kolmogorov was also [my](https://genealogy.math.ndsu.nodak.edu/id.php?id=193274) [PhD supervisor](https://genealogy.math.ndsu.nodak.edu/id.php?id=53569)’s PhD supervisor’s PhD supervisor’s PhD supervisor, or my academic great-great-grandfather.) 

Kolmogorov’s axioms go as follows. We have a sample space $$\Omega$$ which represents the set of all possible outcomes. Then a *probability measure* $$\mathbb P$$ is a function that takes subsets $$A$$ of $$\Omega$$ (called *events*) and assigns them a probability $$\mathbb P(A)$$, that obeys the following rules:

1. $$\mathbb P(A)$$ is always a number between 0 and 1.
2. $$\mathbb P(\Omega)=1$$; that is, the probability of observing an outcome from the sample space is 1.
3. If $$A_1, A_2, \dots$$ are a countably infinite sequence of disjoint events (that is, where at most one of the events happens at a time), then we have the "or" addition rule:

$$
\mathbb P\left( \bigcup_{i=1}^\infty A_i \right) = \sum_{i=1}^\infty \mathbb P(A_i) .
$$

Perhaps surprisingly, using just these three axioms, we can prove all the other rules that we know about probability, such as the "not" rule that $$\mathbb P(\text{not } A)=1-\mathbb P(A)$$ and the "or" rule for general events $$\mathbb P(A \cup B) = \mathbb P(A) + \mathbb P(B) - \mathbb P(A \cap B)$$.

This marked the point from when probability theory could now be considered a proper branch of mathematics – just as legitimate as geometry or number theory – and not just a past-time that can be useful to help gamblers calculate their odds. I always find it surprising that the axioms of probability are less than 90 years old!

There have been many other developments in recent probability that we don’t have space for here, particularly those inspired by applications in statistical physics and in finance.

### Recommended reading

* WJ Adams, The Life and Times of the Central Limit Theorem, second edition, American Mathematical Society, 2009.
*	FN David, [*Games, Gods and Gambling: A history of probability and statistical ideas*](https://leeds.primo.exlibrisgroup.com/permalink/44LEE_INST/13rlbcs/alma991011810039705181), Dover Publications, 1962.
*	LE Maistrov, [*Probability Theory: A historical sketch*](https://leeds.primo.exlibrisgroup.com/permalink/44LEE_INST/13rlbcs/alma991013099789705181), Academic Press, 1974.

* S Gerovitch, [The man who invented modern probability theory](http://nautil.us/issue/4/the-unlikely/the-man-who-invented-modern-probability), *Nautilus*, 4, 2013. 
* E Seneta, [A tricentenary history of the law of large numbers](https://doi.org/10.3150/12-BEJSP12), *Bernoulli*, 19:4, 1088–1121, 2013.
