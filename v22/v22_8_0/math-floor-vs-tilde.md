## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|133,900,948|66950666|
|~ (small)|99,528,828|49764460|
|Math.floor (long)|93,444,253|46743142|
|~ (long)|97,647,186|48829039|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:29:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Math.floor (small)","opsSec":133900948.77548459,"samples":66950666},{"name":"~ (small)","opsSec":99528828.23442037,"samples":49764460},{"name":"Math.floor (long)","opsSec":93444253.70912418,"samples":46743142},{"name":"~ (long)","opsSec":97647186.62809786,"samples":48829039}]}-->
