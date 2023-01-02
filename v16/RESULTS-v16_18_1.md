# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.18.1`
* __Run:__ Mon Jan 02 2023 17:43:49 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.009ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.123ms 
    new Array(length): 0.011ms (faster)

 1,000 numbers:
           array.push: 0.049ms 
    new Array(length): 0.023ms (faster)

 10,000 numbers:
           array.push: 0.401ms 
    new Array(length): 0.214ms (faster)

 1,000,000 numbers:
           array.push: 30.045ms 
    new Array(length): 18.58ms (faster)

 100,000,000 numbers:
           array.push: 1,562.663ms (faster)
    new Array(length): 4,189.722ms


----


 10 strings:
           array.push: 0.011ms (faster)
    new Array(length): 0.017ms

 100 strings:
           array.push: 0.017ms 
    new Array(length): 0.011ms (faster)

 1,000 strings:
           array.push: 0.051ms 
    new Array(length): 0.024ms (faster)

 10,000 strings:
           array.push: 0.523ms 
    new Array(length): 0.244ms (faster)

 1,000,000 strings:
           array.push: 299.452ms 
    new Array(length): 8.835ms (faster)

 100,000,000 strings:
           array.push: 2,049.284ms (faster)
    new Array(length): 4,534.793ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|425|85|
|Array.from|16|45|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|173,503|55|
|[True conditional] Using constructor name|134,370|95|
|[True conditional] Check if property is valid then instanceof |136,110|92|
|[False conditional] Using instanceof only|593,463,580|93|
|[False conditional] Using constructor name|592,550,438|97|
|[False conditional] Check if property is valid then instanceof |594,168,252|96|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,033|88|
|Intl.DateTimeFormat().format(new Date())|9,175|83|
|Reusing Intl.DateTimeFormat()|412,745|90|
|Format using date.get*|3,922,048|97|
|new Date() (Baseline)|7,982,887|97|
|Date.now() (Baseline)|14,670,464|98|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|696,068|92|
|Using brackets {}|665,957|94|
|Using '' + |715,111|97|
|Using date.toString()|776,082|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,490,487|95|
|Using undefined assignment|591,668,298|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|171,858|52|
|NodeError|132,872|91|
|NodeError Range|132,275|97|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,167,020|95|
|Function returning explicitly undefined|1,205,101|93|
|Function returning implicitly undefined|1,224,882|94|
|Function returning string|1,155,237|93|
|Function returning integer|1,228,110|94|
|Function returning float|1,207,543|95|
|Function returning functions|1,176,087|94|
|Function returning arrow functions|1,209,026|96|
|Function returning empty object|1,217,612|96|
|Function returning empty array|1,229,813|97|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|592,719,996|96|
|using Array.includes (first item)|591,183,367|96|
|Using raw comparison|593,456,777|93|
|Using raw comparison (first item)|592,555,917|95|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|65,572,639|90|
|Using Object.getOwnPropertyNames()|66,999,846|97|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,863,437|97|
|Length = 10_000 - Array.at|18,791,656|98|
|Length = 1_000_000 - Array.at|18,809,659|98|
|Length = 100 - Array[length - 1]|592,253,083|95|
|Length = 10_000 - Array[length - 1]|591,436,443|95|
|Length = 1_000_000 - Array[length - 1]|591,271,488|97|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|49,973,405|91|
|Object.create({})|1,509,382|78|
|Cached Empty.prototype|591,753,173|97|
|Empty.prototype|1,580,217|81|
|Empty class|933,701|86|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|593,209,878|95|
|Using optional chain (obj.field?.field2) (undefined)|593,293,171|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|593,648,915|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|592,705,368|96|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|221,345,267|92|
|Using parseInt(x, 10) - big number (10 len)|15,599,912|97|
|Using + - small number (2 len)|593,325,540|98|
|Using + - big number (10 len)|592,927,092|99|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|800,865|86|
|Using ? operator to avoid rejection|861,949|87|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|9,443,086|96|
|Raw usage underscore usage|7,682,920|99|
|Manipulating private properties using #|2,811,660|94|
|Manipulating private properties using underscore(_)|592,426,273|96|
|Manipulating private properties using Symbol|591,094,637|100|
|Manipulating private properties using PrivateSymbol|34,366,781|95|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,625,822|99|
|Adding property in the object creation - small object|2,636,574|94|
|Adding property after the function creation - small class|171,781|91|
|Adding property in the function creation - small class|172,691|91|
|Adding property after the class creation - small class|144,048|87|
|Adding property in the class creation - small class|145,296|87|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,424,611|97|
|Using replaceAll()|2,271,955|97|
|Using replaceAll(//g)|2,178,634|96|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|190,356|99|
|Sort using first char|869,019|92|
|Sort using localeCompare|459,214|96|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,519|95|
|{...smallObject} - Total keys: 2|68,297,591|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,597|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,667|98|
|{ ...bigObject, ...anotherBigObject }|882|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,905,912|93|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,439,795|98|
|{ ...smallObject, ...anotherSmallObject }|16,368,095|96|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,751 ops/sec ±14.69% (89 runs sampled)
streams.web.Readable reading 1e3 * some data x 376 ops/sec ±0.30% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,034 ops/sec ±0.39% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 927 ops/sec ±15.43% (62 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|592,756,862|98|
|Using backtick (`)|592,239,515|97|
|Using array.join|8,646,437|93|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|111,253,945|92|
|Using this|113,927,977|92|
