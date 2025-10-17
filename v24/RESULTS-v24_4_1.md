## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|95,278,196|47654854|
|Using dot notation|70,230,487|35125336|
|Using define property (writable)|5,037,301|2518653|
|Using define property initialized (writable)|7,000,445|3500407|
|Using define property (getter)|2,423,998|1212396|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:41:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Directly in the object","samples":47654854,"opsSec":95278196.83251798},{"name":"Using dot notation","samples":35125336,"opsSec":70230487.19613594},{"name":"Using define property (writable)","samples":2518653,"opsSec":5037301.436204899},{"name":"Using define property initialized (writable)","samples":3500407,"opsSec":7000445.090544619},{"name":"Using define property (getter)","samples":1212396,"opsSec":2423998.1890730425}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.025ms
new Array(length)|100|0.01ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.456ms
new Array(length)|10,000|0.269ms
array.push|1,000,000|26.133ms
new Array(length)|1,000,000|7.658ms
array.push|10,000,000|228.439ms
new Array(length)|10,000,000|63.106ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.015ms
new Array(length)|100|0.012ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.019ms
array.push|10,000|0.362ms
new Array(length)|10,000|0.117ms
array.push|1,000,000|17.45ms
new Array(length)|1,000,000|10.954ms
array.push|10,000,000|334.932ms
new Array(length)|10,000,000|49.569ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|327|164|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:47:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Array","samples":164,"opsSec":327.16986796796647},{"name":"Array.from","samples":12,"opsSec":22.941020340076424}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,829|2419|
|new Blob (1024)|617|311|
|text (128)|4,446|2226|
|text (1024)|555|279|
|arrayBuffer (128)|4,439|2225|
|arrayBuffer (1024)|553|278|
|slice (0, 64)|171,457|85731|
|slice (0, 512)|27,054|13528|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:51:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Blob (128)","samples":2419,"opsSec":4829.293787793716},{"name":"new Blob (1024)","samples":311,"opsSec":617.0784868258495},{"name":"text (128)","samples":2226,"opsSec":4446.253466384892},{"name":"text (1024)","samples":279,"opsSec":555.0466588932549},{"name":"arrayBuffer (128)","samples":2225,"opsSec":4439.462456397794},{"name":"arrayBuffer (1024)","samples":278,"opsSec":553.5901622360489},{"name":"slice (0, 64)","samples":85731,"opsSec":171457.6003979738},{"name":"slice (0, 512)","samples":13528,"opsSec":27054.796981397423}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|133.39 ms|1|
|Gzip|135.53 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:56:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.133387988},{"name":"Gzip","samples":1,"totalTime":0.135533589}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,787|3394|
|crypto.verify('RSA-SHA256')|6,817|3409|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:00:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3394,"opsSec":6787.0964338517615},{"name":"crypto.verify('RSA-SHA256')","samples":3409,"opsSec":6817.974828036935}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,548,751|774376|
|fromUnixToISOString(new Date())|2,934,941|1467475|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:02:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().toISOString()","samples":774376,"opsSec":1548751.073846858},{"name":"fromUnixToISOString(new Date())","samples":1467475,"opsSec":2934941.711724606}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|21,838|10920|
|Intl.DateTimeFormat().format(new Date())|21,739|10870|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,574|10788|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|20,547|10275|
|Reusing Intl.DateTimeFormat()|441,285|220645|
|Date.toLocaleDateString()|994,660|497331|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|26,613|13307|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:05:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10920,"opsSec":21838.93426000811},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10870,"opsSec":21739.437774660273},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10788,"opsSec":21574.468514778007},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":10275,"opsSec":20547.45363626067},{"name":"Reusing Intl.DateTimeFormat()","samples":220645,"opsSec":441285.62156406284},{"name":"Date.toLocaleDateString()","samples":497331,"opsSec":994660.6472615198},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":13307,"opsSec":26613.00105439242}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,133,423|567661|
|Using brackets {}|1,139,076|569623|
|Using '' + |1,139,919|569982|
|Using date.toString()|1,262,320|631313|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:08:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using String()","samples":567661,"opsSec":1133423.3707757592},{"name":"Using brackets {}","samples":569623,"opsSec":1139076.7218083718},{"name":"Using '' + ","samples":569982,"opsSec":1139919.7893508899},{"name":"Using date.toString()","samples":631313,"opsSec":1262320.1297340044}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,186,431|2093217|
|Using delete property (proto: null)|18,274,040|9137545|
|Using delete property (cached proto: null)|4,210,515|2105260|
|Using undefined assignment|74,957,533|37478769|
|Using undefined assignment (proto: null)|19,957,798|9979522|
|Using undefined property (cached proto: null)|76,059,951|38050710|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:12:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using delete property","samples":2093217,"opsSec":4186431.2202096693},{"name":"Using delete property (proto: null)","samples":9137545,"opsSec":18274040.30257694},{"name":"Using delete property (cached proto: null)","samples":2105260,"opsSec":4210515.149486547},{"name":"Using undefined assignment","samples":37478769,"opsSec":74957533.8023781},{"name":"Using undefined assignment (proto: null)","samples":9979522,"opsSec":19957798.274147324},{"name":"Using undefined property (cached proto: null)","samples":38050710,"opsSec":76059951.20188531}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|344,990|172496|
|NodeError|303,170|152036|
|NodeError Range|296,163|148175|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:16:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Error","samples":172496,"opsSec":344990.9153485622},{"name":"NodeError","samples":152036,"opsSec":303170.2286436658},{"name":"NodeError Range","samples":148175,"opsSec":296163.40224841336}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|68,821,356|34413631|
|using Array.includes (first item)|79,415,790|39709922|
|Using raw comparison|96,902,805|48455086|
|Using raw comparison (first item)|98,884,333|49453510|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:19:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"using Array.includes","samples":34413631,"opsSec":68821356.02651124},{"name":"using Array.includes (first item)","samples":39709922,"opsSec":79415790.30039991},{"name":"Using raw comparison","samples":48455086,"opsSec":96902805.64252068},{"name":"Using raw comparison (first item)","samples":49453510,"opsSec":98884333.9561038}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|42,348,406|21176276|
|Using Object.getOwnPropertyNames()|45,356,257|22678133|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:23:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using Object.keys()","samples":21176276,"opsSec":42348406.34510925},{"name":"Using Object.getOwnPropertyNames()","samples":22678133,"opsSec":45356257.2008861}]}-->
