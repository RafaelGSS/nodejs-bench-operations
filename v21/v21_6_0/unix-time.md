## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,694,972|92|
|Date.now()|21,485,692|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:31:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().getTime()","opsSec":11694971.77555715,"samples":6},{"name":"Date.now()","opsSec":21485692.15743163,"samples":5}]}-->
