# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.1`
* __Run:__ Sat Jan 07 2023 17:35:04 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.028ms 
    new Array(length): 0.009ms (faster)

 1,000 numbers:
           array.push: 0.061ms 
    new Array(length): 0.032ms (faster)

 10,000 numbers:
           array.push: 0.485ms 
    new Array(length): 0.221ms (faster)

 1,000,000 numbers:
           array.push: 37.275ms 
    new Array(length): 7.269ms (faster)

 100,000,000 numbers:
           array.push: 1,660.595ms (faster)
    new Array(length): 4,136.412ms


----


 10 strings:
           array.push: 0.008ms (faster)
    new Array(length): 0.016ms

 100 strings:
           array.push: 0.102ms 
    new Array(length): 0.01ms (faster)

 1,000 strings:
           array.push: 0.044ms 
    new Array(length): 0.022ms (faster)

 10,000 strings:
           array.push: 0.618ms 
    new Array(length): 0.266ms (faster)

 1,000,000 strings:
           array.push: 294.147ms 
    new Array(length): 8.522ms (faster)

 100,000,000 strings:
           array.push: 2,155.003ms (faster)
    new Array(length): 4,616.369ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|431|84|
|Array.from|16|44|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|170,639|54|
|[True conditional] Using constructor name|128,776|94|
|[True conditional] Check if property is valid then instanceof |130,774|95|
|[False conditional] Using instanceof only|591,504,658|96|
|[False conditional] Using constructor name|591,357,600|94|
|[False conditional] Check if property is valid then instanceof |591,892,967|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,330|86|
|Intl.DateTimeFormat().format(new Date())|9,073|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,455|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,332|84|
|Reusing Intl.DateTimeFormat()|470,338|97|
|Reusing dfWithOptions.format(Date.now())|282,413|97|
|Reusing dfWithOptions.format(new Date())|249,123|98|
|Date.toLocaleDateString()|453,662|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,852|88|
|Format using date.get*|3,690,149|96|
|new Date() (Baseline)|7,972,715|98|
|Date.now() (Baseline)|15,645,237|97|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|729,453|95|
|Using brackets {}|737,066|96|
|Using '' + |732,430|97|
|Using date.toString()|812,164|99|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,481,358|98|
|Using undefined assignment|589,913,946|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|165,650|55|
|NodeError|127,845|92|
|NodeError Range|128,323|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,283,207|92|
|Function returning explicitly undefined|1,266,660|96|
|Function returning implicitly undefined|1,300,655|93|
|Function returning string|1,283,522|93|
|Function returning integer|1,281,527|95|
|Function returning float|1,295,999|95|
|Function returning functions|1,250,829|96|
|Function returning arrow functions|1,270,570|93|
|Function returning empty object|1,298,925|97|
|Function returning empty array|1,289,391|92|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|590,932,310|95|
|using Array.includes (first item)|590,666,930|97|
|Using raw comparison|589,150,301|96|
|Using raw comparison (first item)|591,240,406|98|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|69,170,975|94|
|Using Object.getOwnPropertyNames()|69,959,796|96|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,032,287|97|
|Length = 10_000 - Array.at|19,162,874|99|
|Length = 1_000_000 - Array.at|19,186,899|99|
|Length = 100 - Array[length - 1]|590,428,452|97|
|Length = 10_000 - Array[length - 1]|589,720,592|97|
|Length = 1_000_000 - Array[length - 1]|589,833,117|97|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|58,356,556|90|
|Object.create({})|953,357|80|
|Cached Empty.prototype|591,427,803|96|
|Empty.prototype|1,141,160|82|
|Empty class|665,647|83|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|591,861,550|97|
|Using optional chain (obj.field?.field2) (undefined)|591,461,105|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|592,023,935|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|590,790,700|96|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|203,121,576|95|
|Using parseInt(x, 10) - big number (10 len)|15,201,598|95|
|Using + - small number (2 len)|592,767,873|98|
|Using + - big number (10 len)|592,275,750|99|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|550,054|79|
|Using ? operator to avoid rejection|576,163|83|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|255,881,871|92|
|Raw usage underscore usage|264,371,005|95|
|Manipulating private properties using #|195,300,531|96|
|Manipulating private properties using underscore(_)|184,827,612|94|
|Manipulating private properties using Symbol|186,395,800|95|
|Manipulating private properties using PrivateSymbol|36,709,649|95|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,819,378|98|
|Adding property in the object creation - small object|1,823,774|98|
|Adding property after the function creation - small class|136,075|91|
|Adding property in the function creation - small class|135,737|89|
|Adding property after the class creation - small class|114,149|85|
|Adding property in the class creation - small class|114,576|87|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,488,663|93|
|Using replaceAll()|2,158,596|99|
|Using replaceAll(//g)|2,187,356|96|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|194,259|96|
|Sort using first char|881,465|96|
|Sort using localeCompare|817,638|93|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,453|94|
|{...smallObject} - Total keys: 2|79,714,532|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,578|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,526|97|
|{ ...bigObject, ...anotherBigObject }|852|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,343,510|99|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|25,541,201|99|
|{ ...smallObject, ...anotherSmallObject }|16,836,896|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,648 ops/sec ±18.58% (89 runs sampled)
streams.web.Readable reading 1e3 * some data x 399 ops/sec ±0.37% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,765 ops/sec ±0.42% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,018 ops/sec ±30.81% (48 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|591,018,662|98|
|Using backtick (`)|591,452,275|97|
|Using array.join|8,630,270|93|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|115,087,208|90|
|Using this|114,074,186|95|
