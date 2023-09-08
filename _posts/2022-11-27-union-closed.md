---
layout: post
title:  "The union-closed conjecture"
date:   2022-11-27
modified_date: 2023-06-22
categories: maths
permalink: /blog/union-closed.html
use_math: true
---

## Introduction

There has recently been a big breakthrough on a result called the union-closed conjecture, thanks to a new paper by Justin Gilmer and some follow-up work by others. It was interesting to me because it used information theory ideas on a non-information-theoretic problem, and also because the breakthrough was surprisingly straightforward for such a famous unsolved problem.

We work with a finite base set $[n] = \lbrace 1,2,\dots, n\rbrace$. A family $\mathcal F$ of subsets of $[n]$ is called **union-closed** if for any sets $A$ and $B$ in $\mathcal F$ their union $A \cup B$ is in $\mathcal F$ also.

Then consider the following conjecture:

**Conjecture 1.** *Let $\mathcal F$ be a union-closed family of subsets of $[n]$. Then there exists an $i \in [n]$ in at least $\alpha \lvert\mathcal F\rvert$ of the sets in $\mathcal F$.*

Frankl's **union-closed conjecture** is Conjecture 1 with $\alpha = \frac12$. Note that this is the best possible: take, for example, $\mathcal F$ to be the powerset of $[n]$, or $\mathcal F = \lbrace\varnothing, \lbrace 1 \rbrace \rbrace$.

