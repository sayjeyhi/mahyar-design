---
title: How to add comments to Gridsome with Disqus
excerpt: Adding comments to a static site can be easy and Disqus is a great alternative
  that add loads into your site externally as an iframe.
date: 2019-10-31 23:00:00 +0000
author: Loke Carlsson

---
\# How to add comments to Gridsome with Disqus

Disqus is an external service that injects an iframe on your site, one easy way to use Disqus with Gridsome is to use the package \[vue-disqus\]([https://github.com/ktquez/vue-disqus](https://github.com/ktquez/vue-disqus "https://github.com/ktquez/vue-disqus")) that provides you with a custom component that you can use across your project.

\#### Sign up on Disqus

First step is to sign up for an account on \[Disqus\]([https://disqus.com/](https://disqus.com/ "https://disqus.com/")). When presented with the option you want to choose 'I want to install Disqus on my site'. Continue by filling in all necessary information about your site and when you are asked 'What platform is your site on?', pick 'Universal Code' at the bottom of the page. 

Complete the setup of your site and take note of your \`Shortname\` because this will be used later.

!\[shortname\](![](https://i.imgur.com/Ui1aoYi.png)) 

\#### Install vue-disqus

You can use vue-disqus for easier implementation or use disqus directly, but this guide is using vue-disqus.

\`yarn add vue-disqus\`

or with npm

\`npm install vue-disqus\`

After it has been added to your package.json and installed you need to import vue-disqus in your \`main.js\` which is located directly in the \`src\` directory, and added to the vue instance. 

\`\`\`js

import VueDisqus from 'vue-disqus'

export default function (Vue, { head })  {

  Vue.use(VueDisqus)

}

\`\`\`

Now you are free to use the disqus component anywhere you want, simply use it like this:

\`\`\`js

<vue-disqus shortname="mygridsomesite" :identifier="$page.post.title"></vue-disqus>

\`\`\`

You need to provide a shortname which you can find on \[Disqus\]([https://disqus.com/](https://disqus.com/ "https://disqus.com/")) under your site you configured after you signed up. You also need to provide an identifier, in this example we used the blogpost title from the GraphQL query.

Read more: \[Disqus\]([https://disqus.com/](https://disqus.com/ "https://disqus.com/"))