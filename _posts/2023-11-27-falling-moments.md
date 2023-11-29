---
layout: post
title:  "Falling moments"
date:   2023-11-27
categories: writing
permalink: /blog/falling-moments.html
use_math: true
---

## The unreasonable effectiveness of *X*(*X* – 1)

Recently, I've been [teaching](https://mpaldridge.github.io/math1710/) some of the major discrete probability distributions, like the binomial, geometric and Poisson distributions.

When studying random variables, an important role is played by the *moments*. The $k$th moment of a random variable $X$ is the expectation of the $k$-th power of the random variable $\mathbb EX^k$.

In particular, the first moment $\mathbb EX$ is the expectation (sometimes called the "average" or "mean") of the random variable. Then to calculate the variance

$$ \text{Var}(X) = \mathbb EX^2 - (\mathbb EX)^2  , $$

you need both the first and second moments.

But when it comes to discrete distributions, calculating the second moment can be rather awkward. For example, the second moments of the geometric and Poisson distributions are

$$ \begin{align*}
\mathbb EX^2 &= \sum_{x=0}^\infty x^2 (1-p)^x p , \\
\mathbb EX^2 &= \sum_{x=0}^\infty x^2 \mathrm{e}^{-\lambda} \frac{\lambda^x}{x!} 
\end{align*} $$

respectively, which are not easy to calculate. Instead, it turns out to be much more convenient to calculate $\mathbb EX(X-1)$. Since $\mathbb EX(X-1) = \mathbb EX^2 - \mathbb EX$, you can easily recover the second moment from this, but the calculations are much more pleasant.

