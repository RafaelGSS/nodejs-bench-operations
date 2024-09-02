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
array.push|100|0.023ms
new Array(length)|100|0.013ms
array.push|1,000|0.028ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.252ms
new Array(length)|10,000|0.128ms
array.push|1,000,000|27.528ms
new Array(length)|1,000,000|7.049ms
array.push|100,000,000|1,761.105ms
new Array(length)|100,000,000|3,811.547ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.018ms
new Array(length)|100|0.014ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.347ms
new Array(length)|10,000|0.191ms
array.push|1,000,000|19.463ms
new Array(length)|1,000,000|7.4ms
array.push|100,000,000|1,933.664ms
new Array(length)|100,000,000|4,524.233ms

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
|new Blob (128)|4,577|2289|
|new Blob (1024)|581|291|
|text (128)|4,885|2443|
|text (1024)|630|316|
|arrayBuffer (128)|4,934|2468|
|arrayBuffer (1024)|629|315|
|slice (0, 64)|216,414|108208|
|slice (0, 512)|38,566|19284|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:40:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":4577.124908642896,"samples":2289},{"name":"new Blob (1024)","opsSec":581.6356424946907,"samples":291},{"name":"text (128)","opsSec":4885.218960963375,"samples":2443},{"name":"text (1024)","opsSec":630.3996435097961,"samples":316},{"name":"arrayBuffer (128)","opsSec":4934.9407051070375,"samples":2468},{"name":"arrayBuffer (1024)","opsSec":629.1204016017199,"samples":315},{"name":"slice (0, 64)","opsSec":216414.8261660382,"samples":108208},{"name":"slice (0, 512)","opsSec":38566.43474268335,"samples":19284}]}-->

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

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,212,001|5106001|
|{ ...object, __proto__: null }|2,218,291|1109146|
|{ ...object, newProp: true }|9,830,326|4915164|
|structuredClone|278,517|139259|
|JSON.parse + JSON.stringify|249,025|124513|
|loop + object.keys starting with {}|1,427,918|713960|
|loop + object.keys starting with { __proto__: null }|818,010|409006|
|loop + object.keys starting with { randomProp: true }|653,085|326543|
|object.keys + reduce(FN, {})|1,471,564|735783|
|object.keys + reduce(FN, { __proto__: null })|830,504|415253|
|object.keys + reduce(FN, { newProp: true })|666,013|333007|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:26:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10212001.754912192,"samples":5106001},{"name":"{ ...object, __proto__: null }","opsSec":2218291.5785230007,"samples":1109146},{"name":"{ ...object, newProp: true }","opsSec":9830326.309171502,"samples":4915164},{"name":"structuredClone","opsSec":278517.3928320944,"samples":139259},{"name":"JSON.parse + JSON.stringify","opsSec":249025.43172388384,"samples":124513},{"name":"loop + object.keys starting with {}","opsSec":1427918.3207673875,"samples":713960},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":818010.2314618492,"samples":409006},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":653085.6917434444,"samples":326543},{"name":"object.keys + reduce(FN, {})","opsSec":1471564.8433487476,"samples":735783},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":830504.3788561574,"samples":415253},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":666013.352635953,"samples":333007}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|326,186|163094|
|Sort using first char|1,344,727|672364|
|Sort using localeCompare|1,295,383|647692|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:29:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":326186.29795990646,"samples":163094},{"name":"Sort using first char","opsSec":1344727.6638176364,"samples":672364},{"name":"Sort using localeCompare","opsSec":1295383.4429849675,"samples":647692}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,320|1161|
|{...smallObject} - Total keys: 2|12,277,303|6138652|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,467|1234|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,795|3398|
|{ ...bigObject, ...anotherBigObject }|1,392|697|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,086,912|3543457|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,641,452|5320727|
|{ ...smallObject, ...anotherSmallObject }|9,147,047|4573524|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:30:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2320.368776109678,"samples":1161},{"name":"{...smallObject} - Total keys: 2","opsSec":12277303.31246373,"samples":6138652},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2467.209279163705,"samples":1234},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6795.509010882921,"samples":3398},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1392.4349393314947,"samples":697},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7086912.738522635,"samples":3543457},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10641452.6166237,"samples":5320727},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9147047.39629307,"samples":4573524}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|15,092,581|7546291|
|Using backtick (`)|15,234,371|7617186|
|Using array.join|6,265,793|3134682|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:36:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":15092581.215174647,"samples":7546291},{"name":"Using backtick (`)","opsSec":15234371.29919909,"samples":7617186},{"name":"Using array.join","opsSec":6265793.412577427,"samples":3134682}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,477,157|7238579|
|(short string) (true) String#slice and strict comparison|15,069,165|7534583|
|(long string) (true) String#endsWith|14,054,654|7027328|
|(long string) (true) String#slice and strict comparison|15,213,110|7606556|
|(short string) (false) String#endsWith|15,058,395|7529198|
|(short string) (false) String#slice and strict comparison|15,103,870|7551936|
|(long string) (false) String#endsWith|14,647,118|7323560|
|(long string) (false) String#slice and strict comparison|15,167,030|7583516|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:39:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14477157.478829555,"samples":7238579},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15069165.638304405,"samples":7534583},{"name":"(long string) (true) String#endsWith","opsSec":14054654.229141908,"samples":7027328},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15213110.569830032,"samples":7606556},{"name":"(short string) (false) String#endsWith","opsSec":15058395.879499648,"samples":7529198},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15103870.882329552,"samples":7551936},{"name":"(long string) (false) String#endsWith","opsSec":14647118.740294077,"samples":7323560},{"name":"(long string) (false) String#slice and strict comparison","opsSec":15167030.938275583,"samples":7583516}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,164,488|7582245|
|Using indexof|15,213,527|7606764|
|Using RegExp.test|7,840,876|3920439|
|Using RegExp.text with cached regex pattern|7,855,721|3927861|
|Using new RegExp.test|3,576,048|1788025|
|Using new RegExp.test with cached regex pattern|3,793,856|1896929|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:41:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":15164488.817166768,"samples":7582245},{"name":"Using indexof","opsSec":15213527.969541192,"samples":7606764},{"name":"Using RegExp.test","opsSec":7840876.886584894,"samples":3920439},{"name":"Using RegExp.text with cached regex pattern","opsSec":7855721.292958352,"samples":3927861},{"name":"Using new RegExp.test","opsSec":3576048.6697146352,"samples":1788025},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3793856.869429249,"samples":1896929}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|14,501,577|7250789|
|(short string) (true) String#slice and strict comparison|14,579,626|7289814|
|(long string) (true) String#startsWith|14,077,827|7038914|
|(long string) (true) String#slice and strict comparison|15,166,929|7583465|
|(short string) (false) String#startsWith|15,199,994|7599998|
|(short string) (false) String#slice and strict comparison|15,395,220|7697611|
|(long string) (false) String#startsWith|14,986,963|7493482|
|(long string) (false) String#slice and strict comparison|15,439,928|7719965|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:44:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":14501577.390959356,"samples":7250789},{"name":"(short string) (true) String#slice and strict comparison","opsSec":14579626.746159712,"samples":7289814},{"name":"(long string) (true) String#startsWith","opsSec":14077827.77475345,"samples":7038914},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15166929.02939517,"samples":7583465},{"name":"(short string) (false) String#startsWith","opsSec":15199994.115084132,"samples":7599998},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15395220.645336956,"samples":7697611},{"name":"(long string) (false) String#startsWith","opsSec":14986963.37053075,"samples":7493482},{"name":"(long string) (false) String#slice and strict comparison","opsSec":15439928.147231698,"samples":7719965}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|14,902,405|7451203|
|Using this|15,063,631|7531816|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:47:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using super","opsSec":14902405.761562528,"samples":7451203},{"name":"Using this","opsSec":15063631.156456154,"samples":7531816}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,788,392|3394197|
|Date.now()|9,030,834|4515418|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:49:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6788392.995316914,"samples":3394197},{"name":"Date.now()","opsSec":9030834.248025833,"samples":4515418}]}-->
