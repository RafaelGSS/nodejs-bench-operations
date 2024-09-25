## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|14,725,300|7362651|
|Using dot notation|13,790,698|6895350|
|Using define property (writable)|3,092,854|1546428|
|Using define property initialized (writable)|3,719,171|1859586|
|Using define property (getter)|1,715,561|857781|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:21:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":14725300.321357463,"samples":7362651},{"name":"Using dot notation","opsSec":13790698.538083564,"samples":6895350},{"name":"Using define property (writable)","opsSec":3092854.985548825,"samples":1546428},{"name":"Using define property initialized (writable)","opsSec":3719171.3602958424,"samples":1859586},{"name":"Using define property (getter)","opsSec":1715561.6363043177,"samples":857781}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.027ms
new Array(length)|100|0.014ms
array.push|1,000|0.029ms
new Array(length)|1,000|0.033ms
array.push|10,000|0.257ms
new Array(length)|10,000|0.147ms
array.push|1,000,000|29.497ms
new Array(length)|1,000,000|8.169ms
array.push|100,000,000|1,790.536ms
new Array(length)|100,000,000|3,924.254ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.017ms
new Array(length)|100|0.013ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.362ms
new Array(length)|10,000|0.193ms
array.push|1,000,000|20.314ms
new Array(length)|1,000,000|7.755ms
array.push|100,000,000|1,976.023ms
new Array(length)|100,000,000|4,646.55ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|285|143|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:33:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Array","opsSec":285.2249144154215,"samples":143},{"name":"Array.from","opsSec":23.072749970754806,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,004|2036|
|new Blob (1024)|581|291|
|text (128)|4,904|2453|
|text (1024)|606|305|
|arrayBuffer (128)|4,892|2447|
|arrayBuffer (1024)|601|301|
|slice (0, 64)|226,244|113123|
|slice (0, 512)|39,458|19730|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:14:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":4004.4011042983734,"samples":2036},{"name":"new Blob (1024)","opsSec":581.5411814540589,"samples":291},{"name":"text (128)","opsSec":4904.779681006012,"samples":2453},{"name":"text (1024)","opsSec":606.5136407164987,"samples":305},{"name":"arrayBuffer (128)","opsSec":4892.306175971143,"samples":2447},{"name":"arrayBuffer (1024)","opsSec":601.6340741234225,"samples":301},{"name":"slice (0, 64)","opsSec":226244.86696569718,"samples":113123},{"name":"slice (0, 512)","opsSec":39458.53048542509,"samples":19730}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|309,497|154749|
|[True conditional] Using constructor name|302,955|151478|
|[True conditional] Check if property is valid then instanceof |303,405|151704|
|[False conditional] Using instanceof only|14,638,744|7319373|
|[False conditional] Using constructor name|14,208,700|7104351|
|[False conditional] Check if property is valid then instanceof |14,682,372|7341187|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:49:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":309497.99009571865,"samples":154749},{"name":"[True conditional] Using constructor name","opsSec":302955.01539624686,"samples":151478},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":303405.9016446964,"samples":151704},{"name":"[False conditional] Using instanceof only","opsSec":14638744.858082881,"samples":7319373},{"name":"[False conditional] Using constructor name","opsSec":14208700.834837237,"samples":7104351},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":14682372.59042317,"samples":7341187}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,466|3237|
|crypto.verify('RSA-SHA256')|6,792|3397|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:54:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6466.416083754484,"samples":3237},{"name":"crypto.verify('RSA-SHA256')","opsSec":6792.5055672650005,"samples":3397}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,128,254|564128|
|fromUnixToISOString(new Date())|1,781,535|890768|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:00:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1128254.5874258794,"samples":564128},{"name":"fromUnixToISOString(new Date())","opsSec":1781535.8824168532,"samples":890768}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,831|9916|
|Intl.DateTimeFormat().format(new Date())|19,495|9748|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|22,597|11299|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|22,177|11089|
|Reusing Intl.DateTimeFormat()|665,939|332970|
|Date.toLocaleDateString()|657,424|328713|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,245|11623|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:06:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19831.705023215472,"samples":9916},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19495.437478652806,"samples":9748},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":22597.74166261938,"samples":11299},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":22177.100452455357,"samples":11089},{"name":"Reusing Intl.DateTimeFormat()","opsSec":665939.366025349,"samples":332970},{"name":"Date.toLocaleDateString()","opsSec":657424.9560084745,"samples":328713},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23245.401430918126,"samples":11623}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|883,149|441587|
|Using brackets {}|895,897|447949|
|Using '' + |897,804|448903|
|Using date.toString()|958,742|479372|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:12:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using String()","opsSec":883149.8087600771,"samples":441587},{"name":"Using brackets {}","opsSec":895897.4714200816,"samples":447949},{"name":"Using '' + ","opsSec":897804.0894723424,"samples":448903},{"name":"Using date.toString()","opsSec":958742.2205734577,"samples":479372}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,847,010|1423506|
|Using delete property (proto: null)|7,810,184|3905093|
|Using delete property (cached proto: null)|2,837,175|1418588|
|Using undefined assignment|13,537,986|6768994|
|Using undefined assignment (proto: null)|8,646,295|4323148|
|Using undefined property (cached proto: null)|14,243,781|7121891|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:22:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using delete property","opsSec":2847010.5024684262,"samples":1423506},{"name":"Using delete property (proto: null)","opsSec":7810184.812870629,"samples":3905093},{"name":"Using delete property (cached proto: null)","opsSec":2837175.846802217,"samples":1418588},{"name":"Using undefined assignment","opsSec":13537986.45659889,"samples":6768994},{"name":"Using undefined assignment (proto: null)","opsSec":8646295.723297745,"samples":4323148},{"name":"Using undefined property (cached proto: null)","opsSec":14243781.68666157,"samples":7121891}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|293,128|146565|
|NodeError|294,843|147423|
|NodeError Range|295,654|147828|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:27:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Error","opsSec":293128.2336092347,"samples":146565},{"name":"NodeError","opsSec":294843.94375829096,"samples":147423},{"name":"NodeError Range","opsSec":295654.7978675985,"samples":147828}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,542,178|771090|
|Function returning explicitly undefined|1,535,828|767915|
|Function returning implicitly undefined|1,557,262|778632|
|Function returning string|1,543,109|771555|
|Function returning integer|1,565,403|782702|
|Function returning float|1,550,257|775129|
|Function returning functions|1,513,088|756545|
|Function returning arrow functions|1,526,419|763210|
|Function returning empty object|1,561,914|780958|
|Function returning empty array|1,507,046|753524|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:36:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Function returning null","opsSec":1542178.1277920557,"samples":771090},{"name":"Function returning explicitly undefined","opsSec":1535828.6269702066,"samples":767915},{"name":"Function returning implicitly undefined","opsSec":1557262.7292711886,"samples":778632},{"name":"Function returning string","opsSec":1543109.9506218794,"samples":771555},{"name":"Function returning integer","opsSec":1565403.8215422637,"samples":782702},{"name":"Function returning float","opsSec":1550257.389194998,"samples":775129},{"name":"Function returning functions","opsSec":1513088.3174467408,"samples":756545},{"name":"Function returning arrow functions","opsSec":1526419.3314326378,"samples":763210},{"name":"Function returning empty object","opsSec":1561914.5317938654,"samples":780958},{"name":"Function returning empty array","opsSec":1507046.3000511543,"samples":753524}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|13,163,322|6581662|
|using Array.includes (first item)|13,261,183|6630592|
|Using raw comparison|14,728,988|7364495|
|Using raw comparison (first item)|14,627,696|7313849|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:47:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"using Array.includes","opsSec":13163322.473121023,"samples":6581662},{"name":"using Array.includes (first item)","opsSec":13261183.999919143,"samples":6630592},{"name":"Using raw comparison","opsSec":14728988.762785103,"samples":7364495},{"name":"Using raw comparison (first item)","opsSec":14627696.274069507,"samples":7313849}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|11,868,700|5934351|
|Using Object.getOwnPropertyNames()|12,165,540|6082771|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:55:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using Object.keys()","opsSec":11868700.480778687,"samples":5934351},{"name":"Using Object.getOwnPropertyNames()","opsSec":12165540.223821143,"samples":6082771}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|13,697,914|6848958|
|Length = 10_000 - Array.at|13,794,237|6897119|
|Length = 1_000_000 - Array.at|13,804,244|6902123|
|Length = 100 - Array[length - 1]|14,205,353|7102677|
|Length = 10_000 - Array[length - 1]|14,219,005|7109503|
|Length = 1_000_000 - Array[length - 1]|14,613,769|7306885|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:05:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":13697914.21939194,"samples":6848958},{"name":"Length = 10_000 - Array.at","opsSec":13794237.144836398,"samples":6897119},{"name":"Length = 1_000_000 - Array.at","opsSec":13804244.78511486,"samples":6902123},{"name":"Length = 100 - Array[length - 1]","opsSec":14205353.090756735,"samples":7102677},{"name":"Length = 10_000 - Array[length - 1]","opsSec":14219005.602203734,"samples":7109503},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":14613769.35712833,"samples":7306885}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|14,649,343|7324672|
|~ (small)|15,333,578|7666790|
|Math.floor (long)|14,480,989|7240495|
|~ (long)|15,452,650|7726326|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:18:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Math.floor (small)","opsSec":14649343.73632254,"samples":7324672},{"name":"~ (small)","opsSec":15333578.466562087,"samples":7666790},{"name":"Math.floor (long)","opsSec":14480989.159957154,"samples":7240495},{"name":"~ (long)","opsSec":15452650.392654877,"samples":7726326}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|12,023,529|6011765|
|Object.create({})|1,820,024|910015|
|Cached Empty.prototype|13,786,062|6893032|
|Empty.prototype|1,926,264|963133|
|Empty class|1,221,390|619981|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:25:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Object.create(null)","opsSec":12023529.278630296,"samples":6011765},{"name":"Object.create({})","opsSec":1820024.670965039,"samples":910015},{"name":"Cached Empty.prototype","opsSec":13786062.04237873,"samples":6893032},{"name":"Empty.prototype","opsSec":1926264.8211354252,"samples":963133},{"name":"Empty class","opsSec":1221390.6212524315,"samples":619981}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|14,309,950|7154976|
|Using optional chain (obj.field?.field2) (undefined)|15,525,086|7762544|
|Using and operator (obj.field && obj.field.field2) (Valid)|15,318,726|7659364|
|Using and operator (obj.field && obj.field.field2) (undefined)|14,083,181|7041591|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:36:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":14309950.45463639,"samples":7154976},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":15525086.354414392,"samples":7762544},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":15318726.375844968,"samples":7659364},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":14083181.774582839,"samples":7041591}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|15,340,341|7670171|
|Using parseInt(x, 10) - big number (10 len)|15,139,219|7569610|
|Using + - small number (2 len)|14,873,006|7436504|
|Using + - big number (10 len)|15,243,831|7621916|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:47:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":15340341.601236034,"samples":7670171},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15139219.636792881,"samples":7569610},{"name":"Using + - small number (2 len)","opsSec":14873006.45307067,"samples":7436504},{"name":"Using + - big number (10 len)","opsSec":15243831.786484463,"samples":7621916}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|989,856|494929|
|Using ? operator to avoid rejection|978,384|489193|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:54:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using if to check function existence","opsSec":989856.2558731178,"samples":494929},{"name":"Using ? operator to avoid rejection","opsSec":978384.5324239129,"samples":489193}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|14,808,391|7404196|
|Raw usage underscore usage|14,870,993|7435497|
|Manipulating private properties using #|14,779,769|7389885|
|Manipulating private properties using underscore(_)|14,537,539|7268770|
|Manipulating private properties using Symbol|14,992,272|7496137|
|Manipulating private properties using PrivateSymbol|11,751,070|5875536|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:03:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Raw usage private field","opsSec":14808391.822203992,"samples":7404196},{"name":"Raw usage underscore usage","opsSec":14870993.851349413,"samples":7435497},{"name":"Manipulating private properties using #","opsSec":14779769.261164526,"samples":7389885},{"name":"Manipulating private properties using underscore(_)","opsSec":14537539.331344679,"samples":7268770},{"name":"Manipulating private properties using Symbol","opsSec":14992272.98041819,"samples":7496137},{"name":"Manipulating private properties using PrivateSymbol","opsSec":11751070.18995735,"samples":5875536}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,817,625|2408813|
|Adding property in the object creation - small object|4,783,101|2391551|
|Adding property after the function creation - small class|241,618|120810|
|Adding property in the function creation - small class|242,307|121154|
|Adding property after the class creation - small class|234,362|117182|
|Adding property in the class creation - small class|230,224|117031|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:12:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4817625.903653943,"samples":2408813},{"name":"Adding property in the object creation - small object","opsSec":4783101.158158354,"samples":2391551},{"name":"Adding property after the function creation - small class","opsSec":241618.6169749005,"samples":120810},{"name":"Adding property in the function creation - small class","opsSec":242307.1335095876,"samples":121154},{"name":"Adding property after the class creation - small class","opsSec":234362.69506842337,"samples":117182},{"name":"Adding property in the class creation - small class","opsSec":230224.22298212312,"samples":117031}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|13,314,818|6657410|
|Getter|11,931,934|5965968|
|Method|13,770,197|6885099|
|DefineProperty (getter)|13,663,295|6831648|
|DefineProperty (getter & enumerable=false)|11,962,315|5981158|
|DefineProperty (getter & configurable=false)|13,580,096|6790049|
|DefineProperty (getter & enumerable=false & configurable=false)|12,175,406|6087704|
|DefineProperty (writable)|14,274,914|7137458|
|DefineProperty (writable & enumerable=false)|13,945,275|6972638|
|DefineProperty (writable & enumerable=false & configurable=false)|13,272,644|6636323|
|DefineProperties (getter)|12,028,907|6014454|
|DefineProperties (getter & enumerable=false)|11,770,276|5885139|
|DefineProperties (getter & enumerable=false & configurable=false)|11,819,339|5909670|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:33:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Getter (class)","opsSec":13314818.695509069,"samples":6657410},{"name":"Getter","opsSec":11931934.639581017,"samples":5965968},{"name":"Method","opsSec":13770197.5867188,"samples":6885099},{"name":"DefineProperty (getter)","opsSec":13663295.207558434,"samples":6831648},{"name":"DefineProperty (getter & enumerable=false)","opsSec":11962315.904220495,"samples":5981158},{"name":"DefineProperty (getter & configurable=false)","opsSec":13580096.614937969,"samples":6790049},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12175406.855569482,"samples":6087704},{"name":"DefineProperty (writable)","opsSec":14274914.915100697,"samples":7137458},{"name":"DefineProperty (writable & enumerable=false)","opsSec":13945275.944384877,"samples":6972638},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":13272644.85846196,"samples":6636323},{"name":"DefineProperties (getter)","opsSec":12028907.10991361,"samples":6014454},{"name":"DefineProperties (getter & enumerable=false)","opsSec":11770276.446260294,"samples":5885139},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":11819339.881546335,"samples":5909670}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|14,752,968|7376485|
|Setter|5,907,242|2953622|
|Method|13,000,115|6500058|
|DefineProperty (setter)|14,020,970|7010486|
|DefineProperty (setter & enumerable=false)|6,003,468|3001735|
|DefineProperty (setter & configurable=false)|5,897,719|2948860|
|DefineProperty (setter & enumerable=false & configurable=false)|5,926,699|2963350|
|DefineProperty (writable)|14,935,287|7467644|
|DefineProperty (writable & enumerable=false)|14,723,291|7361646|
|DefineProperty (writable & enumerable=false & configurable=false)|13,925,424|6962713|
|DefineProperties (setter)|14,005,609|7002805|
|DefineProperties (setter & enumerable=false)|5,834,089|2917045|
|DefineProperties (setter & enumerable=false & configurable=false)|5,938,253|2969128|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:54:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Setter (class)","opsSec":14752968.908150908,"samples":7376485},{"name":"Setter","opsSec":5907242.381509339,"samples":2953622},{"name":"Method","opsSec":13000115.714277906,"samples":6500058},{"name":"DefineProperty (setter)","opsSec":14020970.541607602,"samples":7010486},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6003468.775327249,"samples":3001735},{"name":"DefineProperty (setter & configurable=false)","opsSec":5897719.823122672,"samples":2948860},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5926699.466619895,"samples":2963350},{"name":"DefineProperty (writable)","opsSec":14935287.133740664,"samples":7467644},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14723291.49941949,"samples":7361646},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":13925424.440013928,"samples":6962713},{"name":"DefineProperties (setter)","opsSec":14005609.019948008,"samples":7002805},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5834089.778359782,"samples":2917045},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5938253.850619345,"samples":2969128}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,716,277|1358139|
|Using replaceAll()|2,489,052|1244527|
|Using replaceAll(//g)|2,448,090|1224046|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:03:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using replace(//g)","opsSec":2716277.679479926,"samples":1358139},{"name":"Using replaceAll()","opsSec":2489052.735555684,"samples":1244527},{"name":"Using replaceAll(//g)","opsSec":2448090.4136382462,"samples":1224046}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,509,136|4754569|
|{ ...object, __proto__: null }|2,169,932|1084967|
|{ ...object, newProp: true }|9,364,555|4682278|
|structuredClone|278,515|139258|
|JSON.parse + JSON.stringify|246,799|123400|
|loop + object.keys starting with {}|1,278,851|639426|
|loop + object.keys starting with { __proto__: null }|732,660|366331|
|loop + object.keys starting with { randomProp: true }|518,330|259166|
|object.keys + reduce(FN, {})|1,335,404|667703|
|object.keys + reduce(FN, { __proto__: null })|734,847|367424|
|object.keys + reduce(FN, { newProp: true })|523,283|261642|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:13:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{ ...object }","opsSec":9509136.40248184,"samples":4754569},{"name":"{ ...object, __proto__: null }","opsSec":2169932.177256875,"samples":1084967},{"name":"{ ...object, newProp: true }","opsSec":9364555.531842245,"samples":4682278},{"name":"structuredClone","opsSec":278515.810609284,"samples":139258},{"name":"JSON.parse + JSON.stringify","opsSec":246799.45407959694,"samples":123400},{"name":"loop + object.keys starting with {}","opsSec":1278851.1994372963,"samples":639426},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":732660.1947243065,"samples":366331},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":518330.5683711266,"samples":259166},{"name":"object.keys + reduce(FN, {})","opsSec":1335404.659250334,"samples":667703},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":734847.2871972378,"samples":367424},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":523283.46520476096,"samples":261642}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|309,640|154821|
|Sort using first char|1,135,053|567527|
|Sort using localeCompare|1,049,580|524791|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:20:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Sort using default","opsSec":309640.61095212074,"samples":154821},{"name":"Sort using first char","opsSec":1135053.1918419735,"samples":567527},{"name":"Sort using localeCompare","opsSec":1049580.4592162655,"samples":524791}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,843|923|
|{...smallObject} - Total keys: 2|11,283,250|5641626|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,257|1129|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,693|3347|
|{ ...bigObject, ...anotherBigObject }|1,147|574|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,430,271|3215136|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,305,805|5152904|
|{ ...smallObject, ...anotherSmallObject }|8,536,212|4268107|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:28:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1843.5109910095248,"samples":923},{"name":"{...smallObject} - Total keys: 2","opsSec":11283250.307497555,"samples":5641626},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2257.8564635491643,"samples":1129},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6693.818169124672,"samples":3347},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1147.8899908148232,"samples":574},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6430271.228383192,"samples":3215136},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10305805.50603539,"samples":5152904},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8536212.907476671,"samples":4268107}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,155|1078|
|streams.web.Readable reading 1e3 * "some data"|1,778|890|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:34:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2155.331144707174,"samples":1078},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1778.1537856001098,"samples":890}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,394|3198|
|streams.web.WritableStream writing 1e3 * "some data"|2,297|1149|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:40:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6394.1458639471,"samples":3198},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2297.4451945550127,"samples":1149}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|14,484,882|7242442|
|Using backtick (`)|14,395,807|7197904|
|Using array.join|5,737,230|2868616|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:47:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using + sign","opsSec":14484882.435534682,"samples":7242442},{"name":"Using backtick (`)","opsSec":14395807.99996266,"samples":7197904},{"name":"Using array.join","opsSec":5737230.600138845,"samples":2868616}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,828,985|7414493|
|(short string) (true) String#slice and strict comparison|13,235,751|6617876|
|(long string) (true) String#endsWith|14,000,313|7000157|
|(long string) (true) String#slice and strict comparison|12,793,747|6396874|
|(short string) (false) String#endsWith|15,188,186|7594094|
|(short string) (false) String#slice and strict comparison|12,887,299|6443650|
|(long string) (false) String#endsWith|14,677,784|7338893|
|(long string) (false) String#slice and strict comparison|11,978,702|5989352|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:02:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14828985.94061628,"samples":7414493},{"name":"(short string) (true) String#slice and strict comparison","opsSec":13235751.603003973,"samples":6617876},{"name":"(long string) (true) String#endsWith","opsSec":14000313.467615284,"samples":7000157},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12793747.770062841,"samples":6396874},{"name":"(short string) (false) String#endsWith","opsSec":15188186.390132809,"samples":7594094},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12887299.768165426,"samples":6443650},{"name":"(long string) (false) String#endsWith","opsSec":14677784.884542651,"samples":7338893},{"name":"(long string) (false) String#slice and strict comparison","opsSec":11978702.921734737,"samples":5989352}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,051,575|4025788|
|Using indexof|7,811,453|3905727|
|Using RegExp.test|7,200,823|3600412|
|Using RegExp.text with cached regex pattern|7,488,143|3744072|
|Using new RegExp.test|3,351,263|1675632|
|Using new RegExp.test with cached regex pattern|3,629,364|1814683|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:14:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using includes","opsSec":8051575.951721722,"samples":4025788},{"name":"Using indexof","opsSec":7811453.484468136,"samples":3905727},{"name":"Using RegExp.test","opsSec":7200823.539062155,"samples":3600412},{"name":"Using RegExp.text with cached regex pattern","opsSec":7488143.970092146,"samples":3744072},{"name":"Using new RegExp.test","opsSec":3351263.43028912,"samples":1675632},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3629364.9329789714,"samples":1814683}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|14,813,247|7406624|
|(short string) (true) String#slice and strict comparison|12,717,336|6358669|
|(long string) (true) String#startsWith|14,187,912|7093957|
|(long string) (true) String#slice and strict comparison|12,599,454|6299728|
|(short string) (false) String#startsWith|13,931,437|6965719|
|(short string) (false) String#slice and strict comparison|12,981,415|6490708|
|(long string) (false) String#startsWith|15,434,653|7717327|
|(long string) (false) String#slice and strict comparison|12,360,300|6180151|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:28:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":14813247.792625455,"samples":7406624},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12717336.44847101,"samples":6358669},{"name":"(long string) (true) String#startsWith","opsSec":14187912.354419427,"samples":7093957},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12599454.36194827,"samples":6299728},{"name":"(short string) (false) String#startsWith","opsSec":13931437.192101046,"samples":6965719},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12981415.818462057,"samples":6490708},{"name":"(long string) (false) String#startsWith","opsSec":15434653.259021843,"samples":7717327},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12360300.220033428,"samples":6180151}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|15,057,294|7528648|
|Using this|13,647,105|6823553|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:37:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using super","opsSec":15057294.765399903,"samples":7528648},{"name":"Using this","opsSec":13647105.372196151,"samples":6823553}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,176,110|3088056|
|Date.now()|8,335,937|4167969|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:44:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().getTime()","opsSec":6176110.5671432335,"samples":3088056},{"name":"Date.now()","opsSec":8335937.333135235,"samples":4167969}]}-->
