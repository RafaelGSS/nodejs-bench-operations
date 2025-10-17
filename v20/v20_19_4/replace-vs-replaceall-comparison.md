## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,299,640|1650147|
|Using replaceAll()|3,041,713|1520858|
|Using replaceAll(//g)|3,144,950|1572476|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:53:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using replace(//g)","samples":1650147,"opsSec":3299640.8558904217},{"name":"Using replaceAll()","samples":1520858,"opsSec":3041713.8586334432},{"name":"Using replaceAll(//g)","samples":1572476,"opsSec":3144950.8112085937}]}-->
