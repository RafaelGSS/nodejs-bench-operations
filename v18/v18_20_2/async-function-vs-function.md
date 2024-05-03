## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|910,401,717|99|
|[async] async function|18,624,576|85|
|[async] function|388,481|39|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:36:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":910401716.7408183,"samples":6},{"name":"[async] async function","opsSec":18624576.029875536,"samples":8},{"name":"[async] function","opsSec":388480.55204941134,"samples":3}]}-->
