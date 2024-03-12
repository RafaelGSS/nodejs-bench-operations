## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|818,768,621|97|
|[async] async function|16,372,442|81|
|[async] function|351,035|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:26:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":818768620.9984884,"samples":6},{"name":"[async] async function","opsSec":16372442.308637679,"samples":7},{"name":"[async] function","opsSec":351035.24399498705,"samples":3}]}-->
