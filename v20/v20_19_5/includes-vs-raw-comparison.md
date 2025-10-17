## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|72,406,137|36207588|
|using Array.includes (first item)|85,571,666|42795786|
|Using raw comparison|100,052,777|50038639|
|Using raw comparison (first item)|97,540,163|48778855|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:20:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"using Array.includes","samples":36207588,"opsSec":72406137.25226225},{"name":"using Array.includes (first item)","samples":42795786,"opsSec":85571666.83229147},{"name":"Using raw comparison","samples":50038639,"opsSec":100052777.07594965},{"name":"Using raw comparison (first item)","samples":48778855,"opsSec":97540163.69503324}]}-->
