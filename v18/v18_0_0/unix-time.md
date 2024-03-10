## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,271,770|89|
|Date.now()|19,496,470|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:28:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"new Date().getTime()","opsSec":11271769.742088418,"samples":4},{"name":"Date.now()","opsSec":19496469.65697671,"samples":6}]}-->
