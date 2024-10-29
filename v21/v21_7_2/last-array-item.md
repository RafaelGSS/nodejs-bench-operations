## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|134,039,212|67075437|
|Length = 10_000 - Array.at|96,563,509|48281764|
|Length = 1_000_000 - Array.at|97,056,804|48528409|
|Length = 100 - Array[length - 1]|95,221,818|47610911|
|Length = 10_000 - Array[length - 1]|97,521,430|48865955|
|Length = 1_000_000 - Array[length - 1]|97,652,751|48826381|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:08:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":134039212.90177059,"samples":67075437},{"name":"Length = 10_000 - Array.at","opsSec":96563509.2666792,"samples":48281764},{"name":"Length = 1_000_000 - Array.at","opsSec":97056804.99438813,"samples":48528409},{"name":"Length = 100 - Array[length - 1]","opsSec":95221818.00068365,"samples":47610911},{"name":"Length = 10_000 - Array[length - 1]","opsSec":97521430.47182697,"samples":48865955},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":97652751.45350283,"samples":48826381}]}-->
