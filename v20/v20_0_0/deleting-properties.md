## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,648,442|1824328|
|Using delete property (proto: null)|16,874,861|8439567|
|Using delete property (cached proto: null)|3,715,465|1858329|
|Using undefined assignment|82,341,212|41170709|
|Using undefined assignment (proto: null)|17,266,668|8633762|
|Using undefined property (cached proto: null)|81,082,371|40541192|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:11:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using delete property","samples":1824328,"opsSec":3648442.186694091},{"name":"Using delete property (proto: null)","samples":8439567,"opsSec":16874861.285122607},{"name":"Using delete property (cached proto: null)","samples":1858329,"opsSec":3715465.8333399193},{"name":"Using undefined assignment","samples":41170709,"opsSec":82341212.14696965},{"name":"Using undefined assignment (proto: null)","samples":8633762,"opsSec":17266668.263920844},{"name":"Using undefined property (cached proto: null)","samples":40541192,"opsSec":81082371.67547952}]}-->
