## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|13,414,616|6707309|
|using Array.includes (first item)|14,044,827|7022414|
|Using raw comparison|15,388,859|7694430|
|Using raw comparison (first item)|15,248,783|7624392|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:40:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"using Array.includes","opsSec":13414616.278193561,"samples":6707309},{"name":"using Array.includes (first item)","opsSec":14044827.33560103,"samples":7022414},{"name":"Using raw comparison","opsSec":15388859.936480608,"samples":7694430},{"name":"Using raw comparison (first item)","opsSec":15248783.492096255,"samples":7624392}]}-->
