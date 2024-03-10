## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,093,851|97|
|Date.now()|21,271,880|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:28:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"new Date().getTime()","opsSec":12093851.030023022,"samples":4},{"name":"Date.now()","opsSec":21271879.851717416,"samples":4}]}-->
