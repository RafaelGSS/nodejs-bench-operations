## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|707,490,903|88|
|[async] async function|9,560,667|82|
|[async] function|233,430|39|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Fri Oct 27 2023 00:23:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"function","opsSec":707490902.6841687,"samples":7},{"name":"[async] async function","opsSec":9560667.260470757,"samples":9},{"name":"[async] function","opsSec":233429.8646602221,"samples":3}]}-->
