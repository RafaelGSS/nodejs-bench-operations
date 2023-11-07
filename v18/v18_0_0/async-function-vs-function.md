## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|847,535,453|99|
|[async] async function|17,250,776|88|
|[async] function|187,561|23|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:14:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":847535452.7953986,"samples":7},{"name":"[async] async function","opsSec":17250775.806734253,"samples":7},{"name":"[async] function","opsSec":187560.69326310797,"samples":3}]}-->
