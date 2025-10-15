## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|104,881,513|52454518|
|~ (small)|106,256,392|53173834|
|Math.floor (long)|105,266,415|52646415|
|~ (long)|107,192,097|53599276|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:51:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":52454518,"opsSec":104881513.20306829},{"name":"~ (small)","samples":53173834,"opsSec":106256392.6961101},{"name":"Math.floor (long)","samples":52646415,"opsSec":105266415.91931902},{"name":"~ (long)","samples":53599276,"opsSec":107192097.74941032}]}-->
