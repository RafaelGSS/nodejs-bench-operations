## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,732,565|94|
|Using replaceAll()|2,972,530|97|
|Using replaceAll(//g)|3,414,190|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:17:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":3732565.2970246375,"samples":9},{"name":"Using replaceAll()","opsSec":2972529.7760574343,"samples":5},{"name":"Using replaceAll(//g)","opsSec":3414189.90307589,"samples":4}]}-->
