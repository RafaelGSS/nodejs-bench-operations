# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.18.1`
* __Run:__ Sun Jan 08 2023 17:45:50 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.01ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.132ms 
    new Array(length): 0.01ms (faster)

 1,000 numbers:
           array.push: 0.05ms 
    new Array(length): 0.024ms (faster)

 10,000 numbers:
           array.push: 0.397ms 
    new Array(length): 0.219ms (faster)

 1,000,000 numbers:
           array.push: 38.024ms 
    new Array(length): 7.845ms (faster)

 100,000,000 numbers:
           array.push: 1,531.998ms (faster)
    new Array(length): 4,315.43ms


----


 10 strings:
           array.push: 0.01ms (faster)
    new Array(length): 0.016ms

 100 strings:
           array.push: 0.017ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.051ms 
    new Array(length): 0.023ms (faster)

 10,000 strings:
           array.push: 0.576ms 
    new Array(length): 0.247ms (faster)

 1,000,000 strings:
           array.push: 310.695ms 
    new Array(length): 9.062ms (faster)

 100,000,000 strings:
           array.push: 2,103.632ms (faster)
    new Array(length): 4,789.203ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|399|80|
|Array.from|16|44|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|173,235|55|
|[True conditional] Using constructor name|134,788|97|
|[True conditional] Check if property is valid then instanceof |135,744|92|
|[False conditional] Using instanceof only|593,529,814|95|
|[False conditional] Using constructor name|592,184,289|91|
|[False conditional] Check if property is valid then instanceof |594,035,173|99|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,323|82|
|Intl.DateTimeFormat().format(new Date())|10,071|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,669|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,362|82|
|Reusing Intl.DateTimeFormat()|385,908|94|
|Reusing dfWithOptions.format(Date.now())|279,542|97|
|Reusing dfWithOptions.format(new Date())|243,366|93|
|Date.toLocaleDateString()|458,685|99|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,583|81|
|Format using date.get*|3,680,397|97|
|new Date() (Baseline)|7,528,846|92|
|Date.now() (Baseline)|14,489,944|98|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|673,032|94|
|Using brackets {}|649,648|96|
|Using '' + |706,956|90|
|Using date.toString()|771,547|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,485,660|97|
|Using undefined assignment|592,000,521|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|172,693|52|
|NodeError|132,499|95|
|NodeError Range|133,579|92|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,212,059|96|
|Function returning explicitly undefined|1,205,003|96|
|Function returning implicitly undefined|1,221,770|98|
|Function returning string|1,202,237|94|
|Function returning integer|1,204,383|97|
|Function returning float|1,212,614|99|
|Function returning functions|1,190,549|96|
|Function returning arrow functions|1,168,697|99|
|Function returning empty object|1,212,210|99|
|Function returning empty array|1,202,123|97|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|592,665,625|95|
|using Array.includes (first item)|592,408,866|97|
|Using raw comparison|593,729,890|97|
|Using raw comparison (first item)|592,423,698|97|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|64,626,887|96|
|Using Object.getOwnPropertyNames()|65,959,077|98|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,893,875|97|
|Length = 10_000 - Array.at|18,791,780|97|
|Length = 1_000_000 - Array.at|18,829,230|97|
|Length = 100 - Array[length - 1]|591,221,876|96|
|Length = 10_000 - Array[length - 1]|591,356,603|97|
|Length = 1_000_000 - Array[length - 1]|591,899,224|96|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|48,899,635|90|
|Object.create({})|1,462,680|83|
|Cached Empty.prototype|594,120,919|97|
|Empty.prototype|1,519,954|79|
|Empty class|938,555|86|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|595,077,280|95|
|Using optional chain (obj.field?.field2) (undefined)|594,798,492|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|593,964,401|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|592,112,056|97|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|219,739,646|90|
|Using parseInt(x, 10) - big number (10 len)|15,219,454|98|
|Using + - small number (2 len)|592,922,985|98|
|Using + - big number (10 len)|592,435,005|94|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|802,623|78|
|Using ? operator to avoid rejection|871,323|84|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|9,371,857|99|
|Raw usage underscore usage|7,645,612|96|
|Manipulating private properties using #|2,792,555|97|
|Manipulating private properties using underscore(_)|591,037,719|97|
|Manipulating private properties using Symbol|589,758,063|93|
|Manipulating private properties using PrivateSymbol|33,978,535|96|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,669,068|99|
|Adding property in the object creation - small object|2,670,184|99|
|Adding property after the function creation - small class|167,388|88|
|Adding property in the function creation - small class|169,749|87|
|Adding property after the class creation - small class|144,040|87|
|Adding property in the class creation - small class|144,128|84|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,447,304|97|
|Using replaceAll()|2,247,232|96|
|Using replaceAll(//g)|2,191,999|95|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|188,084|98|
|Sort using first char|851,216|98|
|Sort using localeCompare|445,997|97|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,406|93|
|{...smallObject} - Total keys: 2|67,555,944|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,587|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,666|97|
|{ ...bigObject, ...anotherBigObject }|851|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,835,171|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,329,447|95|
|{ ...smallObject, ...anotherSmallObject }|16,179,320|98|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,687 ops/sec ±14.77% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 365 ops/sec ±0.37% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,967 ops/sec ±0.50% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 987 ops/sec ±24.72% (48 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|592,235,855|99|
|Using backtick (`)|592,953,500|95|
|Using array.join|8,730,522|96|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|110,804,759|92|
|Using this|112,933,771|89|
