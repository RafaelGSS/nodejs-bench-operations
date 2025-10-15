## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|85,369,436|42724802|
|Using dot notation|80,754,165|40384663|
|Using define property (writable)|3,828,660|1914332|
|Using define property initialized (writable)|5,477,789|2739784|
|Using define property (getter)|2,096,649|1056986|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:47:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":42724802,"opsSec":85369436.29419807},{"name":"Using dot notation","samples":40384663,"opsSec":80754165.37450093},{"name":"Using define property (writable)","samples":1914332,"opsSec":3828660.875812725},{"name":"Using define property initialized (writable)","samples":2739784,"opsSec":5477789.4932185},{"name":"Using define property (getter)","samples":1056986,"opsSec":2096649.282350886}]}-->
