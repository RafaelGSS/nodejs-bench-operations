## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|16,895,615|8447808|
|Using Object.getOwnPropertyNames()|16,362,608|8181305|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:43:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":16895615.662077233,"samples":8447808},{"name":"Using Object.getOwnPropertyNames()","opsSec":16362608.42919626,"samples":8181305}]}-->
