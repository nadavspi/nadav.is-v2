---
title: Making Magento slightly more accessible
date: 2015-02-25
tags: Magento, Web
---

Magento [has accessibility problems](https://twitter.com/nadavspi/status/519853270911950848). I've worked on several Magento projects by now and I've tried to do little things here and there to make it more sane, like using more semantic elements (`<div class="fieldset">` — are you kidding me?) and reducing over markup. There are so many things you can fix in Magento, but I'd like to focus on one cute little JavaScript function as an example.

The (much improved) [responsive theme](http://www.magentocommerce.com/knowledge-base/entry/ee114-ce19-rwd-dev-guide) that shipped with Magento CE 1.9 / EE 1.14 includes the very useful `toggleSingle()` jQuery plugin for toggling stuff. It looks like this:

<script src="https://gist.github.com/nadavspi/5a4d1f1506dee6a71139.js"></script>
(Magento uses $j for jQuery)

I like this. While working on [MarcEcko.com](http://www.marcecko.com), I decided to make a few small changes to it that make it a bit more accessible. The [ARIA spec](http://www.w3.org/TR/wai-aria/) provides a few properties that are useful for us here, namely:

- [`aria-controls`](http://www.w3.org/TR/wai-aria/states_and_properties#aria-controls)
- [`aria-expanded`](http://www.w3.org/TR/wai-aria/states_and_properties#aria-expanded)
- [`aria-hidden`](http://www.w3.org/TR/wai-aria/states_and_properties#aria-hidden)

We can look at [Heydon](https://twitter.com/heydonworks)'s [Practical ARIA examples](http://heydonworks.com/practical_aria_examples/#progressive-collapsibles) (from his [book](https://shop.smashingmagazine.com/apps-for-all-coding-accessible-web-applications.html), which I highly recommend) to see how we can use ARIA to make our toggled content more accessible.

From his example:

<script src="https://gist.github.com/nadavspi/7569904d91b8904d44b9.js"></script>

Notice that, even without the ARIA attributes, his toggle is more semantic than the code example from Magento: the toggle is a `button` element, inside a heading. Much better than a `div`. The code example from Magento uses `<div class="block-title">`. A `div` carries no semantic value. Although the word title is in there, it doesn't mean anything to machines like search engine crawlers and screen readers. There's also no indication that the block title is actionable.

The `aria-controls` attribute on Heydon's heading button communicates that the button controls some other element, and potentially gives the user a shortcut to jump directly to the element it controls. Like all ARIA attributes that identify elements, `aria-controls` uses ID.

`aria-expanded` tells us the state of the button, announced by screen readers as something like "button collapsed."

`aria-hidden` on the content tells us whether it's visible or not.

Once I activate the button to show the content, this is what I should see in the <abbr>DOM</abbr>:

<script src="https://gist.github.com/nadavspi/a6e2e380bb2f7967bfce.js"></script>

Only two things have changed: `aria-expanded` and `aria-hidden`. These attributes semantically communicate the state of our little component, and I can use them in my <abbr>CSS</abbr> to visually show and hide it:

<script src="https://gist.github.com/nadavspi/af0a59e5a826fa31221b.js"></script>

All of this comes from Heydon, and it's wonderful. Let's contrast it with the way `toggleSingle()` works. Here's the relevant portion:

<script src="https://gist.github.com/nadavspi/4a2e22235ad166a777e5.js"></script>

So, `toggleSingle()` relies in classes to show/hide stuff. When the script is executed, the content gets a `.no-display` class which sets it to `display: none`. I think there's even an `!important` in there. When you click the title, the class is toggled. Simple enough.

Let's add the ARIA attributes. Starting with the click event:

<script src="https://gist.github.com/nadavspi/c5a09f3f7cdbe86c8acf.js"></script>

This takes care of `aria-expanded` and `aria-hidden`.

For `aria-controls`, we need the content to have an ID. I want to keep the template markup as simple as possible, so I'll let the JavaScript generate a random ID if there isn't one already:

<script src="https://gist.github.com/nadavspi/a91fbd36fb4377798750.js"></script>

To put it all together, here's our improved accessible take on `toggleSingle`:

<script src="https://gist.github.com/nadavspi/e2096b83437a0fa85fba.js"></script>

I added a couple of things here:
- Initializing the ARIA attributes on the button
- Switching focus to the content once expanded
- Removing the attributes when the destruct option is passed (except for the ID).

I recently rewrote a slightly better version of this plugin. It optionally allows you to toggle some arbitrary content rather than just the next element, and it wraps the inside of the toggle in a `<button>` tag, if it isn't one already, for better semantics. Check it out [here on GitHub](https://github.com/nadavspi/peekaboo.js).
