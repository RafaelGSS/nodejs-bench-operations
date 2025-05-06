## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|86,779,461|43390210|
|Using dot notation|60,144,754|30094621|
|Using define property (writable)|4,905,832|2454343|
|Using define property initialized (writable)|7,214,201|3607161|
|Using define property (getter)|2,461,480|1230789|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:00:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":43390210,"opsSec":86779461.086955},{"name":"Using dot notation","samples":30094621,"opsSec":60144754.4888682},{"name":"Using define property (writable)","samples":2454343,"opsSec":4905832.728438478},{"name":"Using define property initialized (writable)","samples":3607161,"opsSec":7214201.609403541},{"name":"Using define property (getter)","samples":1230789,"opsSec":2461480.569676091}]}-->
