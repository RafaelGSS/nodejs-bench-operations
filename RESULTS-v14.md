# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.3`
* __Run:__ Sat Jul 02 2022 03:05:32 GMT+0000 (Coordinated Universal Time)

```

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|new Array|360|80|
|Array.from|13|35|

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|257,418|77|
|[True conditional] Using constructor name|249,610|81|
|[True conditional] Check if property is valid then instanceof |253,748|77|
|[False conditional] Using instanceof only|784,356,816|81|
|[False conditional] Using constructor name|797,546,264|84|
|[False conditional] Check if property is valid then instanceof |817,025,334|84|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,427|78|
|Intl.DateTimeFormat().format(new Date())|4,830|70|
|Format using date.get*|3,081,605|81|
|new Date() (Baseline)|6,073,379|83|
|Date.now() (Baseline)|13,079,128|83|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|567,880|79|
|Using brackets {}|560,260|79|
|Using '' + |590,524|82|
|Using date.toString()|610,337|85|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,941,030|81|
|Using undefined assignment|789,877,290|85|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|244,335|79|
|NodeError|240,136|77|
|NodeError Range|237,345|82|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,103,909|84|
|Function returning explicitly undefined|1,218,628|83|
|Function returning implicitly undefined|1,240,628|81|
|Function returning string|1,134,255|86|
|Function returning integer|1,194,409|82|
|Function returning float|1,169,645|81|
|Function returning functions|1,134,728|85|
|Function returning arrow functions|1,164,491|85|
|Function returning empty object|1,179,215|84|
|Function returning empty array|1,189,600|83|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|785,673,699|85|
|using Array.includes (first item)|799,831,473|84|
|Using raw comparisson|788,214,832|81|
|Using raw comparisson (first item)|804,332,571|88|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|609,689|75|
|Using ? operator to avoid rejection|646,441|74|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|6,441,291|84|
|Raw usage underscore usage|5,194,853|82|
|Manipulating private properties using #|2,068,533|83|
|Manipulating private properties using underscore(_)|616,132,520|83|
|Manipulating private properties using Symbol|634,484,342|84|
|Manipulating private properties using PrivateSymbol|26,836,389|82|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|148,179|85|
|Sort using first char|691,320|77|
|Sort using localeCompare|379,392|80|



## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|13,393,573|83|
|Using this|145,044,864|82|
