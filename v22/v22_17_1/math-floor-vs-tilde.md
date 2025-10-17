## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|94,654,270|47327141|
|~ (small)|92,282,676|46213417|
|Math.floor (long)|93,770,362|46885186|
|~ (long)|94,333,538|47167366|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:28:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Math.floor (small)","samples":47327141,"opsSec":94654270.452179},{"name":"~ (small)","samples":46213417,"opsSec":92282676.64689495},{"name":"Math.floor (long)","samples":46885186,"opsSec":93770362.81050445},{"name":"~ (long)","samples":47167366,"opsSec":94333538.492071}]}-->
