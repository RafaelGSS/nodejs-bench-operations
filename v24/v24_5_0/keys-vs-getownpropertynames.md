## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|40,861,266|20437185|
|Using Object.getOwnPropertyNames()|45,406,922|22707688|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:27:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using Object.keys()","samples":20437185,"opsSec":40861266.363934815},{"name":"Using Object.getOwnPropertyNames()","samples":22707688,"opsSec":45406922.048439175}]}-->
