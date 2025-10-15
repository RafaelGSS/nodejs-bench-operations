## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|102,544,676|51273285|
|~ (small)|104,811,849|52406038|
|Math.floor (long)|101,522,164|50764324|
|~ (long)|104,226,626|52117448|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:50:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":51273285,"opsSec":102544676.20491986},{"name":"~ (small)","samples":52406038,"opsSec":104811849.18715835},{"name":"Math.floor (long)","samples":50764324,"opsSec":101522164.99758758},{"name":"~ (long)","samples":52117448,"opsSec":104226626.45100412}]}-->
