## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|104,670,557|52366020|
|~ (small)|107,317,016|53665560|
|Math.floor (long)|105,152,690|52647729|
|~ (long)|105,362,861|52681445|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:01:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Math.floor (small)","samples":52366020,"opsSec":104670557.97963057},{"name":"~ (small)","samples":53665560,"opsSec":107317016.82691666},{"name":"Math.floor (long)","samples":52647729,"opsSec":105152690.08961155},{"name":"~ (long)","samples":52681445,"opsSec":105362861.55202739}]}-->
