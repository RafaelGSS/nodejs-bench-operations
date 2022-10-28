# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.12.0`
* __Run:__ Fri Oct 28 2022 13:06:08 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.027ms 
    new Array(length): 0.009ms (faster)

 1,000 numbers:
           array.push: 0.065ms 
    new Array(length): 0.033ms (faster)

 10,000 numbers:
           array.push: 0.497ms 
    new Array(length): 0.207ms (faster)

 1,000,000 numbers:
           array.push: 33.322ms 
    new Array(length): 17.09ms (faster)

 100,000,000 numbers:
           array.push: 1,601.039ms (faster)
    new Array(length): 4,382.239ms


----


 10 strings:
           array.push: 0.008ms (faster)
    new Array(length): 0.016ms

 100 strings:
           array.push: 0.103ms 
    new Array(length): 0.01ms (faster)

 1,000 strings:
           array.push: 0.045ms 
    new Array(length): 0.022ms (faster)

 10,000 strings:
           array.push: 0.617ms 
    new Array(length): 0.261ms (faster)

 1,000,000 strings:
           array.push: 302.278ms 
    new Array(length): 8.568ms (faster)

 100,000,000 strings:
           array.push: 2,199.346ms (faster)
    new Array(length): 4,775.151ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|415|84|
|Array.from|16|43|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|170,588|54|
|[True conditional] Using constructor name|129,707|93|
|[True conditional] Check if property is valid then instanceof |130,975|92|
|[False conditional] Using instanceof only|592,846,692|97|
|[False conditional] Using constructor name|592,926,488|97|
|[False conditional] Check if property is valid then instanceof |592,709,109|94|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,362|87|
|Intl.DateTimeFormat().format(new Date())|9,093|80|
|Reusing Intl.DateTimeFormat()|450,933|81|
|Format using date.get*|3,846,424|97|
|new Date() (Baseline)|7,909,981|95|
|Date.now() (Baseline)|15,740,919|96|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|706,702|98|
|Using brackets {}|712,075|98|
|Using '' + |702,905|96|
|Using date.toString()|775,153|94|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,459,766|98|
|Using undefined assignment|591,353,368|99|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|163,243|54|
|NodeError|126,745|92|
|NodeError Range|127,535|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,274,010|94|
|Function returning explicitly undefined|1,236,718|97|
|Function returning implicitly undefined|1,285,566|94|
|Function returning string|1,265,275|97|
|Function returning integer|1,284,776|94|
|Function returning float|1,277,307|96|
|Function returning functions|1,229,058|93|
|Function returning arrow functions|1,251,569|96|
|Function returning empty object|1,219,188|94|
|Function returning empty array|1,269,325|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|591,807,435|95|
|using Array.includes (first item)|590,783,452|98|
|Using raw comparison|592,717,264|99|
|Using raw comparison (first item)|590,881,917|94|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|69,576,102|94|
|Using Object.getOwnPropertyNames()|69,440,927|96|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,359,780|95|
|Length = 10_000 - Array.at|19,365,572|97|
|Length = 1_000_000 - Array.at|19,342,273|97|
|Length = 100 - Array[length - 1]|590,298,884|96|
|Length = 10_000 - Array[length - 1]|590,285,765|98|
|Length = 1_000_000 - Array[length - 1]|589,211,694|97|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|57,777,520|93|
|Object.create({})|1,037,030|82|
|Cached Empty.prototype|592,100,535|94|
|Empty.prototype|1,141,178|80|
|Empty class|660,032|85|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|592,312,455|97|
|Using optional chain (obj.field?.field2) (undefined)|592,150,983|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|591,196,782|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|590,499,328|96|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|203,844,526|92|
|Using parseInt(x, 10) - big number (10 len)|14,863,251|97|
|Using + - small number (2 len)|592,613,982|98|
|Using + - big number (10 len)|592,593,942|98|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|543,438|80|
|Using ? operator to avoid rejection|567,352|86|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|252,959,073|91|
|Raw usage underscore usage|257,540,900|96|
|Manipulating private properties using #|183,403,243|89|
|Manipulating private properties using underscore(_)|166,262,917|85|
|Manipulating private properties using Symbol|170,141,331|91|
|Manipulating private properties using PrivateSymbol|36,401,359|93|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,411,623|96|
|Using replaceAll()|2,091,577|97|
|Using replaceAll(//g)|2,157,071|94|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|194,041|95|
|Sort using first char|830,403|95|
|Sort using localeCompare|783,952|89|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,676 ops/sec ±16.77% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 365 ops/sec ±0.29% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,823 ops/sec ±0.39% (92 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 912 ops/sec ±14.81% (57 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|592,772,607|96|
|Using backtick (`)|592,126,687|96|
|Using array.join|8,515,655|98|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|114,612,128|94|
|Using this|113,377,943|91|
