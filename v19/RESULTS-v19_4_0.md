# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v19.4.0`
* __Run:__ Sat Jan 07 2023 17:35:12 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.012ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.052ms 
    new Array(length): 0.014ms (faster)

 1,000 numbers:
           array.push: 0.179ms 
    new Array(length): 0.027ms (faster)

 10,000 numbers:
           array.push: 0.47ms (faster)
    new Array(length): 5.278ms

 1,000,000 numbers:
           array.push: 76.743ms 
    new Array(length): 12.51ms (faster)

 100,000,000 numbers:
           array.push: 2,328.852ms (faster)
    new Array(length): 6,471.489ms


----


 10 strings:
           array.push: 0.009ms (faster)
    new Array(length): 0.019ms

 100 strings:
           array.push: 0.019ms 
    new Array(length): 0.012ms (faster)

 1,000 strings:
           array.push: 0.046ms 
    new Array(length): 0.021ms (faster)

 10,000 strings:
           array.push: 0.422ms 
    new Array(length): 0.277ms (faster)

 1,000,000 strings:
           array.push: 33.662ms 
    new Array(length): 5.474ms (faster)

 100,000,000 strings:
           array.push: 3,118.673ms (faster)
    new Array(length): 6,689.26ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|326|80|
|Array.from|14|38|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|162,688|55|
|[True conditional] Using constructor name|128,942|81|
|[True conditional] Check if property is valid then instanceof |130,434|84|
|[False conditional] Using instanceof only|818,719,796|84|
|[False conditional] Using constructor name|800,656,324|84|
|[False conditional] Check if property is valid then instanceof |845,838,510|87|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,129|85|
|Intl.DateTimeFormat().format(new Date())|6,398|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,481|75|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|6,589|84|
|Reusing Intl.DateTimeFormat()|404,580|73|
|Reusing dfWithOptions.format(Date.now())|273,893|82|
|Reusing dfWithOptions.format(new Date())|239,934|85|
|Date.toLocaleDateString()|488,498|87|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|5,897|79|
|Format using date.get*|3,021,268|78|
|new Date() (Baseline)|7,797,835|89|
|Date.now() (Baseline)|15,514,577|87|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|636,033|82|
|Using brackets {}|664,393|88|
|Using '' + |676,359|87|
|Using date.toString()|740,595|86|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,264,159|87|
|Using undefined assignment|839,093,768|87|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|162,044|57|
|NodeError|127,091|85|
|NodeError Range|124,296|84|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,332,262|88|
|Function returning explicitly undefined|1,223,113|82|
|Function returning implicitly undefined|1,323,849|85|
|Function returning string|1,269,917|86|
|Function returning integer|1,307,528|85|
|Function returning float|1,327,930|86|
|Function returning functions|1,274,207|88|
|Function returning arrow functions|1,283,717|87|
|Function returning empty object|1,311,845|87|
|Function returning empty array|1,259,217|82|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|814,460,029|84|
|using Array.includes (first item)|857,526,871|88|
|Using raw comparison|798,097,377|86|
|Using raw comparison (first item)|808,855,519|89|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|50,258,886|84|
|Using Object.getOwnPropertyNames()|50,541,362|87|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|677,435,343|88|
|Length = 10_000 - Array.at|676,597,534|88|
|Length = 1_000_000 - Array.at|663,858,059|86|
|Length = 100 - Array[length - 1]|801,442,773|88|
|Length = 10_000 - Array[length - 1]|782,890,473|86|
|Length = 1_000_000 - Array[length - 1]|755,195,415|88|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|40,919,213|85|
|Object.create({})|1,259,106|74|
|Cached Empty.prototype|785,241,834|86|
|Empty.prototype|1,141,887|77|
|Empty class|806,699|78|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|809,818,727|85|
|Using optional chain (obj.field?.field2) (undefined)|811,690,008|88|
|Using and operator (obj.field && obj.field.field2) (Valid)|828,214,715|89|
|Using and operator (obj.field && obj.field.field2) (undefined)|818,209,547|88|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|163,019,680|85|
|Using parseInt(x, 10) - big number (10 len)|13,275,545|88|
|Using + - small number (2 len)|806,121,439|86|
|Using + - big number (10 len)|816,806,896|88|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|679,198|69|
|Using ? operator to avoid rejection|736,061|73|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|667,482,706|88|
|Raw usage underscore usage|683,508,827|89|
|Manipulating private properties using #|654,751,822|88|
|Manipulating private properties using underscore(_)|626,050,041|83|
|Manipulating private properties using Symbol|650,463,104|88|
|Manipulating private properties using PrivateSymbol|28,417,252|88|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,296,490|85|
|Adding property in the object creation - small object|2,296,077|86|
|Adding property after the function creation - small class|144,746|77|
|Adding property in the function creation - small class|152,885|81|
|Adding property after the class creation - small class|125,671|75|
|Adding property in the class creation - small class|126,804|74|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,077,917|86|
|Using replaceAll()|1,731,845|84|
|Using replaceAll(//g)|1,725,454|83|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|159,598|80|
|Sort using first char|721,238|86|
|Sort using localeCompare|685,420|82|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,111|85|
|{...smallObject} - Total keys: 2|60,968,528|85|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,194|84|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,211|87|
|{ ...bigObject, ...anotherBigObject }|675|85|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,196,924|84|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,433,456|86|
|{ ...smallObject, ...anotherSmallObject }|14,109,720|87|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,232 ops/sec ±15.69% (75 runs sampled)
streams.web.Readable reading 1e3 * some data x 355 ops/sec ±1.59% (80 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,451 ops/sec ±1.68% (85 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 744 ops/sec ±14.80% (59 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|775,771,141|85|
|Using backtick (`)|787,396,879|89|
|Using array.join|6,238,732|84|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|159,741,219|88|
|Using this|182,927,992|84|
