## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,396,651|91|
|Using replaceAll()|2,175,079|95|
|Using replaceAll(//g)|2,144,481|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:25:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":2396651.1392480046,"samples":5},{"name":"Using replaceAll()","opsSec":2175079.1694188705,"samples":7},{"name":"Using replaceAll(//g)","opsSec":2144480.605679037,"samples":5}]}-->
