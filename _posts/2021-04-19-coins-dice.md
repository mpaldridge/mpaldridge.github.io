---
layout: post
title:  "Of coins and dice (and Infinite Jest)"
date:   2021-04-19
categories: writing
permalink: /blog/coins-dice.html
use_math: true
---

## Coins 1

Consider this maths problem:

*My friend and I each toss $n$ fair coins. What is the probability we each get the same number of heads?*

Here's one way to solve this. First lets look at my friend's coin tosses. There are $2^n$ possible sequences of heads-or-tails from $n$ coin tosses, and, of those, $\binom{n}{k}$ end up with $k$ heads. So the probability my friend gets $k$ heads is $\binom{n}{k}/2^n$. What about the probability I also get $k$ heads? That's $\binom{n}{k}/2^n$ too. So the probability we both get $k$ heads is

$$ \left( \frac{\binom{n}{k}}{2^n} \right)^2 = \frac{\binom{n}{k}^2}{2^{2n}} . $$

But the question is asking for the probability we match on any number of heads. So we have to sum this probability over all possible values of $k$, to get the answer

$$ \sum_{k=0}^n \frac{\binom{n}{k}^2}{2^{2n}} = \frac{\sum_{k=0}^n \binom{n}{k}^2}{2^{2n}} . $$

That's all very well, but it's not a particularly helpful answer -- it's quite a messy formula and it's not clear how big that number is for large $n$, for example. So can we do better?

## Coins 2

Here's a second way to solve the problem, which elegantly uses some of the symmetry of the situation to its benefit.

The question asks: What's the probability that the number of heads my friend gets is equal to the number of heads I get? But I'm just as likely to get $k$ heads from my coin tosses as I am to get $k$ tails. So the answer to that question is the same as the answer to this: What's the probability that the number of heads my friend gets is equal to the number of *tails* I get? But if I get $k$ tails, then I get $n - k$ heads, and together with my friend's $k$ heads, we've got exactly $n$ heads together from our $2n$ coin tosses. So the answer is the same as to this third question: What's the probability that, out of $2n$ coin tosses, we get exactly $n$ heads?

Well, that one's easy: it's

$$ \frac{\binom{2n}{n}}{2^{2n}} , $$

which might not look the same as the previous answer, but actually is.

Not only is this a simpler formula, but it's easier to work out the behaviour for large $n$. A famous result (that follows from Stirling's formula) states that, for large $n$,

$$ \binom{2n}{n} \approx \frac{2^{2n}}{\sqrt{\pi n}} , $$

so our answer is roughly 

$$ \frac{\binom{2n}{n}}{2^{2n}}  \approx \frac{1}{\sqrt{\pi n}} = \frac{1}{1.77 \sqrt{n}} . $$

So if we each toss 100 coins, the probability we get the same number of heads as each other is exactly 5.63% (or 5.64% under our approximation).

## Coins 3

Now, that previous answer seems to me definitely the "best" way to solve the problem. But I do have another method to get the approximation at least, which will prove useful later.

Strictly speaking, the number of heads my friend gets, call it $X$, follows a binomial distribution $X \sim \text{Bin}(n, \frac12)$. But we know (as a special case of the central limit theorem) that this can be approximated by a normal distribution $X \approx \text{N}(\frac{n}{2}, \frac{n}{4})$. Similarly, the number of heads I get is $Y \sim \text{Bin}(n, \frac12) \approx \text{N}(\frac{n}{2}, \frac{n}{4})$. The difference between the number of heads we get is $Z = X - Y$, which therefore has approximately the same distribution as

$$W \sim \text{N}\left(\tfrac{n}{2} - \tfrac{n}{2}, \tfrac{n}{4} + \tfrac{n}{4}\right) = \text{N}\left(0, \tfrac{n}{2}\right) . $$

We get the same number of heads if $Z = 0$, so we want to know $\mathbb P(Z = 0)$. Since $Z$ is discrete but $W$ is continuous, we should use a "continuity correction" and the approximation

$$ \begin{align*}
\mathbb P(Z = 0) &\approx \mathbb P \left(-\tfrac12 \leq W \leq \tfrac12 \right) \\
  &= \int_{-1/2}^{1/2} \frac{1}{\sqrt{2\pi n/2}} \exp \left( -\frac{w^2}{2n/2} \right) \, \mathrm{d}w \\
  &= \int_{-1/2}^{1/2} \frac{1}{\sqrt{\pi n}} \exp \left( -\frac{w^2}{n} \right) \, \mathrm{d}w .
