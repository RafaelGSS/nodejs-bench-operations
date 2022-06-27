# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v12.22.12`
* __Run:__ Mon Jun 27 2022 02:12:18 GMT+0000 (Coordinated Universal Time)

## compare-using-instanceof

|name|ops/sec|samples|
|-|-|-|

## date-string-coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|634,662|92|
|Using brackets {}|658,858|94|
|Using '' + |654,709|97|
|Using date.toString()|712,706|91|

## deleting-properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,359,334|94|
|Using undefined assignment|595,503,691|97|

## error

|name|ops/sec|samples|
|-|-|-|
|Error|282,499|90|
|NodeError|282,523|87|
|NodeError Range|283,119|86|

## function-return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,246,506|95|
|Function returning explicitly undefined|1,216,692|96|
|Function returning implicitly undefined|1,130,149|91|
|Function returning string|1,240,472|92|
|Function returning integer|1,247,221|95|
|Function returning float|1,250,196|96|
|Function returning functions|1,202,631|94|
|Function returning arrow functions|1,228,195|93|
|Function returning empty object|1,257,414|95|
|Function returning empty array|1,241,921|94|

## includes-vs-raw-comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|595,806,486|97|
|using Array.includes (first item)|596,186,122|94|
|Using raw comparisson|597,025,683|92|
|Using raw comparisson (first item)|597,488,038|97|

## possible-undefined-function

|name|ops/sec|samples|
|-|-|-|

## private-property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,989,302|92|
|Raw usage underscore usage|7,957,539|94|
|Manipulating private properties using #|2,699,756|93|
|Manipulating private properties using underscore(_)|469,574,004|95|
|Manipulating private properties using Symbol|468,515,759|92|
|Manipulating private properties using PrivateSymbol|32,933,811|93|

## sort-map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|171,572|95|
|Sort using first char|773,678|96|
|Sort using localeCompare|420,986|98|

## stream-readable

|name|ops/sec|samples|
|-|-|-|

## stream-writable

|name|ops/sec|samples|
|-|-|-|

## super-vs-this

|name|ops/sec|samples|
|-|-|-|
|Using super|19,251,830|95|
|Using this|108,367,013|96|
