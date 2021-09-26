---
title: Vuepress is amazing
lang: ru-RU
list: 
  - My name is Rassulzhan
  - I'm 24 y.o.
  - I love Frontend Development
---

# this is whatever

Absolutely any text, that may be here.

{{ $description }}
<div v-for="(item, i) in $page.frontmatter.list" :key="i" >
  we loop througn list and the {{i + 1}}st element is: {{item}}
</div>

this is a [link](/config/)


# Headers
## Headers
### Headers
#### Headers
##### Headers
###### Headers

This is a **bold text**

this is _italic font style_

This is a `monospaced text`

~~not very well~~ text

this is just some emoji :smile: :heart: :hand:

this is some space 
and i want to break to the next line  
right now


markdown lists
* make anything nice and even
* enjoy your life

* first level
  * second level
  * second level bb
    * third level bb
      * fourth level?

1. Rasul Turganov  
   A frontend developer from Almaty, currently works at kaspi.kz

As a Rassulzhan Turganov once said:  
> We gotta create our own UI framework with blackjackes and lambda functions

this is just a dividers part  
***
like text
---
undescored
___

Table:  
| Name | Score |
| -----| ------|
| Rassul | 1000|
