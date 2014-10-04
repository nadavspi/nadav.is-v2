---
title: Emacs as a Vim user
date: 2014-08-31
tags: Development
---

<h5 class="featured">Warning: this post is geeky. Like, really geeky. If you only recognize three words from the title, you should probably skip this one.</h5>

Four months ago [I decided to learn Vim](http://nadav.is/writing/a-month-with-vim/) and began using it as my full time text editor at work and at home. I've gotten pretty damn comfortable with it. I don't know if using Vim has made me faster or more efficient, but there's definitely a [flow](http://en.wikipedia.org/wiki/Flow_(psychology)) that comes from using the keyboard for everything.

As I mentioned in my earlier post, one of my main attractions to Vim has been the idea of [Vim as a language](http://rc3.org/2012/05/12/the-grammar-of-vim/).[^lang] I've learned and internalized the grammar of Vim, and there's no going back from here. [Text objects](http://blog.carbonfive.com/2011/10/17/vim-text-objects-the-definitive-guide/), for example, make Vim super powerful for <abbr>HTML</abbr> and <abbr>CSS</abbr>.

A few weeks ago, something happened. Something that almost made me switch back to [Sublime Text](http://www.sublimetext.com/) that same day: [David Jonathan Ross](http://djr.com/) released [Input](http://input.fontbureau.com/), a font family designed for coding. There have been a lot of fonts designed for coding, but what made me notice Input is that it includes a [sans serif](http://en.wikipedia.org/wiki/Sans-serif). As a typography geek, I just had to try it.[^input] I couldn't. Since I run Vim in the command line, trying to use a non-monospace font was a dead end. Even [MacVim](https://github.com/b4winckler/macvim) &mdash; as far as I can tell &mdash; is limited to monospace.

I love good typography so much that I seriously considered going back to Sublime to try Input. I tried it for a day, but Sublime suddenly seemed so clunky. Having to use the mouse to navigate to the inside of an <abbr>HTML</abbr> tag instead of just pressing ``cit`` wasn't going to work. I tried Sublime's [Vintage Mode](https://www.sublimetext.com/docs/2/vintage.html) and [Vintagenous](https://github.com/guillermooo/Vintageous) but found them buggy and insufficient. I admitted defeat and switched back to Vim settling on Input Mono. It wasn't over though.

I had an inkling that Emacs could handle proportional fonts and for a while now, I have been seeing mentions online of people switching from Vim to Emacs with [Evil](http://www.emacswiki.org/emacs/Evil). I was curious. Maybe the endless tinkering hacker side of me got too comfortable with Vim, maybe it was Input Sans. I had to try it.

I set up Emacs with Evil. Evil is an implementation of Vi for Emacs, and it's incredibly thorough. Text objects, macros, the ex :normal command &mdash; it's all there. I was immediately comfortable.

I haven't fully made the switch yet, but I've been tinkering with Emacs for about a week now, and I'm getting close. I tried out a couple [starter](https://github.com/purcell/emacs.d) [kits](https://github.com/bbatsov/prelude) to get a feel for where it all goes, and learned the basics of [elisp](http://learnxinyminutes.com/docs/elisp/).[^elisp] Then, I started from scratch. The learning curve is steep, but I've been having fun setting up my own [.emacs.d](https://github.com/nadavspi/dotfiles/blob/master/emacs.d/init.el) this weekend. My goal is to understand everything that goes into my config.

I'm very comfortable and productive with my Vim configuration, so my first step has been to replicate the most useful features of it in Emacs. I was happy to find Evil ports of a couple of my favorite Vim plugins ([surround](https://github.com/timcharper/evil-surround) and [sneak](https://github.com/AshleyMoni/evil-sneak)), and I'm experimenting with [projectile](https://github.com/bbatsov/projectile) as a replacement for [CtrlP](https://github.com/kien/ctrlp.vim). I'm also starting to explore the improvements that Emacs can bring to my worklow.

[TRAMP mode](http://www.emacswiki.org/emacs/TrampMode) could prove to be very useful. Tramp allows you to transparently edit remote files via <abbr>SSH</abbr>, treating them like local buffers. I'm using Tramp right now to write this post directly on my <abbr>VPS</abbr> in [Writeroom mode](https://github.com/joostkremers/writeroom-mode).

My motivation for learning Vim in the first place came out of having to use a dozen different machines each week at work. My workflow since switching to Vim has been to clone my [dotfiles](https://github.com/nadavspi/dotfiles) to each machine I was working on and keep a tmux session running. This works well, although some machines had outdated versions of tmux and/or Vim and I'd have to deal with it or compile my own. If I could replace all of that by using Tramp from my laptop, that'd be swell. Not a huge improvement, but perhaps a slightly prettier and easier centralized workflow.

I don't know yet if using Tramp is feasible for Magento projects because I'm constantly switching between files and there are over twenty thousand files in a Magento install. My Vim solution was to set up [two CtrlP shortcuts](https://github.com/nadavspi/dotfiles/blob/master/vimrc#L181) for the two directories I actually care about. I've done something similar with projectile but it's significantly slower over Tramp than in Vim running directly on the server. But we will see. Either way, super handy for quick remote changes and instances where I don't have to switch between twenty Sass partials and template files.

Another sticking point with Emacs has been Git. [Magit](https://github.com/magit/magit) is good, but [Fugitive](https://github.com/tpope/vim-fugitive) for Vim is *really* good. I have four [leader keys](http://usevim.com/2012/07/20/vim101-leader/) for fugitive that I use all the time: ``gs`` for status, ``ga`` to stage the current buffer, ``gc`` to commit the current buffer (I just type the commit message and hit enter), ``gp`` to push, and ``gm`` to amend. I like to commit frequently, and this makes it super quick. I can stage and commit within a couple of seconds without ever leaving the buffer. With magit, it seems that you have to open the status window to stage and commit changes. No biggie: it should be pretty easy to write something on top of magit that'll be as fast as my Vim workflow, and I'm already half way there.

I'm not sold on Emacs yet, and I'm still more productive and comfortable in Vim at this point, but it's been a fun experiment.


[^lang]: I've recently learned that the vast majority of the stuff I use every day that makes Vim awesome comes directly from its predecessor, vi. Vi has been around since 1976. My [neckbeard](http://www.urbandictionary.com/define.php?term=neckbeard) grew significantly while writing this footnote.

[^input]: Monospace fonts have been used for programming since the beginning of time, and I had never even considered not using them. <p>Still, David makes a [strong case](http://input.fontbureau.com/info/) for proportional fonts in coding. And Input Sans is just so pretty. How could I *not* try it?</p>

[^stuff]: I had stuff to do. I can't sit around perfecting my environment *all* day.

[^elisp]: Emacs lisp is the dialect of [lisp]( http://en.wikipedia.org/wiki/Lisp_(programming_language)) used to customize Emacs. In fact, most of Emacs is written in elisp, which is what makes it so extensible. This is very intriguing to me. If Vim is a grammar, Emacs is more like creating your own grammar.
