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
