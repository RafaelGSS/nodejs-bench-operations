## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|129,724,834|64862437|
|~ (small)|68,045,344|34024309|
|Math.floor (long)|57,491,337|28770981|
|~ (long)|68,541,345|34270684|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:10:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Math.floor (small)","opsSec":129724834.04475112,"samples":64862437},{"name":"~ (small)","opsSec":68045344.61065216,"samples":34024309},{"name":"Math.floor (long)","opsSec":57491337.313032955,"samples":28770981},{"name":"~ (long)","opsSec":68541345.38135603,"samples":34270684}]}-->
