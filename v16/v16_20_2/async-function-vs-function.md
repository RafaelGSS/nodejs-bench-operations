## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|823,656,823|99|
|[async] async function|14,974,816|85|
|[async] function|370,031|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:37:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":823656823.3260716,"samples":6},{"name":"[async] async function","opsSec":14974815.916439293,"samples":7},{"name":"[async] function","opsSec":370030.66259205143,"samples":3}]}-->
