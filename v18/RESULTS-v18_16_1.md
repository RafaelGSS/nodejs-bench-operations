## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|848,338,115|99|
|Using dot notation|847,266,101|96|
|Using define property (writable)|4,278,073|95|
|Using define property initialized (writable)|6,061,101|98|
|Using define property (getter)|2,258,760|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:52:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":848338114.6568011,"samples":6},{"name":"Using dot notation","opsSec":847266100.5851912,"samples":7},{"name":"Using define property (writable)","opsSec":4278073.154757511,"samples":7},{"name":"Using define property initialized (writable)","opsSec":6061101.166413099,"samples":7},{"name":"Using define property (getter)","opsSec":2258759.8135865703,"samples":5}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.001ms
array.push|100|0.023ms
new Array(length)|100|0.007ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.265ms
new Array(length)|10,000|0.176ms
array.push|1,000,000|26.345ms
new Array(length)|1,000,000|13.647ms
array.push|100,000,000|1,810.871ms
new Array(length)|100,000,000|3,860.978ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.019ms
array.push|100|0.013ms
new Array(length)|100|0.009ms
array.push|1,000|0.043ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.462ms
new Array(length)|10,000|3.232ms
array.push|1,000,000|257.617ms
new Array(length)|1,000,000|4.502ms
array.push|100,000,000|2,229.434ms
new Array(length)|100,000,000|4,141.973ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|303|86|
|Array.from|20|37|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:08:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Array","opsSec":303.038839042749,"samples":3},{"name":"Array.from","opsSec":20.120082804396542,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|848,505,686|100|
|[async] async function|17,633,212|87|
|[async] function|330,261|27|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:15:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":848505686.1385969,"samples":6},{"name":"[async] async function","opsSec":17633211.745696396,"samples":8},{"name":"[async] function","opsSec":330260.7084237526,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,392|85|
|new Blob (1024)|560|74|
|text (128)|49,945|87|
|text (1024)|33,300|79|
|arrayBuffer (128)|50,434|86|
|arrayBuffer (1024)|34,206|80|
|slice (0, 64)|94,569|86|
|slice (0, 512)|57,036|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:26:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4392.028438618791,"samples":3},{"name":"new Blob (1024)","opsSec":559.8306667597847,"samples":2},{"name":"text (128)","opsSec":49945.387613071325,"samples":4},{"name":"text (1024)","opsSec":33300.36816243092,"samples":3},{"name":"arrayBuffer (128)","opsSec":50433.70186425532,"samples":4},{"name":"arrayBuffer (1024)","opsSec":34205.52814895966,"samples":3},{"name":"slice (0, 64)","opsSec":94568.87686851204,"samples":3},{"name":"slice (0, 512)","opsSec":57036.35796037526,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|238,925|54|
|[True conditional] Using constructor name|181,450|97|
|[True conditional] Check if property is valid then instanceof |183,909|96|
|[False conditional] Using instanceof only|848,868,738|96|
|[False conditional] Using constructor name|848,615,740|95|
|[False conditional] Check if property is valid then instanceof |849,461,541|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:39:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":238925.24082689275,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":181449.87875746156,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":183909.14932915338,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":848868738.2684655,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":848615740.2897859,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":849461541.1584353,"samples":8}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,718|93|
|crypto.verify('RSA-SHA256')|6,741|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:50:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6717.992274129945,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":6740.515558387568,"samples":5}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,584,883|98|
|fromUnixToISOString(new Date())|2,127,369|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:00:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2584883.048689806,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2127369.4812063426,"samples":7}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,398|86|
|Intl.DateTimeFormat().format(new Date())|12,515|90|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|15,783|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,571|93|
|Reusing Intl.DateTimeFormat()|481,464|81|
|Date.toLocaleDateString()|580,893|100|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,078|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:10:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":12397.902183421056,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":12514.745166826524,"samples":7},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":15782.70105611353,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":15571.14621660142,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":481463.9323479556,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":580892.6591167705,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":14078.180027627785,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|996,445|97|
|Using brackets {}|951,991|97|
|Using '' + |997,822|95|
|Using date.toString()|1,096,211|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:24:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":996445.4944288247,"samples":7},{"name":"Using brackets {}","opsSec":951990.8655750658,"samples":3},{"name":"Using '' + ","opsSec":997822.4477765108,"samples":6},{"name":"Using date.toString()","opsSec":1096211.4712642503,"samples":6}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,396,855|96|
|Using delete property (proto: null)|23,454,152|96|
|Using delete property (cached proto: null)|3,424,700|95|
|Using undefined assignment|846,843,872|100|
|Using undefined assignment (proto: null)|25,880,444|95|
|Using undefined property (cached proto: null)|844,730,175|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:35:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":3396855.3768691267,"samples":4},{"name":"Using delete property (proto: null)","opsSec":23454151.61505042,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3424700.3380157514,"samples":5},{"name":"Using undefined assignment","opsSec":846843872.0626692,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":25880443.85587047,"samples":8},{"name":"Using undefined property (cached proto: null)","opsSec":844730174.9922055,"samples":9}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|234,076|53|
|NodeError|180,564|94|
|NodeError Range|181,045|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:45:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Error","opsSec":234075.98985084044,"samples":3},{"name":"NodeError","opsSec":180564.06675106531,"samples":3},{"name":"NodeError Range","opsSec":181045.05184998544,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,835,093|98|
|Function returning explicitly undefined|1,812,670|94|
|Function returning implicitly undefined|1,855,742|92|
|Function returning string|1,812,482|98|
|Function returning integer|1,847,252|96|
|Function returning float|1,832,637|96|
|Function returning functions|1,771,339|96|
|Function returning arrow functions|1,817,057|98|
|Function returning empty object|1,853,535|98|
|Function returning empty array|1,828,461|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:58:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":1835092.79790616,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1812670.075631727,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1855741.9376233919,"samples":6},{"name":"Function returning string","opsSec":1812482.0812505702,"samples":5},{"name":"Function returning integer","opsSec":1847252.458260646,"samples":7},{"name":"Function returning float","opsSec":1832636.6642706348,"samples":5},{"name":"Function returning functions","opsSec":1771338.5721204588,"samples":7},{"name":"Function returning arrow functions","opsSec":1817056.926147935,"samples":6},{"name":"Function returning empty object","opsSec":1853535.01181154,"samples":5},{"name":"Function returning empty array","opsSec":1828461.1144877556,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|847,316,413|99|
|using Array.includes (first item)|847,023,757|101|
|Using raw comparison|849,064,488|98|
|Using raw comparison (first item)|847,968,445|101|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:13:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"using Array.includes","opsSec":847316413.3878176,"samples":6},{"name":"using Array.includes (first item)","opsSec":847023756.7761306,"samples":6},{"name":"Using raw comparison","opsSec":849064488.3541689,"samples":8},{"name":"Using raw comparison (first item)","opsSec":847968445.2210524,"samples":7}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|93,829,200|94|
|Using Object.getOwnPropertyNames()|94,855,054|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:26:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using Object.keys()","opsSec":93829200.21823215,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":94855054.29075994,"samples":7}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|27,286,422|96|
|Length = 10_000 - Array.at|26,157,156|97|
|Length = 1_000_000 - Array.at|25,830,921|96|
|Length = 100 - Array[length - 1]|843,480,000|100|
|Length = 10_000 - Array[length - 1]|845,181,946|88|
|Length = 1_000_000 - Array[length - 1]|843,897,388|101|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:34:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":27286422.06881249,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":26157155.887965605,"samples":4},{"name":"Length = 1_000_000 - Array.at","opsSec":25830921.281906385,"samples":5},{"name":"Length = 100 - Array[length - 1]","opsSec":843479999.6754351,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":845181945.9543424,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":843897388.0930139,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|77,961,643|94|
|Object.create({})|1,482,988|89|
|Cached Empty.prototype|845,868,116|89|
|Empty.prototype|1,637,608|88|
|Empty class|955,112|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:47:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Object.create(null)","opsSec":77961642.6831134,"samples":5},{"name":"Object.create({})","opsSec":1482988.0577365572,"samples":3},{"name":"Cached Empty.prototype","opsSec":845868116.2286245,"samples":9},{"name":"Empty.prototype","opsSec":1637608.3428298943,"samples":3},{"name":"Empty class","opsSec":955112.3954195508,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|848,311,564|100|
|Using optional chain (obj.field?.field2) (undefined)|848,110,906|101|
|Using and operator (obj.field && obj.field.field2) (Valid)|847,394,441|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|848,081,238|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:57:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":848311563.7192483,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":848110905.9055536,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":847394440.5856807,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":848081238.262589,"samples":8}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|283,542,086|95|
|Using parseInt(x, 10) - big number (10 len)|21,150,095|94|
|Using + - small number (2 len)|848,792,756|99|
|Using + - big number (10 len)|846,697,353|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:09:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":283542086.03282017,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":21150094.54302049,"samples":6},{"name":"Using + - small number (2 len)","opsSec":848792756.4269848,"samples":8},{"name":"Using + - big number (10 len)","opsSec":846697352.5361819,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|751,840|81|
|Using ? operator to avoid rejection|798,581|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:16:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using if to check function existence","opsSec":751840.0495854152,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":798581.4552474017,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|350,822,182|91|
|Raw usage underscore usage|361,782,427|94|
|Manipulating private properties using #|266,862,426|89|
|Manipulating private properties using underscore(_)|228,491,176|80|
|Manipulating private properties using Symbol|222,200,285|81|
|Manipulating private properties using PrivateSymbol|51,400,142|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:27:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Raw usage private field","opsSec":350822181.593254,"samples":7},{"name":"Raw usage underscore usage","opsSec":361782427.2186941,"samples":9},{"name":"Manipulating private properties using #","opsSec":266862425.99864846,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":228491175.66796836,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":222200285.20538694,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":51400141.56688914,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,694,428|96|
|Adding property in the object creation - small object|3,705,683|97|
|Adding property after the function creation - small class|192,945|90|
|Adding property in the function creation - small class|194,511|89|
|Adding property after the class creation - small class|164,137|86|
|Adding property in the class creation - small class|163,089|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:40:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3694427.6873910553,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":3705683.364259876,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":192944.59253284844,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":194511.32724884315,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":164137.0000504043,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":163088.88107408574,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|848,165,527|98|
|Getter|99,585,730|97|
|Method|848,499,693|98|
|DefineProperty (getter)|848,485,096|99|
|DefineProperty (getter & enumerable=false)|99,222,363|98|
|DefineProperty (getter & configurable=false)|848,466,032|99|
|DefineProperty (getter & enumerable=false & configurable=false)|98,793,801|93|
|DefineProperty (writable)|728,790,736|86|
|DefineProperty (writable & enumerable=false)|153,744,904|76|
|DefineProperty (writable & enumerable=false & configurable=false)|848,842,519|100|
|DefineProperties (getter)|99,705,912|98|
|DefineProperties (getter & enumerable=false)|99,140,978|99|
|DefineProperties (getter & enumerable=false & configurable=false)|87,937,251|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:56:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Getter (class)","opsSec":848165527.4401482,"samples":7},{"name":"Getter","opsSec":99585730.22863682,"samples":6},{"name":"Method","opsSec":848499693.3287188,"samples":8},{"name":"DefineProperty (getter)","opsSec":848485096.2122699,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":99222362.64085212,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":848466031.7790617,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":98793800.67698684,"samples":6},{"name":"DefineProperty (writable)","opsSec":728790736.2857723,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":153744904.2374962,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":848842519.2233855,"samples":6},{"name":"DefineProperties (getter)","opsSec":99705912.21597098,"samples":7},{"name":"DefineProperties (getter & enumerable=false)","opsSec":99140977.50731769,"samples":9},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":87937250.84317428,"samples":7}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|814,583,054|99|
|Setter|11,848,296|93|
|Method|838,460,859|96|
|DefineProperty (setter)|830,298,663|100|
|DefineProperty (setter & enumerable=false)|11,280,110|95|
|DefineProperty (setter & configurable=false)|11,876,371|94|
|DefineProperty (setter & enumerable=false & configurable=false)|11,598,028|95|
|DefineProperty (writable)|847,414,873|98|
|DefineProperty (writable & enumerable=false)|847,922,751|99|
|DefineProperty (writable & enumerable=false & configurable=false)|848,021,102|98|
|DefineProperties (setter)|723,015,934|91|
|DefineProperties (setter & enumerable=false)|10,989,790|95|
|DefineProperties (setter & enumerable=false & configurable=false)|10,826,168|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:15:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Setter (class)","opsSec":814583053.5787696,"samples":9},{"name":"Setter","opsSec":11848296.417830484,"samples":4},{"name":"Method","opsSec":838460858.6037499,"samples":8},{"name":"DefineProperty (setter)","opsSec":830298663.1994696,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11280110.239327298,"samples":4},{"name":"DefineProperty (setter & configurable=false)","opsSec":11876370.619910717,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11598027.54784838,"samples":5},{"name":"DefineProperty (writable)","opsSec":847414873.3703942,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":847922751.3086348,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":848021102.2957822,"samples":7},{"name":"DefineProperties (setter)","opsSec":723015934.098802,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10989789.819393078,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10826167.754355734,"samples":6}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,484,418|98|
|Using replaceAll()|3,076,000|101|
|Using replaceAll(//g)|3,133,452|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:35:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using replace(//g)","opsSec":3484417.780289505,"samples":7},{"name":"Using replaceAll()","opsSec":3076000.4254715377,"samples":7},{"name":"Using replaceAll(//g)","opsSec":3133452.365997364,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|27,323,255|95|
|{ ...object, __proto__: null }|27,911,591|94|
|{ ...object, newProp: true }|704,355|88|
|structuredClone|265,576|91|
|JSON.parse + JSON.stringify|207,379|99|
|loop + object.keys starting with {}|1,275,625|99|
|loop + object.keys starting with { __proto__: null }|780,826|96|
|loop + object.keys starting with { randomProp: true }|546,844|95|
|object.keys + reduce(FN, {})|531,992|97|
|object.keys + reduce(FN, { __proto__: null })|796,328|97|
|object.keys + reduce(FN, { newProp: true })|485,116|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:47:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{ ...object }","opsSec":27323254.796147652,"samples":7},{"name":"{ ...object, __proto__: null }","opsSec":27911591.493906617,"samples":7},{"name":"{ ...object, newProp: true }","opsSec":704355.4213119508,"samples":3},{"name":"structuredClone","opsSec":265575.73588846676,"samples":4},{"name":"JSON.parse + JSON.stringify","opsSec":207379.0442735849,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":1275624.7138446807,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":780826.186568106,"samples":7},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":546843.6323993065,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":531991.550282929,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":796328.0108415536,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":485116.1743053588,"samples":4}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|271,596|98|
|Sort using first char|1,360,102|93|
|Sort using localeCompare|1,192,051|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:01:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Sort using default","opsSec":271595.87189333554,"samples":5},{"name":"Sort using first char","opsSec":1360102.3642922905,"samples":5},{"name":"Sort using localeCompare","opsSec":1192050.6537479616,"samples":7}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,988|93|
|{...smallObject} - Total keys: 2|108,440,068|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,182|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,133|98|
|{ ...bigObject, ...anotherBigObject }|1,106|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,159,863|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|33,709,544|94|
|{ ...smallObject, ...anotherSmallObject }|23,237,689|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:13:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1988.4163831812625,"samples":5},{"name":"{...smallObject} - Total keys: 2","opsSec":108440067.6829108,"samples":8},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2181.808041984264,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6132.617495643458,"samples":5},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1105.5426694738223,"samples":5},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14159862.97877256,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":33709543.590870135,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":23237689.35998154,"samples":6}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,488|87|
|streams.web.Readable reading 1e3 * "some data"|527|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:25:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2487.843169065214,"samples":9},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":526.6831588023518,"samples":4}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,244|94|
|streams.web.WritableStream writing 1e3 * "some data"|1,089|58|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:33:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":5244.2470694330905,"samples":5},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1088.7742006403353,"samples":4}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|847,449,354|99|
|Using backtick (`)|848,078,259|98|
|Using array.join|12,696,796|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:43:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using + sign","opsSec":847449353.5207111,"samples":6},{"name":"Using backtick (`)","opsSec":848078259.486144,"samples":8},{"name":"Using array.join","opsSec":12696796.328542829,"samples":7}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|714,257,760|97|
|Using indexof|714,546,479|99|
|Using RegExp.test|10,941,202|99|
|Using RegExp.text with cached regex pattern|11,259,867|96|
|Using new RegExp.test|3,008,127|96|
|Using new RegExp.test with cached regex pattern|3,473,184|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:07:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":714257759.770902,"samples":8},{"name":"Using indexof","opsSec":714546478.6957994,"samples":7},{"name":"Using RegExp.test","opsSec":10941201.659057654,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":11259867.214007856,"samples":6},{"name":"Using new RegExp.test","opsSec":3008126.6891231304,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3473184.250767408,"samples":5}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|131,427,894|90|
|Using this|134,410,106|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:13:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using super","opsSec":131427894.06768356,"samples":6},{"name":"Using this","opsSec":134410105.9680441,"samples":6}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,504,975|96|
|Date.now()|15,477,140|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:17:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().getTime()","opsSec":7504975.082936297,"samples":5},{"name":"Date.now()","opsSec":15477139.602749502,"samples":6}]}-->
