---
layout: post
title:  "Painting balls"
date:   2024-12-05
modified_date: 2025-11-19
categories: maths
permalink: /blog/painting-balls.html
use_math: true
---

**Update:** *Readers might be interested to know that I've written up the contents of this blogpost as a [more formal academic article](https://arxiv.org/abs/2511.14740), which also gives answers to the exercises posed below.*

Let $X$ be a random number of balls. For each ball, paint it red with probability $r$ and paint it blue with probability $b$. Let $R$ be the number of red balls and $B$ be the number of blue balls. Are $R$ and $B$ positively correlated or negatively correlated – or independent?

(In my head, $b = 1-r$, so every ball is painted either red or blue, but everything in this post works the same as long as $r + b \leq 1$. Let’s say that $r$ and $b$ are both nonzero, though. The painting of each ball is independent of all the others.)

Try and have a think about the question before scrolling down to read the answer.

My mathematician-nerd readers might already know part of this answer: It’s a famous result that if $X \sim \operatorname{Po}(\lambda)$ is a Poisson distribution, then $R \sim \operatorname{Po}(r\lambda)$ and $B \sim \operatorname{Po}(b\lambda)$ are not only Poisson distributions themselves but are also independent of each other. But the question wants to know about other distributions $X$.

The Poisson distribution $X \sim \operatorname{Po}(\lambda)$ is interesting, because its expectation $\mathbb{E}X$ and its variance $\operatorname{Var}(X)$ are the same: they both equal $\lambda$. Statisticians call this property being *equidispersed*. The other possibilities are that a random variable is *overdispersed* if $\operatorname{Var}(X) > \mathbb EX$, or that it is *underdispersed* if $\operatorname{Var}(X) < \mathbb EX$. Roughly speaking, we can think of underdispersed random variables as being quite tightly restricted on their possible outcomes and overdispersed random variables as taking a wide rangle of possible outcomes. Examples of underdispersed distributions include the Bernoulli and binomial distributions; examples of overdispersed distributions include the geometric and negative binomial distributions (at least in their “number of failures before success, starting from 0” form that [I now favour](falling-moments.html)). I didn’t know this until just now, but from scribbling in my notebook: the uniform distribution on $\{0, 1, \dots, n\}$ is underdispersed for $n = 1, 2, 3$, equidispersed for $n = 4$, and overdispersed for $n \geq 5$.)

So what’s the answer to the original question? Spoilers arriving now.

It turns out that the answer is:

* If $X$ is underdispersed, then $R$ and $B$ are negatively correlated.
* If $X$ is equidispersed, then $R$ and $B$ are uncorrelated.
* If $X$ is overdispersed, then $R$ and $B$ are positively correlated.

Let me try and give some intuition for why this might be.

If $X$ is underdispersed, then its range of possible values is pretty tight. So each time a ball gets painted red, that’s a lost chance for it to be painted blue. Similarly, each time a ball gets painted blue, that’s a lost chance for it to be painted red. But there’s only a very limited number of balls available, so giving to one colour steals from the other. Hence the correlation is negative.

On the other hand, if $X$ is overdispersed, then its range of possible values is very wide. So if you see a large number of red balls, that would seem to indicate that there were lots of balls to start with, so there will probably be lots of blue balls too. Similarly, if you see a small number of red balls, that would seem to indicate that there were not very many balls to start with, so there will probably not be very many blue balls either. Hence the correlation is positive.

That's just hand-waving, though. Here’s my exercise for the reader: Prove that

$$ \operatorname{Cov}(R, B) = rb \big(\operatorname{Var}(X) - \mathbb EX\big) ,$$

hence proving that the answer given to the question is correct.

This term $\operatorname{Var}(X) - \mathbb EX$ that appears in the covariance is positive when $X$ is overdispersed and negative when $X$ is underdispersed, so it is, in a sense, measuring "how much dispersion" there is. So we could call it the *dispersion*, and write $\operatorname{Disp}(X) = \operatorname{Var}(X) - \mathbb EX$. With this notation in hand, we now get a very pretty triplet of results (which you might again want to try to prove):

$$ \begin{align}
\operatorname{Disp}(R) &= r^2 \operatorname{Disp}(X) \\
\operatorname{Disp}(B) &= b^2 \operatorname{Disp}(X) \\
\operatorname{Cov}(R, B) &= rb \operatorname{Disp}(X) .
\end{align} $$

Anyway, I wrote this down here because, although it’s a pretty straightforward result, I’d never seen it before, and it seems like the sort of thing I ought to have known.

One last thing. We saw that a Poisson number of balls led to the number of red and blue balls being independent, while an equidispersed number of balls led to the number of red and blue balls being uncorrelated. Of course, independent implies uncorrelated, but uncorrelated does not imply independent. So while there are lots of examples of $X$ such that $R$ and $B$ are uncorrelated, we don’t know that $R$ and $B$ will necessarily be independent too. For your follow-up exercise: Show that, in fact, $R$ and $B$ are independent if *and only if* $X$ had a Poisson distribution.
