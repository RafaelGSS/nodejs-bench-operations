## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|70,373,555|35205350|
|Using dot notation|65,567,148|32790602|
|Using define property (writable)|4,380,990|2190656|
|Using define property initialized (writable)|5,847,392|2923698|
|Using define property (getter)|2,168,420|1084225|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:01:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":35205350,"opsSec":70373555.00795437},{"name":"Using dot notation","samples":32790602,"opsSec":65567148.763722405},{"name":"Using define property (writable)","samples":2190656,"opsSec":4380990.890891661},{"name":"Using define property initialized (writable)","samples":2923698,"opsSec":5847392.994440001},{"name":"Using define property (getter)","samples":1084225,"opsSec":2168420.257947742}]}-->
