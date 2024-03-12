## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|846,036,242|99|
|[async] async function|17,561,451|87|
|[async] function|170,898|21|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:26:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":846036241.9196303,"samples":6},{"name":"[async] async function","opsSec":17561450.548105612,"samples":8},{"name":"[async] function","opsSec":170898.31883534475,"samples":3}]}-->
