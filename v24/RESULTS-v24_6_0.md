## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|92,905,218|46464710|
|Using dot notation|63,040,569|31593851|
|Using define property (writable)|4,881,894|2442620|
|Using define property initialized (writable)|6,915,452|3458194|
|Using define property (getter)|2,304,386|1152194|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:12:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":46464710,"opsSec":92905218.37642337},{"name":"Using dot notation","samples":31593851,"opsSec":63040569.59731859},{"name":"Using define property (writable)","samples":2442620,"opsSec":4881894.291385285},{"name":"Using define property initialized (writable)","samples":3458194,"opsSec":6915452.532904969},{"name":"Using define property (getter)","samples":1152194,"opsSec":2304386.9215469207}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.002ms
array.push|100|0.031ms
new Array(length)|100|0.013ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.346ms
new Array(length)|10,000|0.166ms
array.push|1,000,000|30.039ms
new Array(length)|1,000,000|9.564ms
array.push|10,000,000|246.976ms
new Array(length)|10,000,000|69.032ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.015ms
new Array(length)|100|0.014ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.463ms
new Array(length)|10,000|0.215ms
array.push|1,000,000|18.415ms
new Array(length)|1,000,000|12.742ms
array.push|10,000,000|360.872ms
new Array(length)|10,000,000|52.976ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|275|138|
|Array.from|21|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:20:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":138,"opsSec":275.2586200842169},{"name":"Array.from","samples":11,"opsSec":21.498426531139387}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,567|2302|
|new Blob (1024)|585|293|
|text (128)|4,365|2184|
|text (1024)|541|272|
|arrayBuffer (128)|4,336|2181|
|arrayBuffer (1024)|538|270|
|slice (0, 64)|148,461|83179|
|slice (0, 512)|31,813|15910|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:28:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2302,"opsSec":4567.894095197004},{"name":"new Blob (1024)","samples":293,"opsSec":585.2618396752333},{"name":"text (128)","samples":2184,"opsSec":4365.373590440806},{"name":"text (1024)","samples":272,"opsSec":541.8718093063853},{"name":"arrayBuffer (128)","samples":2181,"opsSec":4336.1007132613295},{"name":"arrayBuffer (1024)","samples":270,"opsSec":538.0870467401342},{"name":"slice (0, 64)","samples":83179,"opsSec":148461.90360444758},{"name":"slice (0, 512)","samples":15910,"opsSec":31813.983275854902}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|133.61 ms|1|
|Gzip|134.99 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:37:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.133605855},{"name":"Gzip","samples":1,"totalTime":0.134992969}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|21,517|10760|
|crypto.verify('RSA-SHA256')|21,423|10723|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:39:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":10760,"opsSec":21517.863964679953},{"name":"crypto.verify('RSA-SHA256')","samples":10723,"opsSec":21423.607531241763}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,223,166|611585|
|fromUnixToISOString(new Date())|2,763,650|1381956|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:47:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":611585,"opsSec":1223166.3647495639},{"name":"fromUnixToISOString(new Date())","samples":1381956,"opsSec":2763650.2104701633}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|21,718|10870|
|Intl.DateTimeFormat().format(new Date())|21,047|10524|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|20,694|10348|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,693|9848|
|Reusing Intl.DateTimeFormat()|369,517|184761|
|Date.toLocaleDateString()|970,183|485093|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|26,235|13119|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:50:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10870,"opsSec":21718.318645932402},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10524,"opsSec":21047.850897024247},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10348,"opsSec":20694.246162637715},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9848,"opsSec":19693.99243379928},{"name":"Reusing Intl.DateTimeFormat()","samples":184761,"opsSec":369517.691423718},{"name":"Date.toLocaleDateString()","samples":485093,"opsSec":970183.826788228},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":13119,"opsSec":26235.04425497406}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|941,050|470657|
|Using brackets {}|944,273|472145|
|Using '' + |928,369|464197|
|Using date.toString()|1,016,723|508363|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:54:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":470657,"opsSec":941050.7843314194},{"name":"Using brackets {}","samples":472145,"opsSec":944273.0748494064},{"name":"Using '' + ","samples":464197,"opsSec":928369.539319378},{"name":"Using date.toString()","samples":508363,"opsSec":1016723.6615355784}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,165,052|2085403|
|Using delete property (proto: null)|17,284,697|8643608|
|Using delete property (cached proto: null)|4,220,550|2110301|
|Using undefined assignment|79,340,514|39682738|
|Using undefined assignment (proto: null)|19,173,499|9589340|
|Using undefined property (cached proto: null)|79,228,790|39628498|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:01:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":2085403,"opsSec":4165052.3716634703},{"name":"Using delete property (proto: null)","samples":8643608,"opsSec":17284697.34304196},{"name":"Using delete property (cached proto: null)","samples":2110301,"opsSec":4220550.23073087},{"name":"Using undefined assignment","samples":39682738,"opsSec":79340514.20478295},{"name":"Using undefined assignment (proto: null)","samples":9589340,"opsSec":19173499.7805233},{"name":"Using undefined property (cached proto: null)","samples":39628498,"opsSec":79228790.70896518}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|348,111|174056|
|NodeError|314,128|157065|
|NodeError Range|308,235|154121|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:04:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":174056,"opsSec":348111.60802632937},{"name":"NodeError","samples":157065,"opsSec":314128.0461235531},{"name":"NodeError Range","samples":154121,"opsSec":308235.769938618}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|67,783,576|33891796|
|using Array.includes (first item)|74,702,079|37351898|
|Using raw comparison|91,828,209|45924845|
|Using raw comparison (first item)|91,983,146|45991580|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:08:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":33891796,"opsSec":67783576.95204592},{"name":"using Array.includes (first item)","samples":37351898,"opsSec":74702079.94381952},{"name":"Using raw comparison","samples":45924845,"opsSec":91828209.36160971},{"name":"Using raw comparison (first item)","samples":45991580,"opsSec":91983146.01856181}]}-->
