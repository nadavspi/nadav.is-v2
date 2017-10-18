---
title: A month with Vim
date: 2014-05-26
tags: Development
---

Since starting at [SD](http://somethingdigital.com) in February, I’ve been doing a lot of work on virtual machines or remote servers. I haven’t spent this much time in the command line since I was compiling my own linux kernels and fucking up grub configs as an early teen, and it’s a lot of fun. Because many of these machines don’t have an editor other than Vim and setting up SFTP for every project in Sublime Text is a pain, I decided it was time to learn Vim. Before I started, I knew how to go into insert mode and how to save and quit. That’s it. As a geek, I continually hack and refine my environment and this seemed like an obvious place for improvement. So for the past month, I’ve been using Vim exclusively. And I’ve been going deep.

My favorite thing about Vim (other than street cred from my fellow nerds) is that it’s a language that builds upon itself. Once I learn a word, I can string it together with the ones I already know to form sentences. For instance, hitting *j* moves the cursor down one line. Putting a number in front of any command repeats it that many times, so *3j* moves the cursor down three lines. Once I learn that *d* is for delete, I can do *d3j* to delete three lines down. As soon as I know that *f* finds the specified character in the line, I also know how to delete everything until the next semicolon in the line by doing *df;*, and so on. 

The logic of Vim as a language is very appealing and works with the way I think. As a front end dev, being able to change the contents of an <abbr>HTML</abbr> tag or a string in quotes in a couple of keystrokes is awesome. Being able to expand a line of <abbr>HTML</abbr> or <abbr>CSS</abbr> using two keystrokes with [splitjoin.vim](https://github.com/AndrewRadev/splitjoin.vim) is borderline mindblowing. 

This leads me to another reason I’m digging Vim: its extensibility and plugin ecosystem. This is familiar from using Sublime Text, which has many awesome plugins as well. What makes it extra appealing with Vim is that by bringing [my vimrc](https://github.com/nadavspi/dotfiles/blob/master/vimrc) with me, I can feel at home on any random machine I have to work on.

There are tons of [great](http://stevelosh.com/blog/2010/09/coming-home-to-vim/) [articles](http://www.danielmiessler.com/study/vim/) and even [some](https://leanpub.com/painless_vim) [books](http://pragprog.com/book/dnvim/practical-vim) about Vim that I’ve been referencing as I go, but the main thing has been to just throw myself into it. It’s been fun and rewarding so far, and has led some other geekery like [tmux](http://tmux.sourceforge.net/) and learning more about [zsh](https://github.com/robbyrussell/oh-my-zsh), but I’ll save those for another day. 
