## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|36,643,266|18325566|
|Using Object.getOwnPropertyNames()|42,078,416|21041518|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:54:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using Object.keys()","samples":18325566,"opsSec":36643266.30302846},{"name":"Using Object.getOwnPropertyNames()","samples":21041518,"opsSec":42078416.968012586}]}-->
