## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,483,266|1741896|
|Using replaceAll()|3,279,690|1644732|
|Using replaceAll(//g)|3,130,969|1565486|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:55:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using replace(//g)","samples":1741896,"opsSec":3483266.2218634067},{"name":"Using replaceAll()","samples":1644732,"opsSec":3279690.312967178},{"name":"Using replaceAll(//g)","samples":1565486,"opsSec":3130969.9648695225}]}-->
