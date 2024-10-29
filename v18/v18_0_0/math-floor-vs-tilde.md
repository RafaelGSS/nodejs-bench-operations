## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|148,695,508|74385671|
|~ (small)|105,135,500|52568902|
|Math.floor (long)|106,189,322|53094665|
|~ (long)|107,521,355|53760693|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:10:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":148695508.18299973,"samples":74385671},{"name":"~ (small)","opsSec":105135500.48118445,"samples":52568902},{"name":"Math.floor (long)","opsSec":106189322.14199017,"samples":53094665},{"name":"~ (long)","opsSec":107521355.24889241,"samples":53760693}]}-->
