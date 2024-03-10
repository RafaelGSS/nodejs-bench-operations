## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,222,467|92|
|Date.now()|18,264,254|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:28:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().getTime()","opsSec":10222467.01272401,"samples":5},{"name":"Date.now()","opsSec":18264254.43735393,"samples":6}]}-->