Until a few days ago, the union-closed conjecture had been proved in a few special cases, but the best general value of $\alpha$ for Conjecture 1 was roughly $1/\log{\lvert\mathcal F\rvert}$. (See [this survey paper of Bruhn and Schaudt from 2015](https://doi.org/10.1007/s00373-014-1515-0) for more.) Then on 16 November, [Gilmer posted a paper on the arXiv](https://arxiv.org/abs/2211.09055) that proves Conjecture 1 with a constant value of $\alpha$. Gilmer gave $\alpha = 0.01$, but this wasn't optimised, and it looked like the argument ought to be able to be pushed to $\alpha = \psi = (3 - \sqrt{5})/2 \approx 0.38$. Sure enough, once the word had got around, on 21 November, [Alweiss, Huang and Sellke](https://arxiv.org/abs/2211.11731), [Chase and Lovett](https://arxiv.org/abs/2211.11689), and [Sawin](https://arxiv.org/abs/2211.11504) all posted improvments on Gilmer's method to reach $\alpha = \psi$.

The purpose of this blogpost is to try to explain the argument to myself. This will require some -- but not very much! -- knowledge of information theory. I found [Chase and Lovett](https://arxiv.org/abs/2211.11689) the easiest paper to read, so this is based on that.

## The result

The key of Gilmer's approach is to take $A$ and $B$ as *random* subsets of $[n]$, independent and identically distributed according to some distribution, then to look for a lower bound on the entropy $H(A \cup B)$ in terms of $H(A)$. Specifically, Chase and Lovett show the following (with similar or identical results in the other two papers).

**Theorem 2.** *Let $A$ and $B$ be IID subsets of $[n]$ drawn according to some distribution with $\mathbb P(i \in A) \leq p$ for all $i \in [n]$. Then*

$$ H(A \cup B) \geq \frac{1-p}{1-\psi} \, H(A) , $$

*where $\psi = (3 - \sqrt{5})/2$.*

First, let's see how Theorem 2 proves Conjecture 1 with $\alpha = \psi$. Let $\mathcal F$ be a union-closed family, and let $A$ and $B$ be sets drawn independently uniformly at random from $\mathcal F$. Now assume, seeking a contradiction, that $\mathbb P(i \in A) \leq p$ for all $i$ for some $p < \psi$; that is, assume there is no $i$ in at least $\psi \lvert\mathcal F\rvert$ of the sets in $\mathcal F$. Then we can apply Theorem 2. This gives

$$ H(A \cup B) \geq \frac{1-p}{1-\psi} \, H(A) > H(A) = \log{\lvert\mathcal F\rvert} . $$

But on the other hand, since $\mathcal F$ is union-closed, it follows that the distribution of $A \cup B$ is also a distribution on $\mathcal F$ (although maybe not uniform), so we have

$$ H(A \cup B) \leq \log{\lvert\mathcal F\rvert} . $$

These two equations are a contradiction -- so our assumption that $\mathbb P(i \in A) < \psi$ for all $i$ must have been wrong, and there must be some $i$ in at least $\psi\lvert\mathcal F\rvert$ of the sets in $\mathcal F$.

Let us note that it will require some new ideas to push past $\alpha = \psi$. Note that $\psi$ is the number in $(0,1)$ satisfying $(1-\psi)^2 = \psi$, so $H((1-\psi)^2) = H(\psi)$. If the distribution of $A$ and $B$ is "pick each $i$ independently with probabiltiy $p$", for some $p > \psi$, then we have that $H(A \cup B) = n\,h\big((1-p)^2\big)$ is actually smaller than $H(A) = n\,h(p)$, so this argument won't work in its current form.

It remains to prove Theorem 2.

## A lemma

There's an important technical lemma in this work. That's this:

**Lemma 3.** *For $0\leq p,q \leq 1$, we have*

$$ h\big((1-p)(1-q)\big) \geq \frac{1}{2(1-\psi)} \big((1-q)h(p) + (1-p)h(q) \big) , $$

*where $h(p) = -p\log p + (1-p)\log(1-p)$ is the binary entropy and $\psi = (3 - \sqrt{5})/2$.*

(Note that there is equality at $p = q = \psi$.)

Lemma 3 seems to be rather fiddly to prove. Chase and Lovett show that it follows from the one-variable version

$$ h\big((1-p)^2\big) \geq \frac{1-p}{1-\psi} h(p) , \qquad (*) $$

Chase and Lovett leave $(\ast)$ to a computer verification, although claim that Alweiss, Huang and Sellke have a rigorous proof in a "forthcoming paper". The paper of Alweiss, Huang and Sellke, which has the same lemma, seems to use computer verificiation too, although they say it can be made rigorous using interval arithmetic. Sawin has something that looks more like a rigorous proof by calculating the derivative of the ratio of the two sides of $(\ast)$; it's rather involved and I haven't read it all, although it seems to involve checking the roots of certain equations aren't in certain intervals, which was presumably computer-aided too. I would like to see a a proper information-theoretic proof of the inequality $(\ast)$. (It seems pretty innocuous at first look -- and if you rewrite it as 

$$ h(x^2) \geq\phi x h(x) $$

where $\phi = 1/(1 - \psi) = (1+\sqrt{5})/2 = 1.618$ is the golden ratio, it looks more innocuous still -- but it seems to resist any obvious method of attack.)

Here's a graph of

$$ h\big((1-p)^2\big) - \frac{1-p}{1-\psi} h(p) $$

-- that is, the difference between the two sides of $(\ast)$ -- which may be enough to convince you. The red line is at $p = \psi$.

![](../assets/img/entropy.png){:style="display:block; margin-left:auto; margin-right:auto; width: 600px"}

## Proof

OK, so the proof of Theorem 2. 
It is convenient to adopt some notation. Let $A_i$ be 1 if $i \in A$ and 0 otherwise, and let $A_{< i} = (A_1, A_2, \dots, A_{i-1})$.

We start by writing

$$ \begin{align*} H(A \cup B) &= \sum_{i=1}^n H\big((A \cup B)_i \mid (A \cup B)_{< i} \big) \\
& \geq \sum_{i=1}^n H\big((A \cup B)_i \mid A_{< i}, B_{< i} \big) , \end{align*} $$

where the equality on the first line is the chain rule and the inequality on the second line is the data processing inequality. Let's look at one of the terms from the sum. We have, by definition,

$$ H\big((A \cup B)_i \mid A_{< i}, B_{< i} \big) = \mathbb E_{a,b}\, H\big((A \cup B)_i \mid A_{< i} = a, B_{< i} = b\big) , $$

where $\mathbb E_{a,b}$ is an expectation over $A_{<i}$ and $B_{<i}$. If we let $p_a = \mathbb P(i \in A \mid A_{<i} = a)$ and $p_b = \mathbb P(i \in B \mid B_{<i} = b)$, then

$$ H\big((A \cup B)_i \mid A_{< i} = a, B_{< i} = b\big) = h\big((1-p_a)(1-p_b)\big) , $$

because $(A \cup B)_i$ is 0 if and only if $i$ is in neither $A$ nor $B$, and these are independent. But then, by Lemma 3,

$$ h\big((1-p_a)(1-p_b)\big) \geq \frac{1}{2(1-\psi)} \big((1-p_b)h(p_a) + (1-p_a)h(p_b) \big) . $$

So

$$ \begin{align*}
H\big((A \cup B)_i \mid A_{< i}, B_{< i} \big)
&= \mathbb E_{a,b} \,H\big((A \cup B)_i \mid A_{< i} = a, B_{< i} = b) \\
&\geq \mathbb E_{a,b} \frac{1}{2(1-\psi)} \big((1-p_b)h(p_a) + (1-p_a)h(p_b) \big) \\
&= \frac{1}{2(1-\psi)} \Big( \mathbb \mathbb E_b (1 - p_b)\,E_a \,h(p_a)  +  \mathbb  \mathbb E_a (1 - p_a) \, E_b \,h(p_b) \Big) \end{align*} $$

Now, $\mathbb E_b (1 - p_b)$ is exactly the marginal probability that $i$ is not in $B$, which is at most $1-p$, by hypothesis. Also 

$$ \mathbb E_a \,h(p_a) = \mathbb E_a \,H(A_i \mid A_{<i} = a) = H(A_i \mid A_{<i}) . $$

So we have

$$ \begin{align*}
H\big((A \cup B)_i \mid A_{< i}, B_{< i} \big)
&\geq \frac{1}{2(1-\psi)} \big( (1-p)H(A_i \mid A_{<i}) + (1-p)H(B_i \mid B_{<i}) \big) \\
&\geq \frac{1-p}{2(1-\psi)} \big( H(A_i \mid A_{<i}) + H(B_i \mid B_{<i}) \big) \\
&= \frac{1-p}{1-\psi} H(A_i \mid A_{<i}) , \end{align*} $$

since $A$ and $B$ are identically distributed.

Finally, putting this all together,

$$ \begin{align*}
H(A \cup B) &\geq \sum_{i=1}^n H\big((A \cup B)_i \mid A_{< i}, B_{< i} \big) \\
&\geq \sum_{i=1}^n \frac{1-p}{1-\psi}  H(A_i \mid A_{<i}) \\
&= \frac{1-p}{1-\psi}  \sum_{i=1}^n  H(A_i \mid A_{<i}) \\
&= \frac{1-p}{1-\psi} H(A) , \end{align*} $$

where the last step is the chain rule again. Thus Theorem 2 is proved.


## Later updates

* [Pebody](https://arxiv.org/abs/2211.13139) also proved the same result, on 23 November, two days after the other three. A couple of the steps in the main lemma say "To be proved", but it seems less computer-aided than the others.
* In the paper of Chase and Lovett, they show that $\alpha = \psi$ is in fact tight for "almost union-closed" families, where at least $(1-\epsilon)|\mathcal F|^2$ of the pairs $A, B$ have $A \cup B$ are in $\mathcal F$. ([Gil Kalai points out](https://gilkalai.wordpress.com/2022/11/30/a-nice-example-related-to-the-frankl-conjecture/) that this is different to saying that at least $(1-\epsilon)|\mathcal F \cup \mathcal F|$ of the unions $A \cup B$ are in $\mathcal F$.)
* [Sawin's paper](https://arxiv.org/abs/2211.11504) also gave a sketch of how the result might be pushed a little beyond $\psi$ by making $A$ and $B$ not independent (which isn't required for the proof to work). In December, [Yu](https://arxiv.org/abs/2212.00658) and then [Cambie](https://arxiv.org/abs/2212.12500) filled in the details, and got $\alpha = 0.3823...$ (compared to $\psi = 0.3819...$).
* In June 2023, [Liu](https://arxiv.org/abs/2306.08824) developed Sawin's improvement a bit further, and computed $\alpha = 0.3827...$.
* I had somehow missed this earlier, but [Boppana](https://arxiv.org/abs/2301.09664) gives a delightfully short proof of the main lemma, in the form $f(x) := h(x^2) - \phi x h(x) \geq 0$. In fact, he proved it in 1985, in a different context. It's simple to calculate the third derivative $f'''$, and to see has at most two roots in $[0,1]$. So $f$ itself has at most five roots -- these are the double root at $0$, the double root at $\phi$ and the root at $1$. So $f$ has the same sign on the whole of $[0,1]$, and it's clear that this sign is positive. (I haven't looked at this close enough to work out why going via the third derivative works, when going via the first a second presumably doesn't.)

