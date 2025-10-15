## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|108,979,273|54489890|
|Using dot notation|77,250,151|38680501|
|Using define property (writable)|4,935,747|2468633|
|Using define property initialized (writable)|6,827,453|3413732|
|Using define property (getter)|2,345,263|1203386|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:51:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":54489890,"opsSec":108979273.900252},{"name":"Using dot notation","samples":38680501,"opsSec":77250151.58598109},{"name":"Using define property (writable)","samples":2468633,"opsSec":4935747.576487064},{"name":"Using define property initialized (writable)","samples":3413732,"opsSec":6827453.704199814},{"name":"Using define property (getter)","samples":1203386,"opsSec":2345263.002984911}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.03ms
new Array(length)|100|0.009ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.505ms
new Array(length)|10,000|0.267ms
array.push|1,000,000|29.279ms
new Array(length)|1,000,000|9.2ms
array.push|10,000,000|242.123ms
new Array(length)|10,000,000|63.939ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.014ms
new Array(length)|100|0.011ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.019ms
array.push|10,000|0.396ms
new Array(length)|10,000|0.118ms
array.push|1,000,000|17.764ms
new Array(length)|1,000,000|12.375ms
array.push|10,000,000|345.138ms
new Array(length)|10,000,000|51.874ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|300|151|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:58:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":151,"opsSec":300.82931609815904},{"name":"Array.from","samples":12,"opsSec":23.09203023836702}]}-->
