## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,188,327|91|
|Using replaceAll()|2,048,648|99|
|Using replaceAll(//g)|2,011,814|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2188326.6005223254,"samples":5},{"name":"Using replaceAll()","opsSec":2048647.8353346442,"samples":10},{"name":"Using replaceAll(//g)","opsSec":2011814.0469460806,"samples":8}]}-->
