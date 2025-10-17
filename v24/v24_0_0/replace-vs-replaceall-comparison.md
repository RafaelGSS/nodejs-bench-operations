## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|4,002,669|2001536|
|Using replaceAll()|3,164,789|1582486|
|Using replaceAll(//g)|3,454,144|1727245|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:54:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using replace(//g)","samples":2001536,"opsSec":4002669.699673825},{"name":"Using replaceAll()","samples":1582486,"opsSec":3164789.7081128126},{"name":"Using replaceAll(//g)","samples":1727245,"opsSec":3454144.081286835}]}-->
