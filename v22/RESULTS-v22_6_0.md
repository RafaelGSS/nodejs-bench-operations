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
