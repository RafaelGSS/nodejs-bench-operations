## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|71,335,616|35843576|
|Using dot notation|73,412,732|36786926|
|Using define property (writable)|4,955,154|2478274|
|Using define property initialized (writable)|6,819,212|3409612|
|Using define property (getter)|2,380,929|1195703|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:41:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Directly in the object","samples":35843576,"opsSec":71335616.50208323},{"name":"Using dot notation","samples":36786926,"opsSec":73412732.34220125},{"name":"Using define property (writable)","samples":2478274,"opsSec":4955154.7888589455},{"name":"Using define property initialized (writable)","samples":3409612,"opsSec":6819212.270954894},{"name":"Using define property (getter)","samples":1195703,"opsSec":2380929.31103725}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.025ms
new Array(length)|100|0.01ms
array.push|1,000|0.033ms
new Array(length)|1,000|0.04ms
array.push|10,000|0.254ms
new Array(length)|10,000|0.138ms
array.push|1,000,000|28.735ms
new Array(length)|1,000,000|6.54ms
array.push|10,000,000|243.287ms
new Array(length)|10,000,000|63.264ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.02ms
new Array(length)|100|0.012ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.019ms
array.push|10,000|0.32ms
new Array(length)|10,000|0.182ms
array.push|1,000,000|21.442ms
new Array(length)|1,000,000|12.402ms
array.push|10,000,000|216.404ms
new Array(length)|10,000,000|65.692ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|319|161|
|Array.from|24|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:46:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Array","samples":161,"opsSec":319.86084551264923},{"name":"Array.from","samples":13,"opsSec":24.092807436496322}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,917|2459|
|new Blob (1024)|594|298|
|text (128)|4,316|2166|
|text (1024)|542|272|
|arrayBuffer (128)|4,349|2176|
|arrayBuffer (1024)|546|274|
|slice (0, 64)|156,022|78014|
|slice (0, 512)|19,164|9694|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:50:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Blob (128)","samples":2459,"opsSec":4917.951784400705},{"name":"new Blob (1024)","samples":298,"opsSec":594.7496304933309},{"name":"text (128)","samples":2166,"opsSec":4316.094535589981},{"name":"text (1024)","samples":272,"opsSec":542.7472319247657},{"name":"arrayBuffer (128)","samples":2176,"opsSec":4349.165127186797},{"name":"arrayBuffer (1024)","samples":274,"opsSec":546.4869459646034},{"name":"slice (0, 64)","samples":78014,"opsSec":156022.22811369316},{"name":"slice (0, 512)","samples":9694,"opsSec":19164.075898691968}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|134.49 ms|1|
|Gzip|135.46 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:55:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.134491521},{"name":"Gzip","samples":1,"totalTime":0.135460783}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,471|3237|
|crypto.verify('RSA-SHA256')|6,810|3406|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:59:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3237,"opsSec":6471.845380292303},{"name":"crypto.verify('RSA-SHA256')","samples":3406,"opsSec":6810.518507908974}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,521,720|760861|
|fromUnixToISOString(new Date())|2,096,102|1048052|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:01:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().toISOString()","samples":760861,"opsSec":1521720.3169773293},{"name":"fromUnixToISOString(new Date())","samples":1048052,"opsSec":2096102.666878704}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,462|10242|
|Intl.DateTimeFormat().format(new Date())|19,935|9970|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,645|9832|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,081|9543|
|Reusing Intl.DateTimeFormat()|445,955|223461|
|Date.toLocaleDateString()|978,505|489253|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,330|12168|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:05:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10242,"opsSec":20462.866074695252},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9970,"opsSec":19935.517618476595},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9832,"opsSec":19645.24480265837},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9543,"opsSec":19081.397719521232},{"name":"Reusing Intl.DateTimeFormat()","samples":223461,"opsSec":445955.385458643},{"name":"Date.toLocaleDateString()","samples":489253,"opsSec":978505.0097529301},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":12168,"opsSec":24330.966117757966}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,091,522|545892|
|Using brackets {}|1,117,399|558726|
|Using '' + |1,088,905|544536|
|Using date.toString()|1,234,441|617221|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:10:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using String()","samples":545892,"opsSec":1091522.9229981399},{"name":"Using brackets {}","samples":558726,"opsSec":1117399.2632243729},{"name":"Using '' + ","samples":544536,"opsSec":1088905.438846263},{"name":"Using date.toString()","samples":617221,"opsSec":1234441.2494597204}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,090,867|2045983|
|Using delete property (proto: null)|16,899,458|8463657|
|Using delete property (cached proto: null)|4,089,168|2044585|
|Using undefined assignment|80,024,180|40042094|
|Using undefined assignment (proto: null)|18,347,798|9175144|
|Using undefined property (cached proto: null)|79,131,904|39772583|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:14:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using delete property","samples":2045983,"opsSec":4090867.847435035},{"name":"Using delete property (proto: null)","samples":8463657,"opsSec":16899458.41989299},{"name":"Using delete property (cached proto: null)","samples":2044585,"opsSec":4089168.274370988},{"name":"Using undefined assignment","samples":40042094,"opsSec":80024180.58779934},{"name":"Using undefined assignment (proto: null)","samples":9175144,"opsSec":18347798.864214882},{"name":"Using undefined property (cached proto: null)","samples":39772583,"opsSec":79131904.3773038}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|345,508|173024|
|NodeError|316,533|158314|
|NodeError Range|293,243|146853|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:16:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Error","samples":173024,"opsSec":345508.0331356549},{"name":"NodeError","samples":158314,"opsSec":316533.50461979886},{"name":"NodeError Range","samples":146853,"opsSec":293243.96656574286}]}-->
