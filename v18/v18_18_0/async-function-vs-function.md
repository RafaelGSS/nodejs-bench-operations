## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|819,210,930|99|
|[async] async function|17,112,282|90|
|[async] function|349,045|37|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:26:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":819210930.2980201,"samples":6},{"name":"[async] async function","opsSec":17112281.512778845,"samples":6},{"name":"[async] function","opsSec":349045.0123767641,"samples":3}]}-->
