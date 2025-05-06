## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,223,137|1611907|
|Using replaceAll()|3,184,549|1592511|
|Using replaceAll(//g)|2,966,839|1483610|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:34:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using replace(//g)","samples":1611907,"opsSec":3223137.83725195},{"name":"Using replaceAll()","samples":1592511,"opsSec":3184549.915951359},{"name":"Using replaceAll(//g)","samples":1483610,"opsSec":2966839.6570896404}]}-->
