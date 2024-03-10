## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|820,598,862|97|
|[async] async function|16,938,448|90|
|[async] function|341,737|38|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:37:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":820598861.5694212,"samples":6},{"name":"[async] async function","opsSec":16938447.826037392,"samples":6},{"name":"[async] function","opsSec":341736.6092829276,"samples":3}]}-->
