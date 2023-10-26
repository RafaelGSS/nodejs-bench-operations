## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|710,470,282|91|
|[async] - function|89,688,705|94|
|[async] - await function|657,130|15|
|[async] - await async function|204,782|32|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Oct 26 2023 23:42:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"function","opsSec":710470282.4956427,"samples":9},{"name":"[async] - function","opsSec":89688704.61900891,"samples":7},{"name":"[async] - await function","opsSec":657129.804900956,"samples":3},{"name":"[async] - await async function","opsSec":204781.54663538106,"samples":3}]}-->
