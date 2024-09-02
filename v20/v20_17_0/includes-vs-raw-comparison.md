## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|15,461,865|7730933|
|using Array.includes (first item)|17,602,281|8801141|
|Using raw comparison|19,110,013|9555007|
|Using raw comparison (first item)|18,982,330|9491166|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:45:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"using Array.includes","opsSec":15461865.659896215,"samples":7730933},{"name":"using Array.includes (first item)","opsSec":17602281.71842769,"samples":8801141},{"name":"Using raw comparison","opsSec":19110013.12106396,"samples":9555007},{"name":"Using raw comparison (first item)","opsSec":18982330.177580774,"samples":9491166}]}-->
