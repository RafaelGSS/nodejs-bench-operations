## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,649,575|3324788|
|Date.now()|9,637,514|4818758|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 02:04:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6649575.202051546,"samples":3324788},{"name":"Date.now()","opsSec":9637514.747116243,"samples":4818758}]}-->
