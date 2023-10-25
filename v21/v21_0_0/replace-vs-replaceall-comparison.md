## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,920,229|89|
|Using replaceAll()|1,696,900|88|
|Using replaceAll(//g)|1,524,861|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":1920228.6248690768,"samples":7},{"name":"Using replaceAll()","opsSec":1696899.6443890608,"samples":5},{"name":"Using replaceAll(//g)","opsSec":1524861.368743941,"samples":4}]}-->
