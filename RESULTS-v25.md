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
