---
layout: post
title:  "Making github site"
date:   2020-07-07 14:24:13 +0500
categories: jekyll update
---
Hi! It is my first site, I did it within 3 days. Thanks to [github](https://docs.github.com/en/github/working-with-github-pages/setting-up-a-github-pages-site-with-jekyll) and [minima](https://github.com/jekyll/minima/tree/v2.5.1) documentation. The source code of this page is [here](https://github.com/plyq/plyq.github.io).

There are 2 more or less interisting things.

### Custom page parameter
I added a page parameter `topmenu` for control what to display at header menu and in which order.
Usage:
{% highlight yaml %}
topmenu: 3#about
{% endhighlight %}
All pages at the header firstly are sorted by their number:
{% highlight text %}
{% raw %}
{%- assign default_paths = site.pages | sort: "topmenu" | map: "path" -%}
{% endraw %}
{% endhighlight %}
To show more than 10 pages one case use chars instead of numbers.

### Contact form
I added a free contact form from [formspree](https://formspree.com):
{% highlight html%}
<form class="contact" action="https://formspree.io/<YOUR-FORMSPREE-TOKEN>" method="POST">
    <input type="text" name="name" placeholder="Your Name" required=true>
    <input type="text" name="email" placeholder="Email Address" required=true>
    <textarea type="text" name="content" rows="10" placeholder="Message" required=true></textarea>
<!-- Will work only for 10$ per month -->
<!--<input type="hidden" name="_next" value="{%- link ty.md -%}"> -->
    <input type="hidden" name="_subject" value="New Contact Form Submission">
    <input type="text" name="_gotcha" style="display:none">
    <div class="button">
      <button type="submit">Submit :rocket:</button>
    </div>
</form>
{% endhighlight %}
There were not any pre-styles for forms in *minima*, and I didn't find a way how to beatifully overload `_sass` folder to make it works. So I just put style inside the `_includes/contacts.html`.

To summarize, it was not so hard to make a personal github web page, but take a long time because it is my first try.
