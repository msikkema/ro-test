# ro-test

This is the ReachOut tech test. I used a Vue port of React's styled components mainly because I was interested in how it differed, the answer is not by much - given that Vue component files already separate and can scope styling, and if you use sass then you can already easily change styling variables, it's probably not that useful in the vue ecosystem, and probably reflected by the low npm package downloads per week. Styled components make inheriting and extending styles more programatic - for example I have a module that exports heading styles, and these are then extended by some components which can subtly alter them to fit their particular usage such as colour. I also used a Theme provider for constants such as the colours.

I also used Pug (née Jade) for the html templating, as I also wanted to see how it fares with Vue (answer: quite well). I like using Pug, even if no one else seems to like it that much.

There is also a suitable mobile view included for the application.

The testing was somewhat difficult - regular JS (ie the dogService) was fine, but mounting and testing components turned into a 'check google every 5 minutes' affair due to my lack of Vue knowledge.

Overall it was an enjoyable experience - developing the Vue components was fun and relatively easy (it feels like a nice cross between Angular 1x and React, which isn't surprising given Evan You's background), but I need to do some research on how to better test the components.

To check it, run `yarn serve` and go to `http://localhost:8080`

-- Matt

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
