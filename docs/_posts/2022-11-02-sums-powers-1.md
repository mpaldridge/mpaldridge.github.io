---
layout: post
title:  "Sums of powers I: with and without replacement"
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

I say "and so on", but it isn't clear exactly how this is going to continue. I find this sort of frustrating, because it looks like it's about to fall into an easy-to-understand pattern, but it never quite fits. We can observe some properties:

* $S_k(n)$ is a polynomial of degree $k+1$.
* The leading term of this polynomial is $\frac{1}{k+1} n^{k+1}$.
* $S_k(n)$ is symmetric about $-\frac12$, in that $S_k(n) = (-1)^k S_k(- (n + 1))$.
* $(n + \frac12)$ is a factor of $S_k(n)$ when $n$ is odd.
* $n$ and $(n+1)$ are factors of $S_k(n)$, and are factors of with multiplicity (at least) two when $n \geq 3$ is odd.

(It might look as if all the roots of $S_k(n)$ are going to be real, but that fails for $k=7$.) But these properties aren't quite enough to be able to just write down what the next formulas will be.

## Sampling without replacement

One way to think of the power

$$ x^k = x \cdot x \cdot x \cdots x $$

is that it's the number of ways of picking $k$ objects from a set of $x$ objects *with replacement*. That is, perhaps we have a bag of coloured balls, and we are going to pick $k$ balls one at a time, but put the ball back in the bag after having picked it out and noted its colour. So there are $x$ choices for the first ball, then still $x$ choices for the second ball (as the first ball has gone in the bag), $x$ choices for the third ball, ..., all the way to $x$ choices for the $k$th and final ball.

A similar idea is that of the *falling factorial*

$$ x^{\underline{k}} = x (x-1) (x-2) \cdots (x - k + 1) . $$

This is the number of ways of picking $k$ objects from a set of $x$ objects *without replacement*. That is, we are going to pick $k$ balls out of the bag of $x$ balls, but we *don't* put the ball back in the bag after having picked it out. So there are $x$ choices for the first ball, but then only $x-1$ choices for the second ball (as the first ball doesn't go back in the bag), $x-2$ choices for the third ball, .... At the final step, we have $x - (k - 1) = x - k + 1$ choices for the $k$th and final ball: the $x$ original balls minus the $k-1$ balls that were removed in the previous $k-1$ steps.

So we could look instead at the sums of these falling factorials instead of powers, to see if the formulas are any nicer. And they are! We have

$$ \begin{align}
\sum_{x=1}^n x &= \frac{1}{2}\,(n+1)\, n \\
\sum_{x=1}^n x(x-1) &= \frac{1}{3}\,(n+1)\, n \, (n-1) \\
\sum_{x=1}^n x(x-1)(x-2) &= \frac{1}{4}\,(n+1)\, n \, (n-1)(n-2) \\
\sum_{x=1}^n x(x-1)(x-2)(x-3) &= \frac{1}{5}\,(n+1)\, n \, (n-1)(n-2)(n-3) \\
\sum_{x=1}^n x(x-1)(x-2)(x-3)(x-4) &= \frac{1}{6}\,(n+1)\, n \, (n-1)(n-2)(n-3)(n-4) .
\end{align} $$

Using the $x^{\underline{k}}$ notation for for the falling factorial, the pattern is crystal clear: it's

$$ \sum_{x=1}^n x^{\underline{k}} = \frac{1}{k+1}\,(n+1)^{\underline{k+1}} . $$

It's perhaps better to write this with sum only up to $n-1$, because written as

$$ \sum_{x=0}^{n-1} x^{\underline{k}} = \frac{1}{k+1}\,n^{\underline{k+1}} , $$

it's clear that this is a sort of "discrete equivalent" to the integration of polynomials

$$ \int_{0}^n x^k \, \mathrm{d}x = \frac{1}{k+1} \, n^{k+1} . $$

## Proof

One way to prove this result is to develop the theory of "discrete derivatives" and "discrete integrals" -- see Section 2.6 of *Concrete Mathematics* by Graham, Knuth and Patashnik for some nice coverage of this idea.

But here, let's give a simple "double counting" proof instead. It will be convenient to prove the result in the form

$$ n^{\underline{k}} = k \sum_{x=0}^{n-1} x^{\underline{k-1}} . $$

The left-hand side simply counts the number of ways of sampling $k$ objects from a population of $n$ objects without replacement. We need to explain how the right-hand side counts the same thing.

To do this, let's consider the $n$ objects being the numbers $1, 2, \dots, n$. We will count the ways of sampling $k$ of these without replacement by counting separately based on the maximum number in the sample. If this maximum number is $x + 1$, say, then there are $k x^{\underline{k-1}}$ ways to do this. That's because $k-1$ of the objects must be from $1, 2, \dots, x$ chosen with replacement, and then there are $k$ spaces in that list to slot in the item $x+1$. The possible values of $x+1$ are from $1$ to $n$, and summing up all these gives the result above.

## Back to powers

I think this way of looking things is an argument that the falling factorial is the "correct" way to look at this. But we still need the sum of powers. So perhaps the best way to do that is to write the powers in terms of the falling factorials, then use the "nice" falling factorial formula.

For example, for $k = 1$, we already know that $x = x^1 = x^{\underline{1}}$. So

$$ \sum_{x=1}^n x = \sum_{x=1}^n x^{\underline{1}} = \frac12 \, (n+1)^{\underline{2}} = \frac12\, (n+1)\, n , $$

