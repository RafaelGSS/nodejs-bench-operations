## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|12,585,235|6292618|
|using Array.includes (first item)|14,117,116|7058559|
|Using raw comparison|14,567,993|7283997|
|Using raw comparison (first item)|14,548,769|7274385|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:42:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"using Array.includes","opsSec":12585235.484467322,"samples":6292618},{"name":"using Array.includes (first item)","opsSec":14117116.27222273,"samples":7058559},{"name":"Using raw comparison","opsSec":14567993.110840263,"samples":7283997},{"name":"Using raw comparison (first item)","opsSec":14548769.477663018,"samples":7274385}]}-->
