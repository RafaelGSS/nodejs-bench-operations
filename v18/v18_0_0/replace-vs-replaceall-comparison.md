## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,678,540|95|
|Using replaceAll()|3,376,719|94|
|Using replaceAll(//g)|3,319,034|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:14:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":3678539.858368855,"samples":7},{"name":"Using replaceAll()","opsSec":3376718.943674366,"samples":4},{"name":"Using replaceAll(//g)","opsSec":3319033.5960760373,"samples":5}]}-->
