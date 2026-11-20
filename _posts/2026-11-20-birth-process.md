---
layout: post
title:  "The birth process is negative binomial"
date:   2026-11-20
categories: maths
permalink: /blog/birth-process.html
use_math: true
---

## What is the birth process?

The **birth process** is a random process that works like this. We think of there being $n$ individuals to start with. Each individual gives birth at rate $\lambda$: that is, the time until an individual gives birth is exponentially distributed with rate $\lambda$, so mean time $1/ \lambda$. This is true not just of the $n$ original individuals – if they’ve given birth already, they just start up another $\text{Exp}(\lambda)$ time until their next birth – but also of any of the new births: they also give birth themselves at rate $\lambda$. We keep track of the times when new individuals are born: this collection of times represents the birth process.

Two useful facts about the exponential distribution:

1. The minimum of $n$ independent $\text{Exp}(\lambda)$ distributions is $\text{Exp}(n\lambda)$.
2. The “memoryless property”: at any point, we can just decide to start all the clocks from $0$ again, and the exponential distributions are still the same.

This gives us the standard way to “build” a birth process up to time $M$ in a “forwards-in-time” manner:

* The first birth happens at time $T_1 = \text{Exp}(n\lambda)$. This is because, by Property 1, the first of the $n$ births to occur is the minimum of the $n$ $\text{Exp}(\lambda)$ times.
* The second birth happens at time $T_2 = T_1 + \text{Exp}((n+1)\lambda)$. This is because, by Property 2, we can start all the $n$ clocks from 0 again, plus the new $n+1$th clock for the newly born baby. The smallest of these is $\text{Exp}((n+1)\lambda)$.
* The third birth happens at time $T_3 = T_2 + \text{Exp}((n+2)\lambda)$.
* And so on, until we have a $T_{k+1}$ that exceeds $M$: then we can stop.

I’m a bit embarrassed to say that I only recently learned the following facts about the birth process:

* The total number of births up to time $M$ has a negative binomial distribution.
* The total number of births in _any_ interval has a negative binomial distribution.
* The total numbers of births in two or more disjoint intervals have a negative multinomial distribution.

