## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|70,393,172|35198755|
|using Array.includes (first item)|79,433,044|39723036|
|Using raw comparison|97,195,973|48616205|
|Using raw comparison (first item)|98,364,336|49191405|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:27:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"using Array.includes","samples":35198755,"opsSec":70393172.51349607},{"name":"using Array.includes (first item)","samples":39723036,"opsSec":79433044.50410305},{"name":"Using raw comparison","samples":48616205,"opsSec":97195973.17357668},{"name":"Using raw comparison (first item)","samples":49191405,"opsSec":98364336.58740287}]}-->
