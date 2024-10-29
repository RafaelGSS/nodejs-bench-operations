## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|90,874,298|45877240|
|Using dot notation|65,305,237|33162498|
|Using define property (writable)|4,206,061|2112781|
|Using define property initialized (writable)|3,041,001|1520502|
|Using define property (getter)|2,201,846|1102405|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:46:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":90874298.44406314,"samples":45877240},{"name":"Using dot notation","opsSec":65305237.990635306,"samples":33162498},{"name":"Using define property (writable)","opsSec":4206061.144292437,"samples":2112781},{"name":"Using define property initialized (writable)","opsSec":3041001.469886777,"samples":1520502},{"name":"Using define property (getter)","opsSec":2201846.54354443,"samples":1102405}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.072ms
new Array(length)|100|0.009ms
array.push|1,000|0.03ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.308ms
new Array(length)|10,000|0.181ms
array.push|1,000,000|29.825ms
new Array(length)|1,000,000|6.805ms
array.push|100,000,000|1,832.759ms
new Array(length)|100,000,000|3,990ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.017ms
new Array(length)|100|0.012ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.019ms
array.push|10,000|177.637ms
new Array(length)|10,000|0.032ms
array.push|1,000,000|16.2ms
new Array(length)|1,000,000|7.419ms
array.push|100,000,000|1,955.219ms
new Array(length)|100,000,000|4,663.106ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|333|168|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:00:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Array","opsSec":333.6300880291328,"samples":168},{"name":"Array.from","opsSec":23.79170344599667,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,927|2464|
|new Blob (1024)|629|317|
|text (128)|4,320|2161|
|text (1024)|550|276|
|arrayBuffer (128)|4,387|2194|
|arrayBuffer (1024)|549|275|
|slice (0, 64)|150,159|86444|
|slice (0, 512)|32,651|16326|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:06:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4927.344111370647,"samples":2464},{"name":"new Blob (1024)","opsSec":629.9450437533596,"samples":317},{"name":"text (128)","opsSec":4320.142649710895,"samples":2161},{"name":"text (1024)","opsSec":550.8769239099632,"samples":276},{"name":"arrayBuffer (128)","opsSec":4387.990987066512,"samples":2194},{"name":"arrayBuffer (1024)","opsSec":549.8473063033449,"samples":275},{"name":"slice (0, 64)","opsSec":150159.64198261534,"samples":86444},{"name":"slice (0, 512)","opsSec":32651.176406726314,"samples":16326}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|453,616|226809|
|[True conditional] Using constructor name|351,155|175578|
|[True conditional] Check if property is valid then instanceof |351,689|175863|
|[False conditional] Using instanceof only|92,178,120|46093674|
|[False conditional] Using constructor name|92,983,061|46494041|
|[False conditional] Check if property is valid then instanceof |87,744,020|43872332|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:12:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":453616.20549429103,"samples":226809},{"name":"[True conditional] Using constructor name","opsSec":351155.17970150016,"samples":175578},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":351689.80619528523,"samples":175863},{"name":"[False conditional] Using instanceof only","opsSec":92178120.23273973,"samples":46093674},{"name":"[False conditional] Using constructor name","opsSec":92983061.47257885,"samples":46494041},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":87744020.13438025,"samples":43872332}]}-->
