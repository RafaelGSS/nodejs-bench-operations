## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|105,049,553|52613644|
|Using dot notation|71,338,128|35670411|
|Using define property (writable)|4,935,541|2468808|
|Using define property initialized (writable)|7,022,392|3512087|
|Using define property (getter)|2,444,314|1222922|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:39:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Directly in the object","samples":52613644,"opsSec":105049553.81949636},{"name":"Using dot notation","samples":35670411,"opsSec":71338128.55761819},{"name":"Using define property (writable)","samples":2468808,"opsSec":4935541.276127002},{"name":"Using define property initialized (writable)","samples":3512087,"opsSec":7022392.096095184},{"name":"Using define property (getter)","samples":1222922,"opsSec":2444314.880608359}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.031ms
new Array(length)|100|0.01ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.288ms
new Array(length)|10,000|0.15ms
array.push|1,000,000|28.508ms
new Array(length)|1,000,000|6.859ms
array.push|10,000,000|241.475ms
new Array(length)|10,000,000|63.135ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.012ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.019ms
array.push|10,000|0.324ms
new Array(length)|10,000|0.184ms
array.push|1,000,000|22.851ms
new Array(length)|1,000,000|12.055ms
array.push|10,000,000|217.352ms
new Array(length)|10,000,000|66.234ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|318|161|
|Array.from|24|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:46:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Array","samples":161,"opsSec":318.30956348430186},{"name":"Array.from","samples":13,"opsSec":24.4337463771074}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,555|2278|
|new Blob (1024)|597|304|
|text (128)|4,373|2187|
|text (1024)|548|275|
|arrayBuffer (128)|4,396|2200|
|arrayBuffer (1024)|551|277|
|slice (0, 64)|149,529|82129|
|slice (0, 512)|19,938|15677|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:50:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Blob (128)","samples":2278,"opsSec":4555.741908109421},{"name":"new Blob (1024)","samples":304,"opsSec":597.0028106244263},{"name":"text (128)","samples":2187,"opsSec":4373.2875914513525},{"name":"text (1024)","samples":275,"opsSec":548.7530771628121},{"name":"arrayBuffer (128)","samples":2200,"opsSec":4396.816898025772},{"name":"arrayBuffer (1024)","samples":277,"opsSec":551.9109277289755},{"name":"slice (0, 64)","samples":82129,"opsSec":149529.1265374844},{"name":"slice (0, 512)","samples":15677,"opsSec":19938.523187837935}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|132.76 ms|1|
|Gzip|133.22 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:53:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.132762742},{"name":"Gzip","samples":1,"totalTime":0.133219204}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,635|3320|
|crypto.verify('RSA-SHA256')|6,853|3428|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:59:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3320,"opsSec":6635.581591827776},{"name":"crypto.verify('RSA-SHA256')","samples":3428,"opsSec":6853.9992901911955}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,448,390|724196|
|fromUnixToISOString(new Date())|2,163,837|1082046|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:03:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().toISOString()","samples":724196,"opsSec":1448390.603751458},{"name":"fromUnixToISOString(new Date())","samples":1082046,"opsSec":2163837.995713035}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,323|9666|
|Intl.DateTimeFormat().format(new Date())|19,143|9572|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,221|9611|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,263|9134|
|Reusing Intl.DateTimeFormat()|537,850|268928|
|Date.toLocaleDateString()|937,813|468907|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,179|11590|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:06:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9666,"opsSec":19323.768345217693},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9572,"opsSec":19143.366852284726},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9611,"opsSec":19221.023226041696},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9134,"opsSec":18263.500969171255},{"name":"Reusing Intl.DateTimeFormat()","samples":268928,"opsSec":537850.2611377137},{"name":"Date.toLocaleDateString()","samples":468907,"opsSec":937813.2853862765},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":11590,"opsSec":23179.43632246751}]}-->
