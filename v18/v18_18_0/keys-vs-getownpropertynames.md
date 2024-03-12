## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|89,406,988|92|
|Using Object.getOwnPropertyNames()|91,820,061|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:51:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"Using Object.keys()","opsSec":89406988.49542616,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":91820061.40884088,"samples":5}]}-->
