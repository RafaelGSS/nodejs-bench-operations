# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.20.0`
* __Run:__ Tue Sep 06 2022 20:16:23 GMT+0000 (Coordinated Universal Time)

## Array.append

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|298|78|
|Array.from|12|33|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|245,834|93|
|[True conditional] Using constructor name|252,842|90|
|[True conditional] Check if property is valid then instanceof |251,471|89|
|[False conditional] Using instanceof only|620,397,157|91|
|[False conditional] Using constructor name|614,940,414|91|
|[False conditional] Check if property is valid then instanceof |619,008,672|89|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,877|84|
|Intl.DateTimeFormat().format(new Date())|6,727|79|
|Reusing Intl.DateTimeFormat()|358,311|88|
|Format using date.get*|3,138,625|89|
|new Date() (Baseline)|5,996,260|92|
|Date.now() (Baseline)|12,358,065|88|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|588,025|87|
|Using brackets {}|639,004|92|
|Using '' + |645,510|93|
|Using date.toString()|670,061|92|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,119,971|90|
|Using undefined assignment|616,746,944|92|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|240,760|85|
|NodeError|245,563|87|
|NodeError Range|242,321|83|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,173,812|91|
|Function returning explicitly undefined|1,169,551|91|
|Function returning implicitly undefined|1,097,659|91|
|Function returning string|1,100,453|86|
|Function returning integer|1,209,676|92|
|Function returning float|1,198,292|94|
|Function returning functions|1,165,447|89|
|Function returning arrow functions|1,185,398|89|
|Function returning empty object|1,212,848|90|
|Function returning empty array|1,199,866|92|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|595,576,321|88|
|using Array.includes (first item)|577,549,867|82|
|Using raw comparison|564,043,393|91|
|Using raw comparison (first item)|605,965,233|90|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|581,163,791|87|
|Length = 10_000 - Array[length - 1]|590,731,336|93|
|Length = 1_000_000 - Array[length - 1]|592,244,319|91|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|597,542,494|93|
|Using optional chain (obj.field?.field2) (undefined)|598,488,520|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|604,578,328|91|
|Using and operator (obj.field && obj.field.field2) (undefined)|605,498,590|90|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|627,060|73|
|Using ? operator to avoid rejection|668,281|78|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|7,153,781|89|
|Raw usage underscore usage|5,970,103|91|
|Manipulating private properties using #|2,131,731|90|
|Manipulating private properties using underscore(_)|586,301,215|90|
|Manipulating private properties using Symbol|600,672,596|92|
|Manipulating private properties using PrivateSymbol|25,643,144|90|

## replace vs replaceAll comparison

This feature is not supported in this Node.js version

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|154,068|88|
|Sort using first char|684,969|88|
|Sort using localeCompare|390,913|90|



## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|595,644,749|87|
|Using backtick (`)|575,260,756|88|
|Using array.join|5,685,944|88|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|14,681,306|91|
|Using this|113,876,070|93|
