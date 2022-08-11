# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.7.0`
* __Run:__ Thu Aug 11 2022 12:58:41 GMT+0000 (Coordinated Universal Time)

## Array.append

```
 10 numbers:
           array.push: 0.011ms 
    new Array(length): 0.003ms (faster)

 100 numbers:
           array.push: 0.141ms 
    new Array(length): 0.011ms (faster)

 1,000 numbers:
           array.push: 0.045ms 
    new Array(length): 0.025ms (faster)

 10,000 numbers:
           array.push: 0.377ms 
    new Array(length): 0.199ms (faster)

 1,000,000 numbers:
           array.push: 32.397ms 
    new Array(length): 17.543ms (faster)

 100,000,000 numbers:
           array.push: 1,598.063ms (faster)
    new Array(length): 4,308.313ms


----


 10 strings:
           array.push: 0.011ms (faster)
    new Array(length): 0.015ms

 100 strings:
           array.push: 0.111ms 
    new Array(length): 0.01ms (faster)

 1,000 strings:
           array.push: 0.049ms 
    new Array(length): 0.023ms (faster)

 10,000 strings:
           array.push: 0.636ms 
    new Array(length): 0.268ms (faster)

 1,000,000 strings:
           array.push: 309.17ms 
    new Array(length): 8.784ms (faster)

 100,000,000 strings:
           array.push: 2,169.791ms (faster)
    new Array(length): 4,772.611ms

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|363|82|
|Array.from|16|44|

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|165,600|54|
|[True conditional] Using constructor name|127,379|92|
|[True conditional] Check if property is valid then instanceof |128,611|93|
|[False conditional] Using instanceof only|593,897,893|96|
|[False conditional] Using constructor name|593,723,554|95|
|[False conditional] Check if property is valid then instanceof |595,268,471|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,229|88|
|Intl.DateTimeFormat().format(new Date())|8,972|79|
|Reusing Intl.DateTimeFormat()|384,171|81|
|Format using date.get*|3,677,788|96|
|new Date() (Baseline)|7,566,299|95|
|Date.now() (Baseline)|15,649,680|95|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|618,041|98|
|Using brackets {}|628,071|98|
|Using '' + |632,210|95|
|Using date.toString()|735,073|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,377,289|95|
|Using undefined assignment|593,572,806|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|163,234|55|
|NodeError|126,804|93|
|NodeError Range|126,807|93|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,337,736|98|
|Function returning explicitly undefined|1,255,478|96|
|Function returning implicitly undefined|1,300,892|95|
|Function returning string|1,341,851|97|
|Function returning integer|1,373,074|94|
|Function returning float|1,355,610|97|
|Function returning functions|1,304,799|93|
|Function returning arrow functions|1,330,385|95|
|Function returning empty object|1,359,195|97|
|Function returning empty array|1,353,131|96|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|593,470,084|96|
|using Array.includes (first item)|593,398,464|98|
|Using raw comparisson|594,572,351|95|
|Using raw comparisson (first item)|594,063,236|98|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,333,771|98|
|Length = 10_000 - Array.at|19,263,753|95|
|Length = 1_000_000 - Array.at|19,290,733|98|
|Length = 100 - Array[length - 1]|592,427,990|97|
|Length = 10_000 - Array[length - 1]|592,209,459|98|
|Length = 1_000_000 - Array[length - 1]|591,685,468|98|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|595,010,265|99|
|Using optional chain (obj.field?.field2) (undefined)|594,623,633|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|593,929,195|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|593,143,356|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|544,591|81|
|Using ? operator to avoid rejection|573,851|87|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|227,699,087|91|
|Raw usage underscore usage|207,883,693|93|
|Manipulating private properties using #|149,259,488|91|
|Manipulating private properties using underscore(_)|139,116,525|95|
|Manipulating private properties using Symbol|139,980,279|94|
|Manipulating private properties using PrivateSymbol|35,620,222|92|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|186,070|97|
|Sort using first char|783,947|94|
|Sort using localeCompare|749,200|94|

## Stream.Readable

```
streams.Readable reading 1e3 * some data x 1,732 ops/sec ±1.03% (85 runs sampled)
streams.web.Readable reading 1e3 * some data x 368 ops/sec ±0.50% (90 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```

## Stream.Writable

```
streams.Writable writing 1e3 * some data x 3,058 ops/sec ±0.36% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 859 ops/sec ±13.11% (63 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|113,284,795|97|
|Using this|111,052,908|97|
