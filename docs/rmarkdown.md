---
layout: page
title: Notes on R Markdown and Bookdown
permalink: /rmarkdown-draft/
---

This page comprises various notes I've made on R Markdown and Bookdown for creating accessible mathematics lecture notes.

## My brief introduction to R Markdown and Bookdown

- **[A brief introduction to RMarkdown and Bookdown](../assets/Rmd/intro.html)** This is from summer 2020, and is now a little bit out of date. For example:
   - It is now recommended to use `::: {.theorem}` for theorems, whereas this document still recommends the old notation <code>```{theorem}</code>, which is less good.
   - There is now a `fig.alt = ...` option to R chunks, which allows you to have a more detailed alt text (alongside the less detailed caption), which this document doesn't mention.

## Teaching development morning, 2021

I'm giving a talk at the teaaching development morning for the School of Mathematics and the University of Leeds on 14 December 2021.

* **[Slides for my talk](../assets/Rmd/rmarkdown-slides.html)**
   * [R Markdown source code](../assets/Rmd/rmarkdown-slides.Rmd) for the above slides
   * Handout for the talk "knitted" from exactly the same code as built the slides themselves [[HTML format]](../assets/Rmd/rmarkdown-handout.html) or [[PDF format]](../assets/Rmd/rmarkdown-handout.pdf)

## Useful references

- The "bibles":
  - [R Markdown: The Definitive Guide](https://bookdown.org/yihui/rmarkdown/)
  - [R Markdown Cookbook](https://bookdown.org/yihui/rmarkdown-cookbook/)
  - [bookdown: Authoring Books and Technical Documents with R Markdown](https://bookdown.org/yihui/bookdown/)
- [My guide to R Markdown and Bookdown](https://mpaldridge.github.io/rmarkdown-bookdown/) (a bit out of date)
- [Serguei Komissarov's guide to Bookdown](https://minerva.leeds.ac.uk/bbcswebdav/courses/201920_5685_MATH2620/BB-Guide/index.html) [UoL only]
- [Cosma Shalizi's guide to R Markdown](http://www.stat.cmu.edu/~cshalizi/rmarkdown/)

## My Bookdown lecture notes

My notes for the University of Leeds module MATH1710 Probability and Statistics I were written in R Markdown with the Bookdown package. (A few R Worksheets at the end are written in "plain" R Markdown without Bookdown.)

- [MATH1710 lecture notes](https://mpaldridge.github.io/math1710/)
   - [Source code](https://github.com/mpaldridge/math1710) for those lecture notes

