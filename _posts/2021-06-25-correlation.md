---
layout: post
title:  "Prediction with positive correlation (and Brexit)"
date:   2021-06-25
categories: writing
permalink: /blog/correlation.html
use_math: true
---

Let $X$ be a random variable with expectation $\mu$ and variance $\sigma^2$. Suppose you want to try to predict the value of a sample from $X$. Then your best guess, in the sense of minimising the mean-square error is to choose the expectation $\mu$. That best possible mean-square error is equal to the variance $\sigma^2$.

To put it another way, the variance $\sigma^2$ measures how hard it is to guess the outcome of $X$.

Now suppose we have two random variables $X$ and $Y$. To keep things simple, let's suppose they both have the same variance $\sigma^2$ (although the basic message of what I write holds more generally). Suppose now that we want to predict the difference between the outcomes of $X$ and $Y$; that is, we want to predict the outcome outcome of $X - Y$.

If $X$ and $Y$ are independent, then the variance of $X - Y$ is $2\sigma$. In other words, it's twice as difficult (in the sense of minimum mean-square error) to predict the difference of $X$ and $Y$ as it is to predict either $X$ or $Y$ individually.

But what if $X$ and $Y$ are not independent? If $X$ and $Y$ have correlation $\rho$ (a number between –1 and +1), then the variance of their difference is $2(1-\rho)\sigma^2$. This gives the curious result that if we have a strong positive correlation of $\rho > \frac12$, then $2(1-\rho)\sigma^2 > \sigma^2$, so it is in fact *easier* to predict the difference $X - Y$ than it is to predict either of $X$ and $Y$ individually.

The reason is that if $X$ happens to come out above average, then, when there's positive correlation, $Y$ is more likely to come out above average too, so the difference ends up getting preserved (at least approximately).

One common example of $X$ and $Y$ having high correlation are when they are measuring the same quantities at different points in the future. For example, suppose $X$ is the maximum temperature in Leeds on Christmas Day this year and $Y$ the maximum temperature in Leeds on Boxing Day this year. Then $X$ and $Y$ are individually difficult to predict – perhaps somewhere between 1 and 13 degrees Celsius? But predicting the temperature *difference* between those two days is pretty easy – if you guess 0 degrees difference, there's a pretty good chance that you'll be within a couple of degrees either way.

A second example is if $X$ and $Y$ measure the same quantity under different "treatments" or interventions. For example, suppose half of a field is treated with a standard fertiliser and half with a more expensive but more effective fertiliser; let $X$ be the height of the wheat in one half of the field three months later and $Y$ the height of the wheat in the other half of the field three months later. Then $X$ and $Y$ might be difficult to predict, because it depends on the quality of the soil and the weather conditions and so on. But if the respective qualities of the fertilisers are well understood, then it might be much easier to predict the improvement $X - Y$ that the more expensive fertiliser makes.

In 2016, the UK Treasury released estimates of how much leaving the EU would affect the GDP of the UK. That is, it was predicting $X - Y$ where $X$ is the GDP if the UK leaves the EU and $Y$ is the GDP if the UK remains in the EU. These are highly correlated -- they are both strongly affected by general economic conditions, productivity, governance, wars, pandemics, etc. After the UK voted leave, it became clear that the prediction for $X$ was not very accurate -- but that doesn't *necessarily* mean that the prediction for $X-Y$ was inaccurate too. The problem here, of course, is that there's no way to assess the accuracy of predictions of $Y$ or of $X-Y$.
