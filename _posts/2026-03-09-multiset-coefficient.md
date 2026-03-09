---
layout: post
title:  "The multiset coefficient deserves more respect!"
date:   2026-03-09
categories: maths
permalink: /blog/multiset-coefficient.html
use_math: true
---

**Being the second in a series of blogposts quite unnecessarily scolding the reader about the binomial coefficient** (Previously: ["Don’t write the binomial coefficient as n! / k! (n-k)!"](binomial.html))

The binomial coefficient

$$ \binom{n}{k} = \frac{n^{\underline{k}}}{k!} = \frac{n(n-1)\cdots(n-k+1)}{k!} $$

counts the number of ways in which you can choose $k$ objects from a set of $n$ objects. How many ways can I pick a team of $k$ players from a squad of $n$ players? How many hands of $k$ cards could I deal from a deck of $n$ cards. How many different lottery tickets of $k$ numbers are there using the numbers from 1 to $n$?

Importantly, each object can appear at most once: you can't choose the same player to play twice in the team, or the have same card appear twice in your hand, or choose the same number twice on your lottery ticket.

But sometimes we are interested in choosing $k$ objects from a set of $n$ objects where each object can appear multiple times. How many boxes of $k$ chocolates can be made from a range of $n$ varieties? In how many ways can $k$ small balls be placed into $n$ large boxes? In how many ways can $k$ identical tasks be assigned to $n$ workers?

How can we count these? If you ask a mathematician, they will probably tell you that these can still be counted using the binomial coefficient, just slightly differently. The number of sets with multiplicity -- called *multisets* -- is the slightly different binomial coefficient $\binom{n+k-1}{k}$, with $n-k+1$, rather than just $n$, on the top.

There's a famously elegant method to show that this binomial coefficient counts the number of multisets, called the "stars and bars" construction. Think of the "$k$ balls into $n$ boxes" application. Let's take $n = 5$ boxes and $k = 7$ balls. We can picture the $n = 5$ boxes by drawing $n - 1 = 4$ bars:

```         
    |     |     |     |    
```

This creates $n = 5$ boxes: the first box is to the left of the first bar; the second box is between the first and second bars; the third box in between the second and third bars; the fourth box in between the third and fourth bars; and the fifth and final box is to the right of the fourth bar.

We can then denote which boxes the balls fall into by using a star to mark each ball.

```         
 ** |     | *** |  *  |  *     
```

This denotes that there are two balls in the first box, no balls in the second box, three balls in the third box, and one each in the fourth and fifth boxes.

We can now even up the unequal gaps in the pattern to leave:

```         
 * * | | * * * | * | *
```

In total we have a pattern of $n + k - 1 = 11$ symbols: $n - 1 = 4$ bars and $k = 7$ stars. Any such pattern of $n + k - 1$ symbols ($k$ stars and $n - 1$ bars) corresponds to a multiset. So the number of multisets is the numbers of ways to places $k$ stars among $n - k + 1$ positions, which is $\binom{n-k+1}{k}$.

The fact that both normal sets and multisets are both counted by the binomial coefficient (in slightly different ways) is very convenient, this mathematician would probably say. You only have to learn one thing! Whenever you are dealing with multisets, you can just switch immediately to binomial coefficients, and use all the useful facts you already know about the binomial coefficient to help with your maths problem.

But I don't really like this. It makes the "multiset coefficient" (as I will call it) merely an appendage to the much more important binomial coefficient, unworthy of study in its own right. But I want to raise the status of the multiset coefficient, to value it an equally cherished sibling of the binomial coefficient!

To do this, I'm going to start by giving the multiset coefficient its own notation and algebraic definition. Then I want to go through some of the identities involving the binomial coefficient and give multiset coefficient equivalents of those results – not merely by substituting $\binom{n-k+1}{k}$ into the already-existing binomial identity to give a simple multiset corollary, but rather by taking the logical argument behind the binomial identity and applying it anew to the multiset situation, then seeing what is produced by that analysis.

### 1. Notation

