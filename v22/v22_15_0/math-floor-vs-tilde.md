## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|95,977,581|47999647|
|~ (small)|93,048,054|46524034|
|Math.floor (long)|95,885,973|47943022|
|~ (long)|98,061,358|49045476|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:03:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Math.floor (small)","samples":47999647,"opsSec":95977581.95141095},{"name":"~ (small)","samples":46524034,"opsSec":93048054.78717622},{"name":"Math.floor (long)","samples":47943022,"opsSec":95885973.42792355},{"name":"~ (long)","samples":49045476,"opsSec":98061358.6509409}]}-->
