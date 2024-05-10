## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,799,799|3399900|
|Date.now()|8,936,520|4468261|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:46:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6799799.061629681,"samples":3399900},{"name":"Date.now()","opsSec":8936520.337806825,"samples":4468261}]}-->
