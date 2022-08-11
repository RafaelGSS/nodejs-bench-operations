# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v12.22.12`
* __Run:__ Thu Aug 11 2022 12:58:40 GMT+0000 (Coordinated Universal Time)

## Array.append

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|306|77|
|Array.from|8|24|


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,275|84|
|Intl.DateTimeFormat().format(new Date())|9,490|74|
|Reusing Intl.DateTimeFormat()|490,248|96|
|Format using date.get*|3,913,554|93|
|new Date() (Baseline)|8,127,397|95|
|Date.now() (Baseline)|17,392,183|97|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|600,158|96|
|Using brackets {}|617,398|94|
|Using '' + |613,474|96|
|Using date.toString()|663,499|97|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,324,143|93|
|Using undefined assignment|594,226,873|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|279,963|91|
|NodeError|280,716|90|
|NodeError Range|280,618|90|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,222,986|90|
|Function returning explicitly undefined|1,205,355|94|
|Function returning implicitly undefined|1,252,354|93|
|Function returning string|1,241,754|94|
|Function returning integer|1,263,520|94|
|Function returning float|1,249,064|93|
|Function returning functions|1,198,300|95|
|Function returning arrow functions|1,132,019|95|
|Function returning empty object|1,201,785|95|
|Function returning empty array|1,257,525|96|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|594,025,421|97|
|using Array.includes (first item)|594,296,783|98|
|Using raw comparisson|596,045,861|94|
|Using raw comparisson (first item)|595,255,469|95|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|591,408,697|96|
|Length = 10_000 - Array[length - 1]|590,960,450|95|
|Length = 1_000_000 - Array[length - 1]|591,315,483|93|



## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,865,165|94|
|Raw usage underscore usage|7,924,047|97|
|Manipulating private properties using #|2,673,588|93|
|Manipulating private properties using underscore(_)|468,855,999|95|
|Manipulating private properties using Symbol|467,896,582|97|
|Manipulating private properties using PrivateSymbol|32,328,044|94|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|169,008|95|
|Sort using first char|716,272|99|
|Sort using localeCompare|406,050|96|



## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|19,852,663|93|
|Using this|103,455,806|93|
