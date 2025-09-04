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
