## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|14,176,365|7088183|
|Using dot notation|13,917,893|6958947|
|Using define property (writable)|3,350,433|1675217|
|Using define property initialized (writable)|4,112,435|2056218|
|Using define property (getter)|2,032,989|1016495|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:23:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":14176365.007658187,"samples":7088183},{"name":"Using dot notation","opsSec":13917893.610262696,"samples":6958947},{"name":"Using define property (writable)","opsSec":3350433.557746716,"samples":1675217},{"name":"Using define property initialized (writable)","opsSec":4112435.909550317,"samples":2056218},{"name":"Using define property (getter)","opsSec":2032989.4307593498,"samples":1016495}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.078ms
new Array(length)|100|0.008ms
array.push|1,000|0.027ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.286ms
new Array(length)|10,000|0.163ms
array.push|1,000,000|29.749ms
new Array(length)|1,000,000|6.743ms
array.push|100,000,000|1,898.812ms
new Array(length)|100,000,000|4,023.329ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.004ms
array.push|100|0.039ms
new Array(length)|100|0.014ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.019ms
array.push|10,000|164.745ms
new Array(length)|10,000|0.036ms
array.push|1,000,000|17.04ms
new Array(length)|1,000,000|8.597ms
array.push|100,000,000|2,022.513ms
new Array(length)|100,000,000|4,617.676ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|336|169|
|Array.from|24|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:35:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Array","opsSec":336.43771982285625,"samples":169},{"name":"Array.from","opsSec":24.39299930451994,"samples":13}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,307|1154|
|new Blob (1024)|657|329|
|text (128)|4,437|2219|
|text (1024)|574|288|
|arrayBuffer (128)|4,571|2286|
|arrayBuffer (1024)|569|285|
|slice (0, 64)|177,363|88682|
|slice (0, 512)|39,507|19754|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:41:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":2307.9769525423762,"samples":1154},{"name":"new Blob (1024)","opsSec":657.4141177975036,"samples":329},{"name":"text (128)","opsSec":4437.079155214597,"samples":2219},{"name":"text (1024)","opsSec":574.7310983359264,"samples":288},{"name":"arrayBuffer (128)","opsSec":4571.2634688874095,"samples":2286},{"name":"arrayBuffer (1024)","opsSec":569.2201615480334,"samples":285},{"name":"slice (0, 64)","opsSec":177363.0081860567,"samples":88682},{"name":"slice (0, 512)","opsSec":39507.642692867754,"samples":19754}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|319,478|159740|
|[True conditional] Using constructor name|317,549|158775|
|[True conditional] Check if property is valid then instanceof |315,707|157855|
|[False conditional] Using instanceof only|14,095,396|7047699|
|[False conditional] Using constructor name|14,108,048|7054025|
|[False conditional] Check if property is valid then instanceof |13,273,049|6636525|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:51:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":319478.8479590388,"samples":159740},{"name":"[True conditional] Using constructor name","opsSec":317549.7815257283,"samples":158775},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":315707.86770903453,"samples":157855},{"name":"[False conditional] Using instanceof only","opsSec":14095396.59057396,"samples":7047699},{"name":"[False conditional] Using constructor name","opsSec":14108048.560789991,"samples":7054025},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":13273049.575216107,"samples":6636525}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,704|3353|
|crypto.verify('RSA-SHA256')|6,656|3329|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:56:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6704.157724273905,"samples":3353},{"name":"crypto.verify('RSA-SHA256')","opsSec":6656.760378082462,"samples":3329}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,281,221|640611|
|fromUnixToISOString(new Date())|1,787,164|893583|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:01:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1281221.4695740563,"samples":640611},{"name":"fromUnixToISOString(new Date())","opsSec":1787164.2092610186,"samples":893583}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,135|10068|
|Intl.DateTimeFormat().format(new Date())|23,033|11517|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|23,053|11527|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|22,660|11331|
|Reusing Intl.DateTimeFormat()|906,734|453368|
|Date.toLocaleDateString()|957,805|478903|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,488|11745|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:07:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":20135.37080993309,"samples":10068},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":23033.196924556574,"samples":11517},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":23053.28806835798,"samples":11527},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":22660.812346829596,"samples":11331},{"name":"Reusing Intl.DateTimeFormat()","opsSec":906734.3588119043,"samples":453368},{"name":"Date.toLocaleDateString()","opsSec":957805.3257041464,"samples":478903},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23488.427402808673,"samples":11745}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|950,047|475024|
|Using brackets {}|963,895|481948|
|Using '' + |962,152|481077|
|Using date.toString()|1,068,248|534125|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:13:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using String()","opsSec":950047.5534774918,"samples":475024},{"name":"Using brackets {}","opsSec":963895.9248166009,"samples":481948},{"name":"Using '' + ","opsSec":962152.1103330198,"samples":481077},{"name":"Using date.toString()","opsSec":1068248.2630283833,"samples":534125}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,047,542|1523772|
|Using delete property (proto: null)|7,969,961|3984982|
|Using delete property (cached proto: null)|3,027,148|1513575|
|Using undefined assignment|13,020,181|6510091|
|Using undefined assignment (proto: null)|8,287,966|4143984|
|Using undefined property (cached proto: null)|13,334,528|6667265|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:23:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using delete property","opsSec":3047542.9089773735,"samples":1523772},{"name":"Using delete property (proto: null)","opsSec":7969961.800283043,"samples":3984982},{"name":"Using delete property (cached proto: null)","opsSec":3027148.1655424805,"samples":1513575},{"name":"Using undefined assignment","opsSec":13020181.791676925,"samples":6510091},{"name":"Using undefined assignment (proto: null)","opsSec":8287966.740259143,"samples":4143984},{"name":"Using undefined property (cached proto: null)","opsSec":13334528.479910683,"samples":6667265}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|300,623|150312|
|NodeError|300,870|150436|
|NodeError Range|301,195|150599|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:29:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Error","opsSec":300623.9603176241,"samples":150312},{"name":"NodeError","opsSec":300870.4914354355,"samples":150436},{"name":"NodeError Range","opsSec":301195.5988686482,"samples":150599}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,547,899|773950|
|Function returning explicitly undefined|1,533,164|766583|
|Function returning implicitly undefined|1,550,804|775403|
|Function returning string|1,547,600|773801|
|Function returning integer|1,559,297|779649|
|Function returning float|1,545,945|772973|
|Function returning functions|1,511,451|755726|
|Function returning arrow functions|1,535,293|767647|
|Function returning empty object|1,556,295|778148|
|Function returning empty array|1,526,814|763408|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:37:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Function returning null","opsSec":1547899.1858067291,"samples":773950},{"name":"Function returning explicitly undefined","opsSec":1533164.629352594,"samples":766583},{"name":"Function returning implicitly undefined","opsSec":1550804.9547565256,"samples":775403},{"name":"Function returning string","opsSec":1547600.7371621227,"samples":773801},{"name":"Function returning integer","opsSec":1559297.3450858511,"samples":779649},{"name":"Function returning float","opsSec":1545945.295050889,"samples":772973},{"name":"Function returning functions","opsSec":1511451.3198470718,"samples":755726},{"name":"Function returning arrow functions","opsSec":1535293.7881273634,"samples":767647},{"name":"Function returning empty object","opsSec":1556295.9844432627,"samples":778148},{"name":"Function returning empty array","opsSec":1526814.1586583573,"samples":763408}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|13,285,507|6642754|
|using Array.includes (first item)|14,484,499|7242250|
|Using raw comparison|15,039,123|7519562|
|Using raw comparison (first item)|13,874,033|6937017|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:48:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"using Array.includes","opsSec":13285507.016859388,"samples":6642754},{"name":"using Array.includes (first item)","opsSec":14484499.594380548,"samples":7242250},{"name":"Using raw comparison","opsSec":15039123.458446167,"samples":7519562},{"name":"Using raw comparison (first item)","opsSec":13874033.944396134,"samples":6937017}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|12,417,419|6208710|
|Using Object.getOwnPropertyNames()|12,320,478|6160240|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:54:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using Object.keys()","opsSec":12417419.503318254,"samples":6208710},{"name":"Using Object.getOwnPropertyNames()","opsSec":12320478.96508085,"samples":6160240}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,620,734|7310368|
|Length = 10_000 - Array.at|14,719,507|7359754|
|Length = 1_000_000 - Array.at|15,360,298|7680150|
|Length = 100 - Array[length - 1]|15,301,970|7650986|
|Length = 10_000 - Array[length - 1]|14,906,147|7453074|
|Length = 1_000_000 - Array[length - 1]|15,139,925|7569963|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:08:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":14620734.596475491,"samples":7310368},{"name":"Length = 10_000 - Array.at","opsSec":14719507.411292866,"samples":7359754},{"name":"Length = 1_000_000 - Array.at","opsSec":15360298.433162302,"samples":7680150},{"name":"Length = 100 - Array[length - 1]","opsSec":15301970.622840883,"samples":7650986},{"name":"Length = 10_000 - Array[length - 1]","opsSec":14906147.43382238,"samples":7453074},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15139925.667042034,"samples":7569963}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|14,624,107|7312054|
|~ (small)|14,820,942|7410472|
|Math.floor (long)|14,915,634|7457818|
|~ (long)|14,044,389|7022195|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:19:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Math.floor (small)","opsSec":14624107.532025367,"samples":7312054},{"name":"~ (small)","opsSec":14820942.310349567,"samples":7410472},{"name":"Math.floor (long)","opsSec":14915634.448652811,"samples":7457818},{"name":"~ (long)","opsSec":14044389.213488493,"samples":7022195}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|11,805,073|5903977|
|Object.create({})|1,988,784|997190|
|Cached Empty.prototype|14,833,993|7416997|
|Empty.prototype|2,032,875|1016439|
|Empty class|1,264,240|632121|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:27:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Object.create(null)","opsSec":11805073.420361213,"samples":5903977},{"name":"Object.create({})","opsSec":1988784.8204023985,"samples":997190},{"name":"Cached Empty.prototype","opsSec":14833993.733042205,"samples":7416997},{"name":"Empty.prototype","opsSec":2032875.4792315704,"samples":1016439},{"name":"Empty class","opsSec":1264240.5941623277,"samples":632121}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|15,707,919|7853960|
|Using optional chain (obj.field?.field2) (undefined)|14,725,938|7362970|
|Using and operator (obj.field && obj.field.field2) (Valid)|14,566,305|7283154|
|Using and operator (obj.field && obj.field.field2) (undefined)|14,596,418|7298210|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:37:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":15707919.685730295,"samples":7853960},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":14725938.851480205,"samples":7362970},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":14566305.98977183,"samples":7283154},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":14596418.832251582,"samples":7298210}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|15,098,168|7549218|
|Using parseInt(x, 10) - big number (10 len)|14,656,028|7328015|
|Using + - small number (2 len)|14,870,268|7435135|
|Using + - big number (10 len)|14,467,159|7233580|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:48:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":15098168.973696703,"samples":7549218},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":14656028.387989782,"samples":7328015},{"name":"Using + - small number (2 len)","opsSec":14870268.156015582,"samples":7435135},{"name":"Using + - big number (10 len)","opsSec":14467159.508260619,"samples":7233580}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,038,653|519327|
|Using ? operator to avoid rejection|1,036,164|518083|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:54:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using if to check function existence","opsSec":1038653.2355513368,"samples":519327},{"name":"Using ? operator to avoid rejection","opsSec":1036164.6882163254,"samples":518083}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|14,248,006|7124004|
|Raw usage underscore usage|15,073,939|7536970|
|Manipulating private properties using #|15,280,629|7640315|
|Manipulating private properties using underscore(_)|14,005,341|7002671|
|Manipulating private properties using Symbol|15,243,207|7621604|
|Manipulating private properties using PrivateSymbol|11,806,418|5903210|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:07:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Raw usage private field","opsSec":14248006.774769489,"samples":7124004},{"name":"Raw usage underscore usage","opsSec":15073939.457372982,"samples":7536970},{"name":"Manipulating private properties using #","opsSec":15280629.083365073,"samples":7640315},{"name":"Manipulating private properties using underscore(_)","opsSec":14005341.299885552,"samples":7002671},{"name":"Manipulating private properties using Symbol","opsSec":15243207.024321072,"samples":7621604},{"name":"Manipulating private properties using PrivateSymbol","opsSec":11806418.771937376,"samples":5903210}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,967,062|2483532|
|Adding property in the object creation - small object|4,951,339|2475670|
|Adding property after the function creation - small class|254,537|127269|
|Adding property in the function creation - small class|263,127|131564|
|Adding property after the class creation - small class|267,357|133679|
|Adding property in the class creation - small class|263,302|131652|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:14:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4967062.22178123,"samples":2483532},{"name":"Adding property in the object creation - small object","opsSec":4951339.801938487,"samples":2475670},{"name":"Adding property after the function creation - small class","opsSec":254537.39318289462,"samples":127269},{"name":"Adding property in the function creation - small class","opsSec":263127.89053895674,"samples":131564},{"name":"Adding property after the class creation - small class","opsSec":267357.4337371809,"samples":133679},{"name":"Adding property in the class creation - small class","opsSec":263302.52813903993,"samples":131652}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|14,914,888|7457445|
|Getter|12,338,339|6169170|
|Method|14,970,481|7485241|
|DefineProperty (getter)|15,223,918|7611960|
|DefineProperty (getter & enumerable=false)|12,329,729|6164865|
|DefineProperty (getter & configurable=false)|14,391,990|7195996|
|DefineProperty (getter & enumerable=false & configurable=false)|12,209,045|6104523|
|DefineProperty (writable)|14,631,355|7315678|
|DefineProperty (writable & enumerable=false)|14,758,337|7379169|
|DefineProperty (writable & enumerable=false & configurable=false)|14,567,500|7283751|
|DefineProperties (getter)|12,437,116|6218559|
|DefineProperties (getter & enumerable=false)|12,402,489|6201245|
|DefineProperties (getter & enumerable=false & configurable=false)|12,429,813|6214907|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:37:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Getter (class)","opsSec":14914888.836698178,"samples":7457445},{"name":"Getter","opsSec":12338339.259801913,"samples":6169170},{"name":"Method","opsSec":14970481.460925892,"samples":7485241},{"name":"DefineProperty (getter)","opsSec":15223918.264394969,"samples":7611960},{"name":"DefineProperty (getter & enumerable=false)","opsSec":12329729.7041813,"samples":6164865},{"name":"DefineProperty (getter & configurable=false)","opsSec":14391990.704814851,"samples":7195996},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12209045.316392012,"samples":6104523},{"name":"DefineProperty (writable)","opsSec":14631355.06346521,"samples":7315678},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14758337.497457601,"samples":7379169},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14567500.806223648,"samples":7283751},{"name":"DefineProperties (getter)","opsSec":12437116.084405664,"samples":6218559},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12402489.975025179,"samples":6201245},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12429813.4276787,"samples":6214907}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,120,263|7560132|
|Setter|6,021,673|3010837|
|Method|12,419,040|6209521|
|DefineProperty (setter)|13,958,781|6979391|
|DefineProperty (setter & enumerable=false)|6,116,916|3058459|
|DefineProperty (setter & configurable=false)|6,088,876|3044439|
|DefineProperty (setter & enumerable=false & configurable=false)|6,112,702|3056352|
|DefineProperty (writable)|14,777,111|7388556|
|DefineProperty (writable & enumerable=false)|14,970,277|7485139|
|DefineProperty (writable & enumerable=false & configurable=false)|14,793,037|7396519|
|DefineProperties (setter)|14,888,713|7444358|
|DefineProperties (setter & enumerable=false)|6,120,770|3060386|
|DefineProperties (setter & enumerable=false & configurable=false)|6,109,188|3054595|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:56:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Setter (class)","opsSec":15120263.183572179,"samples":7560132},{"name":"Setter","opsSec":6021673.518345521,"samples":3010837},{"name":"Method","opsSec":12419040.485066487,"samples":6209521},{"name":"DefineProperty (setter)","opsSec":13958781.050982742,"samples":6979391},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6116916.959997544,"samples":3058459},{"name":"DefineProperty (setter & configurable=false)","opsSec":6088876.563061061,"samples":3044439},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6112702.398504342,"samples":3056352},{"name":"DefineProperty (writable)","opsSec":14777111.55660522,"samples":7388556},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14970277.491012353,"samples":7485139},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14793037.023696035,"samples":7396519},{"name":"DefineProperties (setter)","opsSec":14888713.736722786,"samples":7444358},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6120770.286085586,"samples":3060386},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6109188.362691804,"samples":3054595}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,696,254|1348128|
|Using replaceAll()|2,542,086|1271044|
|Using replaceAll(//g)|2,445,359|1222680|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:04:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using replace(//g)","opsSec":2696254.770507801,"samples":1348128},{"name":"Using replaceAll()","opsSec":2542086.922153795,"samples":1271044},{"name":"Using replaceAll(//g)","opsSec":2445359.7114493246,"samples":1222680}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,932,331|4966166|
|{ ...object, __proto__: null }|2,147,524|1073763|
|{ ...object, newProp: true }|9,467,092|4733547|
|structuredClone|290,737|145369|
|JSON.parse + JSON.stringify|274,036|137019|
|loop + object.keys starting with {}|1,437,505|718753|
|loop + object.keys starting with { __proto__: null }|810,745|405373|
|loop + object.keys starting with { randomProp: true }|576,995|288498|
|object.keys + reduce(FN, {})|1,473,838|736930|
|object.keys + reduce(FN, { __proto__: null })|774,958|387480|
|object.keys + reduce(FN, { newProp: true })|608,456|304229|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:13:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{ ...object }","opsSec":9932331.66232601,"samples":4966166},{"name":"{ ...object, __proto__: null }","opsSec":2147524.7028889996,"samples":1073763},{"name":"{ ...object, newProp: true }","opsSec":9467092.693658555,"samples":4733547},{"name":"structuredClone","opsSec":290737.32548881264,"samples":145369},{"name":"JSON.parse + JSON.stringify","opsSec":274036.61666350625,"samples":137019},{"name":"loop + object.keys starting with {}","opsSec":1437505.0914980958,"samples":718753},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":810745.6935381539,"samples":405373},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":576995.6064885063,"samples":288498},{"name":"object.keys + reduce(FN, {})","opsSec":1473838.4406899211,"samples":736930},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":774958.9414032298,"samples":387480},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":608456.3401299135,"samples":304229}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|296,241|148121|
|Sort using first char|1,061,079|530540|
|Sort using localeCompare|983,635|491818|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:20:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Sort using default","opsSec":296241.5745970672,"samples":148121},{"name":"Sort using first char","opsSec":1061079.5564678193,"samples":530540},{"name":"Sort using localeCompare","opsSec":983635.7678617621,"samples":491818}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,833|917|
|{...smallObject} - Total keys: 2|10,860,721|5430361|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,290|1146|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,860|3431|
|{ ...bigObject, ...anotherBigObject }|1,116|559|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,632,523|3316262|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,690,512|5345257|
|{ ...smallObject, ...anotherSmallObject }|8,689,396|4344699|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:30:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1833.681691195228,"samples":917},{"name":"{...smallObject} - Total keys: 2","opsSec":10860721.218028046,"samples":5430361},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2290.8219585529337,"samples":1146},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6860.206604789907,"samples":3431},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1116.1078044015408,"samples":559},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6632523.801040627,"samples":3316262},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10690512.695726441,"samples":5345257},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8689396.783355948,"samples":4344699}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,142|1072|
|streams.web.Readable reading 1e3 * "some data"|1,772|887|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:35:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2142.86077378395,"samples":1072},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1772.4291208841616,"samples":887}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,329|3165|
|streams.web.WritableStream writing 1e3 * "some data"|2,257|1129|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:41:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6329.334850200875,"samples":3165},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2257.2837774011855,"samples":1129}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|14,968,680|7484342|
|Using backtick (`)|14,769,900|7384951|
|Using array.join|5,750,071|2875195|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:49:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using + sign","opsSec":14968680.916446168,"samples":7484342},{"name":"Using backtick (`)","opsSec":14769900.581979398,"samples":7384951},{"name":"Using array.join","opsSec":5750071.135574068,"samples":2875195}]}-->
