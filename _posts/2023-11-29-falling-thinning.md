---
layout: post
title:  "Falling and thinning"
date:   2023-11-29
categories: maths
permalink: /blog/falling-thinning.html
use_math: true
---

## Recap

This post is a follow-up to [my earlier post](falling-moments.html) on the *falling moment generating function*

$$ \Phi_X(t) = \mathbb E(1+t)^X = \sum_{k=0}^\infty \mathbb EX^{\underline{k}} \, \frac{t^k}{k!} . $$

[I argued](falling-moments.html) that the FMGF is a natural discrete equivalent to the moment generating function (MGF) $M_X(t) = \mathbb E\mathrm{e}^{tX}$. I also argued that although it is very similar to the probability generating function (PGF) $G_X(t) = \mathbb Et^X$, since $\Phi_X(t) = G_X(1+t)$, it seems to give slightly more pleasant expressions for the common distributions and a slightly simpler proof of the "law of small numbers".

After that blogpost, [Oliver Johnson](https://twitter.com/orbit_silver/status/1729435474005983309) pointed out an even better argument for the FMGF, based on the idea of "thinning". (Olly is the author of the [Substack "Logging the World"](https://bristoliver.substack.com) and the [book "Numbercrunch"](https://www.amazon.co.uk/dp/1788708334/), and was my PhD supervisor back in the day.)

## Scaling and thinning

All the "GFs" work well with adding up independent random variables – to find the GF of the independent sum $X + Y$, we just multiply the GF for $X$ and the GF for $Y$. So with the FMGF, for example, we have have $\Phi_{X+Y}(t) = \Phi_X(t)\,\Phi_Y(t)$, because

$$ \mathbb E(1+t)^{X+Y} = \mathbb E(1+t)^X \, \mathbb E(1+t)^Y . $$

The MGF works particularly well with *scaling* random variables. By scaling, I just mean multiplying by a constant, so going from $X$ to $aX$. We have $M_{aX}(t) = M_X(at)$, since

$$ \mathbb E \mathrm{e}^{t(aX)} = \mathbb E \mathrm{e}^{(at)X} . $$

But, while scaling is a natural operation for continuous random variables, it doesn't really make sense for discrete random variables. (From now on, when I say "discrete", I'll specifically mean random variables that take values in the non-negative integers $\lbrace 0,1,2,3,\dots\rbrace$.) Scaling a continuous random variable that takes values in $\mathbb R$ by a factor of $a = 0.7$ gives you another continuous random variable that takes values in $\mathbb R$; but scaling a discrete random variable that takes values in $\lbrace 0,1,2,3,\dots\rbrace$ by a factor of $a = 0.7$ gives you a random variable that takes values in $\lbrace 0,0.7,1.4,2.1,\dots\rbrace$, which is not really a comparable thing.

Instead, for discrete random variables, a more natural operation is *thinning*. To *thin* a discrete random variable $X$ by a constant $a \in [0,1]$, we can think of $X$ objects as *trying* to arrive, but each one only making it with probability $a$ and getting lost with probability $1-a$. Formally, if we write $a\circ X$ for the $a$-thinning of $X$, we have

$$ a \circ X = \sum_{i=1}^X B_i , $$

where the $B_i$ are IID Bernoulli$(a)$ random variables.

Like scaling, thinning reduces the expectation $\mathbb EX = \mu$ to $\mathbb E(a\circ X) = a\mu$; but unlike scaling, thinning makes sure we still only get non-negative integer outcomes. So, in this sense, thinning is the natural discrete equivalent of scaling.

So, what happens to the FMGF if we thin a random variable. Well, it's not to difficult to check that we get

$$ \begin{align*}
\Phi_{a \circ X}(t) &= \mathbb E(1+t)^{a \circ X} \\
  &= \mathbb E \big(\mathbb E (1+t)^{a \circ X} \; \big| \; X \big) \\
  &= \mathbb E (1+at)^X \\
  &= \Phi_X(at) ,
\end{align*} $$

where we used the fact that, conditional on $X$, the thinning $a \circ X$ is Binomial$(x,a)$, which has FMGF $(1+at)^X$.

So we see that the way the FMGF behaves under thinning, $\Phi_{a\circ X}(t) = \Phi_X(at)$ is exactly the way that the MGF behaves under scaling, $M_{aX}(t) = M_X(at)$. (This would not work nearly as well for the PGF, which has the very awkward expression $G_{a\circ X}(t) = G_X(at - a + 1)$.)

Comparing coefficients of $t^k$ in $\Phi_{a\circ X}(t) = \Phi_X(at)$ (or, more formally, by differentiating $k$ times and taking $t = 0$), we learn how thinning changes the falling moments: specifically, we get $\mathbb E(a \circ X)^{\underline{k}} = a^k \, \mathbb EX^{\underline{k}}$. This is the discrete equivalent of how scaling changes the moments: $\mathbb E(aX)^k = a^k \, \mathbb EX^k$.

## Large numbers

The way that the MGF works so well with adding independent random variables and scaling random variables allows us to prove a very important result called the *law of large numbers*.

Let $X_1, X_2, \dots$ be IID random variables with expectation $\mu$. Then consider the summed-and-scaled random variable

$$ Y_n = \frac{1}{n} (X_1 + X_2 + \cdots + X_n) . $$

The law of large numbers says that $Y_n \to \mu$ as $n \to \infty$, by which we mean that $Y_n$ tends in distribution to the distribution that is the point mass at $\mu$.

The law of large numbers can be proved using the MGF. Note that by the properties of the MGF we've discussed in this post, we have $M_{Y_n}(t) = M_X(t/n)^n$. If we take a Taylor expansion

$$ M_X(t) = 1 + \mu t + \cdots $$

of the MGF of $X$, then the MGF of $Y_n$ is

$$ M_{Y_n}(t) = M_X \Big(\frac{t}{n}\Big)^n = \left(1 + \frac{\mu t}{n} + \cdots\right)^n \to \mathrm{e}^{\mu t} $$

But $\mathrm{e}^{\mu t}$ is the MGF of the point mass at $\mu$, which proves the result.

## Thin numbers

But we can now follow exactly the same argument for discrete random variables, with thinning instead of scaling, and the FMGF instead of the MGF.

Let $X_1, X_2, \dots$ be IID discrete random variables with expectation $\mu$. Then consider the summed-and-thinned random variable

$$ Y_n = \frac{1}{n} \circ (X_1 + X_2 + \cdots + X_n) . $$

The "law of thin numbers" (as [Harremoës, Johnson and Kontoyiannis](https://doi.org/10.1109/TIT.2010.2053893) call it) says that $Y_n \to \text{Po}(\mu)$ as $n \to \infty$, by which we mean that $Y_n$ tends in distribution to the Poisson distribution with rate $\mu$.

The law of thin numbers can be proved using the FMGF. Note that by the properties of the FMGF we've discussed in this post, we have $\Phi_{Y_n}(t) = \Phi_X(t/n)^n$. If we take a Taylor expansion

$$ \Phi_X(t) = 1 + \mu t + \cdots $$

of the FMGF of $X$, then the FMGF of $Y_n$ is

$$ \Phi_{Y_n}(t) = \Phi_X \Big(\frac{t}{n}\Big)^n = \left(1 + \frac{\mu t}{n} + \cdots\right)^n \to \mathrm{e}^{\mu t} $$

But $\mathrm{e}^{\mu t}$ is the FMGF of the Poisson distribution with rate $\mu$, which proves the result.

