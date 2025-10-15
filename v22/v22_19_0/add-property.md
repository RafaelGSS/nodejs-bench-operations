## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|111,841,628|55956974|
|Using dot notation|80,529,981|40265623|
|Using define property (writable)|4,915,925|2458022|
|Using define property initialized (writable)|7,097,121|3549632|
|Using define property (getter)|2,454,927|1239139|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:49:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":55956974,"opsSec":111841628.29526195},{"name":"Using dot notation","samples":40265623,"opsSec":80529981.5182302},{"name":"Using define property (writable)","samples":2458022,"opsSec":4915925.132930285},{"name":"Using define property initialized (writable)","samples":3549632,"opsSec":7097121.861514296},{"name":"Using define property (getter)","samples":1239139,"opsSec":2454927.8555052476}]}-->
