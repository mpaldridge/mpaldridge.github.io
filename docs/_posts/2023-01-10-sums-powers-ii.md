---
layout: post
title:  "Sums of powers II: Faulhaber and Bernoulli"
date:   2023-01-10
categories: writing
permalink: /blog/sums-powers-2.html
use_math: true
---

*Previously: [Sums of powers I: with and without replacement](/sums-powers-1.html)*

[Last year I wrote about](/sums-powers-1.html) formulas for the sum of powers

$$ \sum_{x = 1}^n x^k = 1^k + 2^k + \cdots + n^k . $$

I argued that the more natural way to think about this was instead through the falling factorial $x^{\underline{k}} = x(x-1)\cdots(x-k+1)$; the power corresponds to sampling with replacement, and the falling factorial sampling without replacement. We then have the natural formula

$$ \sum_{x=1}^n x^{\underline{k}} = \frac{1}{k+1} \, (n+1)^{\underline{k}} . $$

If you want to get the powers result back, we can do so with Stirling numbers: it's

$$ \sum_{x = 1}^n x^k =  \sum_{l=1}^k  \frac{1}{l+1} \genfrac{\{}{\}}{0pt}{}{k}{l} n^{\underline{l+1}} . $$

However, I recently read a delightful exposition of a way to get the sums of powers sums directly, without going via the falling factorial, in *The Book of Numbers* by Conway and Guy (Chapter 4). This blogpost is basically entirely from that book.


## Faulhaber polynomials

As a reminder, the formulas for the sums, written out as polynomials are

$$ \begin{align}
\sum_{x=0}^n x   &=	\frac{1}{1} \, \big(n \big)	\\
\sum_{x=0}^n x   &=	\frac{1}{2} \, \big(n^2 + \tfrac{2}{2} n \big)	\\
\sum_{x=0}^n x^2 &=	\frac{1}{3} \, \big(n^3 + \tfrac{3}{2} n^2 + \tfrac{ 3}{6} n \big)	\\
\sum_{x=0}^n x^3 &=	\frac{1}{4} \, \big(n^4 + \tfrac{4}{2} n^3 + \tfrac{ 6}{6} n^2 + 0n \big)	\\
\sum_{x=0}^n x^4 &=	\frac{1}{5} \, \big(n^5 + \tfrac{5}{2} n^4 + \tfrac{10}{6} n^3 + 0n^2 - \tfrac{ 5}{30} n \big)	\\
\sum_{x=0}^n x^5 &=	\frac{1}{6} \, \big(n^6 + \tfrac{6}{2} n^5 + \tfrac{15}{6} n^4 + 0n^3 - \tfrac{15}{30} n^2 + 0n \big)	\\
\sum_{x=0}^n x^6 &=	\frac{1}{7} \, \big(n^7 + \tfrac{7}{2} n^6 + \tfrac{21}{6} n^5 + 0n^4 - \tfrac{35}{30} n^3 + 0n^2 + \tfrac{7}{42}n \big)
\end{align} $$

