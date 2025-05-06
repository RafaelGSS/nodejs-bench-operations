## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,702,901|5352031|
|Date.now()|20,477,283|10243413|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:29:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().getTime()","samples":5352031,"opsSec":10702901.591409458},{"name":"Date.now()","samples":10243413,"opsSec":20477283.872397438}]}-->
