## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|13,199,273|96|
|Date.now()|23,916,400|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 02:05:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":13199273.461413635,"samples":5},{"name":"Date.now()","opsSec":23916399.609315395,"samples":5}]}-->
