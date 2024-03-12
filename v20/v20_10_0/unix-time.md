## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,029,851|96|
|Date.now()|21,411,774|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:31:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().getTime()","opsSec":12029851.440727416,"samples":4},{"name":"Date.now()","opsSec":21411773.99480855,"samples":7}]}-->
