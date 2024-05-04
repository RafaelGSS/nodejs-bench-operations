## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|13,301,790|93|
|Date.now()|24,071,225|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 02:04:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":13301789.997775152,"samples":5},{"name":"Date.now()","opsSec":24071224.824536394,"samples":5}]}-->
