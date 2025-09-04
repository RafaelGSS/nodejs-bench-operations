## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|89,163,678|44729011|
|Using dot notation|63,463,127|31994557|
|Using define property (writable)|4,886,776|2443391|
|Using define property initialized (writable)|7,139,212|3569997|
|Using define property (getter)|2,396,915|1200090|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:13:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":44729011,"opsSec":89163678.7867909},{"name":"Using dot notation","samples":31994557,"opsSec":63463127.7890963},{"name":"Using define property (writable)","samples":2443391,"opsSec":4886776.36066008},{"name":"Using define property initialized (writable)","samples":3569997,"opsSec":7139212.299088524},{"name":"Using define property (getter)","samples":1200090,"opsSec":2396915.3868616023}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.029ms
new Array(length)|100|0.012ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.255ms
new Array(length)|10,000|0.154ms
array.push|1,000,000|32.392ms
new Array(length)|1,000,000|8.219ms
array.push|10,000,000|263.631ms
new Array(length)|10,000,000|68.973ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.003ms
array.push|100|0.024ms
new Array(length)|100|0.012ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.354ms
new Array(length)|10,000|0.184ms
array.push|1,000,000|23.423ms
new Array(length)|1,000,000|12.352ms
array.push|10,000,000|229.923ms
new Array(length)|10,000,000|68.909ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|273|139|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:21:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":139,"opsSec":273.0150439754661},{"name":"Array.from","samples":12,"opsSec":23.405125043635927}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,839|2428|
|new Blob (1024)|631|321|
|text (128)|4,226|2114|
|text (1024)|534|269|
|arrayBuffer (128)|4,231|2116|
|arrayBuffer (1024)|530|266|
|slice (0, 64)|204,221|111367|
|slice (0, 512)|35,220|22933|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:27:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2428,"opsSec":4839.7775303369535},{"name":"new Blob (1024)","samples":321,"opsSec":631.5917680910406},{"name":"text (128)","samples":2114,"opsSec":4226.398389424734},{"name":"text (1024)","samples":269,"opsSec":534.1758945982712},{"name":"arrayBuffer (128)","samples":2116,"opsSec":4231.466885949973},{"name":"arrayBuffer (1024)","samples":266,"opsSec":530.1477919108291},{"name":"slice (0, 64)","samples":111367,"opsSec":204221.01233767997},{"name":"slice (0, 512)","samples":22933,"opsSec":35220.24288474151}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|133.80 ms|1|
|Gzip|134.92 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:36:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.133798025},{"name":"Gzip","samples":1,"totalTime":0.13492343}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,623|3312|
|crypto.verify('RSA-SHA256')|6,805|3403|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:41:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3312,"opsSec":6623.570951568041},{"name":"crypto.verify('RSA-SHA256')","samples":3403,"opsSec":6805.072060373848}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,502,048|751123|
|fromUnixToISOString(new Date())|2,108,032|1054132|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:45:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":751123,"opsSec":1502048.729932103},{"name":"fromUnixToISOString(new Date())","samples":1054132,"opsSec":2108032.1206827895}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,832|10417|
|Intl.DateTimeFormat().format(new Date())|19,860|9944|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,960|9981|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,840|9421|
|Reusing Intl.DateTimeFormat()|453,377|226826|
|Date.toLocaleDateString()|1,025,529|512766|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,496|12249|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:51:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10417,"opsSec":20832.023624254718},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9944,"opsSec":19860.556881107255},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9981,"opsSec":19960.033856824964},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9421,"opsSec":18840.00318574235},{"name":"Reusing Intl.DateTimeFormat()","samples":226826,"opsSec":453377.60952342994},{"name":"Date.toLocaleDateString()","samples":512766,"opsSec":1025529.9386848232},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":12249,"opsSec":24496.8830401209}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|913,840|456921|
|Using brackets {}|933,548|466775|
|Using '' + |933,857|466930|
|Using date.toString()|1,217,581|608791|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:54:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":456921,"opsSec":913840.82297302},{"name":"Using brackets {}","samples":466775,"opsSec":933548.6034112892},{"name":"Using '' + ","samples":466930,"opsSec":933857.9361739611},{"name":"Using date.toString()","samples":608791,"opsSec":1217581.3765983353}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,040,063|2020734|
|Using delete property (proto: null)|18,006,912|9003459|
|Using delete property (cached proto: null)|4,075,069|2038333|
|Using undefined assignment|77,322,601|38663260|
|Using undefined assignment (proto: null)|19,071,367|9535785|
|Using undefined property (cached proto: null)|77,240,491|38620246|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:59:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":2020734,"opsSec":4040063.4719339823},{"name":"Using delete property (proto: null)","samples":9003459,"opsSec":18006912.48988478},{"name":"Using delete property (cached proto: null)","samples":2038333,"opsSec":4075069.990688007},{"name":"Using undefined assignment","samples":38663260,"opsSec":77322601.90911606},{"name":"Using undefined assignment (proto: null)","samples":9535785,"opsSec":19071367.347650565},{"name":"Using undefined property (cached proto: null)","samples":38620246,"opsSec":77240491.38207607}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|340,789|170410|
|NodeError|314,846|157424|
|NodeError Range|291,922|145962|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:05:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":170410,"opsSec":340789.40188276256},{"name":"NodeError","samples":157424,"opsSec":314846.253232987},{"name":"NodeError Range","samples":145962,"opsSec":291922.03711622243}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|71,361,280|35680673|
|using Array.includes (first item)|82,246,610|41123312|
|Using raw comparison|99,669,285|49836501|
|Using raw comparison (first item)|99,771,139|49904093|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:08:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":35680673,"opsSec":71361280.77578938},{"name":"using Array.includes (first item)","samples":41123312,"opsSec":82246610.67604907},{"name":"Using raw comparison","samples":49836501,"opsSec":99669285.5316811},{"name":"Using raw comparison (first item)","samples":49904093,"opsSec":99771139.57907835}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|40,671,735|20337117|
|Using Object.getOwnPropertyNames()|39,391,396|19697704|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:12:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":20337117,"opsSec":40671735.94197845},{"name":"Using Object.getOwnPropertyNames()","samples":19697704,"opsSec":39391396.45896741}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|92,972,583|46487174|
|Length = 10_000 - Array.at|99,184,634|49643927|
|Length = 1_000_000 - Array.at|100,386,487|50196786|
|Length = 100 - Array[length - 1]|99,077,098|49543792|
|Length = 10_000 - Array[length - 1]|98,697,587|49348801|
|Length = 1_000_000 - Array[length - 1]|99,099,881|49558382|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:19:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":46487174,"opsSec":92972583.56630908},{"name":"Length = 10_000 - Array.at","samples":49643927,"opsSec":99184634.13820653},{"name":"Length = 1_000_000 - Array.at","samples":50196786,"opsSec":100386487.7255612},{"name":"Length = 100 - Array[length - 1]","samples":49543792,"opsSec":99077098.47251445},{"name":"Length = 10_000 - Array[length - 1]","samples":49348801,"opsSec":98697587.5901522},{"name":"Length = 1_000_000 - Array[length - 1]","samples":49558382,"opsSec":99099881.74054621}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|97,104,624|48632267|
|~ (small)|98,634,765|49317451|
|Math.floor (long)|96,483,737|48291845|
|~ (long)|98,842,655|49426212|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:21:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":48632267,"opsSec":97104624.62888141},{"name":"~ (small)","samples":49317451,"opsSec":98634765.68675382},{"name":"Math.floor (long)","samples":48291845,"opsSec":96483737.67195874},{"name":"~ (long)","samples":49426212,"opsSec":98842655.18270299}]}-->
