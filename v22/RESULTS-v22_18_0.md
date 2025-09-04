## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|94,676,427|47370133|
|Using dot notation|64,105,980|32059883|
|Using define property (writable)|4,905,356|2452680|
|Using define property initialized (writable)|6,933,641|3466828|
|Using define property (getter)|2,364,371|1183551|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:12:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":47370133,"opsSec":94676427.95686296},{"name":"Using dot notation","samples":32059883,"opsSec":64105980.008999065},{"name":"Using define property (writable)","samples":2452680,"opsSec":4905356.360225581},{"name":"Using define property initialized (writable)","samples":3466828,"opsSec":6933641.536423755},{"name":"Using define property (getter)","samples":1183551,"opsSec":2364371.6189257214}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.002ms
array.push|100|0.029ms
new Array(length)|100|0.01ms
array.push|1,000|0.034ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.254ms
new Array(length)|10,000|0.158ms
array.push|1,000,000|34.192ms
new Array(length)|1,000,000|6.943ms
array.push|10,000,000|265.447ms
new Array(length)|10,000,000|68.42ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.018ms
new Array(length)|10|0.003ms
array.push|100|0.023ms
new Array(length)|100|0.013ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.334ms
new Array(length)|10,000|0.186ms
array.push|1,000,000|21.636ms
new Array(length)|1,000,000|12.397ms
array.push|10,000,000|231.148ms
new Array(length)|10,000,000|70.001ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|326|164|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:23:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":164,"opsSec":326.1328295424289},{"name":"Array.from","samples":12,"opsSec":23.88372884907726}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,534|2279|
|new Blob (1024)|617|314|
|text (128)|4,411|2206|
|text (1024)|553|277|
|arrayBuffer (128)|4,414|2208|
|arrayBuffer (1024)|561|281|
|slice (0, 64)|209,766|110265|
|slice (0, 512)|36,606|22427|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:24:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2279,"opsSec":4534.2509267156365},{"name":"new Blob (1024)","samples":314,"opsSec":617.3020323194967},{"name":"text (128)","samples":2206,"opsSec":4411.249875781124},{"name":"text (1024)","samples":277,"opsSec":553.0350511698775},{"name":"arrayBuffer (128)","samples":2208,"opsSec":4414.09940356341},{"name":"arrayBuffer (1024)","samples":281,"opsSec":561.1139360058302},{"name":"slice (0, 64)","samples":110265,"opsSec":209766.6372271102},{"name":"slice (0, 512)","samples":22427,"opsSec":36606.77926310425}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|133.58 ms|1|
|Gzip|134.95 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:32:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.133581843},{"name":"Gzip","samples":1,"totalTime":0.134954727}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,654|3331|
|crypto.verify('RSA-SHA256')|6,829|3415|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:42:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3331,"opsSec":6654.284729496094},{"name":"crypto.verify('RSA-SHA256')","samples":3415,"opsSec":6829.4340994316535}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,518,536|759404|
|fromUnixToISOString(new Date())|2,020,839|1010876|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:43:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":759404,"opsSec":1518536.482639831},{"name":"fromUnixToISOString(new Date())","samples":1010876,"opsSec":2020839.0172654237}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,780|10391|
|Intl.DateTimeFormat().format(new Date())|19,841|9945|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,981|9991|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,783|9394|
|Reusing Intl.DateTimeFormat()|414,154|207080|
|Date.toLocaleDateString()|1,023,438|511889|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,620|12311|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:49:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10391,"opsSec":20780.08789943185},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9945,"opsSec":19841.16458446729},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9991,"opsSec":19981.921910649173},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9394,"opsSec":18783.231763917338},{"name":"Reusing Intl.DateTimeFormat()","samples":207080,"opsSec":414154.5936259348},{"name":"Date.toLocaleDateString()","samples":511889,"opsSec":1023438.8282785532},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":12311,"opsSec":24620.823026176055}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|903,709|451863|
|Using brackets {}|924,488|462350|
|Using '' + |913,093|456587|
|Using date.toString()|1,186,492|593247|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:55:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":451863,"opsSec":903709.9464965104},{"name":"Using brackets {}","samples":462350,"opsSec":924488.4326711602},{"name":"Using '' + ","samples":456587,"opsSec":913093.1729923267},{"name":"Using date.toString()","samples":593247,"opsSec":1186492.1775480153}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,942,784|1971393|
|Using delete property (proto: null)|17,604,102|8802053|
|Using delete property (cached proto: null)|4,056,984|2028494|
|Using undefined assignment|78,915,935|39458446|
|Using undefined assignment (proto: null)|18,709,132|9354569|
|Using undefined property (cached proto: null)|78,323,238|39168206|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:00:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1971393,"opsSec":3942784.706766616},{"name":"Using delete property (proto: null)","samples":8802053,"opsSec":17604102.197513923},{"name":"Using delete property (cached proto: null)","samples":2028494,"opsSec":4056984.4055118165},{"name":"Using undefined assignment","samples":39458446,"opsSec":78915935.85452119},{"name":"Using undefined assignment (proto: null)","samples":9354569,"opsSec":18709132.761442825},{"name":"Using undefined property (cached proto: null)","samples":39168206,"opsSec":78323238.34460339}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|333,143|166589|
|NodeError|312,690|156389|
|NodeError Range|287,201|143783|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:05:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":166589,"opsSec":333143.3317723224},{"name":"NodeError","samples":156389,"opsSec":312690.34476641304},{"name":"NodeError Range","samples":143783,"opsSec":287201.4511772005}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|73,957,925|37008371|
|using Array.includes (first item)|80,929,455|40464733|
|Using raw comparison|96,569,508|48302836|
|Using raw comparison (first item)|98,258,262|49130725|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:09:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":37008371,"opsSec":73957925.03720811},{"name":"using Array.includes (first item)","samples":40464733,"opsSec":80929455.80288857},{"name":"Using raw comparison","samples":48302836,"opsSec":96569508.6504006},{"name":"Using raw comparison (first item)","samples":49130725,"opsSec":98258262.69847459}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|41,267,898|20639679|
|Using Object.getOwnPropertyNames()|41,280,443|20658439|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:14:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":20639679,"opsSec":41267898.39982915},{"name":"Using Object.getOwnPropertyNames()","samples":20658439,"opsSec":41280443.63276706}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|99,911,182|50023941|
|Length = 10_000 - Array.at|100,441,447|50223470|
|Length = 1_000_000 - Array.at|100,324,967|50162497|
|Length = 100 - Array[length - 1]|99,119,189|49567890|
|Length = 10_000 - Array[length - 1]|98,730,224|49365120|
|Length = 1_000_000 - Array[length - 1]|98,698,522|49351199|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:18:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":50023941,"opsSec":99911182.52096298},{"name":"Length = 10_000 - Array.at","samples":50223470,"opsSec":100441447.86163092},{"name":"Length = 1_000_000 - Array.at","samples":50162497,"opsSec":100324967.11290881},{"name":"Length = 100 - Array[length - 1]","samples":49567890,"opsSec":99119189.6282784},{"name":"Length = 10_000 - Array[length - 1]","samples":49365120,"opsSec":98730224.99300581},{"name":"Length = 1_000_000 - Array[length - 1]","samples":49351199,"opsSec":98698522.30642606}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|89,028,223|44514134|
|~ (small)|93,117,131|46558573|
|Math.floor (long)|98,720,402|49360222|
|~ (long)|98,653,285|49326650|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:22:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":44514134,"opsSec":89028223.84200098},{"name":"~ (small)","samples":46558573,"opsSec":93117131.84619597},{"name":"Math.floor (long)","samples":49360222,"opsSec":98720402.53743094},{"name":"~ (long)","samples":49326650,"opsSec":98653285.00470069}]}-->
