# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.3`
* __Run:__ Mon Jun 27 2022 02:12:15 GMT+0000 (Coordinated Universal Time)

## compare-using-instanceof

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|288,541|90|
|[True conditional] Using constructor name|285,757|86|
|[True conditional] Check if property is valid then instanceof |280,605|87|
|[False conditional] Using instanceof only|712,636,185|94|
|[False conditional] Using constructor name|713,741,654|98|
|[False conditional] Check if property is valid then instanceof |714,326,985|96|

## date-string-coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|668,636|98|
|Using brackets {}|682,960|97|
|Using '' + |664,971|98|
|Using date.toString()|719,205|93|

## deleting-properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,412,424|95|
|Using undefined assignment|711,914,224|93|

## error

|name|ops/sec|samples|
|-|-|-|
|Error|281,661|87|
|NodeError|283,583|86|
|NodeError Range|275,732|86|

## function-return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,409,501|96|
|Function returning explicitly undefined|1,408,495|94|
|Function returning implicitly undefined|1,420,867|88|
|Function returning string|1,402,314|96|
|Function returning integer|1,439,644|95|
|Function returning float|1,421,282|97|
|Function returning functions|1,397,233|98|
|Function returning arrow functions|1,412,892|97|
|Function returning empty object|1,418,531|95|
|Function returning empty array|1,432,419|96|

## includes-vs-raw-comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|714,080,982|99|
|using Array.includes (first item)|713,746,109|98|
|Using raw comparisson|715,163,551|99|
|Using raw comparisson (first item)|714,238,742|95|

## possible-undefined-function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|726,780|75|
|Using ? operator to avoid rejection|784,754|83|

## private-property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,623,458|97|
|Raw usage underscore usage|7,130,632|95|
|Manipulating private properties using #|2,547,401|95|
|Manipulating private properties using underscore(_)|704,715,107|96|
|Manipulating private properties using Symbol|703,946,145|97|
|Manipulating private properties using PrivateSymbol|30,926,528|98|

## sort-map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|177,080|96|
|Sort using first char|807,203|94|
|Sort using localeCompare|441,337|96|

## stream-readable

|name|ops/sec|samples|
|-|-|-|

## stream-writable

|name|ops/sec|samples|
|-|-|-|

## super-vs-this

|name|ops/sec|samples|
|-|-|-|
|Using super|17,364,632|98|
|Using this|134,790,858|94|
