## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,877,491|95|
|Using delete property (proto: null)|9,300,749|95|
|Using delete property (cached proto: null)|1,869,299|92|
|Using undefined assignment|584,904,579|95|
|Using undefined assignment (proto: null)|11,678,539|93|
|Using undefined property (cached proto: null)|584,103,097|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using delete property","opsSec":1877490.9928648977,"samples":6},{"name":"Using delete property (proto: null)","opsSec":9300748.895033414,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":1869298.86418924,"samples":6},{"name":"Using undefined assignment","opsSec":584904579.0424376,"samples":11},{"name":"Using undefined assignment (proto: null)","opsSec":11678539.244993836,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":584103097.0480101,"samples":9}]}-->
