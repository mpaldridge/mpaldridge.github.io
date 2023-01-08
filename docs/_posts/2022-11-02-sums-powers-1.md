---
layout: post
title:  "Sums of powers I: With and without replacement"
date:   2022-11-02
categories: writing
permalink: /blog/sums-powers-1.html
use_math: true
---

This post is about sums of powers:

$$ S_k(n) = \sum_{x = 1}^n x^k = 1^k + 2^k + \cdots + n^k . $$

Most mathematicians you ask will know that

$$ \begin{align}
S_1(n) = \sum_{x=1}^m x &= \frac12\, (n+1)\,n \\
S_2(n) = \sum_{x=1}^m x^2 &= \frac13\, (n+1)(n+\tfrac12)\,n \\
S_3(n) = \sum_{x=1}^m x^3 &= \frac14\, (n+1)^2 \,n^2 ,
\end{align} $$

and you can [look up more](https://mathworld.wolfram.com/FaulhabersFormula.html):

$$ \begin{align}
S_4(n) = \sum_{x=1}^m x^4  &= \frac{1}{5}\, (n+1)(n+\tfrac12)\,n\,(n^2+n-\tfrac13) \\
  &= \frac15\, (n+1.264)(n+1)(n+ \tfrac12)\,n\,(n-0.264) \\
S_5(n) = \sum_{x=1}^m x^5  &= \frac{1}{6}\,(n+1)^2 \,n^2\, (n^2 + n - \tfrac12) \\
  &= \frac16\,(n+1.366)(n+1)^2\,n^2\,(n-0.366) ,
\end{align} $$

and so on.

I say "and so on", but it isn't clear exactly how this is going to continue. I find this sort of frustrating, because it looks like it's about to fall into an easy-to-understand pattern, but it doesn't quite fit. We can observe some properties:

* $S_k(n)$ is a polynomial of degree $k+1$.
* The leading term of this polynomial is $\frac{1}{k+1} n^{k+1}$.
* $S_k(n)$ is symmetric about $\frac12$, in that $S_k(n) = (-1)^k S_k(1 - n)$.
* $(n - \frac12)$ is a factor of $S_k(n)$ when $n$ is odd.
* $n$ and $(n+1)$ are factors of $S_k(n)$, and are factors of $S_k(n)$ with multiplicity (at least) two when $n \geq 3$ is odd.

(It looks as if all the roots of $S_k(n)$ might be real, but that fails for $k=7$.) But these properties aren't enough to be able to just write down what the next formulas will be.

## Sampling with and without replacement

One way to think of the power

$$ x^k = x \cdot x \cdot x \cdots x $$

is that it's the number of ways of picking $k$ objects from a set of $x$ objects *with replacement*. That is, perhaps we have a bag of coloured balls, and we are going to pick $k$ balls one at a time, but put the ball back in the bag after having picked it out and noted its colour. So there are $x$ choices for the first ball, then still $x$ choices for the second ball (as the first ball has gone in the bag), $x$ choices for the third ball, ..., all the way to $x$ choices for the $k$th and final ball.

A similar idea is that *falling factorial*

$$ x^{\underline{k}} = x (x-1) (x-2) \cdots (x - k + 1) . $$

This is the number of ways of picking $k$ objects from a set of $x$ objects *without replacement*. That is, we are going to pick $k$ balls out of the bag of $x$ balls, but we *don't* put the ball back in the bag after having picked it out. So there are $x$ choices for the first ball, but then only $x-1$ choices for the second ball (as the first ball doesn't go back in the bag), $x-2$ choices for the third ball, .... At the final step, we have $x - (k - 1) = x - k + 1$ choices for the $k$th and final ball: the $x$ original balls minus the $k-1$ balls that were removed in the previous $k-1$ steps.

So we could look instead at the sums of these falling factorials instead of powers, to see if the formulas are any nicer.
