# Arctan formulas

What is
$$ \arctan 1 + \arctan 2 + \arctan 3 ? $$

Here, $\arctan{}$, also sometimes written $\tan^{-1}$, is the inverse tangent function. You may know that, in a right-angle triangle,
$$ \tan\theta = \frac{\text{opposite}}{\text{adjacent}} $$
is the ratio of the length of the edge opposite $\theta$ to the length of the edge adjacent to $\theta$. Then the inverse tangent "undoes" the $\tan$ function, so
$$ \theta = \arctan \left(\frac{\text{opposite}}{\text{adjacent}}\right) $$.
Further, mathematicians usually measure angles in radians, where a right angle (90°) is $\pi/2$ radians, a half turn (180°) is $\pi$ radians, and a full turn (360°) is $2\pi$ radians, and so on.

So what about
$$ \arctan 1 + \arctan 2 + \arctan 3 ? $$
I saw the answer to this first on some random website one day, and was surprised I didn’t already know this. But I’ve since asked at least 30 professional mathematicians, and none of them knew the answer either. It turns out that the answer is
$$ \arctan 1 + \arctan 2 + \arctan 3 = \pi . $$

So, having found out this new mathematical fact, I wanted to know more about it. Where does it come from? Why is it true? In particular, I wanted to answer five questions about it:

1. Can I prove it?
2. Can I give an alternative proof? (Two proofs are better than one!)
3. What is it useful for?
4. Are there other formulas like it?
5. Can I find even more formulas like it, and, if so, what does this have to do with being able to factor large prime number and therfore steal everyone’s credit card details from the internet?

### 1. Can I prove it?

When I first showed this to a friend, his response was “This is a geometrical formula, so it deserves a geometrical proof!” That is, $\arctan 1 + \arctan 2 + \arctan 3 = \pi$ is a statement about angles and edge lengths of triangles, so a proof ought to use angles and lengths in its arguments (rather than, say, using some complicated analytical formulas about arctan).

So here are two triangles. The red triangle has side lengths 1 and 2, so the red angle is $\arctan 2$. The blue triangle has side lengths 1 and 3, so the red angle is $\arctan 3$.

PICTURE 1

Now lets place the two triangles opposite each other, like this:

PICTURE 2

This creates a new triangle in between them, which we can colour in green.

PICTURE 3

Now, going from the top left of the green triangle, one edge goes down 2 and right 1, while the other edge goes right 2 and up 1. That means these two edges are the same length and make a right angle. But *that* means that the bottom angle in the “crevice” is in a right-angled triangle and has its adjacent and opposite sides the same length, so that angle is $\arctan 1$.

PICTURE 4

So the angles $\arctan 1$, $\arctan 2$, and $\arctan 3$ together make up a half turn of $\pi$ radians. So we have proved that 
$$ \arctan 1 + \arctan 2 + \arctan 3 = \pi . $$

### Interlude

Before going further, it will be convenient to slightly rewrite our formula. First, we know that
$$\arctan 1 = \frac{\pi}{4} , $$
because that is half the right-angle in a corner of a square. 

PICTURE 5

We also know that, for any $x$,
$$ \arctan x  + \arctan \frac{1}{x} = \frac{\pi}{2} , $$
because the tan of the two different angles in a triangle are
$$ \frac{\text{opposite}}{\text{adjacent}} = x \qquad \text{and} \qquad \frac{\text{adjacent}}{\text{opposite}} = \frac{1}{x} $$
respectively, and these angles add up to $\pi/2$ (because, together with the right angle of $\pi/2$, all three angles in the traingle add to $\pi$).

PICTURE 6

Using these, we can rewrite our formula as
$$ \arctan \frac{1}{2} + \arctan \frac{1}{3} = \frac{\pi}{4} . $$

### 2. Can I give an alternative proof?

For our alternative proof we will use complex numbers. A complex number $z = a + b\mathrm{i}$ can be represented on a diagram of the complex plane as $a$ units across to the right and $b$ units up. The angle this makes at the origin is called the "argument" $\operatorname{Arg}(z)$ of the complex number.

PICTURE 7

But we can also interpret the point $z$ as the corner of a right-angled triangle. Then the argument has it's tan equal to the opposite length $b$ of the adjacent length $a$.

PICTURE 8

So we have
$$ \arctan \frac{b}{a} = \operatorname{Arg}(a + b\mathrm{i}) . $$
So the two terms in our (rewritten) formula can be expressed as
$$ \arctan \frac{1}{2} = \operatorname{Arg}(2 + \mathrm{i}) \qquad \arctan \frac{1}{3} = \operatorname{Arg}(3 + \mathrm{i}) .$$

There's another useful facts about arguments of complex numbers: if you multiple together two complex numbers, their arguments add up; that is, $\operatorname{Arg}(z_1z_2) = \operatorname{Arg}(z_1)\operatorname{Arg}(z_2)$ (possibly up to gaining a factor of $2\pi$, if you end up goin all the way around that circle.

