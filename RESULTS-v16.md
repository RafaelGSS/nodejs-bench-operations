# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.17.0`
* __Run:__ Wed Aug 31 2022 11:58:06 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.006ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.052ms 
    new Array(length): 0.014ms (faster)

 1,000 numbers:
           array.push: 0.062ms 
    new Array(length): 0.035ms (faster)

 10,000 numbers:
           array.push: 0.575ms 
    new Array(length): 0.234ms (faster)

 1,000,000 numbers:
           array.push: 33.097ms 
    new Array(length): 10.814ms (faster)

 100,000,000 numbers:
           array.push: 2,121.33ms (faster)
    new Array(length): 4,873.773ms


----


 10 strings:
           array.push: 0.009ms (faster)
    new Array(length): 0.019ms

 100 strings:
           array.push: 0.09ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.056ms 
    new Array(length): 0.027ms (faster)

 10,000 strings:
           array.push: 0.632ms 
    new Array(length): 0.287ms (faster)

 1,000,000 strings:
           array.push: 341.86ms 
    new Array(length): 9.345ms (faster)

 100,000,000 strings:
           array.push: 2,627.761ms (faster)
    new Array(length): 5,333.71ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|363|86|
|Array.from|15|40|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|204,035|60|
|[True conditional] Using constructor name|160,179|92|
|[True conditional] Check if property is valid then instanceof |163,085|92|
|[False conditional] Using instanceof only|712,069,678|95|
|[False conditional] Using constructor name|711,185,918|96|
|[False conditional] Check if property is valid then instanceof |713,279,035|95|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,715|80|
|Intl.DateTimeFormat().format(new Date())|8,212|79|
|Reusing Intl.DateTimeFormat()|426,354|87|
|Format using date.get*|3,015,514|95|
|new Date() (Baseline)|7,029,063|95|
|Date.now() (Baseline)|14,075,574|94|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|684,598|96|
|Using brackets {}|695,472|97|
|Using '' + |703,503|94|
|Using date.toString()|752,548|94|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,460,496|98|
|Using undefined assignment|711,670,636|95|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|196,397|56|
|NodeError|155,010|96|
|NodeError Range|153,905|97|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,305,915|95|
|Function returning explicitly undefined|1,302,636|95|
|Function returning implicitly undefined|1,315,708|93|
|Function returning string|1,308,609|96|
|Function returning integer|1,315,588|92|
|Function returning float|1,328,881|95|
|Function returning functions|1,275,532|98|
|Function returning arrow functions|1,291,527|97|
|Function returning empty object|1,310,225|96|
|Function returning empty array|1,319,458|93|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|712,088,036|96|
|using Array.includes (first item)|711,439,829|98|
|Using raw comparison|712,401,167|98|
|Using raw comparison (first item)|712,230,851|96|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,885,282|93|
|Length = 10_000 - Array.at|15,876,819|98|
|Length = 1_000_000 - Array.at|15,854,899|97|
|Length = 100 - Array[length - 1]|709,376,848|93|
|Length = 10_000 - Array[length - 1]|709,246,744|98|
|Length = 1_000_000 - Array[length - 1]|709,114,394|94|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|711,719,312|94|
|Using optional chain (obj.field?.field2) (undefined)|712,193,900|92|
|Using and operator (obj.field && obj.field.field2) (Valid)|712,014,267|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|710,818,037|92|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|785,773|78|
|Using ? operator to avoid rejection|859,007|81|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|9,142,322|95|
|Raw usage underscore usage|7,448,421|89|
|Manipulating private properties using #|2,702,856|90|
|Manipulating private properties using underscore(_)|705,317,988|96|
|Manipulating private properties using Symbol|702,365,613|93|
|Manipulating private properties using PrivateSymbol|26,984,124|96|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|5,282,219|92|
|Using replaceAll()|4,276,598|96|
|Using replaceAll(//g)|3,990,483|97|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|173,819|95|
|Sort using first char|785,798|95|
|Sort using localeCompare|430,471|98|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,804 ops/sec ±0.65% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 409 ops/sec ±0.40% (90 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,857 ops/sec ±0.48% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 887 ops/sec ±16.69% (50 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|712,539,218|98|
|Using backtick (`)|706,638,471|95|
|Using array.join|6,415,234|97|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|136,025,059|93|
|Using this|135,903,547|97|
