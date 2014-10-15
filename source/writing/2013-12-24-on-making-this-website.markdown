---
title: On making this website
date: 2013-12-24
tags: Development
---

<aside class="notice">This post is outdated: it refers to the previous version of this website.</aside>

This is my website. There are many like it, but [this one is mine][1846-001]. The source code is [available on GitHub](https://github.com/nadavspi/nadav.is).

## Typography

The typeface used on this site is the lovely [FF Tundra][1846-002] by [Ludwig Übele][1846-003].[^tundra] I'm in love with FF Tundra. I came across it a few months ago, became totally obsessed with it, and couldn't wait for an excuse to use it. When I decided to build this website, I immediately knew the time had come to use Tundra. It was the first design choice for this site, and the first time I ever purchased a font. I thought about using a second font with it and tried out a bunch of combinations, but ultimately decided to stick with Tundra for everything.[^fonts]

I wanted a comfortable font size—large but not [Zeldman][1846-004] or [Trent Walton][1846-005] large[^large]—and settled on 22px at the largest breakpoint. Funny story: For the week I spent developing this site, I was viewing it at 110% zoom. Made for an interesting surprise when I deployed it.

I used a [modular scale][1846-006] for the site, using the ratio of a major third in music (4:5 or 1.25). Because who doesn't like a major third? And I double stop major tenths on the bass all the damn time.[^red]

## Code

This website uses [Middleman](!g “Middleman app”), my static site generator of choice. [Jekyll][1846-007] seems to be getting more attention these days, but I feel most at home with Ruby and ERB templating, so I’m sticking with Middleman for now. It’s written in HTML5 and [Sass][1846-008], generally adhering to [SMACSS][1846-009] and [BEM][1846-010] principles as far as splitting things up into partials and naming classes descriptively.

I feel like the [OOCSS][1846-011]/BEM thing can lead to an unnecessarily cluttered DOM with all of the class names, although I love the idea of abstracting reusable patterns. Preferring clean HTML, I tend to use [extend](!g “sass extend”) instead of applying a class to every element. For now, anyway.


## Layout
This site was built *[mobile first][1846-012]* using [Susy](!g “Susy grid”) as the grid framework. I’m using the nifty *[magic grid](http://susy.oddbird.net/demos/magic/)* thing that applies a breakpoint as soon as the specified number of columns can fit in the viewport.

I sketched some mockups at 7am one morning during [Patterns](http://patterns.co) then put them away to work on the content. I played with some more complicated ideas for the home page before ending up with the simple layout it has now.

<figure>
    <img src=/images/articles/mockup.jpg alt="First mockup of nadav.is">
    <figcaption>The first mockup of this website.</figcaption>
</figure>

## Writing

Articles are written in [Markdown][1846-013]. They usually start in [Byword][1846-014] on the Mac or [Editorial][1846-015] on the iPad[^notebook] until I’m ready to see them in context, at which point they're moved into the development branch in the repo and into [Sublime Text][1846-016] for editing.

I'd like to give a special shout out to Brett Tersptra amazing [SearchLink][1846-017] OS X Service for making Markdown links so much easier.

Getting the (unofficial) Markdown footnote syntax to work was kind of a bitch. I started out using the [redcarpet](https://github.com/vmg/redcarpet) engine but it didn’t support them. I tried a few others and almost settled on [kramdown][1846-018] except it was stupidly difficult to get the figure/img/figcaption pattern to parse right. Eventually I got redcarpet working for footnotes—and automatic [smart quotes](http://smartquotesforsmartpeople.com/)—within Middleman by pulling the gem directly from GitHub. Yay.[^detour] The footnotes display inline thanks to the awesome [Bigfoot](!g “Bigfoot footnote”) jQuery plugin.


[^tundra]: [Here’s a cool article by Ludwig on the making of FF Tundra](http://ilovetypography.com/2011/10/05/the-making-of-ff-tundra/).
[^fonts]: Honorable mentions for Museo Sans, FF Milo, Brandon Grotesque, and Tungsten.
[^large]: Not that there’s anything wrong with that.
[^notebook]: Well, half of the [Miles Davis post](/writing/miles-davis) was scribbled in a [Field Notes][1846-019] notebook on the Subway—because sometimes you can't interrupt the flow, but still have to get places.
[^detour]: I took a detour trying to make a Middleman helper function to generate my figure/img/figcaption blocks—borrowing from [Middleman Sushiplate](https://github.com/eshiota/middleman-sushiplate)—but that stuff seems to broken right now. Will try again some time. [There’s a working plugin for jekyll](https://github.com/opattison/jekyll-figure-image-tag). :-(
[^red]: Thanks, [Red Mitchell][1846-020]. I love you!



[1846-001]: http://frankchimero.com/blog/2013/12/homesteading-2014/
[1846-002]: https://www.fontfont.com/fonts/tundra
[1846-003]: http://www.ludwigtype.de/
[1846-004]: http://www.zeldman.com/
[1846-005]: http://trentwalton.com/
[1846-006]: http://modularscale.com/
[1846-007]: http://jekyllrb.com/
[1846-008]: http://sass-lang.com/
[1846-009]: http://smacss.com/
[1846-010]: http://bem.info/method/
[1846-011]: http://oocss.org/
[1846-012]: http://www.abookapart.com/products/mobile-first
[1846-013]: http://daringfireball.net/projects/markdown/
[1846-014]: http://bywordapp.com/
[1846-015]: http://omz-software.com/editorial/
[1846-016]: http://www.sublimetext.com/
[1846-017]: http://brettterpstra.com/projects/searchlink/
[1846-018]: http://kramdown.gettalong.org/
[1846-019]: http://fieldnotesbrand.com/
[1846-020]: http://www.youtube.com/watch?v=_htGBKvXWpI
