## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|15,200,923|7600462|
|~ (small)|15,725,533|7862767|
|Math.floor (long)|15,679,782|7839892|
|~ (long)|15,207,900|7603951|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:54:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Math.floor (small)","opsSec":15200923.744438495,"samples":7600462},{"name":"~ (small)","opsSec":15725533.938664457,"samples":7862767},{"name":"Math.floor (long)","opsSec":15679782.939826861,"samples":7839892},{"name":"~ (long)","opsSec":15207900.43136837,"samples":7603951}]}-->
