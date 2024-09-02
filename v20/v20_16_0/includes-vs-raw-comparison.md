## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|15,694,131|7847066|
|using Array.includes (first item)|17,685,397|8842699|
|Using raw comparison|19,354,659|9677330|
|Using raw comparison (first item)|19,604,130|9802066|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:43:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"using Array.includes","opsSec":15694131.592095178,"samples":7847066},{"name":"using Array.includes (first item)","opsSec":17685397.363221638,"samples":8842699},{"name":"Using raw comparison","opsSec":19354659.76776738,"samples":9677330},{"name":"Using raw comparison (first item)","opsSec":19604130.196503427,"samples":9802066}]}-->
