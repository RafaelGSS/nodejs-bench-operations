## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|77,851,271|39031866|
|Using dot notation|78,379,137|39189578|
|Using define property (writable)|4,964,864|2482434|
|Using define property initialized (writable)|6,984,363|3492528|
|Using define property (getter)|2,311,256|1155808|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:50:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":39031866,"opsSec":77851271.36507098},{"name":"Using dot notation","samples":39189578,"opsSec":78379137.50252356},{"name":"Using define property (writable)","samples":2482434,"opsSec":4964864.604032611},{"name":"Using define property initialized (writable)","samples":3492528,"opsSec":6984363.444489571},{"name":"Using define property (getter)","samples":1155808,"opsSec":2311256.830688511}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.023ms
new Array(length)|100|0.008ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.457ms
new Array(length)|10,000|0.253ms
array.push|1,000,000|28.209ms
new Array(length)|1,000,000|7.835ms
array.push|10,000,000|238.906ms
new Array(length)|10,000,000|68.185ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.015ms
new Array(length)|100|0.011ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.383ms
new Array(length)|10,000|0.13ms
array.push|1,000,000|18.097ms
new Array(length)|1,000,000|11.014ms
array.push|10,000,000|360.993ms
new Array(length)|10,000,000|51.209ms
