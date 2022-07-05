# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v12.22.12`
* __Run:__ Tue Jul 05 2022 18:38:24 GMT+0000 (Coordinated Universal Time)

## Array.append

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|444|88|
|Array.from|8|24|


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,687|85|
|Intl.DateTimeFormat().format(new Date())|9,958|85|
|Reusing Intl.DateTimeFormat()|487,078|99|
|Format using date.get*|3,924,652|87|
|new Date() (Baseline)|8,722,053|98|
|Date.now() (Baseline)|17,628,244|98|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|622,329|92|
|Using brackets {}|645,995|95|
|Using '' + |642,626|95|
|Using date.toString()|699,548|92|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,374,904|94|
|Using undefined assignment|595,197,003|94|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|283,958|91|
|NodeError|282,990|87|
|NodeError Range|284,454|88|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,236,615|92|
|Function returning explicitly undefined|1,226,720|93|
|Function returning implicitly undefined|1,238,294|91|
|Function returning string|1,253,991|95|
|Function returning integer|1,256,552|94|
|Function returning float|1,252,652|94|
|Function returning functions|1,221,413|93|
|Function returning arrow functions|1,221,931|94|
|Function returning empty object|1,140,647|92|
|Function returning empty array|1,248,928|91|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|595,853,525|93|
|using Array.includes (first item)|596,240,681|97|
|Using raw comparisson|596,664,176|92|
|Using raw comparisson (first item)|596,491,731|96|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|593,658,657|95|
|Length = 10_000 - Array[length - 1]|594,024,003|96|
|Length = 1_000_000 - Array[length - 1]|593,550,015|96|


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,980,247|95|
|Raw usage underscore usage|7,969,127|94|
|Manipulating private properties using #|2,697,268|98|
|Manipulating private properties using underscore(_)|470,025,767|93|
|Manipulating private properties using Symbol|468,994,829|98|
|Manipulating private properties using PrivateSymbol|33,117,102|93|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|173,555|97|
|Sort using first char|796,748|89|
|Sort using localeCompare|426,930|98|



## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|20,491,728|88|
|Using this|109,249,527|97|
