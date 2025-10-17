## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|105,049,553|52613644|
|Using dot notation|71,338,128|35670411|
|Using define property (writable)|4,935,541|2468808|
|Using define property initialized (writable)|7,022,392|3512087|
|Using define property (getter)|2,444,314|1222922|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:39:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Directly in the object","samples":52613644,"opsSec":105049553.81949636},{"name":"Using dot notation","samples":35670411,"opsSec":71338128.55761819},{"name":"Using define property (writable)","samples":2468808,"opsSec":4935541.276127002},{"name":"Using define property initialized (writable)","samples":3512087,"opsSec":7022392.096095184},{"name":"Using define property (getter)","samples":1222922,"opsSec":2444314.880608359}]}-->
