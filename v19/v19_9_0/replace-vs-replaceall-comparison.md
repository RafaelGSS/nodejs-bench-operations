## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,235,106|97|
|Using replaceAll()|2,147,269|95|
|Using replaceAll(//g)|1,983,789|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":2235105.568344288,"samples":6},{"name":"Using replaceAll()","opsSec":2147268.702797267,"samples":5},{"name":"Using replaceAll(//g)","opsSec":1983788.5651721258,"samples":6}]}-->
