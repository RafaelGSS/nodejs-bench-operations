## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,429,865|1715107|
|Using replaceAll()|2,921,604|1460804|
|Using replaceAll(//g)|3,031,082|1515564|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:35:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using replace(//g)","samples":1715107,"opsSec":3429865.6628432814},{"name":"Using replaceAll()","samples":1460804,"opsSec":2921604.236973743},{"name":"Using replaceAll(//g)","samples":1515564,"opsSec":3031082.4367688103}]}-->
