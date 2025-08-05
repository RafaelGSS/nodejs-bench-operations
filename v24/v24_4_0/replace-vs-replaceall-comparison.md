## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|4,003,827|2001915|
|Using replaceAll()|3,097,451|1548892|
|Using replaceAll(//g)|3,439,050|1719848|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:37:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using replace(//g)","samples":2001915,"opsSec":4003827.765864107},{"name":"Using replaceAll()","samples":1548892,"opsSec":3097451.903596704},{"name":"Using replaceAll(//g)","samples":1719848,"opsSec":3439050.538360657}]}-->
