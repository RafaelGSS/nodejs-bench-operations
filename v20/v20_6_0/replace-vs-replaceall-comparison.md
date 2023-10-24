## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,462,780|95|
|Using replaceAll()|2,295,422|96|
|Using replaceAll(//g)|2,358,426|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:25:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2462779.684154593,"samples":4},{"name":"Using replaceAll()","opsSec":2295421.5357677075,"samples":5},{"name":"Using replaceAll(//g)","opsSec":2358426.172158514,"samples":4}]}-->
