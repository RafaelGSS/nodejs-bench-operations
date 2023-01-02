# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.18.0`
* __Run:__ Mon Jan 02 2023 17:43:52 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.101ms 
    new Array(length): 0.008ms (faster)

 1,000 numbers:
           array.push: 0.055ms 
    new Array(length): 0.026ms (faster)

 10,000 numbers:
           array.push: 0.465ms 
    new Array(length): 0.235ms (faster)

 1,000,000 numbers:
           array.push: 39.567ms 
    new Array(length): 9.749ms (faster)

 100,000,000 numbers:
           array.push: 2,044.116ms (faster)
    new Array(length): 4,953.415ms


----


 10 strings:
           array.push: 0.017ms (faster)
    new Array(length): 0.018ms

 100 strings:
           array.push: 0.018ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.055ms 
    new Array(length): 0.027ms (faster)

 10,000 strings:
           array.push: 0.671ms 
    new Array(length): 0.302ms (faster)

 1,000,000 strings:
           array.push: 370.501ms 
    new Array(length): 9.376ms (faster)

 100,000,000 strings:
           array.push: 2,771.152ms (faster)
    new Array(length): 5,492.107ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|360|83|
|Array.from|15|40|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|195,704|59|
|[True conditional] Using constructor name|155,474|92|
|[True conditional] Check if property is valid then instanceof |158,014|90|
|[False conditional] Using instanceof only|712,704,629|96|
|[False conditional] Using constructor name|713,094,066|96|
|[False conditional] Check if property is valid then instanceof |713,292,113|98|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,303|81|
|Intl.DateTimeFormat().format(new Date())|8,022|80|
|Reusing Intl.DateTimeFormat()|435,455|82|
|Format using date.get*|3,575,613|98|
|new Date() (Baseline)|7,191,788|98|
|Date.now() (Baseline)|14,286,147|94|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|689,034|98|
|Using brackets {}|698,550|98|
|Using '' + |688,165|97|
|Using date.toString()|745,656|97|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,464,248|93|
|Using undefined assignment|711,288,680|94|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|192,923|54|
|NodeError|153,175|95|
|NodeError Range|153,359|95|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,289,232|94|
|Function returning explicitly undefined|1,287,277|95|
|Function returning implicitly undefined|1,320,697|95|
|Function returning string|1,303,055|95|
|Function returning integer|1,317,528|93|
|Function returning float|1,302,530|99|
|Function returning functions|1,258,677|94|
|Function returning arrow functions|1,267,683|96|
|Function returning empty object|1,307,061|99|
|Function returning empty array|1,318,394|94|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|712,012,584|95|
|using Array.includes (first item)|711,995,217|97|
|Using raw comparison|714,356,197|96|
|Using raw comparison (first item)|713,503,927|95|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|57,256,903|91|
|Using Object.getOwnPropertyNames()|54,829,764|95|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,038,388|93|
|Length = 10_000 - Array.at|15,988,904|91|
|Length = 1_000_000 - Array.at|16,082,134|94|
|Length = 100 - Array[length - 1]|711,002,720|94|
|Length = 10_000 - Array[length - 1]|710,400,629|97|
|Length = 1_000_000 - Array[length - 1]|710,527,011|95|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|41,975,823|91|
|Object.create({})|1,346,379|79|
|Cached Empty.prototype|712,397,455|94|
|Empty.prototype|1,321,057|74|
|Empty class|908,624|83|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|712,645,975|97|
|Using optional chain (obj.field?.field2) (undefined)|712,091,624|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|711,610,977|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|711,072,305|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|179,197,717|93|
|Using parseInt(x, 10) - big number (10 len)|12,638,387|98|
|Using + - small number (2 len)|712,503,655|98|
|Using + - big number (10 len)|713,437,111|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|790,454|74|
|Using ? operator to avoid rejection|859,698|80|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,545,720|98|
|Raw usage underscore usage|7,006,721|99|
|Manipulating private properties using #|2,559,213|94|
|Manipulating private properties using underscore(_)|704,359,512|95|
|Manipulating private properties using Symbol|702,217,541|96|
|Manipulating private properties using PrivateSymbol|27,084,160|94|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,577,245|98|
|Adding property in the object creation - small object|2,623,925|97|
|Adding property after the function creation - small class|176,247|85|
|Adding property in the function creation - small class|178,922|87|
|Adding property after the class creation - small class|144,500|77|
|Adding property in the class creation - small class|145,573|83|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,134,185|91|
|Using replaceAll()|2,024,119|88|
|Using replaceAll(//g)|1,920,635|97|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|183,601|99|
|Sort using first char|781,818|94|
|Sort using localeCompare|425,186|97|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,295|94|
|{...smallObject} - Total keys: 2|58,935,982|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,336|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,593|98|
|{ ...bigObject, ...anotherBigObject }|801|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,136,041|92|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|20,765,642|91|
|{ ...smallObject, ...anotherSmallObject }|13,665,704|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,672 ops/sec ±0.69% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 397 ops/sec ±0.14% (87 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,818 ops/sec ±0.48% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 756 ops/sec ±16.61% (62 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|712,876,548|98|
|Using backtick (`)|712,663,926|97|
|Using array.join|6,554,406|93|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|133,235,290|92|
|Using this|134,453,451|93|
