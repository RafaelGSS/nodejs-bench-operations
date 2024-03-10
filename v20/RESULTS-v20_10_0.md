## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|848,064,151|99|
|Using dot notation|843,427,170|98|
|Using define property (writable)|4,236,892|92|
|Using define property initialized (writable)|6,193,798|96|
|Using define property (getter)|2,356,714|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:33:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":848064150.7195677,"samples":8},{"name":"Using dot notation","opsSec":843427170.3590678,"samples":8},{"name":"Using define property (writable)","opsSec":4236891.778481218,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6193797.802056683,"samples":5},{"name":"Using define property (getter)","opsSec":2356714.246597577,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.016ms
new Array(length)|10|0.002ms
array.push|100|0.028ms
new Array(length)|100|0.008ms
array.push|1,000|0.05ms
new Array(length)|1,000|0.028ms
array.push|10,000|0.366ms
new Array(length)|10,000|0.405ms
array.push|1,000,000|26.786ms
new Array(length)|1,000,000|5.548ms
array.push|100,000,000|1,087.118ms
new Array(length)|100,000,000|3,602.468ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.022ms
array.push|100|0.078ms
new Array(length)|100|0.011ms
array.push|1,000|0.033ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.248ms
new Array(length)|10,000|0.177ms
array.push|1,000,000|22.01ms
new Array(length)|1,000,000|2.88ms
array.push|100,000,000|1,344.949ms
new Array(length)|100,000,000|3,521.819ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|616|72|
|Array.from|23|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:35:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Array","opsSec":615.6035807205033,"samples":2},{"name":"Array.from","opsSec":22.60583768410511,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|845,577,698|98|
|[async] async function|17,170,996|88|
|[async] function|191,693|19|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:37:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":845577698.276055,"samples":5},{"name":"[async] async function","opsSec":17170995.795459077,"samples":6},{"name":"[async] function","opsSec":191693.14315070445,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,245|88|
|new Blob (1024)|674|77|
|text (128)|5,952|88|
|text (1024)|727|89|
|arrayBuffer (128)|5,963|87|
|arrayBuffer (1024)|746|90|
|slice (0, 64)|77,220|71|
|slice (0, 512)|21,169|61|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:38:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5245.283835556108,"samples":4},{"name":"new Blob (1024)","opsSec":673.8063759055207,"samples":2},{"name":"text (128)","opsSec":5951.665174473568,"samples":6},{"name":"text (1024)","opsSec":727.2031378301923,"samples":3},{"name":"arrayBuffer (128)","opsSec":5962.787522667537,"samples":3},{"name":"arrayBuffer (1024)","opsSec":746.4617557265697,"samples":3},{"name":"slice (0, 64)","opsSec":77219.99371940555,"samples":3},{"name":"slice (0, 512)","opsSec":21169.36390114864,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|247,080|54|
|[True conditional] Using constructor name|199,867|94|
|[True conditional] Check if property is valid then instanceof |202,449|94|
|[False conditional] Using instanceof only|847,347,751|94|
|[False conditional] Using constructor name|844,662,677|96|
|[False conditional] Check if property is valid then instanceof |846,754,835|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:40:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":247080.45280150656,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":199866.83856870598,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":202449.4666521109,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":847347751.2131714,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":844662677.2628103,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":846754835.2887367,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,854|91|
|crypto.verify('RSA-SHA256')|6,810|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:42:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6853.918530957463,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":6809.573640682576,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,470,149|91|
|fromUnixToISOString(new Date())|2,363,853|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:43:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1470149.4527320783,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":2363852.63176375,"samples":4}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|14,986|80|
|Intl.DateTimeFormat().format(new Date())|15,251|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|15,909|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|16,799|81|
|Reusing Intl.DateTimeFormat()|773,469|97|
|Date.toLocaleDateString()|728,426|88|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|18,326|86|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:44:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":14986.21135144396,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":15251.323429017155,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":15908.898793936609,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":16798.840973048616,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":773469.3556204364,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":728425.8967645405,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":18325.658430569456,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,095,115|90|
|Using brackets {}|1,110,409|96|
|Using '' + |1,109,050|94|
|Using date.toString()|1,205,522|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:46:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":1095114.6075806143,"samples":4},{"name":"Using brackets {}","opsSec":1110408.7750155085,"samples":7},{"name":"Using '' + ","opsSec":1109050.1350623264,"samples":4},{"name":"Using date.toString()","opsSec":1205521.5564931573,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,747,189|92|
|Using delete property (proto: null)|20,192,368|97|
|Using delete property (cached proto: null)|3,774,356|92|
|Using undefined assignment|842,316,354|95|
|Using undefined assignment (proto: null)|22,572,717|95|
|Using undefined property (cached proto: null)|838,685,868|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:48:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using delete property","opsSec":3747189.3924216623,"samples":5},{"name":"Using delete property (proto: null)","opsSec":20192368.478184637,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3774356.055180599,"samples":5},{"name":"Using undefined assignment","opsSec":842316354.2785604,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":22572717.234209016,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":838685868.1920424,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|240,582|53|
|NodeError|198,704|95|
|NodeError Range|198,206|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:49:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Error","opsSec":240582.1794719527,"samples":3},{"name":"NodeError","opsSec":198704.32667111614,"samples":3},{"name":"NodeError Range","opsSec":198205.50418521458,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,829,070|93|
|Function returning explicitly undefined|1,842,244|95|
|Function returning implicitly undefined|1,816,729|93|
|Function returning string|1,846,179|94|
|Function returning integer|1,877,807|97|
|Function returning float|1,867,811|97|
|Function returning functions|1,816,659|97|
|Function returning arrow functions|1,806,447|95|
|Function returning empty object|1,844,256|94|
|Function returning empty array|1,849,176|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:51:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1829070.2565942397,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1842243.9551007159,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1816728.8349502953,"samples":6},{"name":"Function returning string","opsSec":1846179.265802883,"samples":5},{"name":"Function returning integer","opsSec":1877807.3094897917,"samples":6},{"name":"Function returning float","opsSec":1867811.0968651439,"samples":7},{"name":"Function returning functions","opsSec":1816658.6166619863,"samples":5},{"name":"Function returning arrow functions","opsSec":1806447.2267864875,"samples":8},{"name":"Function returning empty object","opsSec":1844256.0358650535,"samples":8},{"name":"Function returning empty array","opsSec":1849175.8201989504,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|858,853,652|95|
|using Array.includes (first item)|859,763,308|94|
|Using raw comparison|848,673,524|99|
|Using raw comparison (first item)|847,115,292|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:53:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"using Array.includes","opsSec":858853651.6144842,"samples":6},{"name":"using Array.includes (first item)","opsSec":859763308.4113871,"samples":9},{"name":"Using raw comparison","opsSec":848673524.0225303,"samples":6},{"name":"Using raw comparison (first item)","opsSec":847115291.984274,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|95,276,471|90|
|Using Object.getOwnPropertyNames()|97,328,184|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:54:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using Object.keys()","opsSec":95276470.57445508,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":97328183.52802713,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|892,702,511|95|
|Length = 10_000 - Array.at|895,841,393|98|
|Length = 1_000_000 - Array.at|895,364,670|95|
|Length = 100 - Array[length - 1]|788,003,143|95|
|Length = 10_000 - Array[length - 1]|785,790,641|99|
|Length = 1_000_000 - Array[length - 1]|788,547,557|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:56:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":892702510.5440935,"samples":8},{"name":"Length = 10_000 - Array.at","opsSec":895841393.0660479,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":895364670.1988674,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":788003142.8021915,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":785790641.3267989,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":788547556.5236295,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|84,539,234|90|
|Object.create({})|2,431,421|80|
|Cached Empty.prototype|844,424,166|97|
|Empty.prototype|2,428,188|88|
|Empty class|1,498,807|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:57:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Object.create(null)","opsSec":84539234.1182379,"samples":6},{"name":"Object.create({})","opsSec":2431421.363400255,"samples":3},{"name":"Cached Empty.prototype","opsSec":844424166.2142707,"samples":7},{"name":"Empty.prototype","opsSec":2428188.330828481,"samples":5},{"name":"Empty class","opsSec":1498806.6242188942,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|846,114,225|98|
|Using optional chain (obj.field?.field2) (undefined)|850,176,494|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|848,154,732|93|
|Using and operator (obj.field && obj.field.field2) (undefined)|845,024,372|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:59:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":846114224.7532198,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":850176494.1222111,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":848154731.9851713,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":845024371.6953017,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|843,227,258|96|
|Using parseInt(x, 10) - big number (10 len)|840,737,998|97|
|Using + - small number (2 len)|846,081,625|98|
|Using + - big number (10 len)|842,623,487|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:00:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":843227257.8890486,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":840737997.5587025,"samples":7},{"name":"Using + - small number (2 len)","opsSec":846081625.0518603,"samples":7},{"name":"Using + - big number (10 len)","opsSec":842623486.8353435,"samples":6}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,230,989|82|
|Using ? operator to avoid rejection|1,263,710|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:02:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using if to check function existence","opsSec":1230988.9208744178,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":1263709.5140979337,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|844,374,552|98|
|Raw usage underscore usage|844,126,907|96|
|Manipulating private properties using #|835,265,847|100|
|Manipulating private properties using underscore(_)|835,485,973|93|
|Manipulating private properties using Symbol|834,587,228|99|
|Manipulating private properties using PrivateSymbol|50,196,298|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:03:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Raw usage private field","opsSec":844374551.7838262,"samples":6},{"name":"Raw usage underscore usage","opsSec":844126907.3034544,"samples":7},{"name":"Manipulating private properties using #","opsSec":835265846.5173168,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":835485972.5710124,"samples":8},{"name":"Manipulating private properties using Symbol","opsSec":834587228.4989824,"samples":6},{"name":"Manipulating private properties using PrivateSymbol","opsSec":50196298.28323303,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,205,961|97|
|Adding property in the object creation - small object|5,243,901|94|
|Adding property after the function creation - small class|257,513|89|
|Adding property in the function creation - small class|260,254|89|
|Adding property after the class creation - small class|260,816|85|
|Adding property in the class creation - small class|261,810|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:05:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5205960.696307038,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5243900.750704675,"samples":4},{"name":"Adding property after the function creation - small class","opsSec":257512.86330088132,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":260254.10472479142,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":260815.76699015102,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":261810.26544279384,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|847,173,302|98|
|Getter|88,217,596|96|
|Method|796,112,379|96|
|DefineProperty (getter)|843,051,221|96|
|DefineProperty (getter & enumerable=false)|87,154,792|94|
|DefineProperty (getter & configurable=false)|848,256,894|99|
|DefineProperty (getter & enumerable=false & configurable=false)|88,388,479|97|
|DefineProperty (writable)|848,396,512|98|
|DefineProperty (writable & enumerable=false)|743,654,753|84|
|DefineProperty (writable & enumerable=false & configurable=false)|128,843,772|88|
|DefineProperties (getter)|55,387,683|94|
|DefineProperties (getter & enumerable=false)|88,134,566|96|
|DefineProperties (getter & enumerable=false & configurable=false)|88,417,696|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:08:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Getter (class)","opsSec":847173302.1381549,"samples":7},{"name":"Getter","opsSec":88217595.63545622,"samples":6},{"name":"Method","opsSec":796112378.8869094,"samples":7},{"name":"DefineProperty (getter)","opsSec":843051221.0548661,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":87154792.4198294,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":848256893.5270447,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":88388479.1977155,"samples":7},{"name":"DefineProperty (writable)","opsSec":848396512.4156331,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":743654753.3378674,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":128843772.16666722,"samples":5},{"name":"DefineProperties (getter)","opsSec":55387682.60041157,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":88134566.10508324,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":88417695.54598516,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|770,553,471|92|
|Setter|12,329,810|94|
|Method|624,377,740|96|
|DefineProperty (setter)|787,075,906|99|
|DefineProperty (setter & enumerable=false)|11,857,243|97|
|DefineProperty (setter & configurable=false)|12,187,316|95|
|DefineProperty (setter & enumerable=false & configurable=false)|12,396,491|93|
|DefineProperty (writable)|789,530,070|98|
|DefineProperty (writable & enumerable=false)|786,359,901|98|
|DefineProperty (writable & enumerable=false & configurable=false)|788,389,583|97|
|DefineProperties (setter)|665,161,617|79|
|DefineProperties (setter & enumerable=false)|12,139,830|96|
|DefineProperties (setter & enumerable=false & configurable=false)|11,759,783|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:10:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Setter (class)","opsSec":770553471.3245991,"samples":6},{"name":"Setter","opsSec":12329809.547294432,"samples":5},{"name":"Method","opsSec":624377739.910085,"samples":7},{"name":"DefineProperty (setter)","opsSec":787075906.2082205,"samples":5},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11857242.837543959,"samples":7},{"name":"DefineProperty (setter & configurable=false)","opsSec":12187315.838368326,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12396490.871267611,"samples":4},{"name":"DefineProperty (writable)","opsSec":789530069.9986111,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":786359901.186459,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":788389582.8332275,"samples":6},{"name":"DefineProperties (setter)","opsSec":665161616.5111784,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":12139829.709661003,"samples":4},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11759783.15015363,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,234,719|93|
|Using replaceAll()|2,820,861|98|
|Using replaceAll(//g)|3,070,961|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:12:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using replace(//g)","opsSec":3234719.4935118607,"samples":4},{"name":"Using replaceAll()","opsSec":2820861.237171506,"samples":5},{"name":"Using replaceAll(//g)","opsSec":3070960.970624724,"samples":4}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|26,542,501|92|
|{ ...object, __proto__: null }|27,374,583|98|
|{ ...object, newProp: true }|889,090|91|
|structuredClone|261,134|95|
|JSON.parse + JSON.stringify|178,266|96|
|loop + object.keys starting with {}|1,475,576|94|
|loop + object.keys starting with { __proto__: null }|802,976|92|
|loop + object.keys starting with { randomProp: true }|622,959|95|
|object.keys + reduce(FN, {})|591,525|94|
|object.keys + reduce(FN, { __proto__: null })|806,803|92|
|object.keys + reduce(FN, { newProp: true })|614,594|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:14:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{ ...object }","opsSec":26542500.68397446,"samples":4},{"name":"{ ...object, __proto__: null }","opsSec":27374582.50200396,"samples":4},{"name":"{ ...object, newProp: true }","opsSec":889089.9809202437,"samples":3},{"name":"structuredClone","opsSec":261134.41173481502,"samples":4},{"name":"JSON.parse + JSON.stringify","opsSec":178266.03666266886,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":1475575.5391420044,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":802976.4849972253,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":622959.3794105453,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":591525.0087058485,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":806803.2709332722,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":614593.9211337939,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|271,350|94|
|Sort using first char|1,359,985|94|
|Sort using localeCompare|1,273,228|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:16:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Sort using default","opsSec":271350.11263731093,"samples":4},{"name":"Sort using first char","opsSec":1359985.4877631187,"samples":6},{"name":"Sort using localeCompare","opsSec":1273227.9276825828,"samples":4}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,103|94|
|{...smallObject} - Total keys: 2|103,595,691|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,295|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,211|98|
|{ ...bigObject, ...anotherBigObject }|1,245|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,601,176|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|37,267,858|98|
|{ ...smallObject, ...anotherSmallObject }|24,966,117|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:18:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2103.1205609812173,"samples":5},{"name":"{...smallObject} - Total keys: 2","opsSec":103595691.12381253,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2295.1386708518016,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6211.434594190263,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1244.875912419628,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13601175.963616453,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":37267857.66587761,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":24966117.117367785,"samples":5}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,469|83|
|streams.web.Readable reading 1e3 * "some data"|2,411|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:20:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2469.3592154927246,"samples":5},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":2410.508086950726,"samples":6}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,726|95|
|streams.web.WritableStream writing 1e3 * "some data"|1,586|71|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:21:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":5726.158411082942,"samples":3},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1585.6157611298815,"samples":4}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|844,239,451|96|
|Using backtick (`)|844,820,794|97|
|Using array.join|11,385,534|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:23:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using + sign","opsSec":844239450.5726702,"samples":7},{"name":"Using backtick (`)","opsSec":844820793.6507047,"samples":6},{"name":"Using array.join","opsSec":11385534.26751282,"samples":6}]}-->
