## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|20,653,171|10326586|
|~ (small)|20,773,734|10386868|
|Math.floor (long)|20,586,531|10293266|
|~ (long)|20,561,015|10280508|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Wed Jul 17 2024 13:23:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245231628417969},"benchmarks":[{"name":"Math.floor (small)","opsSec":20653171.71028116,"samples":10326586},{"name":"~ (small)","opsSec":20773734.461274263,"samples":10386868},{"name":"Math.floor (long)","opsSec":20586531.381449107,"samples":10293266},{"name":"~ (long)","opsSec":20561015.299702406,"samples":10280508}]}-->
