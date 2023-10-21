## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|566,096|87|
|Using brackets {}|581,384|96|
|Using '' + |585,812|93|
|Using date.toString()|643,722|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":566096.3350297144,"samples":4},{"name":"Using brackets {}","opsSec":581384.4666856033,"samples":4},{"name":"Using '' + ","opsSec":585811.5759187728,"samples":4},{"name":"Using date.toString()","opsSec":643722.2617900007,"samples":5}]}-->
