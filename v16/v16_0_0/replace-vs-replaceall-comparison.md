## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,447,508|77|
|Using replaceAll()|1,150,890|68|
|Using replaceAll(//g)|1,134,447|70|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":1447508.2362232364,"samples":5},{"name":"Using replaceAll()","opsSec":1150890.1886325274,"samples":3},{"name":"Using replaceAll(//g)","opsSec":1134447.0244331753,"samples":6}]}-->
