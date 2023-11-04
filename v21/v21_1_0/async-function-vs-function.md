## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|705,664,986|97|
|[async] async function|10,405,689|84|
|[async] function|137,648|18|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:04:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"function","opsSec":705664985.850223,"samples":7},{"name":"[async] async function","opsSec":10405689.21774717,"samples":8},{"name":"[async] function","opsSec":137648.24492586945,"samples":3}]}-->
