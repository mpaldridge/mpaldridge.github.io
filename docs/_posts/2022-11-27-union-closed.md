---
layout: post
title:  "[DRAFT] The union-closed conjecture"
date:   2022-10-13
categories: writing
permalink: /blog/union-closed.html
use_math: true
---

## Introduction

There has recently been a big breakthrough on a result called the union-closed conjecture. It was interesting to me because it used information theory ideas on a non-information-theoretic problem, and also because the breakthrough was surprisingly straightforward for such a famous unsolved problem.

We work with a finite base set $[n] = \{1,2,\dots, n\}$. A family $\mathcal F$ of subsets of $[n]$ is called **union-closed** if for any sets $A$ and $B$ in $\mathcal F$ their union $A \cup B$ is in $\mathcal F$ also.

Then consider the following conjecture:

**Conjecture 1.** *Let $\mathcal F$ be a union-closed family of subsets of $[n]$. Then there exists an $i \in [n]$ in at least $\alpha \lvert\mathcal F\rvert$ of the sets in $\mathcal F$.*

Frankl's **union-closed conjecture** is Conjecture 1 with $\alpha = \frac12$. Note that this is the best possible: take, for example, $\mathcal F$ to be the powerset of $[n]$, or $\mathcal F = \{\varnothing, \{1\}\}$.

Until a few days ago, the union-closed conjecture had been proved in a few special cases, but the best general value of $\alpha$ for Conjecture 1 was roughly $1/\log{\lvert\mathcal F\rvert}$. (See [this survey paper of Bruhn and Schaudt from 2015](https://doi.org/10.1007/s00373-014-1515-0) for more.) Then on 16 November, [Justin Gilmer posted a paper on the arXiv](https://arxiv.org/abs/2211.09055) that proves Conjecture 1 with a constant value of $\alpha$. Gilmer's paper gives $\alpha = 0.01$, but this wasn't optimised, and it looked like the argument ought to be able to be pushed to $\alpha = \psi = (3 - \sqrt{5})/2 \approx 0.38$. Sure enough, once the word had got around, on 21 November, [Alweiss, Huang and Sellke](https://arxiv.org/abs/2211.11731), [Chase and Lovett](https://arxiv.org/abs/2211.11689), and [Sawin](https://arxiv.org/abs/2211.11504) all posted improvments on Gilmer's method to reach $\alpha = \psi$.

The purpose of this blogpost is to try to explain the argument. I find [Chase and Lovett](https://arxiv.org/abs/2211.11689) the easiest paper to read, so this is based on that.

## The result

The key of Gilmer's approach is to take $A$ and $B$ are *random* subsets of $[n]$, independent and identically distributed according to some distribution, then to look for a lower bound on the entropy $H(A \cup B)$ in terms of $H(A)$. Specifically, Chase and Lovett show:

**Theorem 2.** *Let $A$ and $B$ be IID subsets of $[n]$ drawn according to some distribution with $\mathbb P(i \in A) \leq p$. Then*

$$ H(A \cup B) \geq \frac{1-p}{1-\psi} \, H(A) , $$

*where $\psi = (3 - \sqrt{5})/2$.*

First, let's see how Theorem 2 proves Conjecture 1 with $\alpha = \psi$. Let $\mathcal F$ be a union-closed family, and let $A$ and $B$ be drawn independently uniformaly at random from $\mathcal F$. Now, *if* $\mathbb P(i \in A) \leq p$ for some $p < \psi$ for all $i$ -- that is, *if* there is no $i$ at least $\psi \lvert\mathcal F\rvert$ of the sets in $\mathcal F$ -- then we can apply Theorem 2. This gives

$$ H(A \cup B) \geq \frac{1-p}{1-\psi} \, H(A) > H(A) = \log{\lvert\mathcal F\rvert} . $$

But on the other hand, since $\mathcal F$ is union-closed, then the distribution of $A \cup B$ is also a distribution on $\mathcal F$ (although maybe not uniform), so we have

$$ H(A \cup B) \leq \log{\lvert\mathcal F\rvert} . $$

This is a contradition -- so our assumption that $\mathbb P(i \in A) < \psi$ for all $i$ must have been wrong, and there must be some $i$ in at least $\psi\lvert\mathcal F\rvert$ of the sets in $\mathcal F$.

It remains to prove Theorem 2.

## Proof

For the proof, it is convenient to adopt some notation. Let $A_i$ be 1 if $i \in A$ and 0 otherwise; let $A_{< i} = (A_1, A_2, \dots, A_{i-1})$, and let $A_i \cup B_i = (A\cup B)_i = \max\{A_i, B_i\}$.

There's an important technical lemma in this work. That's this:

**Lemma 3.** *For $0\leq p,q \leq 1$, we have*

$$ h\big((1-p)(1-q) \geq \frac{1}{2(1-psi)} \big((1-q)h(p) + (1-p)h(q) \big) , $$

*where $h(p) = -p\log p + (1-p)\log(1-p)$ is the binary entropy and $\psi = (3 - \sqrt{5})/2$.*

(Note that there is equality at $p = q = \psi$, as $(1-\psi)^2 = \psi$.)

Lemma 3 seems to be rather fiddly to prove. Chase and Lovett show that it follows from the one-variable version

$$ h\big((1-p)^2\big) \geq \frac{1}{1-\psi} \big((1-p)h(p)\big) , \qquad (*) $$

but leave proof of $(*)$ to a computer verification. Alweiss, Huang and Sellke have the same lemma; I'm not totally clear on the extent to which it relies on computer verification.
