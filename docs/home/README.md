---
pageClass: 'home'
date: '2021-05-23'
tags:
- test
- testing
title: Home
description: Description
author: Author
footer: Copyright © 2022
meta:
  - name: title
    content: title
  - name: description
    content: description
  - name: keywords
    content: test, testing
  - name: author
    content: Author
  - name: language
    content: English
---

#### VuePress Table of Contents

[[toc]]

#### Custom Table of Contents

- [Heading](#heading)
- [Horizontal Rule](#horizontal-rule)
- [Line Break](#line-break)
- [Blockquote](#blockquote)
- [List](#list)
	- [Ordered](#ordered)
	- [Unordered](#unordered)
- [Code Block](#code-block)
	- [Vuepress Code Block Highlighting](#vuepress-code-block-highlighting)
- [Image](#image)
	- [Local](#local)
	- [Local With Size](#local-with-size)
	- [External](#external)
	- [External With Link](#external-with-link)
	- [External With Caption](#external-with-caption)
- [Link](#link)
- [Text](#text)
- [Symbol](#symbols)
- [Table](#table)
- [Definition List](#definition-list)
- [Footnote](#footnote)
- [Custom Attributes](#custom-id)
- [Task List](#task-list)
- [Admonition](#admonition)
- [Vuepress Container](#vuepress-container)

---

## Heading

# Heading (Level 1)
## Heading (Level 2)
### Heading (Level 3)
#### Heading (Level 4)
##### Heading (Level 5)
###### Heading (Level 6)

---

## Horizontal Rule

---

***

___

<hr>

---

## Line Break

End line with two spaces or `<br>` tag

---

## Blockquote

> Blockquote

> Blockquote with multiple paragraphs
>
> Like this.

> Nested blockquote
>
>> Like this

> #### Blockquote containing other elements
>
> - The first thing
> - A second thing
>
> *The* ***final*** **thing**

---

## List

### Ordered

1. First Item
2. Second Item
	> Blockquote
3. Third Item
	1. Indented Item 1
	2. Indented Item 2
4. Fourth Item

### Unordered

- First Item
- Second Item
	> Blockquote
- Third Item
	- Indented Item 1
	- Indented Item 2
- Fourth Item

---

## Code Block

	let seconds = 0
	setInterval(() => {
	  seconds++
	  console.log(seconds)
	}, 1000)

```
let seconds = 0
setInterval(() => {
  seconds++
  console.log(seconds)
}, 1000)
```

```js
let seconds = 0
setInterval(() => {
  seconds++
  console.log(seconds)
}, 1000)
```

### VuePress Code Block Highlighting

``` js{1,3-4}
let seconds = 0
setInterval(() => {
  seconds++
  console.log(seconds)
}, 1000)
```

---

## Image

### Local

![Local image](/assets/img/placeholder100.gif)

### Local With Size

<img src="/assets/img/placeholder100.gif" width="100" height="100">

### External

![External image](https://place-hold.it/100)

### External With Link

[![External image with link](https://place-hold.it/100)](https://youtu.be/CfFyV2fFhG0)

### External With Caption

<figure style="margin: 0">
	<img src="https://place-hold.it/100" alt="Placeholder">
	<figcaption>Placeholder</figcaption>
</figure>

---

## Link

[This](https://youtu.be/gwxTZaa3NgI) is a link.

[This](https://youtu.be/AfIOBLr1NDU "Placeholder image") is another link.

<a href="https://youtu.be/TLPi6vgJpG0" target="_blank">This</a> will open in a new tab.

*[Last](https://youtu.be/X2qTcT15sDA&t=93)* one.

<https://youtu.be/jcuxUTkWm44>

<email@address.com>

---

## Text

Bold: Like **this** or __this__

Italic: Like *this* or _this_

Bold and Italic: Like ***this*** or ___this___

<ins>Underline</ins>

~~Strikethrough~~

<mark>Highlight</mark>

~Sub~script

^Super^script

&nbsp;&nbsp;&nbsp;&nbsp;Indent

`console.log("Timber!")`

Escape characters like: \* \\ \#

Use <strong>HTML</strong> <em>wherever</em>.

<p style="color: red">The pen is blue!</p>

<p style="text-align: center">Centered</p>

[Here's a comment that won't be shown]: #

---

## Symbol

Copyright &copy;

Registered trademark &reg;

Trademark &trade;

Euro &euro;

Left arrow &larr;

Up arrow &uarr;

Right arrow &rarr;

Down arrow &darr;

Degree &#176;

Pi &#960;

Emoji :tada:

[Emoji List](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

[Symbol List](https://www.rapidtables.com/web/html/html-codes.html)

---

## Table

| Title | Description |
| ----- | ----------- |
| Lorem | Autem       |
| Ipsum | Vitae       |

| Heading | Date  | Description |
| :------ | :---: | ----------: |
| Autem   | Optio | Lorem       |
| Vitae   | Natus | Ipsum       |

---

## Definition List

First Term
: This is the definition of the first term.

Second Term
: This is a definition of the second term.
: This is another definition of the second term.

---

## Footnote

Make a footnote like this,[^1] and here's one which is longer.[^longnote]

[^1]: Here's the first footnote.

[^longnote]: Here's a footnote with multiple paragraphs.

	Indent paragraphs to include them.

	Add any number of paragraphs.

---

## Custom Attributes >>#custom-id .custom data-item="custom" onclick=console.log("neato")<<

Totally spaced dude >>style="color: forestgreen; letter-spacing: 0.523rem"<<

---

## Task List

- [x] Open the door
- [ ] Get on the floor
- [ ] Everybody walk the dinosaur

---

## Admonition

> :bulb: **Tip:** Just the tip.

> :memo: **Note:** This memo has been noted.

> :warning: **Warning:** Private note. Do not read.

---

## VuePress Container

::: details Show me the money
Lorem ipsum dolor sit amet consectetur adipisicing elit. A, reiciendis nulla? Possimus, ex. Iusto nemo commodi suscipit, dolore culpa illum quibusdam, eius velit perferendis quasi modi repudiandae ea nisi molestiae soluta dolorem, aliquam recusandae. Beatae molestias nisi necessitatibus? Repellendus, dolor hic delectus rem minus id totam aliquid accusamus unde excepturi esse autem tempore officiis. Sit quasi, debitis voluptatum neque, possimus ullam reprehenderit est maiores eum maxime tempore animi quae consequuntur fugiat! Ullam eos placeat perspiciatis ipsa illo doloribus ad dolore est repudiandae! Accusamus pariatur, fuga sint numquam, cupiditate ut labore quidem alias praesentium exercitationem quaerat quos dicta molestias aliquid deleniti!
:::

::: tip
Do keep in mind that 
̵̡̜̏ͬ ̣͚̪͔̹̭̀̈͗̒ͦ̓͐͜ͅ ̢̧̫̭͂̽ͮͥ̀ͦ͑ͣ͝r̼̹͆̿̽ȇ̙͎͚̲̖̪̔̊̂̅ͩs̶̡͔̝̩̪̪̟̠̼ͯ̈́̒ͅȉ̸̡͈͇̙͓̮̰̘̘̦̽͐̇̓̈́͗̽s̝͓̮̬̟̭̘̄̌̒̐ͣ͋ͦ͌ͅt̘̫̭̩̺̲̜̩̗̓̍ͨͩa̡̝̩̪̬̙͙̻͙̓ͦ͛͂̏̋̾͗̍͠n̫͚ͬ͠c̵̹̞̯̹̐̿̄̒̉͟e͂͑͏̱̠͇̫̰̜͙ ̸̳͈̣͕̌̐̓̇ͬ͂ͤ͡i̷͍̣̼͇̘͙̲̳͉̐̋̄s̴̳̦̘̲͍̻̱̯ͫ̔̓̂̈ͧͩ͝ ̺̠͎̻͖͖͓̲͍ͩͬ͘f̴̷͈̖̖̬̭̠̦͖͇̏̀ͣ̇̇̆ͪŭͨ͏͖̩̩͖̳̝t͙̤ͬ̈́̿̊ͬ̆̚̚î̢̹̩͕̦ͥ̌ͭ̋ͦ̃̽̄l̛̜͕̗̱̫͉͙̘̒̐ͪͤ͋͊ͥ̔̄̕̕ͅe͂ͣ͛̍ͤͬ̈҉̴͎͕̰͔̗͈̮̹ ̀ͤ̋ͥ҉̠͎͍̖̘ ̙̮̹͆͒ͪ̃ ̫̠̣̺̩̟̤̺ͥͭͧ̋̕͜
:::

::: warning
Am warnin ye
:::

::: danger
Here be dragons
:::

<style lang="sass">
.home
</style>
