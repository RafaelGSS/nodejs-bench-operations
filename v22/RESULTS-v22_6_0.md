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
