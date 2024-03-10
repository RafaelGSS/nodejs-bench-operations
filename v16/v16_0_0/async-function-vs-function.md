## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|899,096,511|97|
|[async] async function|16,172,748|86|
|[async] function|236,407|29|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:37:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":899096510.6362524,"samples":7},{"name":"[async] async function","opsSec":16172748.425458316,"samples":6},{"name":"[async] function","opsSec":236407.4015383957,"samples":3}]}-->
