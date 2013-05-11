
# fan

extracts argument names from a function descriptor

## example

```js
var fan = require('fan');

function greetings(hello, world){};

var args = fan(greetings);

console.log(args); // ["hello","world"]
```

## License

MIT
