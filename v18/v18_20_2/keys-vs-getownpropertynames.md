## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|14,352,426|7176214|
|Using Object.getOwnPropertyNames()|14,778,682|7389342|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:42:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":14352426.519272773,"samples":7176214},{"name":"Using Object.getOwnPropertyNames()","opsSec":14778682.577712156,"samples":7389342}]}-->