The purpose of this blogpost is to try and give a simple argument that demonstrates why this is the case while trying to minimise complexity and maximise intuition. (This was originally going to be a reply to [this Math.SE question](https://math.stackexchange.com/questions/695192/elementary-proof-of-geometric-negative-binomial-distribution-in-birth-death-pr), until I realised this answer is too long and the question was posed 12 years ago.) I’m going to do this in three steps:

1. Explain an alternative “backwards-in-time” description of the birth process.
2. Prove that the backwards-in-time description is equivalent to the forwards-in-time description above.
3. Show that this leads to the negative binomial interval properties.

We will take these steps in the order 1, 3, 2.

## Step 1: Backwards-in-time

Earlier, we built the birth times starting from time 0 and moving forwards until we get to time $M$ and can stop. This time, we will picture ourselves being at time $M$, and think about how old the individuals are — and, therefore, how long ago their time of birth was.

The model is this:
* Let $A_1 \sim \text{Exp}(\lambda)$. This is the “age” of the first individual: assuming this is less than $M$, this means he was born at time $S_1 = M - A_1$.
* Let $A_2 \sim \text{Exp}(\lambda)$. This is the “age” of the second individual: assuming this is less than $M$, this means she was born at time $S_2 = M - A_2$.
* If you get an $A_j > M$, this means that individual was “already alive” at time 0. Don’t record a birth date, but count them as an “original individual”.
* Keep generating $\text{Exp}(\lambda)$ ages, and either recording their birth times or counting them as an original individual.
* Once you have got to $n$ original individuals, stop.

I claim, and will prove later in step 2, that these birth times $\{S_1, S_2, \dots, S_K\}$ have the same distribution as the birth times $\{T_1, T_2, \dots, T_K\}$ in the original forward-in-time description. I have written these as sets because the order may be different: indeed, for the forward-in-time description, we have $T_1 < T_2 < \dots$ by construction, but for the backward-in-time description, all reorderings are equally likely.

## Step 3: Negative binomial description

The negative binomial distribution describes the “number of failures before the $n$th success”.

Now, think of a “failure” as “generating an age that is less than $M$, which gets recorded” and a “success” as “generating an age which is greater than $M$, which counts as an original individual”. Then the number of recorded births in the above backwards-in-time procedure is exactly the number of failures before the $n$th success: a negative binomial distribution!

Specifically, the probability of “failure” is

$$ q = \mathbb P(A \leq M) = 1 - \mathrm{e}^{-\lambda M} $$

and the probability of “success” is
 
$$ p = \mathbb P(A > M) ‎ =  \mathrm{e}^{-\lambda M} . $$

I like to parameterise my negative binomial distributions by $n$ and by $\theta = q/p$, the odds against success. (Everyone uses $n$; my colleagues think my preference for $\theta$ rather than $p$ is totally insane.) So, in this notation,

$$ \theta = \frac{1 - \mathrm{e}^{-\lambda M}}{\mathrm{e}^{-\lambda M}} = \mathrm{e}^{\lambda M} - 1 . $$

I would write this as

$$ \xi \big([0, M]\big) \sim \text{NegBin}(n, \mathrm{e}^{\lambda M} - 1) . $$

What about the number of births in an interval $[s, t]$? (We should make sure $M > t$, of course.)

Well, here is the advantage of my notation (and why I pay no heed to the ill-considered comments of my so-called “colleagues”): this notation still works if there are “draws” that are neither successes nor failures. So to count this, we say a birth in $[s, t]$ is a “failure”, with probability

$$ p = \mathbb P(s \leq M - A \leq t) =  \mathbb P(M-t \leq A \leq M-s)‎ = \mathrm{e}^{-\lambda (M-t)} -  \mathrm{e}^{-\lambda (M-s)} $$

while a success is still $A > M$, as before. Now, the relevant $\theta$ is

$$ \theta = \frac{\mathrm{e}^{-\lambda (M-t)} -  \mathrm{e}^{-\lambda (M-s)}}{\mathrm{e}^{-\lambda M}} = \mathrm{e}^{\lambda t} - \mathrm{e}^{\lambda s} . $$

(Luckily, the $M$s cancel out, as we would expect.)

What about the joint distribution of different intervals $[s_1, t_1], [s_2, t_2], \dots, [s_l, t_l]$, where $s_1 < t_1 < s_2 < \cdots < s_l < t_l$ (to make sure the intervals don’t overlap)?

To describe this, we need the _negative multinomial distribution_. Here, we have $l$ different types of failures, with probabilities $q_1, q_2, \dots, q_l$ and one type of success, with probability $p$. Then $X_j$ is the number of failures of type $j$ before the $n$th success. We again ignore the jeering of my under-informed co-workers and write $\theta_j‎ = q_j / p$, which allows for draws that are not any type of failure nor a success.

Again, we let a birth in $[s_j, t_j]$ count as a “failure of type $j$” and an age $A > M$ count as a “success”. We then have a negative multinomial distribution with 

$$ \theta_j ‎ =  \frac{q_j}{p} ‎ =  \mathrm{e}^{\lambda t_j} - \mathrm{e}^{\lambda s_j} . $$

## Step 2: Equivalence of forwards and backwards models

Now for the mathsy bit: to show that my backwards-in-time model really is the same as the original forwards-in-time description. I feel like I still haven’t come up with the most lucid possible argument here, but this is the best I’ve got. (And here I should disclose that GPT helped out considerably with this bit.)

Let’s think of the probability density of there being $k$ births in $[0, M]$ and those births being (in order) at times $t_1, t_2, \dots, t_k$. From the forwards-in-time description, the relevant density is

$$ \begin{align}
&n\lambda \mathrm{e}^{-n\lambda t_1} \times (n+1)\lambda \mathrm{e}^{-(n+1)\lambda(t_2 - t_1)} \times \cdots \\
&\qquad\qquad {}\times (n+k-1) \lambda \mathrm{e}^{-(n+k-1)\lambda(t_k - t_{k-1})} \times \mathrm{e}^{-(n+k)\lambda(M-t_k)} .
\end{align} $$

Where the first term is the density of $t_1$, the second term the density of $t_2$, …, the $k$th term the density of $t_k$, and the final term the probability that there are no further births between time $t_k$ and $M$. After simplifying, this becomes

$$ n^{\overline{k}} \, \lambda^k \, \mathrm{e}^{-\lambda(t_1 + t_2 + \cdots + t_k)} \mathrm{e}^{-(n+k)\lambda M}   ,$$

where

$$ n^{\overline{k}} = n(n+1) \cdots (n+k-1) $$

is a rising factorial.

What is the density of this same configuration from the backward-in-time construction? It is

$$ n^{\overline{k}} \times \lambda \mathrm{e}^{-\lambda (M-t_1)} \times \lambda \mathrm{e}^{-\lambda (M-t_2)} \times \cdots \times \mathrm{e}^{-\lambda (M-t_k)} \times (\mathrm{e}^{-\lambda M})^n .$$

The $n^{\overline{k}}$ is the number of ways the $k$ births can be interleaved among the first $n-1$ original individuals (the first birth can go in any of the $n$ positions compared to the $n-1$ original individuals, the second birth in any of the $n+1$ positions between the $n-1$ originals and the one new birth, etc). Each of the next $k$ terms is the density of the age $M - t_j$ corresponding to birth time $t_j$, and the final term is the $n$ original individuals whose ages exceed $M$. Rearranging gives 
 
$$ n^{\overline{k}} \, \lambda^k \, \mathrm{e}^{-\lambda(t_1 + t_2 + \cdots + t_k)} \mathrm{e}^{-(n+k)\lambda M}  $$

again, exactly as before, completing the proof.

Can you think of a better way to prove the equivalence of the two models?

_(Aside from my faithful interlocutor GPT, I also benefitted from discussing this with Callum, Jochen, Pete and Ben.)_










