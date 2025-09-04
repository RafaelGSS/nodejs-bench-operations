## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|89,238,029|44620971|
|Using dot notation|63,624,208|31855939|
|Using define property (writable)|4,764,241|2382122|
|Using define property initialized (writable)|7,050,322|3528097|
|Using define property (getter)|2,419,700|1209851|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:11:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":44620971,"opsSec":89238029.26936865},{"name":"Using dot notation","samples":31855939,"opsSec":63624208.930031136},{"name":"Using define property (writable)","samples":2382122,"opsSec":4764241.332024855},{"name":"Using define property initialized (writable)","samples":3528097,"opsSec":7050322.533695874},{"name":"Using define property (getter)","samples":1209851,"opsSec":2419700.1513490845}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.002ms
array.push|100|0.032ms
new Array(length)|100|0.013ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.342ms
new Array(length)|10,000|0.14ms
array.push|1,000,000|31.779ms
new Array(length)|1,000,000|7.626ms
array.push|10,000,000|262.749ms
new Array(length)|10,000,000|69.69ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.004ms
array.push|100|0.017ms
new Array(length)|100|0.013ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.353ms
new Array(length)|10,000|0.119ms
array.push|1,000,000|18.15ms
new Array(length)|1,000,000|11.164ms
array.push|10,000,000|224.835ms
new Array(length)|10,000,000|65.885ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|260|132|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:19:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":132,"opsSec":260.54897103674676},{"name":"Array.from","samples":12,"opsSec":22.774712712656743}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,377|2208|
|new Blob (1024)|579|294|
|text (128)|4,156|2084|
|text (1024)|514|258|
|arrayBuffer (128)|4,078|2041|
|arrayBuffer (1024)|512|257|
|slice (0, 64)|148,771|81994|
|slice (0, 512)|31,803|15910|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:25:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2208,"opsSec":4377.806336443236},{"name":"new Blob (1024)","samples":294,"opsSec":579.9863632185904},{"name":"text (128)","samples":2084,"opsSec":4156.7828466661795},{"name":"text (1024)","samples":258,"opsSec":514.1884247109574},{"name":"arrayBuffer (128)","samples":2041,"opsSec":4078.4595952653},{"name":"arrayBuffer (1024)","samples":257,"opsSec":512.8189369626601},{"name":"slice (0, 64)","samples":81994,"opsSec":148771.88935972087},{"name":"slice (0, 512)","samples":15910,"opsSec":31803.61299758132}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|134.19 ms|1|
|Gzip|135.62 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:33:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.134190953},{"name":"Gzip","samples":1,"totalTime":0.135618911}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,804|3403|
|crypto.verify('RSA-SHA256')|6,833|3417|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:41:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3403,"opsSec":6804.146768153051},{"name":"crypto.verify('RSA-SHA256')","samples":3417,"opsSec":6833.136100269116}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,212,236|606186|
|fromUnixToISOString(new Date())|2,154,696|1095128|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:43:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":606186,"opsSec":1212236.389539575},{"name":"fromUnixToISOString(new Date())","samples":1095128,"opsSec":2154696.339567715}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,571|10286|
|Intl.DateTimeFormat().format(new Date())|20,122|10067|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,799|9900|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,987|9494|
|Reusing Intl.DateTimeFormat()|643,910|322113|
|Date.toLocaleDateString()|1,106,925|553464|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,634|12318|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:50:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10286,"opsSec":20571.048794703733},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10067,"opsSec":20122.396339661147},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9900,"opsSec":19799.63826060898},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9494,"opsSec":18987.903161693874},{"name":"Reusing Intl.DateTimeFormat()","samples":322113,"opsSec":643910.1633526959},{"name":"Date.toLocaleDateString()","samples":553464,"opsSec":1106925.6621730016},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":12318,"opsSec":24634.7060866975}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|900,461|450282|
|Using brackets {}|896,553|448278|
|Using '' + |897,772|448981|
|Using date.toString()|975,127|487694|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:55:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":450282,"opsSec":900461.5923040303},{"name":"Using brackets {}","samples":448278,"opsSec":896553.5703398244},{"name":"Using '' + ","samples":448981,"opsSec":897772.6166620603},{"name":"Using date.toString()","samples":487694,"opsSec":975127.0969441958}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,017,764|2009144|
|Using delete property (proto: null)|17,460,846|8730636|
|Using delete property (cached proto: null)|4,018,646|2009683|
|Using undefined assignment|75,383,320|37691765|
|Using undefined assignment (proto: null)|19,465,831|9732917|
|Using undefined property (cached proto: null)|75,492,084|37746048|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:00:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":2009144,"opsSec":4017764.7182875606},{"name":"Using delete property (proto: null)","samples":8730636,"opsSec":17460846.02520037},{"name":"Using delete property (cached proto: null)","samples":2009683,"opsSec":4018646.9515382554},{"name":"Using undefined assignment","samples":37691765,"opsSec":75383320.28360298},{"name":"Using undefined assignment (proto: null)","samples":9732917,"opsSec":19465831.70303186},{"name":"Using undefined property (cached proto: null)","samples":37746048,"opsSec":75492084.82717144}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|334,673|167339|
|NodeError|311,394|155699|
|NodeError Range|302,886|151445|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:04:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":167339,"opsSec":334673.42300626694},{"name":"NodeError","samples":155699,"opsSec":311394.08951302385},{"name":"NodeError Range","samples":151445,"opsSec":302886.9135823506}]}-->
