# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.3`
* __Run:__ Sat Jul 02 2022 01:25:07 GMT+0000 (Coordinated Universal Time)

## Comparisson using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|277,298|91|
|[True conditional] Using constructor name|276,790|88|
|[True conditional] Check if property is valid then instanceof |272,844|85|
|[False conditional] Using instanceof only|593,045,497|98|
|[False conditional] Using constructor name|593,039,019|95|
|[False conditional] Check if property is valid then instanceof |593,561,575|97|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,795|81|
|Intl.DateTimeFormat().format(new Date())|8,707|84|
|Format using date.get*|923,576|95|
|new Date() (Baseline)|7,538,257|92|
|Date.now() (Baseline)|14,714,459|96|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|662,869|92|
|Using brackets {}|684,507|94|
|Using '' + |679,783|95|
|Using date.toString()|765,309|90|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,366,367|93|
|Using undefined assignment|590,724,183|96|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|268,174|86|
|NodeError|269,856|86|
|NodeError Range|262,562|82|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,320,291|94|
|Function returning explicitly undefined|1,318,367|92|
|Function returning implicitly undefined|1,354,680|87|
|Function returning string|1,328,400|96|
|Function returning integer|1,362,552|96|
|Function returning float|1,326,166|99|
|Function returning functions|1,304,959|95|
|Function returning arrow functions|1,313,498|95|
|Function returning empty object|1,340,533|96|
|Function returning empty array|1,334,159|99|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|591,491,729|93|
|using Array.includes (first item)|592,394,871|97|
|Using raw comparisson|593,740,255|99|
|Using raw comparisson (first item)|592,971,287|96|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|681,670|79|
|Using ? operator to avoid rejection|720,606|87|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|9,073,714|96|
|Raw usage underscore usage|7,394,991|94|
|Manipulating private properties using #|2,682,121|91|
|Manipulating private properties using underscore(_)|590,571,456|99|
|Manipulating private properties using Symbol|589,342,693|93|
|Manipulating private properties using PrivateSymbol|34,699,579|95|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|176,895|95|
|Sort using first char|862,853|92|
|Sort using localeCompare|440,417|97|



## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|18,697,071|94|
|Using this|114,027,313|98|
