## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|13,778,313|6889157|
|~ (small)|14,012,390|7006196|
|Math.floor (long)|13,928,252|6964127|
|~ (long)|14,141,039|7070520|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:51:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Math.floor (small)","opsSec":13778313.67953227,"samples":6889157},{"name":"~ (small)","opsSec":14012390.387482941,"samples":7006196},{"name":"Math.floor (long)","opsSec":13928252.819160543,"samples":6964127},{"name":"~ (long)","opsSec":14141039.14443263,"samples":7070520}]}-->