There does not seem to be a universally recognised notation for the multiset coefficient, but Richard Stanley (author of the legendary *Enumerative Combinatorics* textbook, which deals with this sort of thing) suggests

$$ {\bigg(\kern-0.4em\dbinom{n}{k}\kern-0.4em\bigg)} $$

-- like the binomial coefficient, but with double brackets. If it's good enough for Prof Stanley, it's good enough for me.

In speech, the binomial coefficient $\binom{n}{k}$ is said as "$n$ choose $k$". Stanley proposes that $\big(\kern-0.2em\tbinom{n}{k}\kern-0.2em\big)$ should be "$n$ multichoose $k$", which I also like.

### 2. Algebraic definition

As we know, the binomial coefficient can be calculated with the expression

$$ \binom{n}{k} = \frac{n^{\underline{k}}}{k!} = \frac{n(n-1)\cdots(n-k+1)}{k!} . $$

The argument here is that the "falling factorial" $n^{\underline{k}} = n(n-1)\cdots(n-k+1)$ in the numerator is the number of ways to count sets where the order *does* matter, then dividing $k!$ compensates for each set having been chosen in $k!$ different orders.

The equivalent expression for the multiset coefficient is

$$ {\bigg(\kern-0.4em\dbinom{n}{k}\kern-0.4em\bigg)} = \frac{n^{\overline{k}}}{k!} = \frac{n(n+1)\cdots(n+k-1)}{k!} . $$

Again, this can be justified by the numerator -- here a "rising factorial" $n^{\overline{k}} = n(n+1)\cdots(n+k-1)$ -- being the count of the multisets where the order matters, and the denominator $k!$ allowing for the different orderings.

Why do we get this rising factorial when the order matters? I like to think of hanging $k$ flags on $n$ flagpoles:

-   The first flag has $n$ choices: it can go on any of the $n$ flagpoles.

-   The second flag now has $n+1$ choices: either it goes on one of the $n - 1$ empty flagpoles, or it goes on the same pole as the first flag, in which case it can either go above the first flag or below it. Over all, that's $(n-1) + 2 = n+1$ choices.

-   The third flag has $n+2$ choices. If the first two flags went on different poles, we have $n-2$ empty flagpoles, above or below the first flag, and above or below the second flag, making $(n-2) + 2 + 2 = n+2$. If the first two flags went on the same pole, we have $n-1$ empty poles, or the busy pole: above both flags, in between them, or below both flags; that's $(n-1)+3 = n+2$ as well.

As we go, each flag creates an extra space, either by splitting an empty pole into "above or below the new flag", or by splitting the "bit of pole" it gets attached to into directly above or directly below the new flag. Hence we get $n^{\overline{k}} = n(n+1)\cdots(n+k-1)$ multisets where the order matters. Dividing by the $k!$ orderings of the flags gives the expression we were after.

### 3. A special item

The most famous identity involving the binomial coefficient is Pascal's formula:

$$ \binom{n}{k} = \binom{n-1}{k} + \binom{n-1}{k-1} . $$

To decide what the multiset coefficient equivalent of this is, we'll have to think about what it shows. Statements like these are best proven using a "double counting" argument: that is, you show that both sides of the equation are counting the same thing in different ways.

Here, the left-hand side $\binom{n}{k}$ is, of course, just the number of ways of choosing $k$ items from $n$ items. Suppose one of the objects is "special" somehow; then we can count separately the number of sets that don't include the special item and those that do include the special item. If the special item isn't included, then we need to pick all $k$ items from the $n-1$ non-special items, which can be done in $\binom{n-1}{k}$ ways. If the special item is included, then we only need $k-1$ more of the $n-1$ non-special items, which can be done in $\binom{n-1}{k-1}$ ways. Adding these two together gives the right-hand side.

Almost the same argument works with the multiset coefficient. If the special item isn't included, then we need to pick all $k$ items from the $n-1$ non-special items, which can be done in $\big(\kern-0.2em\tbinom{n-1}{k}\kern-0.2em\big)$ ways. If the special item is included, then we only need $k-1$ more items -- but there are still $n$ choices, not $n-1$, because we're allowed to pick yet more of the special item, so this gives $\big(\kern-0.2em\tbinom{n}{k-1}\kern-0.2em\big)$.

