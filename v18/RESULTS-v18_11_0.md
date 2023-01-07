# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.11.0`
* __Run:__ Sat Jan 07 2023 17:12:08 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.028ms 
    new Array(length): 0.008ms (faster)

 1,000 numbers:
           array.push: 0.065ms 
    new Array(length): 0.032ms (faster)

 10,000 numbers:
           array.push: 0.566ms 
    new Array(length): 0.231ms (faster)

 1,000,000 numbers:
           array.push: 31.479ms 
    new Array(length): 18.613ms (faster)

 100,000,000 numbers:
           array.push: 1,964.933ms (faster)
    new Array(length): 4,620.286ms


----


 10 strings:
           array.push: 0.008ms (faster)
    new Array(length): 0.017ms

 100 strings:
           array.push: 0.106ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.053ms 
    new Array(length): 0.029ms (faster)

 10,000 strings:
           array.push: 0.615ms 
    new Array(length): 0.291ms (faster)

 1,000,000 strings:
           array.push: 352.711ms 
    new Array(length): 8.843ms (faster)

 100,000,000 strings:
           array.push: 2,649.966ms (faster)
    new Array(length): 5,420.12ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|371|81|
|Array.from|15|42|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|182,791|54|
|[True conditional] Using constructor name|141,908|97|
|[True conditional] Check if property is valid then instanceof |143,105|94|
|[False conditional] Using instanceof only|709,951,918|95|
|[False conditional] Using constructor name|710,473,762|97|
|[False conditional] Check if property is valid then instanceof |710,330,302|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,773|86|
|Intl.DateTimeFormat().format(new Date())|8,713|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,550|72|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,605|82|
|Reusing Intl.DateTimeFormat()|521,177|93|
|Reusing dfWithOptions.format(Date.now())|304,395|100|
|Reusing dfWithOptions.format(new Date())|268,706|97|
|Date.toLocaleDateString()|511,924|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,566|85|
|Format using date.get*|3,526,437|98|
|new Date() (Baseline)|7,581,161|98|
|Date.now() (Baseline)|15,251,801|94|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|728,878|97|
|Using brackets {}|732,902|97|
|Using '' + |732,271|97|
|Using date.toString()|797,974|98|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,459,274|99|
|Using undefined assignment|709,106,433|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|183,367|59|
|NodeError|142,792|92|
|NodeError Range|144,867|98|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,330,031|97|
|Function returning explicitly undefined|1,324,145|99|
|Function returning implicitly undefined|1,343,895|90|
|Function returning string|1,312,929|97|
|Function returning integer|1,367,074|95|
|Function returning float|1,344,308|95|
|Function returning functions|1,318,471|98|
|Function returning arrow functions|1,317,395|94|
|Function returning empty object|1,340,324|98|
|Function returning empty array|1,327,977|96|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|709,202,700|96|
|using Array.includes (first item)|709,087,354|97|
|Using raw comparison|710,776,002|96|
|Using raw comparison (first item)|710,002,438|96|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|51,015,853|92|
|Using Object.getOwnPropertyNames()|51,444,198|95|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,980,878|96|
|Length = 10_000 - Array.at|15,976,249|95|
|Length = 1_000_000 - Array.at|15,961,483|97|
|Length = 100 - Array[length - 1]|708,415,777|98|
|Length = 10_000 - Array[length - 1]|707,329,327|98|
|Length = 1_000_000 - Array[length - 1]|706,811,745|95|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|48,920,961|93|
|Object.create({})|1,017,859|81|
|Cached Empty.prototype|711,050,201|96|
|Empty.prototype|1,112,420|84|
|Empty class|750,036|84|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|710,490,639|98|
|Using optional chain (obj.field?.field2) (undefined)|710,119,452|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|710,624,510|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|709,860,888|98|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|179,343,833|97|
|Using parseInt(x, 10) - big number (10 len)|13,566,008|96|
|Using + - small number (2 len)|710,157,343|95|
|Using + - big number (10 len)|709,619,005|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|603,645|79|
|Using ? operator to avoid rejection|648,694|85|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|245,519,372|96|
|Raw usage underscore usage|247,756,288|95|
|Manipulating private properties using #|162,240,092|89|
|Manipulating private properties using underscore(_)|139,055,612|91|
|Manipulating private properties using Symbol|145,834,824|88|
|Manipulating private properties using PrivateSymbol|29,868,669|97|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,658,909|99|
|Adding property in the object creation - small object|2,671,668|99|
|Adding property after the function creation - small class|146,615|85|
|Adding property in the function creation - small class|151,223|87|
|Adding property after the class creation - small class|124,069|83|
|Adding property in the class creation - small class|124,119|82|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,305,114|97|
|Using replaceAll()|2,106,163|97|
|Using replaceAll(//g)|2,042,732|94|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|177,675|97|
|Sort using first char|760,839|97|
|Sort using localeCompare|713,157|98|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,322|93|
|{...smallObject} - Total keys: 2|64,318,121|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,360|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,672|97|
|{ ...bigObject, ...anotherBigObject }|832|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,076,837|99|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|16,951,675|95|
|{ ...smallObject, ...anotherSmallObject }|11,045,016|95|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,746 ops/sec ±0.72% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 424 ops/sec ±0.33% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,567 ops/sec ±0.43% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,026 ops/sec ±15.39% (52 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|710,731,338|95|
|Using backtick (`)|710,506,709|99|
|Using array.join|6,654,729|96|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|129,652,094|94|
|Using this|130,251,634|96|
