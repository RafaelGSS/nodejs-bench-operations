## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|12,037,331|6018666|
|using Array.includes (first item)|13,678,319|6839160|
|Using raw comparison|14,760,180|7380091|
|Using raw comparison (first item)|14,891,846|7445924|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:19:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"using Array.includes","opsSec":12037331.589085251,"samples":6018666},{"name":"using Array.includes (first item)","opsSec":13678319.007663041,"samples":6839160},{"name":"Using raw comparison","opsSec":14760180.722016362,"samples":7380091},{"name":"Using raw comparison (first item)","opsSec":14891846.634835472,"samples":7445924}]}-->