The multiset coefficient version of Pascal's formula is therefore

$$ {\bigg(\kern-0.4em\dbinom{n}{k}\kern-0.4em\bigg)} = {\bigg(\kern-0.4em\dbinom{n-1}{k}\kern-0.4em\bigg)} + {\bigg(\kern-0.4em\dbinom{n}{k-1}\kern-0.4em\bigg)} . $$

### 4. A boss

What about this binomial coefficient identity:

$$ k\binom{n}{k} = n \binom{n-1}{k-1} .$$

This counts the number of ways of picking a board of $k$ people from an office of $n$ employees, with one of those people being the boss of the board. We can pick the board in $\binom{n}{k}$ ways, then promote one of those $k$ board-members to be the boss, giving the left-hand side. Alternatively, we can pick one of the $n$ employees to be the boss, then fill out the $k-1$ non-boss board positions from the remaining $n-1$ employees in $\binom{n-1}{k-1}$ ways, giving the right-hand side.

A similar argument works for the multiset coefficient. We can place $k$ flags on $n$ poles, then pick one of them top be the "boss-flag". Alternatively, we can pick one of $n$ poles to put the boss-flag on. We then need $k-1$ more flags to be put in $n + 1$ locations: the $n-1$ empty poles, above the boss-flag, or below the boss-flag. The new identity is, then:

$$ k{\bigg(\kern-0.4em\dbinom{n}{k}\kern-0.4em\bigg)} = n {\bigg(\kern-0.4em\dbinom{n+1}{k-1}\kern-0.4em\bigg)} . $$

### 5. Many bosses

Suppose the board has not merely one boss but a sub-board of $j$ bosses. Again, we can pick $k$ board-members then promote $j$ of them, or we can pick $j$ bosses then the $k-j$ remaining non-bosses. We get

$$ \binom{k}{j} \binom{n}{k} = \binom{n}{j}\binom{n-j}{k-j} . $$

The multiset version of this is also similar. We can put up $k$ flags on $n$ poles, then pick $j$ of them to be boss-flags. In this second step, we can only pick each hoisted flag at most once to be a boss-flag, so that gives a binomial, not multiset, coefficient on the left-hand side. As before, if we pick the $j$ boss-flags first, this creates $n+j$ spaces for the remaining flags, since each boss flag divides a location in two. We get:

$$ \binom{k}{j} {\bigg(\kern-0.4em\dbinom{n}{k}\kern-0.4em\bigg)} = {\bigg(\kern-0.4em\dbinom{n}{j}\kern-0.4em\bigg)} {\bigg(\kern-0.4em\dbinom{n+j}{k-j}\kern-0.4em\bigg)} . $$

I'm not sure whether I should be fully satisfied with this one or not: it feels a bit of a compromise for one of the coefficients in this expression to be a rogue binomial coefficient, rather than all four terms being multiset coefficients. But I can't think of anything better -- can you? (Alternatively, is there an "opposite" identity with three binomial coefficients and one multiset coefficient?)

### 6. Generating function

The generating function of the binomial coefficients is

$$ \sum_{k=0}^n \binom{n}{k} x^k = (1 + x)^n . $$

The generating function of the multiset coefficients is

$$ \sum_{k=0}^\infty {\bigg(\kern-0.4em\dbinom{n}{k}\kern-0.4em\bigg)} x^k = (1 - x)^{-n} . $$

To see the first of these, imagine multiplying out the brackets of

$$ (1+x)^n = (1+x)(1+x)\cdots(1+x) . $$

To get a term $x^k$, you need to have picked an "$x$" from $k$ of the sets of brackets and 1s from the other $n-k$ sets of brackets. This can be done in $\binom{n}{k}$ ways.

For the second, we use the geometric progression formula

$$ (1-x)^{-1} = (1 + x + x^2 + x^3 + \cdots) $$

