# Node.js Benchmark Operations

* __Machine:__ linux x64 | 4 vCPUs | 7.3GB Mem
* __Node:__ `v16.0.0`
* __Run:__ Tue Jul 11 2023 21:33:52 GMT+0000 (Coordinated Universal Time)

## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|769,012,582|94|
|Using dot notation|765,167,936|95|
|Using define property (writable)|3,100,044|93|
|Using define property initialized (writable)|3,898,617|92|
|Using define property (getter)|1,619,119|89|

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.003ms
array.push|100|0.027ms
new Array(length)|100|0.01ms
array.push|1,000|0.057ms
new Array(length)|1,000|0.031ms
array.push|10,000|0.536ms
new Array(length)|10,000|0.297ms
array.push|1,000,000|33.723ms
new Array(length)|1,000,000|10.269ms
array.push|100,000,000|2,338.168ms
new Array(length)|100,000,000|5,248.353ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.003ms
array.push|100|0.028ms
new Array(length)|100|0.014ms
array.push|1,000|0.067ms
new Array(length)|1,000|0.028ms
array.push|10,000|0.465ms
new Array(length)|10,000|3.894ms
array.push|1,000,000|81.445ms
new Array(length)|1,000,000|10.448ms
array.push|100,000,000|3,166.971ms
new Array(length)|100,000,000|5,180.244ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|206|85|
|Array.from|15|41|

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|302,596|88|
|[True conditional] Using constructor name|299,128|89|
|[True conditional] Check if property is valid then instanceof |297,500|83|
|[False conditional] Using instanceof only|766,750,123|93|
|[False conditional] Using constructor name|768,503,147|92|
|[False conditional] Check if property is valid then instanceof |769,647,246|94|


## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|908,639|88|
|fromUnixToISOString(new Date())|770,510|93|

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,149|89|
|Intl.DateTimeFormat().format(new Date())|6,265|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,641|86|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,098|78|
|Reusing Intl.DateTimeFormat()|417,830|92|
|Date.toLocaleDateString()|373,636|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,022|87|
|Format using date.get*|0|0|

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|502,002|90|
|Using brackets {}|509,341|95|
|Using '' + |509,748|89|
|Using date.toString()|544,426|95|

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,349,659|92|
|Using undefined assignment|768,331,744|97|

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|286,753|86|
|NodeError|287,484|85|
|NodeError Range|284,714|83|

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,367,613|94|
|Function returning explicitly undefined|1,354,501|91|
|Function returning implicitly undefined|1,374,648|89|
|Function returning string|1,362,845|96|
|Function returning integer|1,388,391|92|
|Function returning float|1,377,863|96|
|Function returning functions|1,330,472|95|
|Function returning arrow functions|1,346,733|95|
|Function returning empty object|1,340,651|96|
|Function returning empty array|1,367,633|96|

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|768,827,333|93|
|using Array.includes (first item)|767,483,109|94|
|Using raw comparison|770,046,667|95|
|Using raw comparison (first item)|767,690,815|95|

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|58,168,955|90|
|Using Object.getOwnPropertyNames()|55,171,331|91|

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|0|0|
|Length = 10_000 - Array.at|0|0|
|Length = 1_000_000 - Array.at|0|0|
|Length = 100 - Array[length - 1]|768,532,061|94|
|Length = 10_000 - Array[length - 1]|767,555,572|91|
|Length = 1_000_000 - Array[length - 1]|768,323,490|92|

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,837,357|89|
|Object.create({})|1,236,326|76|
|Cached Empty.prototype|770,426,077|95|
|Empty.prototype|1,441,204|74|
|Empty class|877,892|77|

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|767,440,329|93|
|Using optional chain (obj.field?.field2) (undefined)|768,346,369|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|768,677,292|93|
|Using and operator (obj.field && obj.field.field2) (undefined)|769,047,208|96|

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|170,379,308|93|
|Using parseInt(x, 10) - big number (10 len)|11,301,744|93|
|Using + - small number (2 len)|768,976,666|97|
|Using + - big number (10 len)|769,546,406|93|

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|749,957|76|
|Using ? operator to avoid rejection|795,735|74|

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|7,677,046|86|
|Raw usage underscore usage|6,357,738|93|
|Manipulating private properties using #|2,332,920|94|
|Manipulating private properties using underscore(_)|754,864,442|92|
|Manipulating private properties using Symbol|753,897,199|96|
|Manipulating private properties using PrivateSymbol|31,303,588|93|

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,509,627|95|
|Adding property in the object creation - small object|2,513,078|95|
|Adding property after the function creation - small class|165,536|85|
|Adding property in the function creation - small class|167,576|88|
|Adding property after the class creation - small class|139,213|79|
|Adding property in the class creation - small class|137,789|83|

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|767,933,670|93|
|Getter|60,917,328|89|
|Method|770,242,362|90|
|DefineProperty (getter)|769,836,028|94|
|DefineProperty (getter & enumerable=false)|59,147,933|94|
|DefineProperty (getter & configurable=false)|770,231,710|91|
|DefineProperty (getter & enumerable=false & configurable=false)|61,209,817|94|
|DefineProperty (writable)|769,007,430|95|
|DefineProperty (writable & enumerable=false)|768,459,745|93|
|DefineProperty (writable & enumerable=false & configurable=false)|240,626,105|32|
|DefineProperties (getter)|36,700,383|86|
|DefineProperties (getter & enumerable=false)|61,393,999|92|
|DefineProperties (getter & enumerable=false & configurable=false)|61,372,272|94|

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|749,847,636|96|
|Setter|6,891,922|89|
|Method|748,763,382|95|
|DefineProperty (setter)|750,584,156|95|
|DefineProperty (setter & enumerable=false)|6,791,989|96|
|DefineProperty (setter & configurable=false)|6,936,532|92|
|DefineProperty (setter & enumerable=false & configurable=false)|6,851,905|95|
|DefineProperty (writable)|767,142,019|93|
|DefineProperty (writable & enumerable=false)|136,590,021|19|
|DefineProperty (writable & enumerable=false & configurable=false)|94,174,790|85|
|DefineProperties (setter)|76,347,808|85|
|DefineProperties (setter & enumerable=false)|6,333,029|91|
|DefineProperties (setter & enumerable=false & configurable=false)|6,837,487|94|

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,319,645|86|
|Using replaceAll()|2,074,073|93|
|Using replaceAll(//g)|2,058,892|94|

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|14,840,377|86|
|{ ...object, __proto__: null }|15,044,260|92|
|{ ...object, newProp: true }|534,644|80|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|143,510|96|
|loop + object.keys starting with {}|327,544|95|
|loop + object.keys starting with { __proto__: null }|452,208|96|
|loop + object.keys starting with { randomProp: true }|352,370|94|
|object.keys + reduce(FN, {})|330,385|95|
|object.keys + reduce(FN, { __proto__: null })|451,591|95|
|object.keys + reduce(FN, { newProp: true })|355,798|93|

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|183,961|93|
|Sort using first char|870,295|96|
|Sort using localeCompare|431,748|91|

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,356|95|
|{...smallObject} - Total keys: 2|65,866,482|90|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,403|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,875|96|
|{ ...bigObject, ...anotherBigObject }|853|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,993,230|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|23,046,189|94|
|{ ...smallObject, ...anotherSmallObject }|16,054,201|92|



## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|769,879,751|91|
|Using backtick (`)|768,654,332|94|
|Using array.join|6,818,406|91|

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|13,099,420|92|
|Using indexof|767,206,766|92|
|Using RegExp.test|11,876,735|91|
|Using RegExp.text with cached regex pattern|12,604,665|97|
|Using new RegExp.test|3,390,371|91|
|Using new RegExp.test with cached regex pattern|3,993,690|95|

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|181,626,748|91|
|Using this|179,579,553|87|

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|1,556,940|91|
|Date.now()|1,800,107|92|
