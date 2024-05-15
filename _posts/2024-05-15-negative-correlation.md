---
layout: post
title:  "How negatively correlated can a collection of random variables be?"
date:   2024-05-15
categories: maths
permalink: /blog/negative-correlation.html
use_math: true
---

I was at a very good student talk yesterday. The group were talking (among other things) about how combining two estimates is better than just having one – the old “wisdom of crowds” idea.

Mathematically, suppose we have two independent and identically distributed random variables $X_1$, $X_2$. Then if

$$ \operatorname{Var}(X_1) = \operatorname{Var}(X_2) = \sigma^2 , $$

then

$$ \operatorname{Var} \left( \frac{X_1 + X_2}{2} \right) = \frac{1}{2^2} \big(\operatorname{Var}(X_1) +\operatorname{Var}(X_2) \big) = \frac{\sigma^2}{2} , $$

so the variance is halved by combining the two estimates.

The student speaker then talked about a technique called “antithetic pairs”. If $X_1$ and $X_2$ are identically distributed but *not* independent, we have

$$ \operatorname{Var} \left( \frac{X_1 + X_2}{2} \right) = (1 + \rho) \frac{\sigma^2}{2} , $$

where $\rho$ is the correlation. So, the speaker pointed out, if we can induce a negative correlation, $\rho < 0$, then this will be even more accurate than the independent case. (I covered a similar idea in [this blogpost](../correlation.html).)

I was thinking of asking whether this could be extended to antithetic triples or quadruples – but the speaker had predicted this. She said it’s much harder to induce negative correlation between three variables – she might even have said it’s impossible.

We were chatting after the talk, and I said I thought you *could* have three negatively correlated random variables. Consider breaking a stick into three pieces. If piece 1 is bigger than you’d expect, then piece 2 is likely to be smaller than you’d expect to make up for it: a negative correlation. But the same is true for pieces 2 and 3, and for pieces 3 and 1: all negatively correlated.

At this point, a colleague pointed out that I was being rather imprecise. A fair point! So let $Z_1$, $Z_2$, $Z_3$ be independent random variables uniformly distributed between 0 and 1. Then write

$$ X_1 = \frac{Z_1}{Z_1 + Z_2 + Z_3} \qquad X_2 = \frac{Z_2}{Z_1 + Z_2 + Z_3} \qquad X_3 = \frac{Z_3}{Z_1 + Z_2 + Z_3} , $$

so, in particular, $X_1 + X_2 + X_3 = 1$ make up “the whole stick”.

I said it seemed this $X_1$, $X_2$, $X_3$ must be pairwise negatively correlated. However, I also had to admit that I couldn’t manage to calculate the correlation

$$ \rho_{ij} = \frac{\operatorname{Cov}(X_i,X_j)}{\sqrt{\operatorname{Var}(X_1)\,\operatorname{Var}(X_2)}} , $$

because the variance and covariance seem rather tricky to work out.

But, later in the day, I realised there’s a cunning – can I say amusing? – way to work out the correlations “by the back door”, without calculating the variance and covariance at all.

The idea starts from this formula, which the speaker did show during her talk:

$$  \operatorname{Var} \left(\sum_{i=1}^n  X_i \right) = \sum_{i=1}^n  \operatorname{Var}(X_i) + 2 \sum_{i < j}  \operatorname{Cov}(X_i, X_j) . $$

In the $n = 3$ case, this becomes

$$  \operatorname{Var}(X_1 + X_2 + X_3) = \sum_{i=1}^3 \sigma_i^2+ 2 \sum_{i < j}  \rho_{ij}\sigma_i\sigma_j , $$

where I’m writing $\sigma_i^2 = \operatorname{Var}(X_i)$ and $\rho_{ij} = \operatorname{Corr}(X_i, X_j)$. Now, I haven’t worked out what the variances $\sigma_i^2$ are; but I do know, by symmetry, that they’re all the same. Let’s just call that $\sigma^2$. Similarly, I know all the correlations $\rho_{ij}$ are the same; let’s call them $\rho$. So we have

$$  \operatorname{Var}(X_1 + X_2 + X_3) = \sum_{i=1}^3 \sigma^2+ 2 \sum_{i < j}  \rho\sigma\sigma = 3\sigma^2 + 6\rho\sigma^2  $$

(where, in the last term, the $2 \times 3 = 6$ is because there are three pairs of variables: $(1,2)$, $(2,3)$ and $(3,1)$).

But — and here’s the big trick! — I also know what $\operatorname{Var}(X_1 + X_2 + X_3)$. That’s because the example is fixed so that $X_1 + X_2 + X_3 = 1$, and the variance of “the number one” is 0, because it’s always the same. So we now have

$$ 0 = 3 \sigma^2 + 6\rho\sigma^2 , $$

which gives $\rho = -\tfrac12$. So the pieces of the stick all have a negative correlation of $-\tfrac12$; or rather, each pair of pieces of the stick has a negative correlation $-\tfrac12$.

You can do exactly the same construction with $n$ parts of the stick for any $n$: let $Z_i$ be uniform on $[0,1]$ (or indeed any positive distribution) and set $X_i = Z_i / \sum_{j=1}^n Z_j$. The same calculation becomes

$$ 0 = n \sigma^2 + n(n-1) \rho \sigma^2 ,$$

since there are $\binom{n}{2} = \frac{n(n-1)}{2}$ pairs of variables, and from that equation we get $\rho = -1/(n-1)$.


## A theorem

This raises the question: Is $\rho = -1\(n-1)$ the best possible result? That is, is it the case that with $n$ random variables, at least one of the correlations has to be at least $-1/(n-1)$?

The answer to that question is yes!

**Theorem.** *Let $X_1, X_2, \dots, X_n$ be random variables with non-zero variances. Write $\rho_{ij} = \operatorname{Corr}(X_i, X_j)$ for the correlations, and*

$$ \bar\rho = \frac{1}{\binom{n}{2}} \sum_{i < j} \rho_{ij} = \frac{2}{n(n-1)}  \sum_{i < j} \rho_{ij} $$

*for the average correlation. Then $\bar\rho \geq -1/(n-1)$.*

*In particular, there is at least one pair $(i,j)$ with $\rho_{ij} \geq -1/(n-1)$.*

So the student speaker was basically right – it’s not really worth trying to get antithetic triples, quadruples, etc, because the more variables you take, the weaker the negative correlation has to become.

The proof here is essentially the same as the argument previously.

*Proof.* Without loss of generality we can scale each $X_i$ by multiplying by $1/\sqrt{\operatorname{Var}(X_i)}$. This keeps the correlations the same, but makes all the variances equal 1.

Then we use

$$  \operatorname{Var} \left(\sum_{i=1}^n  X_i \right) = \sum_{i=1}^n  \operatorname{Var}(X_i) + 2 \sum_{i < j}  \operatorname{Cov}(X_i, X_j) . \qquad (*)$$

The right-hand side of $(*)$ is

$$ \sum_{i=1}^n 1 + 2\sum_{i<j} \rho_{ij} = n + n(n-1)\bar\rho , $$

by the definition of $\bar\rho$. Meanwhile, the left-hand side of $(*)$ is a variance, so must be non-negative. Hence, we have

$$ 0 \leq n + n(n-1)\bar\rho , $$

and thus we have $\bar\rho \geq -1/(n-1)$ QED.

*(Thanks to EW for an excellent talk, and to CT and EW for interesting and fun discussions afterwards.)*