and imagine multiplying out

$$ (1-x)^{-n} = (1 + x + x^2 + \cdots)\cdots (1 + x + x^2 + \cdots) .$$

To get a term $x^k$, you need to have picked an "$x$" $k$ times, but that could be multiple $x$'s from the same bracket by picking an $x^2$ or $x^3$ and so on. So we are choosing with multiplicities, giving $\big(\kern-0.2em\tbinom{n}{k}\kern-0.2em\big)$ ways.

### 7. Maximum item

Another binomial coefficient identity is this:

$$ \sum_{m=0}^n \binom{m-1}{k-1} = \binom{n}{k} , $$

known as the ["hockeystick identity"](https://en.wikipedia.org/wiki/Hockey-stick_identity), due to the shape the relevant coefficients draw on Pascal's triangle. (Some people prefer to write the lower limit in the sum as $m = k$, since the summands for $m = 0, 1, \dots, k -1$ are all 0.)

This identity comes from counting the $k$-subsets of $\{1, 2, \dots, n\}$ based on their maximum item. If the maximum item is $m$, then you need to choose the remaining $k -1$ items from the $m-1$ items that are smaller than $m$.

For multisets, the argument is almost the same, but you can pick more "joint-maximum" items that are equal to $m$ if you want. So you need to choose the remaining $k-1$ items from the $m$ items that are smaller than *or equal to* $m$. Hence we get

$$ \sum_{m=0}^n \bigg(\kern-0.4em\dbinom{m}{k-1}\kern-0.4em\bigg) = \bigg(\kern-0.4em\dbinom{n}{k}\kern-0.4em\bigg) $$

(where all the summands are nonzero).

### 9. Men and women

Vandermonde's identity is the result

$$ \binom{n+m}{k} = \sum_{j=0}^k \binom{n}{j} \binom{m}{k-j} . $$

Suppose the office has $n+m$ employees: $n$ women and $m$ men. Again, we want to choose a board of $k$ employees, which can be done in $\binom{n+m}{k}$ ways. We can also count the boards by their gender split: the all male boards, those with 1 woman and $k-1$ men, and so on. The number of ways to pick a board with $j$ women and the remaining $k-j$ members being men is the product $\binom{n}{j} \binom{m}{k-j}$.

Exactly the same argument works for multisets, so we have the same result:

$$ \bigg(\kern-0.4em\dbinom{n+m}{k}\kern-0.4em\bigg) = \sum_{j=0}^k \bigg(\kern-0.4em\dbinom{n}{j}\kern-0.4em\bigg) \bigg(\kern-0.4em\dbinom{m}{k-j}\kern-0.4em\bigg) . $$

### 10. Symmetry

I've left an important binomial identity -- maybe the most important one -- until last: the symmetry relation

$$ \binom{n}{k} = \binom{n}{n-k} . $$

You can choose a set of $k$ items from $n$ items; but, alternatively, you can choose the $n-k$ items that are *not* going to be in your set, leaving the $k$ items you want left over.

I left this until last, because I wasn't sure what the right multiset version of this is. The following is certainly *a* symmetry relation, at least. Recall the stars-and-bars construction from before: we had

-   $n-1$ bars, which define $n$ boxes,
-   $k$ stars, representing $k$ objects.

What if we now swap the roles of the stars and the bars -- so now the stars are defining the boxes, into which we places some bars representing objects? We would then have

-   $k$ stars, which define $k+1$ boxes,
-   $n-1$ bars, representing $n-1$ objects.

Since these are both counting the same patterns of stars and bars, we get

$$ \bigg(\kern-0.4em\dbinom{n}{k}\kern-0.4em\bigg) = \bigg(\kern-0.4em\dbinom{k+1}{n-1}\kern-0.4em\bigg) . $$

(This argument sets up an explicit bijection between $k$-submultisets of an $n$-set and $(n-1)$-submultisets of a $(k+1)$-set. I admit I'd never thought about this bijection before. I'd like to know more about its properties.)

It's not totally clear this is the right multiset generalisation of the binomial coefficient symmetry relation -- in particular, the swapping over of top and bottom (the $k$ now appears on the top of the multiset coefficient on the right-hand side of the equation) seems a bit weird. But I think it does work: if you do *the forbidden thing I've told you not to do* and convert the multiset coefficient to a binomial coefficient, apply the symmetry relation, then convert back, you get

$$ \bigg(\kern-0.4em\dbinom{n}{k}\kern-0.4em\bigg) = \binom{n+k-1}{k} = \binom{n+k-1}{n-1} = \binom{(k+1) + (n-1) - 1}{n-1} = \bigg(\kern-0.4em\dbinom{k+1}{n-1}\kern-0.4em\bigg) , $$

which is what we claimed, although don't tell anyone I did this.

## In summary

So to gather everything together, here are the results we've discussed:

| **Binomial coefficient** | **Multiset coefficient** |
|:----------------------------------:|:----------------------------------:|
| $$ \dbinom{n}{k} = \dfrac{n^{\underline{k}}}{k!} $$ | $$ \bigg(\kern-0.4em\dbinom{n}{k}\kern-0.4em\bigg) = \frac{n^{\overline{k}}}{k!}  $$ |
| $$ \dbinom{n}{k} = \dbinom{n}{n-k} $$ | $$ \bigg(\kern-0.4em\dbinom{n}{k}\kern-0.4em\bigg) = \bigg(\kern-0.4em\dbinom{k+1}{n-1}\kern-0.4em\bigg) $$ |
| $$ \dbinom{n}{k} = \dbinom{n-1}{k} + \dbinom{n-1}{k-1} $$ | $$ \bigg(\kern-0.4em\dbinom{n}{k}\kern-0.4em\bigg) = \bigg(\kern-0.4em\dbinom{n-1}{k}\kern-0.4em\bigg) + \bigg(\kern-0.4em\dbinom{n}{k-1}\kern-0.4em\bigg) $$ |
| $$ k\dbinom{n}{k} = n \dbinom{n-1}{k-1} $$ | $$ k\bigg(\kern-0.4em\dbinom{n}{k}\kern-0.4em\bigg) = n \bigg(\kern-0.4em\dbinom{n+1}{k-1}\kern-0.4em\bigg) $$ |
| $$ \dbinom{k}{j} \dbinom{n}{k} = \dbinom{n}{j}\dbinom{n-j}{k-j} $$ | $$ \dbinom{k}{j} \bigg(\kern-0.4em\dbinom{n}{k}\kern-0.4em\bigg) = \bigg(\kern-0.4em\dbinom{n}{j}\kern-0.4em\bigg) \bigg(\kern-0.4em\dbinom{n+j}{k-j}\kern-0.4em\bigg) $$ |
| $$ \displaystyle\sum_{k=0}^n \binom{n}{k} x^k = (1 + x)^n $$ | $$ \displaystyle\sum_{k=0}^\infty \bigg(\kern-0.4em\dbinom{n}{k}\kern-0.4em\bigg) x^k = (1 - x)^{-n} $$ |
| $$ \displaystyle\sum_{m=0}^n \binom{m-1}{k-1} = \dbinom{n}{k} $$ | $$ \displaystyle\sum_{m=0}^n \bigg(\kern-0.4em\dbinom{m}{k-1}\kern-0.4em\bigg) = \bigg(\kern-0.4em\dbinom{n}{k}\kern-0.4em\bigg) $$ |
| $$ \dbinom{n+m}{k} = \displaystyle\sum_{j=0}^k \dbinom{n}{j} \dbinom{m}{k-j} $$ | $$ \bigg(\kern-0.4em\dbinom{n+m}{k}\kern-0.4em\bigg) = \displaystyle\sum_{j=0}^k \bigg(\kern-0.4em\dbinom{n}{j}\kern-0.4em\bigg) \bigg(\kern-0.4em\dbinom{m}{k-j}\kern-0.4em\bigg) $$ |

And remember: the second column is no less important than the first column! Justice for the multiset coefficient!
