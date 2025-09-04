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
