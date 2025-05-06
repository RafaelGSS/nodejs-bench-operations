## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|66,839,065|33419610|
|Using dot notation|66,203,488|33103648|
|Using define property (writable)|3,897,551|1948777|
|Using define property initialized (writable)|5,502,239|2756164|
|Using define property (getter)|2,049,858|1038834|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 17:59:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":33419610,"opsSec":66839065.200725},{"name":"Using dot notation","samples":33103648,"opsSec":66203488.504969105},{"name":"Using define property (writable)","samples":1948777,"opsSec":3897551.0222710194},{"name":"Using define property initialized (writable)","samples":2756164,"opsSec":5502239.193255552},{"name":"Using define property (getter)","samples":1038834,"opsSec":2049858.3304779876}]}-->
