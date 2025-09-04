## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|98,756,069|49408209|
|Using dot notation|70,574,658|35318444|
|Using define property (writable)|5,119,334|2560620|
|Using define property initialized (writable)|6,900,160|3450849|
|Using define property (getter)|2,369,283|1184920|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:13:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":49408209,"opsSec":98756069.54848391},{"name":"Using dot notation","samples":35318444,"opsSec":70574658.79460785},{"name":"Using define property (writable)","samples":2560620,"opsSec":5119334.798600023},{"name":"Using define property initialized (writable)","samples":3450849,"opsSec":6900160.547627741},{"name":"Using define property (getter)","samples":1184920,"opsSec":2369283.843787645}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.002ms
array.push|100|0.03ms
new Array(length)|100|0.011ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.372ms
new Array(length)|10,000|0.146ms
array.push|1,000,000|31.321ms
new Array(length)|1,000,000|8.518ms
array.push|10,000,000|275.505ms
new Array(length)|10,000,000|70.316ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.005ms
array.push|100|0.017ms
new Array(length)|100|0.012ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.481ms
new Array(length)|10,000|0.216ms
array.push|1,000,000|18.969ms
new Array(length)|1,000,000|12.459ms
array.push|10,000,000|370.42ms
new Array(length)|10,000,000|55.078ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|275|138|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:20:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":138,"opsSec":275.43574178850065},{"name":"Array.from","samples":12,"opsSec":22.32866457889559}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,958|2480|
|new Blob (1024)|580|294|
|text (128)|4,284|2143|
|text (1024)|550|276|
|arrayBuffer (128)|4,362|2182|
|arrayBuffer (1024)|554|279|
|slice (0, 64)|161,583|86851|
|slice (0, 512)|31,747|15878|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:28:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2480,"opsSec":4958.334049342761},{"name":"new Blob (1024)","samples":294,"opsSec":580.3059623315031},{"name":"text (128)","samples":2143,"opsSec":4284.196173474728},{"name":"text (1024)","samples":276,"opsSec":550.8135838939888},{"name":"arrayBuffer (128)","samples":2182,"opsSec":4362.411593589835},{"name":"arrayBuffer (1024)","samples":279,"opsSec":554.4670876415302},{"name":"slice (0, 64)","samples":86851,"opsSec":161583.9027508069},{"name":"slice (0, 512)","samples":15878,"opsSec":31747.445841202763}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|133.03 ms|1|
|Gzip|134.69 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:35:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.13303078},{"name":"Gzip","samples":1,"totalTime":0.134687371}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|20,419|10219|
|crypto.verify('RSA-SHA256')|21,548|10775|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:42:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":10219,"opsSec":20419.05793420241},{"name":"crypto.verify('RSA-SHA256')","samples":10775,"opsSec":21548.41429528884}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,548,189|774111|
|fromUnixToISOString(new Date())|2,818,530|1409461|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:46:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":774111,"opsSec":1548189.7697853725},{"name":"fromUnixToISOString(new Date())","samples":1409461,"opsSec":2818530.8555619884}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|21,927|10968|
|Intl.DateTimeFormat().format(new Date())|21,377|10689|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|20,906|10454|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|20,006|10004|
|Reusing Intl.DateTimeFormat()|436,887|218447|
|Date.toLocaleDateString()|1,041,754|520878|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|26,584|13293|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:52:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10968,"opsSec":21927.022901407978},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10689,"opsSec":21377.676598508417},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10454,"opsSec":20906.8640464489},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":10004,"opsSec":20006.2455322918},{"name":"Reusing Intl.DateTimeFormat()","samples":218447,"opsSec":436887.87832704885},{"name":"Date.toLocaleDateString()","samples":520878,"opsSec":1041754.5769632478},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":13293,"opsSec":26584.167500165877}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,051,711|525856|
|Using brackets {}|1,044,222|522112|
|Using '' + |1,120,680|560445|
|Using date.toString()|1,241,706|620860|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:55:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":525856,"opsSec":1051711.7854507957},{"name":"Using brackets {}","samples":522112,"opsSec":1044222.5777688492},{"name":"Using '' + ","samples":560445,"opsSec":1120680.724081585},{"name":"Using date.toString()","samples":620860,"opsSec":1241706.6144026967}]}-->
