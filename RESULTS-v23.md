## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|89,867,993|44940659|
|Using dot notation|65,846,781|32926346|
|Using define property (writable)|4,737,823|2369075|
|Using define property initialized (writable)|7,038,125|3519082|
|Using define property (getter)|2,460,384|1230267|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:46:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":89867993.09292814,"samples":44940659},{"name":"Using dot notation","opsSec":65846781.197838984,"samples":32926346},{"name":"Using define property (writable)","opsSec":4737823.611331415,"samples":2369075},{"name":"Using define property initialized (writable)","opsSec":7038125.726672297,"samples":3519082},{"name":"Using define property (getter)","opsSec":2460384.270854813,"samples":1230267}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.071ms
new Array(length)|100|0.007ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.45ms
new Array(length)|10,000|0.291ms
array.push|1,000,000|26.339ms
new Array(length)|1,000,000|6.44ms
array.push|100,000,000|1,806.725ms
new Array(length)|100,000,000|3,999.16ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.004ms
array.push|100|0.016ms
new Array(length)|100|0.012ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.02ms
array.push|10,000|153.664ms
new Array(length)|10,000|0.032ms
array.push|1,000,000|16.394ms
new Array(length)|1,000,000|9.022ms
array.push|100,000,000|1,964.952ms
new Array(length)|100,000,000|4,658.797ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|333|168|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:00:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Array","opsSec":333.3525156540853,"samples":168},{"name":"Array.from","opsSec":23.582176885487158,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,811|2478|
|new Blob (1024)|609|305|
|text (128)|4,502|2256|
|text (1024)|576|289|
|arrayBuffer (128)|4,595|2301|
|arrayBuffer (1024)|576|290|
|slice (0, 64)|149,389|81730|
|slice (0, 512)|31,777|15892|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:06:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4811.855778825577,"samples":2478},{"name":"new Blob (1024)","opsSec":609.2005668089959,"samples":305},{"name":"text (128)","opsSec":4502.817233708244,"samples":2256},{"name":"text (1024)","opsSec":576.7245690018558,"samples":289},{"name":"arrayBuffer (128)","opsSec":4595.186698301681,"samples":2301},{"name":"arrayBuffer (1024)","opsSec":576.1932994524917,"samples":290},{"name":"slice (0, 64)","opsSec":149389.67927701026,"samples":81730},{"name":"slice (0, 512)","opsSec":31777.616067597715,"samples":15892}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|444,653|222336|
|[True conditional] Using constructor name|352,333|176167|
|[True conditional] Check if property is valid then instanceof |354,334|177168|
|[False conditional] Using instanceof only|92,512,457|46680802|
|[False conditional] Using constructor name|93,535,788|46767919|
|[False conditional] Check if property is valid then instanceof |93,646,641|46823333|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:12:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":444653.4268263615,"samples":222336},{"name":"[True conditional] Using constructor name","opsSec":352333.7146096912,"samples":176167},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":354334.33746328857,"samples":177168},{"name":"[False conditional] Using instanceof only","opsSec":92512457.50101157,"samples":46680802},{"name":"[False conditional] Using constructor name","opsSec":93535788.98724656,"samples":46767919},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":93646641.2772867,"samples":46823333}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,394|3198|
|crypto.verify('RSA-SHA256')|6,683|3342|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:18:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6394.91010268138,"samples":3198},{"name":"crypto.verify('RSA-SHA256')","opsSec":6683.005729139641,"samples":3342}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,498,009|749086|
|fromUnixToISOString(new Date())|2,312,765|1156384|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:23:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1498009.2712528638,"samples":749086},{"name":"fromUnixToISOString(new Date())","opsSec":2312765.442081421,"samples":1156384}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,100|10051|
|Intl.DateTimeFormat().format(new Date())|19,587|9794|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,243|9622|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,923|9462|
|Reusing Intl.DateTimeFormat()|575,482|287757|
|Date.toLocaleDateString()|1,166,263|583172|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,668|12335|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:29:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":20100.318367164768,"samples":10051},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19587.361177802548,"samples":9794},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":19243.167540572194,"samples":9622},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18923.07216392566,"samples":9462},{"name":"Reusing Intl.DateTimeFormat()","opsSec":575482.3772433705,"samples":287757},{"name":"Date.toLocaleDateString()","opsSec":1166263.6887498654,"samples":583172},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":24668.0422948274,"samples":12335}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,027,448|513860|
|Using brackets {}|1,049,601|524820|
|Using '' + |1,033,762|516882|
|Using date.toString()|1,149,814|575204|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:35:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":1027448.9260949306,"samples":513860},{"name":"Using brackets {}","opsSec":1049601.4922204535,"samples":524820},{"name":"Using '' + ","opsSec":1033762.1392281494,"samples":516882},{"name":"Using date.toString()","opsSec":1149814.7806594735,"samples":575204}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,450,499|1725404|
|Using delete property (proto: null)|16,675,412|8338556|
|Using delete property (cached proto: null)|3,422,439|1712143|
|Using undefined assignment|72,207,704|36103861|
|Using undefined assignment (proto: null)|17,952,841|8979339|
|Using undefined property (cached proto: null)|72,226,249|36119396|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:41:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":3450499.17342298,"samples":1725404},{"name":"Using delete property (proto: null)","opsSec":16675412.975522747,"samples":8338556},{"name":"Using delete property (cached proto: null)","opsSec":3422439.4433329864,"samples":1712143},{"name":"Using undefined assignment","opsSec":72207704.23690477,"samples":36103861},{"name":"Using undefined assignment (proto: null)","opsSec":17952841.351748135,"samples":8979339},{"name":"Using undefined property (cached proto: null)","opsSec":72226249.33399315,"samples":36119396}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|416,300|208151|
|NodeError|333,066|166536|
|NodeError Range|331,389|165695|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:46:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Error","opsSec":416300.6753312511,"samples":208151},{"name":"NodeError","opsSec":333066.46043863,"samples":166536},{"name":"NodeError Range","opsSec":331389.24708363065,"samples":165695}]}-->
