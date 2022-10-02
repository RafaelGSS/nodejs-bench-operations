# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.20.0`
* __Run:__ Sun Oct 02 2022 22:11:16 GMT+0000 (Coordinated Universal Time)

## Array.append

```

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|415|80|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|281,417|89|
|[True conditional] Using constructor name|278,777|87|
|[True conditional] Check if property is valid then instanceof |274,051|82|
|[False conditional] Using instanceof only|594,033,799|96|
|[False conditional] Using constructor name|595,331,551|95|
|[False conditional] Check if property is valid then instanceof |595,637,871|94|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,820|84|
|Intl.DateTimeFormat().format(new Date())|9,397|87|
|Reusing Intl.DateTimeFormat()|372,800|94|
|Format using date.get*|3,552,119|94|
|new Date() (Baseline)|7,507,553|94|
|Date.now() (Baseline)|14,740,569|94|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|694,061|94|
|Using brackets {}|688,132|94|
|Using '' + |710,866|98|
|Using date.toString()|761,764|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,345,966|93|
|Using undefined assignment|592,875,597|98|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|270,028|91|
|NodeError|271,691|84|
|NodeError Range|269,885|86|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,245,507|93|
|Function returning explicitly undefined|1,219,739|90|
|Function returning implicitly undefined|1,132,822|95|
|Function returning string|1,235,817|95|
|Function returning integer|1,271,574|93|
|Function returning float|1,247,092|94|
|Function returning functions|1,089,178|98|
|Function returning arrow functions|1,215,762|94|
|Function returning empty object|1,261,318|95|
|Function returning empty array|1,245,998|95|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|593,625,033|99|
|using Array.includes (first item)|593,298,264|95|
|Using raw comparison|594,792,378|97|
|Using raw comparison (first item)|593,947,514|96|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|63,402,676|92|
|Using Object.getOwnPropertyNames()|65,645,618|95|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|597,218,845|97|
|Length = 10_000 - Array[length - 1]|598,205,761|97|
|Length = 1_000_000 - Array[length - 1]|596,197,118|99|

## Object shallow clone

|name|ops/sec|samples|
|-|-|-|
|Object.assign (small obj)|16,345,669|94|
|Spread operator (small obj)|66,722,981|94|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|53,295,393|90|
|Object.create({})|1,431,387|86|
|Cached Empty.prototype|593,533,467|98|
|Empty.prototype|1,554,699|79|
|Empty class|925,217|86|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|592,539,536|96|
|Using optional chain (obj.field?.field2) (undefined)|593,643,369|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|594,490,103|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|592,407,128|97|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|688,319|79|
|Using ? operator to avoid rejection|721,412|82|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,778,117|97|
|Raw usage underscore usage|7,247,264|97|
|Manipulating private properties using #|2,655,788|94|
|Manipulating private properties using underscore(_)|589,677,665|93|
|Manipulating private properties using Symbol|588,702,831|100|
|Manipulating private properties using PrivateSymbol|35,961,045|96|

## replace vs replaceAll comparison

This feature is not supported in this Node.js version

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|173,992|95|
|Sort using first char|830,673|90|
|Sort using localeCompare|439,223|96|



## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|592,925,075|95|
|Using backtick (`)|593,038,928|95|
|Using array.join|9,155,387|97|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|18,612,459|96|
|Using this|113,576,136|97|
