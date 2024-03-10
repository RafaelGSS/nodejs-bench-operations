## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,888,130|95|
|Date.now()|21,808,559|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:28:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"new Date().getTime()","opsSec":11888129.703679383,"samples":5},{"name":"Date.now()","opsSec":21808559.133952476,"samples":5}]}-->
