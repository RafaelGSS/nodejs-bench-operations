## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|104,803,610|52445102|
|~ (small)|104,347,489|52174006|
|Math.floor (long)|105,041,451|52520736|
|~ (long)|106,958,319|53479181|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:22:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":52445102,"opsSec":104803610.6455258},{"name":"~ (small)","samples":52174006,"opsSec":104347489.21907902},{"name":"Math.floor (long)","samples":52520736,"opsSec":105041451.20179267},{"name":"~ (long)","samples":53479181,"opsSec":106958319.00275576}]}-->
