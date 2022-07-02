# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v12.22.12`
* __Run:__ Sat Jul 02 2022 02:33:57 GMT+0000 (Coordinated Universal Time)

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|new Array|259|61|
|Array.from|7|23|


## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,832|83|
|Intl.DateTimeFormat().format(new Date())|9,279|87|
|Format using date.get*|3,974,634|94|
|new Date() (Baseline)|8,030,791|95|
|Date.now() (Baseline)|15,641,214|90|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|630,743|92|
|Using brackets {}|637,112|95|
|Using '' + |626,176|93|
|Using date.toString()|687,847|93|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,241,266|90|
|Using undefined assignment|708,672,486|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|299,787|91|
|NodeError|301,095|88|
|NodeError Range|301,673|88|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,259,113|88|
|Function returning explicitly undefined|1,296,650|95|
|Function returning implicitly undefined|1,353,059|93|
|Function returning string|1,348,466|95|
|Function returning integer|1,295,725|90|
|Function returning float|1,347,089|92|
|Function returning functions|1,240,461|92|
|Function returning arrow functions|1,333,480|95|
|Function returning empty object|1,346,861|95|
|Function returning empty array|1,343,689|94|

## Array.includes vs raw comparisson

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|659,734,702|90|
|using Array.includes (first item)|708,791,845|98|
|Using raw comparisson|693,401,504|94|
|Using raw comparisson (first item)|709,100,001|96|


## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,032,989|87|
|Raw usage underscore usage|7,074,109|90|
|Manipulating private properties using #|2,313,672|85|
|Manipulating private properties using underscore(_)|28,463,162|93|
|Manipulating private properties using Symbol|686,042,558|93|
|Manipulating private properties using PrivateSymbol|24,462,976|93|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|163,222|86|
|Sort using first char|695,990|93|
|Sort using localeCompare|405,018|91|



## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|19,079,157|94|
|Using this|107,272,473|91|
