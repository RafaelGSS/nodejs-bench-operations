## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|912,258,679|99|
|[async] async function|18,177,278|87|
|[async] function|372,827|33|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:40:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":912258679.0486792,"samples":6},{"name":"[async] async function","opsSec":18177277.85342129,"samples":7},{"name":"[async] function","opsSec":372826.6935797394,"samples":3}]}-->
