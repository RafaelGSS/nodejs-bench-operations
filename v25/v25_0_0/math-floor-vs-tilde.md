## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|95,479,788|47791567|
|~ (small)|94,185,246|47101959|
|Math.floor (long)|96,298,054|48152563|
|~ (long)|92,875,924|46441772|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:28:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Math.floor (small)","samples":47791567,"opsSec":95479788.0141705},{"name":"~ (small)","samples":47101959,"opsSec":94185246.90502404},{"name":"Math.floor (long)","samples":48152563,"opsSec":96298054.06350568},{"name":"~ (long)","samples":46441772,"opsSec":92875924.45915738}]}-->
