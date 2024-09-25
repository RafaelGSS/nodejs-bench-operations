## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|13,296,995|6648498|
|using Array.includes (first item)|14,555,853|7277927|
|Using raw comparison|15,457,507|7728754|
|Using raw comparison (first item)|15,420,037|7710019|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:23:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"using Array.includes","opsSec":13296995.15123968,"samples":6648498},{"name":"using Array.includes (first item)","opsSec":14555853.74888504,"samples":7277927},{"name":"Using raw comparison","opsSec":15457507.774387049,"samples":7728754},{"name":"Using raw comparison (first item)","opsSec":15420037.523587221,"samples":7710019}]}-->
