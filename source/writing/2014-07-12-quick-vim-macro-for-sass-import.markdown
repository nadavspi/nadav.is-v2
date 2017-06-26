---
title: Quick Vim Macro for Sass @import
date: 2014-07-12 
tags: Development
---

Since Sass @import doesn't support globbing (without [this
gem](https://github.com/chriseppstein/sass-globbing)), here's a quick Vim macro
for importing the contents of a directory.

* ``:r !ls modules/`` — “read” output of command into the buffer
* ``qq`` — record macro
* Insert ``@import modules/`` before filename
* ``ysiW"`` — surround WORD with " (using
  [vim-surround](https://github.com/tpope/vim-surround))
* ``q`` — stop recording
* ``V7j`` - enter linewise visual and select 7 lines down
* ``:norm @q`` — execute macro on selected lines

<div class="featured">
  <iframe name='quickcast' src='//quick.as/embed/dby9flaz' scrolling='no' frameborder='0' width='100%' allowfullscreen></iframe><script src='//quick.as/embed/script/0.87'></script>
</div>
