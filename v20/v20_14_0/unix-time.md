## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,017,660|3508831|
|Date.now()|10,236,737|5118369|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 02:04:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":7017660.498221048,"samples":3508831},{"name":"Date.now()","opsSec":10236737.324372407,"samples":5118369}]}-->
