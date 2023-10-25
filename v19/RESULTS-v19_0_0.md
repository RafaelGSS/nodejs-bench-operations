## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|586,912,147|95|
|Using dot notation|603,479,256|95|
|Using define property (writable)|3,183,473|95|
|Using define property initialized (writable)|4,374,571|97|
|Using define property (getter)|1,679,026|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":586912147.4887776,"samples":7},{"name":"Using dot notation","opsSec":603479256.2441746,"samples":6},{"name":"Using define property (writable)","opsSec":3183473.184946333,"samples":5},{"name":"Using define property initialized (writable)","opsSec":4374570.524907555,"samples":7},{"name":"Using define property (getter)","opsSec":1679026.3497326549,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.014ms
new Array(length)|10|0.003ms
array.push|100|0.04ms
new Array(length)|100|0.011ms
array.push|1,000|0.082ms
new Array(length)|1,000|0.045ms
array.push|10,000|0.471ms
new Array(length)|10,000|3.257ms
array.push|1,000,000|36.54ms
new Array(length)|1,000,000|12.215ms
array.push|100,000,000|2,083.827ms
new Array(length)|100,000,000|6,231.648ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.021ms
array.push|100|0.02ms
new Array(length)|100|0.014ms
array.push|1,000|0.074ms
new Array(length)|1,000|0.042ms
array.push|10,000|9.261ms
new Array(length)|10,000|0.275ms
array.push|1,000,000|31.781ms
new Array(length)|1,000,000|11.061ms
array.push|100,000,000|2,996.849ms
new Array(length)|100,000,000|6,422.806ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|299|75|
|Array.from|14|38|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":298.82302994221703,"samples":2},{"name":"Array.from","opsSec":14.044556317959367,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,863|83|
|new Blob (1024)|369|69|
|text (128)|24,020|76|
|text (1024)|11,829|78|
|arrayBuffer (128)|25,747|77|
|arrayBuffer (1024)|14,151|82|
|slice (0, 64)|44,259|77|
|slice (0, 512)|22,139|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":2862.5289942667364,"samples":5},{"name":"new Blob (1024)","opsSec":368.88264631508935,"samples":2},{"name":"text (128)","opsSec":24019.593565031606,"samples":6},{"name":"text (1024)","opsSec":11829.27200230327,"samples":3},{"name":"arrayBuffer (128)","opsSec":25747.024652297587,"samples":5},{"name":"arrayBuffer (1024)","opsSec":14150.609880837434,"samples":4},{"name":"slice (0, 64)","opsSec":44258.61283461409,"samples":5},{"name":"slice (0, 512)","opsSec":22138.690394847697,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|178,809|56|
|[True conditional] Using constructor name|145,021|94|
|[True conditional] Check if property is valid then instanceof |144,684|93|
|[False conditional] Using instanceof only|717,240,089|94|
|[False conditional] Using constructor name|716,919,831|95|
|[False conditional] Check if property is valid then instanceof |714,261,694|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":178809.23780410583,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":145020.68869573664,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":144683.95467273841,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":717240089.3303782,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":716919831.437428,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":714261693.8423669,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,564|92|
|crypto.verify('RSA-SHA256')|4,575|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:45:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":4563.954457927041,"samples":3},{"name":"crypto.verify('RSA-SHA256')","opsSec":4575.029340696502,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|956,218|97|
|fromUnixToISOString(new Date())|1,549,726|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":956218.4280724992,"samples":7},{"name":"fromUnixToISOString(new Date())","opsSec":1549726.1009184343,"samples":5}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,180|80|
|Intl.DateTimeFormat().format(new Date())|7,432|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,645|75|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,343|92|
|Reusing Intl.DateTimeFormat()|343,757|78|
|Date.toLocaleDateString()|416,523|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,171|85|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":6180.027605202336,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":7432.060610031819,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":5645.30931066347,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":9342.86391892148,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":343756.6917806138,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":416522.7243717482,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":9171.077142407665,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|682,799|96|
|Using brackets {}|695,524|94|
|Using '' + |694,752|97|
|Using date.toString()|750,919|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:51:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":682798.8497476443,"samples":5},{"name":"Using brackets {}","opsSec":695523.9261144428,"samples":3},{"name":"Using '' + ","opsSec":694751.9783757286,"samples":5},{"name":"Using date.toString()","opsSec":750918.531583909,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,739,151|95|
|Using delete property (proto: null)|16,970,428|97|
|Using delete property (cached proto: null)|2,767,045|97|
|Using undefined assignment|594,743,073|94|
|Using undefined assignment (proto: null)|19,014,382|96|
|Using undefined property (cached proto: null)|599,232,597|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2739150.887146375,"samples":4},{"name":"Using delete property (proto: null)","opsSec":16970427.614856925,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2767044.869521533,"samples":5},{"name":"Using undefined assignment","opsSec":594743072.8661352,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":19014382.41770142,"samples":9},{"name":"Using undefined property (cached proto: null)","opsSec":599232597.3733352,"samples":6}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|154,593|51|
|NodeError|122,547|85|
|NodeError Range|125,267|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:55:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Error","opsSec":154592.60920318947,"samples":3},{"name":"NodeError","opsSec":122547.24899423248,"samples":3},{"name":"NodeError Range","opsSec":125266.9502471048,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,155,877|92|
|Function returning explicitly undefined|1,169,191|94|
|Function returning implicitly undefined|1,198,603|93|
|Function returning string|1,171,109|96|
|Function returning integer|1,196,331|97|
|Function returning float|1,179,349|97|
|Function returning functions|1,156,688|98|
|Function returning arrow functions|1,165,816|95|
|Function returning empty object|1,189,408|98|
|Function returning empty array|1,184,662|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:58:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1155877.3951134079,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1169191.022769571,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1198603.4884694193,"samples":7},{"name":"Function returning string","opsSec":1171108.5496732488,"samples":8},{"name":"Function returning integer","opsSec":1196331.2589629472,"samples":6},{"name":"Function returning float","opsSec":1179349.0902593394,"samples":5},{"name":"Function returning functions","opsSec":1156687.515312917,"samples":6},{"name":"Function returning arrow functions","opsSec":1165815.5509809393,"samples":6},{"name":"Function returning empty object","opsSec":1189407.7174763824,"samples":6},{"name":"Function returning empty array","opsSec":1184661.8930195,"samples":5}]}-->
