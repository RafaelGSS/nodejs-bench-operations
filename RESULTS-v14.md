# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.3`
* __Run:__ Sat Jul 02 2022 02:34:03 GMT+0000 (Coordinated Universal Time)

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|new Array|357|80|
|Array.from|12|34|

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|246,020|81|
|[True conditional] Using constructor name|251,860|85|
|[True conditional] Check if property is valid then instanceof |250,913|83|
|[False conditional] Using instanceof only|791,284,812|85|
|[False conditional] Using constructor name|777,377,680|85|
|[False conditional] Check if property is valid then instanceof |806,990,724|83|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,566|76|
|Intl.DateTimeFormat().format(new Date())|4,814|77|
|Format using date.get*|3,086,203|86|
|new Date() (Baseline)|5,645,586|74|
|Date.now() (Baseline)|13,592,190|83|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|604,892|84|
|Using brackets {}|599,237|84|
|Using '' + |601,416|85|
|Using date.toString()|651,483|83|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,115,216|82|
|Using undefined assignment|835,128,520|85|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|251,105|82|
|NodeError|255,583|71|
|NodeError Range|257,848|80|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,214,868|79|
|Function returning explicitly undefined|1,184,697|80|
|Function returning implicitly undefined|1,229,540|84|
|Function returning string|1,203,949|82|
|Function returning integer|1,251,221|83|
|Function returning float|1,265,428|84|
|Function returning functions|1,184,677|78|
|Function returning arrow functions|1,112,936|81|
|Function returning empty object|1,280,887|83|
|Function returning empty array|1,286,069|83|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|829,461,968|84|
|using Array.includes (first item)|758,376,221|83|
|Using raw comparisson|772,678,698|82|
|Using raw comparisson (first item)|786,982,584|84|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|631,594|72|
|Using ? operator to avoid rejection|695,734|74|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|7,078,668|84|
|Raw usage underscore usage|5,683,156|83|
|Manipulating private properties using #|2,167,599|84|
|Manipulating private properties using underscore(_)|681,826,788|84|
|Manipulating private properties using Symbol|680,449,669|88|
|Manipulating private properties using PrivateSymbol|26,765,554|83|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|141,659|80|
|Sort using first char|724,286|82|
|Sort using localeCompare|394,988|83|



## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|15,200,152|82|
|Using this|161,144,173|83|
