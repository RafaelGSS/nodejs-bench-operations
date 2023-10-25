## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,077,486|96|
|Using replaceAll()|1,980,680|94|
|Using replaceAll(//g)|1,871,505|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Using replace(//g)","opsSec":2077486.4414756002,"samples":7},{"name":"Using replaceAll()","opsSec":1980679.5865625276,"samples":5},{"name":"Using replaceAll(//g)","opsSec":1871504.8311220962,"samples":5}]}-->
