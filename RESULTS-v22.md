## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|13,954,545|6977273|
|Using dot notation|13,609,206|6804604|
|Using define property (writable)|3,239,014|1619508|
|Using define property initialized (writable)|4,059,012|2029507|
|Using define property (getter)|2,112,665|1056333|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:23:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":13954545.10692932,"samples":6977273},{"name":"Using dot notation","opsSec":13609206.557391187,"samples":6804604},{"name":"Using define property (writable)","opsSec":3239014.9570253775,"samples":1619508},{"name":"Using define property initialized (writable)","opsSec":4059012.343906928,"samples":2029507},{"name":"Using define property (getter)","opsSec":2112665.116919486,"samples":1056333}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.076ms
new Array(length)|100|0.008ms
array.push|1,000|0.028ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.284ms
new Array(length)|10,000|0.131ms
array.push|1,000,000|27.375ms
new Array(length)|1,000,000|6.697ms
array.push|100,000,000|1,879.896ms
new Array(length)|100,000,000|4,006.083ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.012ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.02ms
array.push|10,000|158.577ms
new Array(length)|10,000|0.05ms
array.push|1,000,000|18.738ms
new Array(length)|1,000,000|7.031ms
array.push|100,000,000|2,025.084ms
new Array(length)|100,000,000|4,625.878ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|335|168|
|Array.from|24|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:34:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Array","opsSec":335.834667921311,"samples":168},{"name":"Array.from","opsSec":24.483773156161742,"samples":13}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,551|1776|
|new Blob (1024)|625|313|
|text (128)|4,183|2092|
|text (1024)|546|275|
|arrayBuffer (128)|4,298|2150|
|arrayBuffer (1024)|550|276|
|slice (0, 64)|150,157|75079|
|slice (0, 512)|37,864|18933|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:41:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":3551.0966791286673,"samples":1776},{"name":"new Blob (1024)","opsSec":625.0034956764838,"samples":313},{"name":"text (128)","opsSec":4183.962587006515,"samples":2092},{"name":"text (1024)","opsSec":546.539834446543,"samples":275},{"name":"arrayBuffer (128)","opsSec":4298.276322421992,"samples":2150},{"name":"arrayBuffer (1024)","opsSec":550.745596495118,"samples":276},{"name":"slice (0, 64)","opsSec":150157.35672588673,"samples":75079},{"name":"slice (0, 512)","opsSec":37864.846939684474,"samples":18933}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|326,441|163221|
|[True conditional] Using constructor name|314,680|157341|
|[True conditional] Check if property is valid then instanceof |320,060|160031|
|[False conditional] Using instanceof only|15,249,948|7624975|
|[False conditional] Using constructor name|15,878,883|7939442|
|[False conditional] Check if property is valid then instanceof |15,099,948|7549975|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:50:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":326441.30663852853,"samples":163221},{"name":"[True conditional] Using constructor name","opsSec":314680.17988974426,"samples":157341},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":320060.08348028857,"samples":160031},{"name":"[False conditional] Using instanceof only","opsSec":15249948.657999516,"samples":7624975},{"name":"[False conditional] Using constructor name","opsSec":15878883.999731846,"samples":7939442},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":15099948.460232776,"samples":7549975}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,882|3442|
|crypto.verify('RSA-SHA256')|6,122|3062|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:56:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6882.282815379239,"samples":3442},{"name":"crypto.verify('RSA-SHA256')","opsSec":6122.989388355555,"samples":3062}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,289,283|644642|
|fromUnixToISOString(new Date())|1,565,596|782799|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:01:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1289283.4739723005,"samples":644642},{"name":"fromUnixToISOString(new Date())","opsSec":1565596.6285371738,"samples":782799}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,196|10099|
|Intl.DateTimeFormat().format(new Date())|19,365|9683|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|23,066|11534|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|22,309|11155|
|Reusing Intl.DateTimeFormat()|909,059|454530|
|Date.toLocaleDateString()|930,324|465163|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,306|11654|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:08:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":20196.970116101595,"samples":10099},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19365.31253140524,"samples":9683},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":23066.19280992575,"samples":11534},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":22309.63372043424,"samples":11155},{"name":"Reusing Intl.DateTimeFormat()","opsSec":909059.8036435484,"samples":454530},{"name":"Date.toLocaleDateString()","opsSec":930324.4296126706,"samples":465163},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23306.724283143158,"samples":11654}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|884,375|442188|
|Using brackets {}|891,586|445794|
|Using '' + |813,670|406836|
|Using date.toString()|964,779|482390|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:13:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using String()","opsSec":884375.209368144,"samples":442188},{"name":"Using brackets {}","opsSec":891586.0955714049,"samples":445794},{"name":"Using '' + ","opsSec":813670.668834344,"samples":406836},{"name":"Using date.toString()","opsSec":964779.324654546,"samples":482390}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,918,671|1459336|
|Using delete property (proto: null)|7,454,812|3727407|
|Using delete property (cached proto: null)|2,907,749|1453875|
|Using undefined assignment|13,922,134|6961068|
|Using undefined assignment (proto: null)|8,081,438|4040720|
|Using undefined property (cached proto: null)|13,764,141|6882071|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:24:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using delete property","opsSec":2918671.492155331,"samples":1459336},{"name":"Using delete property (proto: null)","opsSec":7454812.240658969,"samples":3727407},{"name":"Using delete property (cached proto: null)","opsSec":2907749.1974380794,"samples":1453875},{"name":"Using undefined assignment","opsSec":13922134.023093374,"samples":6961068},{"name":"Using undefined assignment (proto: null)","opsSec":8081438.787774127,"samples":4040720},{"name":"Using undefined property (cached proto: null)","opsSec":13764141.311833661,"samples":6882071}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|301,640|150821|
|NodeError|301,093|150547|
|NodeError Range|299,812|149907|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:29:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Error","opsSec":301640.3325322026,"samples":150821},{"name":"NodeError","opsSec":301093.35024050414,"samples":150547},{"name":"NodeError Range","opsSec":299812.68262300506,"samples":149907}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,528,323|764162|
|Function returning explicitly undefined|1,517,706|758854|
|Function returning implicitly undefined|1,530,682|765342|
|Function returning string|1,509,702|754852|
|Function returning integer|1,530,970|765486|
|Function returning float|1,522,018|761010|
|Function returning functions|1,472,750|736376|
|Function returning arrow functions|1,508,330|754166|
|Function returning empty object|1,536,697|768349|
|Function returning empty array|1,529,131|764566|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:38:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Function returning null","opsSec":1528323.040212928,"samples":764162},{"name":"Function returning explicitly undefined","opsSec":1517706.470153221,"samples":758854},{"name":"Function returning implicitly undefined","opsSec":1530682.6652461796,"samples":765342},{"name":"Function returning string","opsSec":1509702.1068357402,"samples":754852},{"name":"Function returning integer","opsSec":1530970.864015859,"samples":765486},{"name":"Function returning float","opsSec":1522018.6849740155,"samples":761010},{"name":"Function returning functions","opsSec":1472750.2621536737,"samples":736376},{"name":"Function returning arrow functions","opsSec":1508330.3438520744,"samples":754166},{"name":"Function returning empty object","opsSec":1536697.127152326,"samples":768349},{"name":"Function returning empty array","opsSec":1529131.8103899944,"samples":764566}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|13,847,633|6923817|
|using Array.includes (first item)|14,936,160|7468081|
|Using raw comparison|15,095,380|7547691|
|Using raw comparison (first item)|14,604,486|7302244|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:48:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"using Array.includes","opsSec":13847633.002980616,"samples":6923817},{"name":"using Array.includes (first item)","opsSec":14936160.148243712,"samples":7468081},{"name":"Using raw comparison","opsSec":15095380.158230208,"samples":7547691},{"name":"Using raw comparison (first item)","opsSec":14604486.159965565,"samples":7302244}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|13,439,608|6719805|
|Using Object.getOwnPropertyNames()|12,610,943|6305472|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:55:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using Object.keys()","opsSec":13439608.790420914,"samples":6719805},{"name":"Using Object.getOwnPropertyNames()","opsSec":12610943.016317436,"samples":6305472}]}-->
