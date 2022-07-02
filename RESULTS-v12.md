# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v12.22.12`
* __Run:__ Sat Jul 02 2022 03:05:28 GMT+0000 (Coordinated Universal Time)

```

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|new Array|365|83|
|Array.from|7|23|


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,513|81|
|Intl.DateTimeFormat().format(new Date())|9,479|80|
|Format using date.get*|4,076,998|94|
|new Date() (Baseline)|8,210,194|98|
|Date.now() (Baseline)|15,894,866|93|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|634,337|93|
|Using brackets {}|648,131|95|
|Using '' + |642,869|96|
|Using date.toString()|692,680|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,385,190|97|
|Using undefined assignment|706,882,392|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|298,262|91|
|NodeError|298,301|87|
|NodeError Range|298,554|88|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,366,434|93|
|Function returning explicitly undefined|1,347,107|91|
|Function returning implicitly undefined|1,366,863|91|
|Function returning string|1,371,928|95|
|Function returning integer|1,385,693|96|
|Function returning float|1,366,665|95|
|Function returning functions|1,323,831|94|
|Function returning arrow functions|1,350,271|95|
|Function returning empty object|1,368,931|93|
|Function returning empty array|1,381,522|94|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|707,778,253|97|
|using Array.includes (first item)|708,124,433|99|
|Using raw comparisson|708,950,884|95|
|Using raw comparisson (first item)|708,377,319|97|


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,266,128|92|
|Raw usage underscore usage|7,353,819|93|
|Manipulating private properties using #|2,548,080|95|
|Manipulating private properties using underscore(_)|700,148,310|94|
|Manipulating private properties using Symbol|698,480,996|94|
|Manipulating private properties using PrivateSymbol|26,187,305|96|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|166,823|96|
|Sort using first char|708,013|97|
|Sort using localeCompare|405,588|94|



## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|19,288,730|94|
|Using this|118,533,835|92|
