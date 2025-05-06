## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,966,010|1983622|
|Using replaceAll()|2,966,897|1483519|
|Using replaceAll(//g)|3,308,505|1655296|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:38:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using replace(//g)","samples":1983622,"opsSec":3966010.340755425},{"name":"Using replaceAll()","samples":1483519,"opsSec":2966897.7844107086},{"name":"Using replaceAll(//g)","samples":1655296,"opsSec":3308505.9208467873}]}-->