For the geometric distribution (I'm using here the "number of failures before the first success" definition), we have

$$ \mathbb EX(X-1) = \sum_{x=0}^\infty x(x-1) \, (1-p)^x p = p (1-p)^2 \sum_{x=0}^\infty x(x-1)(1-p)^{x-2} . $$

But the summand here is now, very conveniently, the second derivative of $(1-p)^x$; this means the sum itself is the second derivative of the geometric progression

$$ \sum_{x=0}^\infty (1-p)^x = \frac{1}{p} , $$

so its value is the second derivative of $1/p$, which is $2/p^3$. Hence

$$ \mathbb EX(X-1) = p(1-p)^2 \, \frac{2}{p^3} = 2\left(\frac{1-p}{p} \right)^2 . $$

Similarly, for the Poisson distribution,

$$ \begin{align*}
\mathbb EX(X-1) &= \sum_{x=0}^\infty x(x-1)\, \mathrm{e}^{-\lambda} \frac{\lambda^x}{x!} \\
  &= \sum_{x=0}^\infty \mathrm{e}^{-\lambda} \frac{\lambda^x}{(x-2)!} \\
  &= \mathrm{e}^{-\lambda} \lambda^2 \sum_{x=0}^\infty \frac{\lambda^{x-2}}{(x-2)!} .
\end{align*} $$

where the $x(x-1)$ conveniently canceled with the first two terms of $x! = x(x-1)(x-2)\cdots2\cdot1$. But the sum we're left with is just the series expansion of $\mathrm{e}^\lambda$ (shifted over by 2), which cancels with the $\mathrm{e}^{-\lambda}$ to give $\mathbb EX(X-1) = \lambda^2$.

Notice how in both cases the $x(x-1)$ gave a super-convenient -- rather unexpected -- cancellation, which made calculating the sum much easier.

## Falling moments

These expressions $\mathbb EX$ and $\mathbb EX(X-1)$ are the first two cases of what are known as *factorial moments*, or (less commonly, but I think better) *falling moments*:

$$ \mathbb EX^{\underline{k}} = \mathbb EX(X-1)\cdots(X-k+1) , $$

The falling moments are the expectations of the falling factorials $X^{\underline{k}} = X(X-1)\cdots(X-k+1)$, compared to the usual moments being the expectation of the powers $X^k = XX\cdots X$. I discussed the falling factorial in my [earlier blogpost on sums of powers](sums-powers-1.html).

Here, I want to argue that the falling moments are, for discrete random variables, more natural objects than the usual plain vanilla moments. For a start, the famous distributions often have very pleasant formulas for the falling moments:

* **Bernoulli distribution:** The PMF is $p(1) = p$, $p(0) = 1- p$. The falling moments are $\mathbb EX = p$ and $\mathbb EX^{\underline{k}} = 0$ for $k \geq 2$ .

* **Binomial distribution:** The PMF is $p(x) = \binom nx p^x (1-p)^{n-x}$. The falling moments are $\mathbb EX^{\underline{k}} = n^{\underline{k}} p^k$.

* **Geometric distribution:** The PMF is $p(x) = (1-p)^x p$ (using the "number of failures before the first success" definition). The falling moments are

$$\mathbb EX^{\underline{k}} = k! \left(\frac{1-p}{p}\right)^k . $$

* **Negative binomial distribution:** The PMF is $p(x) = \binom{n+x-1}{x} (1-p)^x p^n$ (using the "number of failures before the $n$th success" definition). The falling moments are

$$\mathbb EX^{\underline{k}} = n^{\overline{k}} \left(\frac{1-p}{p}\right)^k , $$

where $n^{\overline{k}} = n(n+1)\cdots(n+k-1) = (n+k-1)^{\underline{k}}$ is the rising factorial.

* **Poisson distribution:** The PMF is $p(x) = \mathrm{e}^{-x} \lambda^x/x!$. The falling moments are $\mathbb EX^{\underline{k}} = \lambda^k$.

* **Hypergeometric distribution:** The PMF is

$$ p(x) = \frac{\binom{M}{x} \binom{N-M}{n-x}}{\binom{N}{n}} . $$

The falling moments are

$$\mathbb EX^{\underline{k}} = \frac{M^{\underline{k}}}{N^{\underline{k}}} n^{\underline{k}} .$$

* **Discrete uniform distribution** on $\{0,1,\dots,n\}$: The PMF is $p(x) = 1/(n+1)$. The falling moments are

$$\mathbb EX^{\underline{k}} = \frac{1}{k+1} n^{\underline{k}} . $$

These don't have such pleasant expressions for the usual moments -- generally, you can't do much better than using the formula

$$ x^k = \sum_{l=1}^k \genfrac{\{}{\}}{0pt}{}{k}{l} x^{\underline{l}} $$

(also discussed in my [earlier post](sums-powers-1.html)) to write

$$ \mathbb EX^k = \sum_{l=1}^k \genfrac{\{}{\}}{0pt}{}{k}{l} \mathbb EX^{\underline{l}} . $$

(The exception would be the Bernoulli distribution, which has $\mathbb EX^k = p$ for all $k$.)

Some of the discrete distributions have a "continuous equivalent" -- and in these cases, the falling moments of the discrete distribution are often very similar to the usual moments of the continuous equivalent.

| Discrete | Falling moments | Continuous equiv. | Moments |
|:-:|:-:|:-:|:-:|
| Geometric | ${\displaystyle k! \left(\frac{1-p}{p}\right)^k}$ | Exponential | $k!\, \lambda^{-k}$ |
| Negative binomial | ${\displaystyle n^{\overline{k}} \left(\frac{1-p}{p}\right)^k}$ | Gamma | $n^{\overline k} \, \lambda^{-k}$ |
| Discrete uniform | ${\displaystyle \frac{1}{k+1} n^{\underline{k}}}$ | Continuous uniform | ${\displaystyle \frac{1}{k+1} n^{k}}$ |

Note that $\lambda^{-1}$ corresponds to $(1-p)/p$ in these.

## GFs

A convenient way of dealing with the moments $\mathbb EX^k$ is via the *moment generating function* (MGF)

$$ M(t) = \mathbb E \mathrm{e}^{tX} = \sum_{k=0}^\infty \frac{\mathbb EX^k}{k!} t^k ; $$

that is, an exponential generating function whose coefficients are the moments.

It seems, therefore, that a convenient discrete equivalent would be (what we could call) the *falling moment generating function* (FMGF)

$$ \Phi(t) = \sum_{k=0}^\infty \frac{\mathbb EX^{\underline k}}{k!} t^k . $$

Noting that

$$ \frac{\mathbb EX^{\underline k}}{k!} = \mathbb E \binom{X}{k} , $$

so we see that the FMGF can therefore be simplified as

$$ \Phi(t) = \sum_{k=0}^\infty \mathbb E \binom{X}{k} t^k = \mathbb E (1+t)^X . $$

Now, this FMGF is not a new invention. A widely used conveninent function is the *probability generating function* (PDF) $G(t) = \mathbb E t^X$, and the FMGF is related to the PGF by $\Phi(t) = G(1+t)$. So the FMGF is just a shifted version of the PGF. But I'd like to argue that the FMGF is a slightly nicer thing to deal with. Let's compare which has the nicer expressions!

| Distribution | PGF | FMGF |
|:-:|:-:|:-:|
| Bernoulli | $(1-p) + pt$ | $1 + pt$ |
| Binomial | $\big((1-p) + pt)^n$ | $(1 + pt)^n$ |
| Geometric | ${\displaystyle \left(\frac{1}{p} - \frac{1-p}{p}\,t\right)^{-1}$ | ${\displaystyle \left(1 - \frac{1-p}{p}\,t\right)^{-1}$ | 
| Negative binomial | ${\displaystyle \left(\frac{1}{p} - \frac{1-p}{p}\,t\right)^{-n}$ | ${\displaystyle \left(1 - \frac{1-p}{p}\,t\right)^{-1}$ |
| Poisson | $\mathrm{e}^{\lambda (t-1)}$ | $\mathrm{e}^{\lambda t}$ | 

Of course, these contain exactly the same information, but I think I'll argue that the FMGFs are slightly more pleasant than the PGFs. (The discrete uniform ones are "fine but not great" either way.)

## The two geometrics

When teaching these distributions, I also had to tell my students that there are two different conventions for the geometric and negative binomial distributions.

(I was making some weird Tower of Babel metaphor about this, before realising I was out of time. This led to my finishing the lecture with the weird non-sequitor: "This is just further evidence of the fallen state of man. OK, see you next week!")

The two conventions are:

* **Convention 1:**
  * The geometric distribution is the number of trials up to and including the first success.
  * The negative binomial distribution is the number of trials up and including the $n$th success.
* **Convention 2:**
  * The geometric distribution is the number of failures before the first success.
  * The negative binomial distribution is the number of failures before the $n$th success.

I've always been a strong Convention 1-er. It seems more pleasant for the expectation of the geometric being $1/p$ (Convention 1) rather than $(1-p)/p$ (Convention 2); like, "the average number of dice rolls to get a six is 6" seems nicer than "the average number of non-six dice rolls before getting a six is 5". I'm sure I told my students that when I'm made King of the Universe I'll force everyone to move to Convention 1.

But writing this blogpost makes me wonder if I should change my mind.

The exponential is the "continuous equivalent" to the geometric. The moments and MGF of the exponential are

$$ \mathbb EX^k = k! \, \lambda^{-k} \qquad M(t) = {\displaystyle \big(1 - \lambda^{-1} t\big)^{-1}} . $$

Compare this with the falling moments and FMGF of the geometric under Convention 1:

$$ \mathbb EX^{\underline k} = k!\, \frac{1}{1-p} \left(\frac{1-p}{p}\right)^k \qquad \Phi(t) = \left(\frac{1}{p} - \frac{1-p}{p}\,t\right)^{-1} , $$

and under Convention 2:

$$ \mathbb EX^{\underline k} = k! \left(\frac{1-p}{p}\right)^k \qquad \Phi(t) = \left(1 - \frac{1-p}{p}\,\right)^{-1} . $$

Similarly, the Gamma distribution is the "continuous equivalent" to the negative binomial. The moments and MGF of the Gamma$(n, \lambda)$ are

$$ \mathbb EX^k = n^{\overline k} \, \lambda^{-k} \qquad M(t) = \left(\frac{1}{1+ \lambda^{-1} t}\right)^n . $$

Compare this with the falling moments and FMGF of the geometric under Convention 1:

$$ \mathbb EX^{\underline k} = n^{\overline k}\, \left(\frac{1}{1-p}\right)^n \left(\frac{1-p}{p}\right)^k \qquad \Phi(t) = \left(\frac{1}{p} - \frac{1-p}{p}\,t\right)^{-n} , $$

and under Convention 2:

$$ \mathbb EX^{\underline k} = n^{\overline k} \left(\frac{1-p}{p}\right)^k \qquad \Phi(t) = \Phi(t) = \left(1 - \frac{1-p}{p}\,\right)^{-n} .$$

It's hard to argue anything other than that Convention 2 is the more natural here, with $(1-p)/p$ playing the role of $\lambda^{-1}$. Do I need to change to being Convention 2-er now?

## The law of small numbers

A famous result called the "Poisson approximation to the binomial" -- and sometimes, slightly cheekily, the "law of small numbers" -- is the following. It says that if $X_n \sim \text{Bin}(n, \lambda/n)$, then, as $n \to \infty$ that tends towards a Poisson distribution with rate $\lambda$, in the sense that, if $Y \sim \text{Po}(\lambda)$, we have $\mathbb P(X_n = x) \to \mathbb P(Y = x)$ as $n \to \infty$ for all $x$.

You can just [prove this "by hand"](https://mpaldridge.github.io/math1710/L12-poisson.html#poisson-approx). A nicer way is to show that the PGF of $X_n$ tends to the PGF of $Y$, or that the MGF of $X_n$ tends to the MGF of $Y$. But I think this is more elegant still (although not, of course, in anyway *different*) with the FMGF: we have

$$ \Phi_{X_n}(t) = \left(1 + \frac{\lambda t}{n} \right)^n \to \mathrm{e}^{\lambda t} = \Phi_Y(t) , \]

as an immediate, almost trivial, application of perhaps the most famous limit in mathematics. Score another one for the falling moment generating function!
