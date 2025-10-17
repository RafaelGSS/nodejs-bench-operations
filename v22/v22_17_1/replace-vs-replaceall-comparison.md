## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,399,716|1700215|
|Using replaceAll()|3,199,860|1604799|
|Using replaceAll(//g)|3,090,791|1545397|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:55:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using replace(//g)","samples":1700215,"opsSec":3399716.494699824},{"name":"Using replaceAll()","samples":1604799,"opsSec":3199860.6193442554},{"name":"Using replaceAll(//g)","samples":1545397,"opsSec":3090791.4284615316}]}-->
