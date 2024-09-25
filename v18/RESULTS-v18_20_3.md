## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,118,355|7559178|
|Using dot notation|14,837,241|7418621|
|Using define property (writable)|2,876,390|1438196|
|Using define property initialized (writable)|3,731,545|1865773|
|Using define property (getter)|1,814,600|909026|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:16:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":15118355.637695704,"samples":7559178},{"name":"Using dot notation","opsSec":14837241.080331914,"samples":7418621},{"name":"Using define property (writable)","opsSec":2876390.3489134163,"samples":1438196},{"name":"Using define property initialized (writable)","opsSec":3731545.2163310926,"samples":1865773},{"name":"Using define property (getter)","opsSec":1814600.347054544,"samples":909026}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.034ms
new Array(length)|100|0.012ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.406ms
new Array(length)|10,000|0.142ms
array.push|1,000,000|26.229ms
new Array(length)|1,000,000|15.515ms
array.push|100,000,000|1,877.957ms
new Array(length)|100,000,000|4,185.117ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.017ms
array.push|100|0.014ms
new Array(length)|100|0.01ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.025ms
array.push|10,000|0.477ms
new Array(length)|10,000|3.287ms
array.push|1,000,000|259.73ms
new Array(length)|1,000,000|4.834ms
array.push|100,000,000|2,322.254ms
new Array(length)|100,000,000|4,491.991ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|238|120|
|Array.from|21|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:03:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Array","opsSec":238.2257730567452,"samples":120},{"name":"Array.from","opsSec":21.554901374312806,"samples":11}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,347|2174|
|new Blob (1024)|495|248|
|text (128)|45,551|22776|
|text (1024)|30,449|15225|
|arrayBuffer (128)|46,339|23170|
|arrayBuffer (1024)|31,371|15686|
|slice (0, 64)|88,873|44437|
|slice (0, 512)|49,001|24501|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:11:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":4347.425539880528,"samples":2174},{"name":"new Blob (1024)","opsSec":495.8536150869061,"samples":248},{"name":"text (128)","opsSec":45551.87190703357,"samples":22776},{"name":"text (1024)","opsSec":30449.93867337072,"samples":15225},{"name":"arrayBuffer (128)","opsSec":46339.3827586058,"samples":23170},{"name":"arrayBuffer (1024)","opsSec":31371.20373661737,"samples":15686},{"name":"slice (0, 64)","opsSec":88873.39690128129,"samples":44437},{"name":"slice (0, 512)","opsSec":49001.8233998031,"samples":24501}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|253,769|126885|
|[True conditional] Using constructor name|259,006|129504|
|[True conditional] Check if property is valid then instanceof |266,374|133188|
|[False conditional] Using instanceof only|10,712,546|5356274|
|[False conditional] Using constructor name|14,182,466|7091234|
|[False conditional] Check if property is valid then instanceof |12,976,662|6488332|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:17:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":253769.16762062954,"samples":126885},{"name":"[True conditional] Using constructor name","opsSec":259006.13824053586,"samples":129504},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":266374.74111368303,"samples":133188},{"name":"[False conditional] Using instanceof only","opsSec":10712546.90789554,"samples":5356274},{"name":"[False conditional] Using constructor name","opsSec":14182466.594118861,"samples":7091234},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":12976662.350576611,"samples":6488332}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,284|3643|
|crypto.verify('RSA-SHA256')|7,241|3621|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:27:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7284.437415578734,"samples":3643},{"name":"crypto.verify('RSA-SHA256')","opsSec":7241.15827315259,"samples":3621}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,951,750|975876|
|fromUnixToISOString(new Date())|1,730,982|865501|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:32:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1951750.8054103493,"samples":975876},{"name":"fromUnixToISOString(new Date())","opsSec":1730982.855453063,"samples":865501}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|21,259|10630|
|Intl.DateTimeFormat().format(new Date())|20,564|10283|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,460|10731|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|20,470|10236|
|Reusing Intl.DateTimeFormat()|643,023|321512|
|Date.toLocaleDateString()|661,410|330706|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,986|10494|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:37:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":21259.050997844824,"samples":10630},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":20564.988120874335,"samples":10283},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":21460.34527851865,"samples":10731},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":20470.805283497524,"samples":10236},{"name":"Reusing Intl.DateTimeFormat()","opsSec":643023.6348891486,"samples":321512},{"name":"Date.toLocaleDateString()","opsSec":661410.3833103747,"samples":330706},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":20986.861377843954,"samples":10494}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|887,687|443844|
|Using brackets {}|882,307|441154|
|Using '' + |893,645|446823|
|Using date.toString()|976,056|488029|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:45:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using String()","opsSec":887687.7121712164,"samples":443844},{"name":"Using brackets {}","opsSec":882307.5004536158,"samples":441154},{"name":"Using '' + ","opsSec":893645.2726808141,"samples":446823},{"name":"Using date.toString()","opsSec":976056.739334151,"samples":488029}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,394,705|1197353|
|Using delete property (proto: null)|7,783,176|3891589|
|Using delete property (cached proto: null)|2,493,005|1246503|
|Using undefined assignment|12,743,240|6371621|
|Using undefined assignment (proto: null)|8,171,916|4086813|
|Using undefined property (cached proto: null)|11,345,938|5672970|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:50:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using delete property","opsSec":2394705.3379969285,"samples":1197353},{"name":"Using delete property (proto: null)","opsSec":7783176.093612931,"samples":3891589},{"name":"Using delete property (cached proto: null)","opsSec":2493005.870490406,"samples":1246503},{"name":"Using undefined assignment","opsSec":12743240.750873998,"samples":6371621},{"name":"Using undefined assignment (proto: null)","opsSec":8171916.750475733,"samples":4086813},{"name":"Using undefined property (cached proto: null)","opsSec":11345938.58044453,"samples":5672970}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|266,466|133234|
|NodeError|261,949|130975|
|NodeError Range|264,387|132194|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:26:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Error","opsSec":266466.18525802635,"samples":133234},{"name":"NodeError","opsSec":261949.8946420353,"samples":130975},{"name":"NodeError Range","opsSec":264387.0549425995,"samples":132194}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,543,622|771812|
|Function returning explicitly undefined|1,560,784|780393|
|Function returning implicitly undefined|1,590,607|795304|
|Function returning string|1,559,957|779979|
|Function returning integer|1,590,098|795050|
|Function returning float|1,548,841|774421|
|Function returning functions|1,532,415|766208|
|Function returning arrow functions|1,558,321|779161|
|Function returning empty object|1,551,179|775590|
|Function returning empty array|1,570,562|785282|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:31:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Function returning null","opsSec":1543622.771101593,"samples":771812},{"name":"Function returning explicitly undefined","opsSec":1560784.9678230558,"samples":780393},{"name":"Function returning implicitly undefined","opsSec":1590607.026438873,"samples":795304},{"name":"Function returning string","opsSec":1559957.7403077353,"samples":779979},{"name":"Function returning integer","opsSec":1590098.6850898117,"samples":795050},{"name":"Function returning float","opsSec":1548841.9441561596,"samples":774421},{"name":"Function returning functions","opsSec":1532415.476424412,"samples":766208},{"name":"Function returning arrow functions","opsSec":1558321.282581878,"samples":779161},{"name":"Function returning empty object","opsSec":1551179.827534938,"samples":775590},{"name":"Function returning empty array","opsSec":1570562.0160962984,"samples":785282}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|13,162,547|6581274|
|using Array.includes (first item)|14,288,815|7144408|
|Using raw comparison|15,331,449|7665725|
|Using raw comparison (first item)|15,276,335|7638168|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:39:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"using Array.includes","opsSec":13162547.936451532,"samples":6581274},{"name":"using Array.includes (first item)","opsSec":14288815.331777383,"samples":7144408},{"name":"Using raw comparison","opsSec":15331449.339475438,"samples":7665725},{"name":"Using raw comparison (first item)","opsSec":15276335.841651304,"samples":7638168}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|12,320,312|6160157|
|Using Object.getOwnPropertyNames()|12,977,781|6488891|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:51:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using Object.keys()","opsSec":12320312.728866795,"samples":6160157},{"name":"Using Object.getOwnPropertyNames()","opsSec":12977781.741880681,"samples":6488891}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|8,524,591|4262296|
|Length = 10_000 - Array.at|8,445,729|4222865|
|Length = 1_000_000 - Array.at|8,383,643|4191822|
|Length = 100 - Array[length - 1]|14,744,170|7372086|
|Length = 10_000 - Array[length - 1]|14,814,823|7407412|
|Length = 1_000_000 - Array[length - 1]|14,869,915|7434958|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:58:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":8524591.84774308,"samples":4262296},{"name":"Length = 10_000 - Array.at","opsSec":8445729.909670314,"samples":4222865},{"name":"Length = 1_000_000 - Array.at","opsSec":8383643.339359971,"samples":4191822},{"name":"Length = 100 - Array[length - 1]","opsSec":14744170.421225464,"samples":7372086},{"name":"Length = 10_000 - Array[length - 1]","opsSec":14814823.334110877,"samples":7407412},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":14869915.004777918,"samples":7434958}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|15,152,676|7576339|
|~ (small)|15,858,059|7929030|
|Math.floor (long)|15,680,895|7840448|
|~ (long)|15,893,394|7946698|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:11:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Math.floor (small)","opsSec":15152676.731130945,"samples":7576339},{"name":"~ (small)","opsSec":15858059.822388379,"samples":7929030},{"name":"Math.floor (long)","opsSec":15680895.754857723,"samples":7840448},{"name":"~ (long)","opsSec":15893394.491363084,"samples":7946698}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|12,206,025|6103013|
|Object.create({})|1,302,843|651422|
|Cached Empty.prototype|14,752,240|7376121|
|Empty.prototype|1,365,531|682766|
|Empty class|858,352|430075|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:21:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Object.create(null)","opsSec":12206025.373477994,"samples":6103013},{"name":"Object.create({})","opsSec":1302843.3778142931,"samples":651422},{"name":"Cached Empty.prototype","opsSec":14752240.460039847,"samples":7376121},{"name":"Empty.prototype","opsSec":1365531.890980445,"samples":682766},{"name":"Empty class","opsSec":858352.0290582796,"samples":430075}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|15,109,718|7554861|
|Using optional chain (obj.field?.field2) (undefined)|14,874,329|7437165|
|Using and operator (obj.field && obj.field.field2) (Valid)|15,153,883|7576942|
|Using and operator (obj.field && obj.field.field2) (undefined)|15,036,580|7518291|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:31:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":15109718.884960856,"samples":7554861},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":14874329.873884117,"samples":7437165},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":15153883.545274183,"samples":7576942},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":15036580.35311256,"samples":7518291}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|14,846,859|7423430|
|Using parseInt(x, 10) - big number (10 len)|8,134,980|4067491|
|Using + - small number (2 len)|15,387,640|7693821|
|Using + - big number (10 len)|14,716,169|7358085|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:42:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":14846859.710789958,"samples":7423430},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":8134980.683179988,"samples":4067491},{"name":"Using + - small number (2 len)","opsSec":15387640.82630279,"samples":7693821},{"name":"Using + - big number (10 len)","opsSec":14716169.20826064,"samples":7358085}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|703,526|351764|
|Using ? operator to avoid rejection|717,408|358705|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:50:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using if to check function existence","opsSec":703526.3941484006,"samples":351764},{"name":"Using ? operator to avoid rejection","opsSec":717408.3528726668,"samples":358705}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|13,980,663|6990332|
|Raw usage underscore usage|14,915,770|7457886|
|Manipulating private properties using #|13,468,865|6734433|
|Manipulating private properties using underscore(_)|13,764,255|6882129|
|Manipulating private properties using Symbol|13,244,425|6622213|
|Manipulating private properties using PrivateSymbol|10,554,643|5277322|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:56:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Raw usage private field","opsSec":13980663.259341463,"samples":6990332},{"name":"Raw usage underscore usage","opsSec":14915770.39215453,"samples":7457886},{"name":"Manipulating private properties using #","opsSec":13468865.768490542,"samples":6734433},{"name":"Manipulating private properties using underscore(_)","opsSec":13764255.532452386,"samples":6882129},{"name":"Manipulating private properties using Symbol","opsSec":13244425.544449965,"samples":6622213},{"name":"Manipulating private properties using PrivateSymbol","opsSec":10554643.03900165,"samples":5277322}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,693,748|1346875|
|Adding property in the object creation - small object|2,690,561|1345281|
|Adding property after the function creation - small class|191,253|95627|
|Adding property in the function creation - small class|194,373|97187|
|Adding property after the class creation - small class|166,851|83426|
|Adding property in the class creation - small class|157,939|78970|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:09:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2693748.103627035,"samples":1346875},{"name":"Adding property in the object creation - small object","opsSec":2690561.4631415117,"samples":1345281},{"name":"Adding property after the function creation - small class","opsSec":191253.21542533368,"samples":95627},{"name":"Adding property in the function creation - small class","opsSec":194373.23632631337,"samples":97187},{"name":"Adding property after the class creation - small class","opsSec":166851.9136363257,"samples":83426},{"name":"Adding property in the class creation - small class","opsSec":157939.05428242462,"samples":78970}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|14,675,457|7337729|
|Getter|12,919,895|6459948|
|Method|14,988,097|7494049|
|DefineProperty (getter)|14,660,044|7330023|
|DefineProperty (getter & enumerable=false)|12,831,994|6415998|
|DefineProperty (getter & configurable=false)|15,210,508|7605255|
|DefineProperty (getter & enumerable=false & configurable=false)|13,055,412|6527707|
|DefineProperty (writable)|14,879,456|7439729|
|DefineProperty (writable & enumerable=false)|15,237,602|7618802|
|DefineProperty (writable & enumerable=false & configurable=false)|15,428,052|7714027|
|DefineProperties (getter)|13,032,813|6516407|
|DefineProperties (getter & enumerable=false)|12,808,948|6404475|
|DefineProperties (getter & enumerable=false & configurable=false)|12,991,595|6495798|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:19:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Getter (class)","opsSec":14675457.449196331,"samples":7337729},{"name":"Getter","opsSec":12919895.240358522,"samples":6459948},{"name":"Method","opsSec":14988097.664934076,"samples":7494049},{"name":"DefineProperty (getter)","opsSec":14660044.534571473,"samples":7330023},{"name":"DefineProperty (getter & enumerable=false)","opsSec":12831994.682982156,"samples":6415998},{"name":"DefineProperty (getter & configurable=false)","opsSec":15210508.070775837,"samples":7605255},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13055412.703142332,"samples":6527707},{"name":"DefineProperty (writable)","opsSec":14879456.22157445,"samples":7439729},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15237602.311596949,"samples":7618802},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15428052.651028337,"samples":7714027},{"name":"DefineProperties (getter)","opsSec":13032813.684175652,"samples":6516407},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12808948.576791212,"samples":6404475},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12991595.339616604,"samples":6495798}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|14,706,638|7353320|
|Setter|5,802,918|2901460|
|Method|14,869,103|7434552|
|DefineProperty (setter)|14,972,602|7486302|
|DefineProperty (setter & enumerable=false)|5,783,242|2891622|
|DefineProperty (setter & configurable=false)|5,683,595|2841799|
|DefineProperty (setter & enumerable=false & configurable=false)|5,705,525|2852763|
|DefineProperty (writable)|14,581,770|7290886|
|DefineProperty (writable & enumerable=false)|14,542,654|7271328|
|DefineProperty (writable & enumerable=false & configurable=false)|14,699,133|7349567|
|DefineProperties (setter)|14,647,750|7323876|
|DefineProperties (setter & enumerable=false)|5,777,879|2888940|
|DefineProperties (setter & enumerable=false & configurable=false)|5,764,124|2882063|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:43:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Setter (class)","opsSec":14706638.097758064,"samples":7353320},{"name":"Setter","opsSec":5802918.106518399,"samples":2901460},{"name":"Method","opsSec":14869103.780981109,"samples":7434552},{"name":"DefineProperty (setter)","opsSec":14972602.445654243,"samples":7486302},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5783242.134332079,"samples":2891622},{"name":"DefineProperty (setter & configurable=false)","opsSec":5683595.958812607,"samples":2841799},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5705525.366757582,"samples":2852763},{"name":"DefineProperty (writable)","opsSec":14581770.645932239,"samples":7290886},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14542654.161063148,"samples":7271328},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14699133.24022528,"samples":7349567},{"name":"DefineProperties (setter)","opsSec":14647750.620543122,"samples":7323876},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5777879.967928822,"samples":2888940},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5764124.740048024,"samples":2882063}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,564,244|1282123|
|Using replaceAll()|2,349,328|1174665|
|Using replaceAll(//g)|2,328,646|1164324|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:00:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using replace(//g)","opsSec":2564244.2686090865,"samples":1282123},{"name":"Using replaceAll()","opsSec":2349328.8269435614,"samples":1174665},{"name":"Using replaceAll(//g)","opsSec":2328646.1616101293,"samples":1164324}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|8,847,222|4423647|
|{ ...object, __proto__: null }|9,009,270|4504636|
|{ ...object, newProp: true }|608,150|304076|
|structuredClone|241,122|120562|
|JSON.parse + JSON.stringify|191,667|95834|
|loop + object.keys starting with {}|1,110,055|555028|
|loop + object.keys starting with { __proto__: null }|634,883|317442|
|loop + object.keys starting with { randomProp: true }|465,847|232924|
|object.keys + reduce(FN, {})|1,082,464|541233|
|object.keys + reduce(FN, { __proto__: null })|612,478|306240|
|object.keys + reduce(FN, { newProp: true })|470,250|235126|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:06:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{ ...object }","opsSec":8847222.792790107,"samples":4423647},{"name":"{ ...object, __proto__: null }","opsSec":9009270.368980318,"samples":4504636},{"name":"{ ...object, newProp: true }","opsSec":608150.9131349968,"samples":304076},{"name":"structuredClone","opsSec":241122.58026841938,"samples":120562},{"name":"JSON.parse + JSON.stringify","opsSec":191667.1326015777,"samples":95834},{"name":"loop + object.keys starting with {}","opsSec":1110055.0135957948,"samples":555028},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":634883.5106342722,"samples":317442},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":465847.8767713978,"samples":232924},{"name":"object.keys + reduce(FN, {})","opsSec":1082464.5195663972,"samples":541233},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":612478.3568125844,"samples":306240},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":470250.64789964043,"samples":235126}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|256,096|128049|
|Sort using first char|1,051,796|525899|
|Sort using localeCompare|949,381|474691|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:16:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Sort using default","opsSec":256096.7012365048,"samples":128049},{"name":"Sort using first char","opsSec":1051796.9510651575,"samples":525899},{"name":"Sort using localeCompare","opsSec":949381.2876725801,"samples":474691}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,815|908|
|{...smallObject} - Total keys: 2|11,562,249|5781125|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,173|1087|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,213|3107|
|{ ...bigObject, ...anotherBigObject }|1,113|557|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,157,642|3078822|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|9,601,733|4800867|
|{ ...smallObject, ...anotherSmallObject }|7,978,672|3989337|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:22:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1815.0583877410998,"samples":908},{"name":"{...smallObject} - Total keys: 2","opsSec":11562249.658691635,"samples":5781125},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2173.75180549183,"samples":1087},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6213.57935246845,"samples":3107},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1113.7296153250284,"samples":557},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6157642.82939953,"samples":3078822},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":9601733.79275299,"samples":4800867},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":7978672.195584,"samples":3989337}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,269|1135|
|streams.web.Readable reading 1e3 * "some data"|643|322|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:32:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2269.9286244106606,"samples":1135},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":643.6279482638176,"samples":322}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,899|2450|
|streams.web.WritableStream writing 1e3 * "some data"|1,953|980|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:37:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4899.282372329273,"samples":2450},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1953.4317226261444,"samples":980}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|14,642,219|7321110|
|Using backtick (`)|14,728,946|7364475|
|Using array.join|5,602,352|2801177|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:43:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using + sign","opsSec":14642219.046145067,"samples":7321110},{"name":"Using backtick (`)","opsSec":14728946.906012826,"samples":7364475},{"name":"Using array.join","opsSec":5602352.562718877,"samples":2801177}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|12,408,875|6204438|
|(short string) (true) String#slice and strict comparison|12,587,205|6293603|
|(long string) (true) String#endsWith|12,313,079|6156540|
|(long string) (true) String#slice and strict comparison|12,003,973|6001987|
|(short string) (false) String#endsWith|12,752,433|6376217|
|(short string) (false) String#slice and strict comparison|12,919,679|6459840|
|(long string) (false) String#endsWith|12,582,074|6291038|
|(long string) (false) String#slice and strict comparison|12,468,376|6234189|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:52:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":12408875.038993927,"samples":6204438},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12587205.65272529,"samples":6293603},{"name":"(long string) (true) String#endsWith","opsSec":12313079.66460005,"samples":6156540},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12003973.669666016,"samples":6001987},{"name":"(short string) (false) String#endsWith","opsSec":12752433.71857139,"samples":6376217},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12919679.188439434,"samples":6459840},{"name":"(long string) (false) String#endsWith","opsSec":12582074.993332593,"samples":6291038},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12468376.509194655,"samples":6234189}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,483,195|4241598|
|Using indexof|8,663,066|4331534|
|Using RegExp.test|7,868,213|3934107|
|Using RegExp.text with cached regex pattern|8,108,127|4054064|
|Using new RegExp.test|3,182,505|1591253|
|Using new RegExp.test with cached regex pattern|3,546,703|1773352|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:07:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using includes","opsSec":8483195.78586236,"samples":4241598},{"name":"Using indexof","opsSec":8663066.980061825,"samples":4331534},{"name":"Using RegExp.test","opsSec":7868213.497192597,"samples":3934107},{"name":"Using RegExp.text with cached regex pattern","opsSec":8108127.517503274,"samples":4054064},{"name":"Using new RegExp.test","opsSec":3182505.4497269094,"samples":1591253},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3546703.701423905,"samples":1773352}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|13,517,399|6758700|
|(short string) (true) String#slice and strict comparison|12,148,508|6074255|
|(long string) (true) String#startsWith|12,809,064|6404533|
|(long string) (true) String#slice and strict comparison|11,483,718|5741860|
|(short string) (false) String#startsWith|14,540,954|7270478|
|(short string) (false) String#slice and strict comparison|12,588,872|6294437|
|(long string) (false) String#startsWith|14,081,865|7040933|
|(long string) (false) String#slice and strict comparison|11,859,161|5929582|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:20:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":13517399.345872488,"samples":6758700},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12148508.558573434,"samples":6074255},{"name":"(long string) (true) String#startsWith","opsSec":12809064.763735406,"samples":6404533},{"name":"(long string) (true) String#slice and strict comparison","opsSec":11483718.849811908,"samples":5741860},{"name":"(short string) (false) String#startsWith","opsSec":14540954.500269404,"samples":7270478},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12588872.432976814,"samples":6294437},{"name":"(long string) (false) String#startsWith","opsSec":14081865.535108013,"samples":7040933},{"name":"(long string) (false) String#slice and strict comparison","opsSec":11859161.422872772,"samples":5929582}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|14,493,057|7246529|
|Using this|13,995,075|6997538|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:34:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using super","opsSec":14493057.1926209,"samples":7246529},{"name":"Using this","opsSec":13995075.075008104,"samples":6997538}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|5,942,044|2971023|
|Date.now()|8,961,998|4481000|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:41:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().getTime()","opsSec":5942044.54425856,"samples":2971023},{"name":"Date.now()","opsSec":8961998.738274515,"samples":4481000}]}-->