(These are sometimes called *Faulhaber polynomials*, after the German mathematician [Johann Faulhaber](https://en.wikipedia.org/wiki/Johann_Faulhaber) who first found the rule for them in 1530 or so.) You might be able to see a pattern starting to arise here -- I've put some of the fractions not in their simplest form, but in a form that suggests some of the emerging patterns.

## Bernoulli numbers

The coefficients of the Faulhaber polynomials are related to a sequence of numbers called the **Bernoulli numbers**, which begin

$$ \begin{align}
B^0 &= 1 & B^1 &= \frac{1}{2} & B^2 &= \frac{1}{6} & B^3 &= 0 \\
B^4 &= -\frac{1}{30} & B^5 &= 0 & B^6 &= \frac{1}{42} & B^7 &= 0\ \dots.
\end{align} $$

I was vaguely aware that the Bernoulli numbers were involved somewhere here, but I've never really liked the Bernoulli numbers, as they were defined through some baffling formula I could never remember, whose relationship to the sums of powers was totally opaque. But the exposition of Conway and Guy (not, I don't think, orginal to them) makes everything so much clearer.

You'll have noticed that I wrote the sequence of Bernoulli numbers as $B^0, B^1, B^2, \dots$, rather than the more usual notation for a sequence $b_0, B_1, B_2, \dots$. This is because it's often very convenience to write equations *as if* the Bernoulli numbers were powers of some object $B$. They are, of course, *not* powers of any number $B$, so we must take care to interpret our equations properly: we must first expand any brackets to get a "polynomial", and then treat that "polynomial" as an equation in the Bernoulli numbers.

Let's define the Bernoulli numbers and see our first example of this "power" notation together.

**Definition.** *The Bernoulli numbers $(B^k)$ are defined first by $B^0 = 1$ (as one would expect for a "power"), and then by satisfying the equation $(B-1)^k = B^k$ for $k \geq 2$.*

What a simple and easy-to-remember equation! Let's see what it means. The first case is

$$(B-1)^2 = B^2 . $$

We must first expand out the brackets on the left-hand side, to get

$$ B^2 - 2B^1 + 1 = B^2 . $$

We see that the $B^2$s cancel, so we get $-2B^1 + 1 = 0$, and hence $B^1 = \frac12$.

Now that we know $B^1$, we can use the $k = 2$ equation. We have

$$(B-1)^3 = B^3 \quad \Longrightarrow \quad B^3 - 3B^2 + 3B^1 - 1 = B^3 . $$

The $B^3$s cancel, and substituting in $B^1 = \frac12$, we can solve this to get $B^2 = \frac16$.

We can keep going like this. You might like to check that the equation $(B-1)^4 = B^4$, after expansion, cancelling the $B^4$s, and using $B^1 = \frac12$, $B^2 = \frac16$ does indeed give $B^3 = 0$. And so on.

## Faulhaber's formula

Faulhaber's formula for the sums of powers is then this:

$$ \sum_{x=0}^n x^k = \int_0^n (x+B)^k\, \mathrm{d}x = \frac{1}{k+1}\, \big((n+B)^{k+1} - B^{k+1} \big) . $$

Remember, still, that the term $(n+B)^{k+1}$ must be interpreted by expanding it out as a "polynomial in $B$" first, then using the Bernoulli numbers.

Let's just test this works with $k = 2$, say. Whe then have

$$ \begin{align}
\sum_{x=0}^n x^2 = \frac{1}{3}\, \big((n+B)^{3} - B^{3} \big) \\
  &= \frac{1}{3}\, \big( n^3 + 3B^1n^2 + 3B^2n + B^3 - B^3 \big) \\
  &= \frac{1}{3}\, \big( n^3 + 3B^1n^2 + 3B^2n \big) \\
  &= \frac{1}{3}\, \big( n^3 + 3 \times \tfrac12 n^2 + 3 \times \tfrac16 n \big) ,
\end{align} $$

using $B^1 = \frac12$ and $B^2 = \tfrac16$, which is indeed correct.

If we wanted to avoid the "Bernoulli numbers as powers of $B$" formalism, we could expand out Faulhaber's formula more explicitly as

$$ \begin{align}
\sum_{x=0}^n x^k &= \frac{1}{k+1}\, \big((n+B)^{k+1} - B^{k+1} \big) \\
  &= \frac{1}{k+1}\, \big( \sum_{l=0}^{k+1} \binom{k+1}{l} B_{k+1-l} n^l - B^{k+1} \big) \\
  &= \frac{1}{k+1}\, \big( \sum_{l=1}^{k+1} \binom{k+1}{l} B_{k+1-l} n^l \big) .
 \end{align} $$
 
 But am I going to be able remember that? I doubt it -- but I can remember $\frac{1}{k+1} ((n+B)^{k+1} - B^{k+1})$.
 
 All that remains is to actually prove this formula. The key is to look at a difference
 
 $$ \big(x+B\big)^{k+1} - \big((x-1) + B\big)^{k+1} . $$
 
 The first term is
 
 $$ \big(x+B\big)^{k+1} = x^{k+1} + (k+1)B^1 x^k + \binom{k+1}{2} B^2 x^{k-1} + \binom{k+1}{3} B^3 x^{k-2} + \cdots , $$
 
 while the second term is
 
 $$ \begin{align}
 \big((x-1) + B\big)^{k+1} &= \big(x + (B-1) \big)^{k+1} \\
   &= x^{k+1} + (k+1)(B - 1)^1 x^k + \binom{k+1}{2} (B-1)^2 x^{k-1} + \binom{k+1}{3} (B-1)^3 x^{k-2} + \cdots . $$

Now the first term in both of these, x^{k+1}, is the same. And since the Bernoulli numbers were defined by $(B-1)^k = B^k$ for $k \geq 2$, that means the third, fourth and all later terms are the same too. So all is left are the second terms

$$ \big(x+B\big)^{k+1} - \big((x-1) + B\big)^{k+1}
  = (k+1)B^1 x^k - (k+1)(B^1 - 1) x^k = (k+1)x^k .$$

Now we sum up all the differences. So what is

$$ \sum_{x=1}^n \big(x+B\big)^{k+1} - \big((x-1) + B\big)^{k+1}  ? $$

On one hand, by the above, its

$$ \sum_{x=1}^n \big(x+B\big)^{k+1} - \big((x-1) + B\big)^{k+1} = \sim_{x=1}^n (k+1)x^k = (k+1) \sum_{x=0}^n x^k .$$

But, on the other hand, a sum of differences like this will obviously "telescope" to

$$ \sum_{x=1}^n \big(x+B\big)^{k+1} - \big((x-1) + B\big)^{k+1} = \big(n+B\big)^{k+1} - B^{k+1} .$$

Hence we have

$$ (k+1) \sum_{x=0}^n x^k = \big(n+B\big)^{k+1} - B^{k+1} , $$

and dividing both sides by $k+1$ gives the result.
