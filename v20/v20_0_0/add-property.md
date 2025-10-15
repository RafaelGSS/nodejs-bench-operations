## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|87,003,730|43706056|
|Using dot notation|90,928,111|45495336|
|Using define property (writable)|4,524,750|2262455|
|Using define property initialized (writable)|6,007,291|3003827|
|Using define property (getter)|2,232,346|1119032|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:49:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":43706056,"opsSec":87003730.23685756},{"name":"Using dot notation","samples":45495336,"opsSec":90928111.64062902},{"name":"Using define property (writable)","samples":2262455,"opsSec":4524750.249167703},{"name":"Using define property initialized (writable)","samples":3003827,"opsSec":6007291.08753082},{"name":"Using define property (getter)","samples":1119032,"opsSec":2232346.211284573}]}-->
