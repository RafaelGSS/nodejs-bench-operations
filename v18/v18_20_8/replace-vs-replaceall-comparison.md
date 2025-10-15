## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,360,501|1680736|
|Using replaceAll()|2,998,966|1499939|
|Using replaceAll(//g)|2,987,518|1494086|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:26:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1680736,"opsSec":3360501.8970333682},{"name":"Using replaceAll()","samples":1499939,"opsSec":2998966.3142404705},{"name":"Using replaceAll(//g)","samples":1494086,"opsSec":2987518.1696984884}]}-->
