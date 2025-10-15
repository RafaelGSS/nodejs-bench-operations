## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,351,179|1675959|
|Using replaceAll()|3,278,949|1647654|
|Using replaceAll(//g)|3,063,400|1531704|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:26:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1675959,"opsSec":3351179.2057346622},{"name":"Using replaceAll()","samples":1647654,"opsSec":3278949.602423177},{"name":"Using replaceAll(//g)","samples":1531704,"opsSec":3063400.9786849567}]}-->
