## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,614,885|95|
|Using replaceAll()|3,104,970|97|
|Using replaceAll(//g)|3,299,969|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:14:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":3614884.7318083006,"samples":6},{"name":"Using replaceAll()","opsSec":3104970.3142782873,"samples":5},{"name":"Using replaceAll(//g)","opsSec":3299969.2539847353,"samples":5}]}-->