which is correct. For $k = 2$, it's quick to check that $x^2 = x^{\underline{2}} + x^{\underline{1}}$. So

$$ \begin{align}
\sum_{x=1}^n x^2 &= \sum_{x=1}^n x^{\underline{2}} + \sum_{x=1}^n x^{\underline{1}} \\
  &= \frac13 \, (n+1)^{\underline{3}} + \frac12 \, (n+1)^{\underline{2}} \\
  &= \frac{1}{6}\, (n+1)\,n\,\big(2(n-1) + 3\big) \\
  &= \frac{1}{6}\, (n+1)\,n\,(2n+1) ,
\end{align} $$

which is correct also.

The general result for writing a power in terms of a falling factorial uses the [Stirling numbers of the second kind](https://en.wikipedia.org/wiki/Stirling_numbers_of_the_second_kind). The Stirling number $\genfrac{\lbrace}{\rbrace}{0pt}{}{k}{l}$ is the number of ways of partitioning $k$ objects into $l$ disjoint sets. They can be efficiently computed using the recurrence

$$ \genfrac{\{}{\}}{0pt}{}{k+1}{l} = l\genfrac{\{}{\}}{0pt}{}{k}{l} + \genfrac{\{}{\}}{0pt}{}{k}{l-1} , $$

which is like the recurrence for the binomial coefficients, except with an extra $l$ in fron of the first term. This recurrence holds because to partition $k+1$ objects into $l$ sets, we either partition the first $k$ objects into $l$ sets then add the $(k+1)$th item into one of those $l$ sets, or we partition the first $k$ objects into $l-1$ sets and put the $(k+1)$th object on its own.

The result we are interested in, then, is 

$$ x^k = \sum_{l=1}^k \genfrac{\{}{\}}{0pt}{}{k}{l} x^{\underline{l}} . $$

*Concrete Mathematics* (Section 6.1) proves this by induction, but it surely deserves a double-counting proof instead. The left-hand side is the number of ways of of choosing $k$ objects from $x$ with replacement. Alternatively, we can count them up by "repeat pattern". By repeat pattern, I mean a record of which objects have been chosen when -- it will be clearest to show by some examples. Suppose we have three balls -- red, green, blue -- and are picking three with replacement. The left column is how we pick them, and the right column is the repeat pattern.

$$ \begin{align}
&\text{red}, \text{green}, \text{blue} & &\{1\}, \{2\}, \{3\} \\
&\text{red}, \text{red}, \text{red} & &\{1,2,3\} \\
&\text{green}, \text{blue}, \text{green} & &\{1,3\}, \{2\}
\end{align} $$

A repeat pattern is a partition of the $k$ positions. And if we see $l$ distinct objects, the partition is into $l$ sets; there are then $x^{\underline{l}}$ ways to "fill in" the repeat pattern with $l$ distinct objects. Thus the right-hand side is counting up all the ways of choosing $k$ objects from $x$ with replacement, first summing over the number $l$ of distinct obejcts seen, then counting over each of the $\genfrac{\lbrace}{\rbrace}{0pt}{}{k}{l}$ repeat patterns for $l$ distinct objects.

Equipped with this result, we then have

$$ \begin{align}
\sum_{x=1}^n x^k &= \sum_{x=1}^n \sum_{l=1}^k \genfrac{\{}{\}}{0pt}{}{k}{l} x^{\underline{l}} \\
  &= \sum_{l=1}^k \genfrac{\{}{\}}{0pt}{}{k}{l} \sum_{x=1}^n x^{\underline{l}} \\
  &= \sum_{l=1}^k \frac{1}{l+1} \genfrac{\{}{\}}{0pt}{}{k}{l} n^{\underline{l+1}} .
\end{align} $$

I think that's the best way to write down the pattern for sums of powers.

## Postscript: binomial coefficients

I mentioned this formula.

$$ \sum_{x=1}^n x^{\underline{k}} = \frac{1}{k+1}\,(n+1)^{\underline{k+1}} . $$

on Twitter, and commented that, while it's not exactly *obscure*, it doesn't seem as well known as I'd expect. (For example, I've only found it on one single page on Wikipedia, hidden two-thirds of the way down the [Stirling number](https://en.wikipedia.org/wiki/Stirling_number#Example) page.)

But [Olly pointed out](https://twitter.com/BristOliver/status/1587880445185867778) that it's related to a slightly better known result with the binomial coefficient $\binom{x}{k}$. The binomial coefficient can be written as

$$ \binom{x}{k} = \frac{x^{\underline{k}}}{k!} . $$

So if we divid both sides of our result by $k!$, then the left-hand side becomes

$$ \frac{1}{k!} \sum_{x=1}^n x^{\underline{k}} = \sum_{x=1}^n \frac{x^{\underline{k}}}{k!} = \sum_{x=1}^n \binom{x}{k} , $$

and the right-hand side becomes

$$ \frac{1}{k!}\\, \frac{1}{k+1}\,(n+1)^{\underline{k+1}} = \frac{1}{(k+1)!} \, (n+1)^{\underline{k+1}} =\sum_{x=1}^n \binom{x}{k} . $$

Thus we get

$$ \sum_{x=1}^n \binom{x}{k} = \sum_{x=1}^n \binom{x}{k} , $$

which is known as the ["hockeystick identity"](https://en.wikipedia.org/wiki/Hockey-stick_identity).
