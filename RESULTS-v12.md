# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v12.22.12`
* __Run:__ Sat Jul 02 2022 16:43:11 GMT+0000 (Coordinated Universal Time)

## Array.append

```

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|new Array|313|72|
|Array.from|7|23|


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,768|80|
|Intl.DateTimeFormat().format(new Date())|8,443|79|
|Reusing Intl.DateTimeFormat()|503,721|97|
|Format using date.get*|4,095,282|96|
|new Date() (Baseline)|7,938,641|90|
|Date.now() (Baseline)|16,267,685|93|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|642,542|94|
|Using brackets {}|646,077|95|
|Using '' + |741,501|91|
|Using date.toString()|810,437|96|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,427,598|84|
|Using undefined assignment|803,589,771|95|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|296,578|83|
|NodeError|292,880|87|
|NodeError Range|293,000|91|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,370,306|95|
|Function returning explicitly undefined|1,381,898|90|
|Function returning implicitly undefined|1,405,538|86|
|Function returning string|1,376,395|93|
|Function returning integer|1,371,325|96|
|Function returning float|1,370,233|94|
|Function returning functions|1,298,672|93|
|Function returning arrow functions|1,334,677|97|
|Function returning empty object|1,348,411|97|
|Function returning empty array|1,365,507|97|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|709,024,619|96|
|using Array.includes (first item)|709,622,837|96|
|Using raw comparisson|710,841,868|99|
|Using raw comparisson (first item)|710,244,963|96|


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,401,296|85|
|Raw usage underscore usage|7,701,018|88|
|Manipulating private properties using #|2,493,083|80|
|Manipulating private properties using underscore(_)|687,895,354|92|
|Manipulating private properties using Symbol|695,860,012|89|
|Manipulating private properties using PrivateSymbol|24,873,104|84|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|168,698|89|
|Sort using first char|737,792|92|
|Sort using localeCompare|419,981|90|



## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|21,890,493|96|
|Using this|111,423,242|83|
