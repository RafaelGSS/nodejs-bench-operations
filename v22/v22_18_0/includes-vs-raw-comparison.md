## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|73,957,925|37008371|
|using Array.includes (first item)|80,929,455|40464733|
|Using raw comparison|96,569,508|48302836|
|Using raw comparison (first item)|98,258,262|49130725|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:09:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":37008371,"opsSec":73957925.03720811},{"name":"using Array.includes (first item)","samples":40464733,"opsSec":80929455.80288857},{"name":"Using raw comparison","samples":48302836,"opsSec":96569508.6504006},{"name":"Using raw comparison (first item)","samples":49130725,"opsSec":98258262.69847459}]}-->
