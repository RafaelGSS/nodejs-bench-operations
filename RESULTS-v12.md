# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v12.22.12`
* __Run:__ Sat Jul 02 2022 01:25:12 GMT+0000 (Coordinated Universal Time)


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,584|81|
|Intl.DateTimeFormat().format(new Date())|8,763|82|
|Format using date.get*|3,488,346|98|
|new Date() (Baseline)|8,187,444|98|
|Date.now() (Baseline)|16,076,384|93|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|637,151|95|
|Using brackets {}|644,134|96|
|Using '' + |644,438|94|
|Using date.toString()|690,710|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,437,775|98|
|Using undefined assignment|710,045,713|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|304,287|94|
|NodeError|302,759|94|
|NodeError Range|301,657|88|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,383,148|92|
|Function returning explicitly undefined|1,359,168|95|
|Function returning implicitly undefined|1,381,061|89|
|Function returning string|1,388,200|96|
|Function returning integer|1,398,296|95|
|Function returning float|1,387,195|94|
|Function returning functions|1,337,629|92|
|Function returning arrow functions|1,365,882|97|
|Function returning empty object|1,340,645|95|
|Function returning empty array|1,379,488|97|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|709,455,139|97|
|using Array.includes (first item)|709,162,690|94|
|Using raw comparisson|711,061,020|93|
|Using raw comparisson (first item)|711,903,932|94|


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,380,597|97|
|Raw usage underscore usage|7,376,277|95|
|Manipulating private properties using #|2,553,711|96|
|Manipulating private properties using underscore(_)|702,276,368|95|
|Manipulating private properties using Symbol|699,204,049|98|
|Manipulating private properties using PrivateSymbol|26,428,237|95|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|171,006|96|
|Sort using first char|751,360|95|
|Sort using localeCompare|408,094|96|



## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|19,716,528|96|
|Using this|131,670,262|93|
