## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,052,508|95|
|Date.now()|18,354,089|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:28:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().getTime()","opsSec":10052507.744144447,"samples":4},{"name":"Date.now()","opsSec":18354088.539841518,"samples":4}]}-->
