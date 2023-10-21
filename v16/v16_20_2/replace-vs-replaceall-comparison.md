## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,031,327|96|
|Using replaceAll()|1,893,842|95|
|Using replaceAll(//g)|1,821,541|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:29:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2031327.316005493,"samples":7},{"name":"Using replaceAll()","opsSec":1893842.1647432442,"samples":4},{"name":"Using replaceAll(//g)","opsSec":1821540.6569185362,"samples":5}]}-->
