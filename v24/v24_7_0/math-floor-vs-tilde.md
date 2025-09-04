## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|95,023,811|47511911|
|~ (small)|95,406,245|47708728|
|Math.floor (long)|95,343,786|47671899|
|~ (long)|93,643,185|46821618|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:23:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":47511911,"opsSec":95023811.16728552},{"name":"~ (small)","samples":47708728,"opsSec":95406245.76612248},{"name":"Math.floor (long)","samples":47671899,"opsSec":95343786.36805806},{"name":"~ (long)","samples":46821618,"opsSec":93643185.05810733}]}-->
