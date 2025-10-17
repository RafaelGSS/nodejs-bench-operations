## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|92,127,447|46063749|
|~ (small)|90,960,557|45504930|
|Math.floor (long)|95,231,347|47616698|
|~ (long)|95,348,584|47674853|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:27:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Math.floor (small)","samples":46063749,"opsSec":92127447.69841355},{"name":"~ (small)","samples":45504930,"opsSec":90960557.74041466},{"name":"Math.floor (long)","samples":47616698,"opsSec":95231347.1927965},{"name":"~ (long)","samples":47674853,"opsSec":95348584.509949}]}-->