\end{align*} $$

Now, that integrand will be roughly constant between $-\frac12$ and $\frac12$, so the value of the integral will be roughly the width of the interval times the value of the integrand at $0$, which gives

$$\mathbb P(Z = 0) \approx 1 \times \frac{1}{\sqrt{\pi n}} \exp \left( -\frac{0^2}{n} \right) = \frac{1}{\sqrt{\pi n}} . $$

We recover the same approximate answer we had before.

## Dice

Over on [Michael Lugo's blog](https://gottwurfelt.com/2021/04/18/two-dice-problems/), Nick Berry raises the dice version of the problem:

*My friend and I each toss $n$ regular 6-sided dice. What is the probability we each get the same total?*

Berry says that simulations suggest the answer might be $1/6\sqrt{n}$.

Can we solve this using the same techniques we used for the coin? Now, I guess one could try to get the exact answer directly, like our first method, but it looks horrible and I don't want to do that.

Can we use the symmetry technique from answer 2? If we say that the opposite of $x = 1,2,3,4,5,6$ is $7 - x = 6,5,4,3,2,1$, then we can use symmetry in the same way, to get the question: If $2n$ dice are rolled, what is the probability that the total is exactly $7n$? But I don't see a simple and obvious way to answer even that question. The symmetry doesn't seem to help as much as for the coin.

But our normal approximation method will still work fine. The score of one dice roll has variance $\frac{6^2 - 1}{12} = \frac{35}{12}$. So the difference between our total dice scores is roughly

$$ Z = X - Y \approx W \sim \text{N} \left(0, 2 \times \tfrac{35}{12}n \right) = \text{N} \left(0, \tfrac{35}{6}n \right) . $$

Approximating the probability in the same way as before gives the answer

$$ \mathbb P(Z = 0) \approx \mathbb P(-\frac12 \leq W \leq \frac12) \approx \frac{1}{\sqrt{2\pi \,\frac{35}{6}n}} = \frac{1}{\sqrt{\frac{35}{3}\pi n}} . $$

And that's our answer! (Approximately, for large $n$.) Now, $\sqrt{\frac{35}{3} \pi}$ is $6.054$, so Berry was pretty close.

## Postscript: *Infinite Jest*

The coin tossing problem above is related to an curious probability error in David Foster Wallace's mega-novel *Infinite Jest*. (I should credit [Olly](https://twitter.com/BristOliver) as the world's premier the-probability-error-in-*Inifnite-Jest*-grouser; I've now forgotten whether he first told me about this, I first told him, or if we found out independently.)

In the section "6 November, Year of the Depend Adult Undergarment", Wallace -- or, rather, the narrator -- writes about a tennis meet:

> But so a normal meet between two junior teams is the best out of nine matches, whereas this mammoth annual early-November thing between E.T.A. and P.W.T.A. will try to be the best out of 108. A 54-match-all conclusion is extremely unlikely -- odds being 1 in $2^{27}$ -- and has never happened in nine years.

Now, by the arguments we've seen above, we know that the probability of a 54-match-all conclusion is in fact

$$ \frac{\binom{108}{54}}{2^{108}} = 7.66\% \quad \text{or approximately} \quad \frac{1}{\sqrt{54\pi}} = 7.68\%. $$

This is roughly 1 in 13 -- a small-ish, but not super-rare, probability -- not 1 in $2^{27} = 134\,217\,728$. (In comparison, 1 in $2^{27}$ is $0.000\,000\,745\%$.)

It's not clear how Wallace (or his narrator) made this error: we can see that the probability given is $2^{-n/2}$ with $n = 54$, but that doesn't really solve the mystery.

**Postscript to the postscript:** David Foster Wallace also wrote a nonfiction book about mathematics, called *Everything and More: A History of ∞*. I haven't read it, but I enjoyed the review of it by Jim Holt. You can read [the entire review here, if you have a *New Yorker* subscription](https://archives.newyorker.com/newyorker/2003-11-03/flipbook/084/), or there's [an only-slightly-shortened version at LitHub](https://lithub.com/on-david-foster-wallace-georg-cantor-and-infinity/).
