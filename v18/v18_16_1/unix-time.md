## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,467,138|94|
|Date.now()|15,402,616|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 18:01:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":7467138.442117198,"samples":6},{"name":"Date.now()","opsSec":15402615.84475214,"samples":8}]}-->
