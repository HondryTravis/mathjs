---
layout: default
---

# Old browsers

File: [old_browsers.html](old_browsers.html) (click for a live demo)

```html
<!DOCTYPE html>
<html>
<head>
  <title>math.js | old browsers</title>

  <!-- es5-shim for old browsers (IE8 and older) -->
  <script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/2.2.0/es5-shim.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/2.2.0/es5-sham.min.js"></script>

  <script src="https://unpkg.com/mathjs@4.4.1/dist/math.min.js"></script>
</head>
<body>

<p>
  To run math.js in old browsers (IE8 and older),
  the <a href="https://github.com/kriskowal/es5-shim">es5-shim</a> library is needed.
</p>

<script>
  function print(value) {
    var precision = 14;
    document.write(math.format(value, precision) + '<br>');
  }

  // functions and constants
  print(math.round(math.e, 3));            // 2.718
  print(math.atan2(3, -3) / math.pi);      // 0.75
  print(math.log(10000, 10));              // 4
  print(math.sqrt(-4));                    // 2i
  print(math.pow([[-1, 2], [3, 1]], 2));   // [[7, 0], [0, 7]]

  // expressions
  print(math.eval('12 / (2.3 + 0.7)'));    // 4
  print(math.eval('12.7 cm to inch'));     // 12.7 inch
  print(math.eval('9 / 3 + 2i'));          // 3 + 2i
  print(math.eval('det([-1, 2; 3, 1])'));  // -7

  // chained operations
  var a = math.chain(3)
      .add(4)
      .multiply(2)
      .done();
  print(a);  // 14
</script>

</body>
</html>
```

<!-- Note: This file is automatically generated. Changes made in this file will be overridden. -->
