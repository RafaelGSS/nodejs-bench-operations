## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|74,235,312|37118345|
|using Array.includes (first item)|81,892,156|40951703|
|Using raw comparison|96,947,058|48474071|
|Using raw comparison (first item)|99,676,391|49844471|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:18:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"using Array.includes","samples":37118345,"opsSec":74235312.48954146},{"name":"using Array.includes (first item)","samples":40951703,"opsSec":81892156.31070329},{"name":"Using raw comparison","samples":48474071,"opsSec":96947058.71356595},{"name":"Using raw comparison (first item)","samples":49844471,"opsSec":99676391.14753227}]}-->
