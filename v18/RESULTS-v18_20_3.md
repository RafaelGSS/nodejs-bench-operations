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
array.push|100|0.027ms
new Array(length)|100|0.013ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.387ms
new Array(length)|10,000|0.143ms
array.push|1,000,000|26.412ms
new Array(length)|1,000,000|15.097ms
array.push|100,000,000|1,865.36ms
new Array(length)|100,000,000|4,179.022ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.019ms
array.push|100|0.017ms
new Array(length)|100|0.01ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.492ms
new Array(length)|10,000|3.257ms
array.push|1,000,000|257.752ms
new Array(length)|1,000,000|4.73ms
array.push|100,000,000|2,287.394ms
new Array(length)|100,000,000|4,417.199ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|279|140|
|Array.from|20|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:32:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Array","opsSec":279.15160690256664,"samples":140},{"name":"Array.from","opsSec":20.743625482008866,"samples":11}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,309|2155|
|new Blob (1024)|525|263|
|text (128)|49,646|24824|
|text (1024)|28,841|14421|
|arrayBuffer (128)|48,497|24249|
|arrayBuffer (1024)|31,575|15788|
|slice (0, 64)|85,221|42611|
|slice (0, 512)|50,162|25082|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:37:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":4309.6165734077695,"samples":2155},{"name":"new Blob (1024)","opsSec":525.2689139189013,"samples":263},{"name":"text (128)","opsSec":49646.247485724656,"samples":24824},{"name":"text (1024)","opsSec":28841.199367943853,"samples":14421},{"name":"arrayBuffer (128)","opsSec":48497.42608214832,"samples":24249},{"name":"arrayBuffer (1024)","opsSec":31575.650332290967,"samples":15788},{"name":"slice (0, 64)","opsSec":85221.54116269681,"samples":42611},{"name":"slice (0, 512)","opsSec":50162.41637278998,"samples":25082}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|250,381|125191|
|[True conditional] Using constructor name|268,724|134363|
|[True conditional] Check if property is valid then instanceof |274,666|137334|
|[False conditional] Using instanceof only|11,155,486|5577744|
|[False conditional] Using constructor name|15,083,875|7541938|
|[False conditional] Check if property is valid then instanceof |15,061,669|7530835|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:42:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":250381.8773087979,"samples":125191},{"name":"[True conditional] Using constructor name","opsSec":268724.87781701254,"samples":134363},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":274666.336080793,"samples":137334},{"name":"[False conditional] Using instanceof only","opsSec":11155486.460993472,"samples":5577744},{"name":"[False conditional] Using constructor name","opsSec":15083875.10043228,"samples":7541938},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":15061669.756339254,"samples":7530835}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,165|3583|
|crypto.verify('RSA-SHA256')|7,152|3577|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:52:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7165.864221118521,"samples":3583},{"name":"crypto.verify('RSA-SHA256')","opsSec":7152.926660338077,"samples":3577}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,963,850|981926|
|fromUnixToISOString(new Date())|1,788,397|894199|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:57:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1963850.1455955743,"samples":981926},{"name":"fromUnixToISOString(new Date())","opsSec":1788397.7065273228,"samples":894199}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|21,477|10739|
|Intl.DateTimeFormat().format(new Date())|21,083|10542|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,803|10902|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|21,365|10683|
|Reusing Intl.DateTimeFormat()|657,401|328701|
|Date.toLocaleDateString()|664,893|332447|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,176|10589|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:03:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":21477.17579204658,"samples":10739},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":21083.189730926482,"samples":10542},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":21803.303516588814,"samples":10902},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":21365.4541136941,"samples":10683},{"name":"Reusing Intl.DateTimeFormat()","opsSec":657401.1321920607,"samples":328701},{"name":"Date.toLocaleDateString()","opsSec":664893.7394637002,"samples":332447},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21176.042910516022,"samples":10589}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|880,095|440048|
|Using brackets {}|875,332|437667|
|Using '' + |878,930|439466|
|Using date.toString()|965,883|482942|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:10:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using String()","opsSec":880095.314847445,"samples":440048},{"name":"Using brackets {}","opsSec":875332.7693856625,"samples":437667},{"name":"Using '' + ","opsSec":878930.6288184873,"samples":439466},{"name":"Using date.toString()","opsSec":965883.1692262036,"samples":482942}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,533,080|1266859|
|Using delete property (proto: null)|8,018,146|4009074|
|Using delete property (cached proto: null)|2,588,809|1294405|
|Using undefined assignment|13,537,707|6768854|
|Using undefined assignment (proto: null)|8,169,987|4084994|
|Using undefined property (cached proto: null)|13,334,041|6667021|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:15:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using delete property","opsSec":2533080.2623489047,"samples":1266859},{"name":"Using delete property (proto: null)","opsSec":8018146.208088428,"samples":4009074},{"name":"Using delete property (cached proto: null)","opsSec":2588809.4874708885,"samples":1294405},{"name":"Using undefined assignment","opsSec":13537707.843043344,"samples":6768854},{"name":"Using undefined assignment (proto: null)","opsSec":8169987.061389739,"samples":4084994},{"name":"Using undefined property (cached proto: null)","opsSec":13334041.787672006,"samples":6667021}]}-->

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
|Getter (class)|17,144,714|8572358|
|Getter|13,611,438|6805720|
|Method|16,900,596|8450299|
|DefineProperty (getter)|17,066,321|8533161|
|DefineProperty (getter & enumerable=false)|13,953,050|6976526|
|DefineProperty (getter & configurable=false)|16,267,771|8133886|
|DefineProperty (getter & enumerable=false & configurable=false)|13,216,730|6608366|
|DefineProperty (writable)|17,023,023|8511512|
|DefineProperty (writable & enumerable=false)|17,012,180|8506091|
|DefineProperty (writable & enumerable=false & configurable=false)|17,021,878|8510940|
|DefineProperties (getter)|14,309,212|7154607|
|DefineProperties (getter & enumerable=false)|14,282,456|7141229|
|DefineProperties (getter & enumerable=false & configurable=false)|14,242,837|7121419|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:32:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":17144714.507987324,"samples":8572358},{"name":"Getter","opsSec":13611438.865846347,"samples":6805720},{"name":"Method","opsSec":16900596.104411557,"samples":8450299},{"name":"DefineProperty (getter)","opsSec":17066321.796839688,"samples":8533161},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13953050.70371761,"samples":6976526},{"name":"DefineProperty (getter & configurable=false)","opsSec":16267771.502728883,"samples":8133886},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13216730.827170072,"samples":6608366},{"name":"DefineProperty (writable)","opsSec":17023023.696936347,"samples":8511512},{"name":"DefineProperty (writable & enumerable=false)","opsSec":17012180.118989125,"samples":8506091},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":17021878.32403569,"samples":8510940},{"name":"DefineProperties (getter)","opsSec":14309212.847844724,"samples":7154607},{"name":"DefineProperties (getter & enumerable=false)","opsSec":14282456.679100463,"samples":7141229},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":14242837.332256215,"samples":7121419}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|16,898,555|8449278|
|Setter|6,202,177|3101089|
|Method|16,718,844|8359423|
|DefineProperty (setter)|16,791,782|8395892|
|DefineProperty (setter & enumerable=false)|6,241,360|3120681|
|DefineProperty (setter & configurable=false)|6,396,681|3198341|
|DefineProperty (setter & enumerable=false & configurable=false)|6,218,472|3109237|
|DefineProperty (writable)|16,815,832|8407917|
|DefineProperty (writable & enumerable=false)|16,835,216|8417609|
|DefineProperty (writable & enumerable=false & configurable=false)|15,187,633|7593817|
|DefineProperties (setter)|16,810,522|8405262|
|DefineProperties (setter & enumerable=false)|5,868,124|2934063|
|DefineProperties (setter & enumerable=false & configurable=false)|5,860,187|2930094|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:45:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":16898555.787977576,"samples":8449278},{"name":"Setter","opsSec":6202177.4307065355,"samples":3101089},{"name":"Method","opsSec":16718844.443123123,"samples":8359423},{"name":"DefineProperty (setter)","opsSec":16791782.770120587,"samples":8395892},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6241360.238269292,"samples":3120681},{"name":"DefineProperty (setter & configurable=false)","opsSec":6396681.081754279,"samples":3198341},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6218472.741354159,"samples":3109237},{"name":"DefineProperty (writable)","opsSec":16815832.71028824,"samples":8407917},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16835216.225292075,"samples":8417609},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15187633.239813387,"samples":7593817},{"name":"DefineProperties (setter)","opsSec":16810522.715016562,"samples":8405262},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5868124.175492712,"samples":2934063},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5860187.38274224,"samples":2930094}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,746,879|1373440|
|Using replaceAll()|2,630,981|1315491|
|Using replaceAll(//g)|2,541,313|1270657|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:54:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":2746879.693590432,"samples":1373440},{"name":"Using replaceAll()","opsSec":2630981.436819893,"samples":1315491},{"name":"Using replaceAll(//g)","opsSec":2541313.3507584273,"samples":1270657}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,273,812|5136907|
|{ ...object, __proto__: null }|10,455,118|5227560|
|{ ...object, newProp: true }|634,148|317075|
|structuredClone|273,847|136924|
|JSON.parse + JSON.stringify|187,686|93844|
|loop + object.keys starting with {}|1,206,249|603125|
|loop + object.keys starting with { __proto__: null }|760,843|380422|
|loop + object.keys starting with { randomProp: true }|565,999|283000|
|object.keys + reduce(FN, {})|1,224,863|612432|
|object.keys + reduce(FN, { __proto__: null })|756,232|378117|
|object.keys + reduce(FN, { newProp: true })|565,246|282624|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:58:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10273812.18035168,"samples":5136907},{"name":"{ ...object, __proto__: null }","opsSec":10455118.369349387,"samples":5227560},{"name":"{ ...object, newProp: true }","opsSec":634148.4850483369,"samples":317075},{"name":"structuredClone","opsSec":273847.17909745843,"samples":136924},{"name":"JSON.parse + JSON.stringify","opsSec":187686.0308155075,"samples":93844},{"name":"loop + object.keys starting with {}","opsSec":1206249.019975732,"samples":603125},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":760843.844994291,"samples":380422},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":565999.3858579206,"samples":283000},{"name":"object.keys + reduce(FN, {})","opsSec":1224863.3487818264,"samples":612432},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":756232.2013488464,"samples":378117},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":565246.2023691508,"samples":282624}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|283,178|141590|
|Sort using first char|1,159,624|579813|
|Sort using localeCompare|1,101,227|550614|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:05:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":283178.28385611693,"samples":141590},{"name":"Sort using first char","opsSec":1159624.6204795276,"samples":579813},{"name":"Sort using localeCompare","opsSec":1101227.5991634345,"samples":550614}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,174|1088|
|{...smallObject} - Total keys: 2|13,340,143|6670072|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,424|1213|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,564|3283|
|{ ...bigObject, ...anotherBigObject }|1,291|646|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,510,774|3255388|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,482,471|5241236|
|{ ...smallObject, ...anotherSmallObject }|9,254,342|4627172|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:09:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2174.8882972289566,"samples":1088},{"name":"{...smallObject} - Total keys: 2","opsSec":13340143.621565664,"samples":6670072},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2424.5798120337704,"samples":1213},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6564.703365035919,"samples":3283},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1291.1835976023137,"samples":646},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6510774.78506653,"samples":3255388},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10482471.167917313,"samples":5241236},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9254342.194572901,"samples":4627172}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,295|1148|
|streams.web.Readable reading 1e3 * "some data"|742|372|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:15:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2295.163669865959,"samples":1148},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":742.7550518958263,"samples":372}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,270|2636|
|streams.web.WritableStream writing 1e3 * "some data"|2,441|1221|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:19:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":5270.1982457036775,"samples":2636},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2441.9074223149087,"samples":1221}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|16,908,036|8454019|
|Using backtick (`)|17,105,154|8552578|
|Using array.join|6,404,274|3202138|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:24:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":16908036.27534355,"samples":8454019},{"name":"Using backtick (`)","opsSec":17105154.33954084,"samples":8552578},{"name":"Using array.join","opsSec":6404274.14687077,"samples":3202138}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,025,411|7012706|
|(short string) (true) String#slice and strict comparison|16,696,518|8348260|
|(long string) (true) String#endsWith|13,992,560|6996281|
|(long string) (true) String#slice and strict comparison|16,679,334|8339668|
|(short string) (false) String#endsWith|14,612,870|7306436|
|(short string) (false) String#slice and strict comparison|17,027,140|8513571|
|(long string) (false) String#endsWith|14,331,148|7165575|
|(long string) (false) String#slice and strict comparison|16,972,788|8486395|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:32:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14025411.414709738,"samples":7012706},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16696518.182720795,"samples":8348260},{"name":"(long string) (true) String#endsWith","opsSec":13992560.100776495,"samples":6996281},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16679334.907101074,"samples":8339668},{"name":"(short string) (false) String#endsWith","opsSec":14612870.365795732,"samples":7306436},{"name":"(short string) (false) String#slice and strict comparison","opsSec":17027140.506516133,"samples":8513571},{"name":"(long string) (false) String#endsWith","opsSec":14331148.822000628,"samples":7165575},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16972788.51697402,"samples":8486395}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|17,251,437|8625719|
|Using indexof|15,427,674|7713838|
|Using RegExp.test|8,541,000|4270501|
|Using RegExp.text with cached regex pattern|8,720,098|4360050|
|Using new RegExp.test|2,878,975|1439488|
|Using new RegExp.test with cached regex pattern|3,019,846|1509924|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:40:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":17251437.225330263,"samples":8625719},{"name":"Using indexof","opsSec":15427674.670946894,"samples":7713838},{"name":"Using RegExp.test","opsSec":8541000.99666039,"samples":4270501},{"name":"Using RegExp.text with cached regex pattern","opsSec":8720098.457292184,"samples":4360050},{"name":"Using new RegExp.test","opsSec":2878975.086089045,"samples":1439488},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3019846.318278021,"samples":1509924}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,592,358|7796180|
|(short string) (true) String#slice and strict comparison|16,780,318|8390160|
|(long string) (true) String#startsWith|14,391,496|7195749|
|(long string) (true) String#slice and strict comparison|16,430,008|8215005|
|(short string) (false) String#startsWith|16,019,162|8009582|
|(short string) (false) String#slice and strict comparison|16,579,690|8289846|
|(long string) (false) String#startsWith|16,306,086|8153044|
|(long string) (false) String#slice and strict comparison|16,897,107|8448554|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:47:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15592358.779263303,"samples":7796180},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16780318.16822386,"samples":8390160},{"name":"(long string) (true) String#startsWith","opsSec":14391496.179748362,"samples":7195749},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16430008.232048795,"samples":8215005},{"name":"(short string) (false) String#startsWith","opsSec":16019162.9871187,"samples":8009582},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16579690.479860492,"samples":8289846},{"name":"(long string) (false) String#startsWith","opsSec":16306086.3004183,"samples":8153044},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16897107.672173943,"samples":8448554}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|16,031,385|8015693|
|Using this|16,797,986|8398994|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:57:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using super","opsSec":16031385.788406491,"samples":8015693},{"name":"Using this","opsSec":16797986.36028503,"samples":8398994}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,317,228|3158615|
|Date.now()|9,091,016|4545509|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 02:02:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6317228.603192022,"samples":3158615},{"name":"Date.now()","opsSec":9091016.138823051,"samples":4545509}]}-->
