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
