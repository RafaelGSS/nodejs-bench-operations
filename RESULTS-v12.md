# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v12.22.12`
* __Run:__ Sat Jul 02 2022 16:04:04 GMT+0000 (Coordinated Universal Time)

## Array.append

```

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|new Array|369|81|
|Array.from|8|23|


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,571|82|
|Intl.DateTimeFormat().format(new Date())|8,188|80|
|Format using date.get*|4,006,328|93|
|new Date() (Baseline)|8,318,535|97|
|Date.now() (Baseline)|15,918,573|90|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|638,357|94|
|Using brackets {}|645,912|98|
|Using '' + |647,594|98|
|Using date.toString()|691,529|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,426,248|95|
|Using undefined assignment|708,505,768|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|300,693|91|
|NodeError|301,416|88|
|NodeError Range|302,711|88|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,365,824|97|
|Function returning explicitly undefined|1,352,566|95|
|Function returning implicitly undefined|1,380,888|95|
|Function returning string|1,370,405|97|
|Function returning integer|1,381,417|96|
|Function returning float|1,339,145|97|
|Function returning functions|1,333,368|92|
|Function returning arrow functions|1,352,373|97|
|Function returning empty object|1,317,922|95|
|Function returning empty array|1,379,790|96|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|710,736,472|98|
|using Array.includes (first item)|710,705,074|96|
|Using raw comparisson|712,750,113|97|
|Using raw comparisson (first item)|711,690,229|98|


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,391,969|94|
|Raw usage underscore usage|7,381,719|96|
|Manipulating private properties using #|2,553,912|95|
|Manipulating private properties using underscore(_)|696,463,117|96|
|Manipulating private properties using Symbol|38,236,704|69|
|Manipulating private properties using PrivateSymbol|26,489,589|97|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|168,198|97|
|Sort using first char|730,746|96|
|Sort using localeCompare|408,493|94|



## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|19,493,220|96|
|Using this|127,519,549|94|
