# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.17.0`
* __Run:__ Sun Oct 02 2022 22:11:18 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.007ms 
    new Array(length): 0.002ms (faster)

 100 numbers:
           array.push: 0.037ms 
    new Array(length): 0.012ms (faster)

 1,000 numbers:
           array.push: 0.063ms 
    new Array(length): 0.034ms (faster)

 10,000 numbers:
           array.push: 0.526ms 
    new Array(length): 0.216ms (faster)

 1,000,000 numbers:
           array.push: 53.955ms 
    new Array(length): 9.875ms (faster)

 100,000,000 numbers:
           array.push: 2,460.736ms (faster)
    new Array(length): 5,865.366ms


----


 10 strings:
           array.push: 0.011ms (faster)
    new Array(length): 0.022ms

 100 strings:
           array.push: 0.153ms 
    new Array(length): 0.012ms (faster)

 1,000 strings:
           array.push: 0.109ms 
    new Array(length): 0.026ms (faster)

 10,000 strings:
           array.push: 0.926ms 
    new Array(length): 0.29ms (faster)

 1,000,000 strings:
           array.push: 455.039ms 
    new Array(length): 9.932ms (faster)

 100,000,000 strings:
           array.push: 3,036.853ms (faster)
    new Array(length): 6,203.98ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|304|79|
|Array.from|13|35|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|138,375|60|
|[True conditional] Using constructor name|110,819|83|
|[True conditional] Check if property is valid then instanceof |110,194|85|
|[False conditional] Using instanceof only|771,758,020|83|
|[False conditional] Using constructor name|769,896,081|86|
|[False conditional] Check if property is valid then instanceof |767,870,234|81|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,104|78|
|Intl.DateTimeFormat().format(new Date())|5,453|71|
|Reusing Intl.DateTimeFormat()|447,016|84|
|Format using date.get*|2,957,489|83|
|new Date() (Baseline)|6,232,327|85|
|Date.now() (Baseline)|13,140,477|80|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|538,304|87|
|Using brackets {}|551,900|86|
|Using '' + |554,228|87|
|Using date.toString()|583,598|84|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,074,974|84|
|Using undefined assignment|757,089,543|84|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|131,732|62|
|NodeError|112,234|86|
|NodeError Range|109,060|85|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,149,615|86|
|Function returning explicitly undefined|1,105,288|82|
|Function returning implicitly undefined|1,140,248|81|
|Function returning string|1,099,703|84|
|Function returning integer|1,101,050|86|
|Function returning float|1,097,098|86|
|Function returning functions|1,099,666|87|
|Function returning arrow functions|1,086,559|82|
|Function returning empty object|1,111,562|86|
|Function returning empty array|1,133,858|84|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|772,312,738|83|
|using Array.includes (first item)|772,914,057|85|
|Using raw comparison|767,336,567|88|
|Using raw comparison (first item)|737,709,446|88|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|44,079,543|87|
|Using Object.getOwnPropertyNames()|41,564,361|82|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,412,314|82|
|Length = 10_000 - Array.at|15,482,561|85|
|Length = 1_000_000 - Array.at|15,637,616|84|
|Length = 100 - Array[length - 1]|790,650,966|84|
|Length = 10_000 - Array[length - 1]|779,842,855|85|
|Length = 1_000_000 - Array[length - 1]|765,456,960|85|

## Object shallow clone

|name|ops/sec|samples|
|-|-|-|
|Object.assign (small obj)|14,074,519|85|
|Spread operator (small obj)|57,191,154|85|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|38,070,112|85|
|Object.create({})|1,125,667|81|
|Cached Empty.prototype|778,335,442|85|
|Empty.prototype|1,091,465|72|
|Empty class|774,661|66|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|784,905,264|84|
|Using optional chain (obj.field?.field2) (undefined)|777,935,218|81|
|Using and operator (obj.field && obj.field.field2) (Valid)|777,685,820|82|
|Using and operator (obj.field && obj.field.field2) (undefined)|770,078,166|86|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|637,824|73|
|Using ? operator to avoid rejection|698,999|74|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|6,805,399|82|
|Raw usage underscore usage|5,730,474|81|
|Manipulating private properties using #|2,108,792|87|
|Manipulating private properties using underscore(_)|617,976,758|86|
|Manipulating private properties using Symbol|624,590,963|86|
|Manipulating private properties using PrivateSymbol|24,790,386|80|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,026,554|85|
|Using replaceAll()|1,633,252|82|
|Using replaceAll(//g)|1,661,806|83|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|141,299|84|
|Sort using first char|682,651|85|
|Sort using localeCompare|346,143|82|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,299 ops/sec ±17.95% (76 runs sampled)
streams.web.Readable reading 1e3 * some data x 346 ops/sec ±1.38% (76 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 2,290 ops/sec ±1.33% (83 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 830 ops/sec ±16.28% (49 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|782,305,580|85|
|Using backtick (`)|783,929,147|87|
|Using array.join|5,723,031|84|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|148,456,470|82|
|Using this|156,975,258|83|
