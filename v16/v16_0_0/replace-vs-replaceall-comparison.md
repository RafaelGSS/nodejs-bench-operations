## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,017,604|94|
|Using replaceAll()|1,912,319|97|
|Using replaceAll(//g)|1,780,308|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:30:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2017604.3622505632,"samples":5},{"name":"Using replaceAll()","opsSec":1912319.0001272482,"samples":8},{"name":"Using replaceAll(//g)","opsSec":1780308.1630497423,"samples":6}]}-->
