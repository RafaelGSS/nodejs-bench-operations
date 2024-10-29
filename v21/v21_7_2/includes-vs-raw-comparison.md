## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|90,267,260|45141615|
|using Array.includes (first item)|83,213,825|41609906|
|Using raw comparison|99,702,862|49851450|
|Using raw comparison (first item)|99,043,573|49521794|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:56:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":90267260.63838595,"samples":45141615},{"name":"using Array.includes (first item)","opsSec":83213825.26455516,"samples":41609906},{"name":"Using raw comparison","opsSec":99702862.5117237,"samples":49851450},{"name":"Using raw comparison (first item)","opsSec":99043573.73772539,"samples":49521794}]}-->
