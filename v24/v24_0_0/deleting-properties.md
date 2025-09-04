## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,993,062|1999678|
|Using delete property (proto: null)|16,860,746|8432635|
|Using delete property (cached proto: null)|3,978,469|1989478|
|Using undefined assignment|76,810,363|38425423|
|Using undefined assignment (proto: null)|18,518,578|9259975|
|Using undefined property (cached proto: null)|78,098,687|39057591|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:01:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1999678,"opsSec":3993062.597928406},{"name":"Using delete property (proto: null)","samples":8432635,"opsSec":16860746.295490414},{"name":"Using delete property (cached proto: null)","samples":1989478,"opsSec":3978469.6320874775},{"name":"Using undefined assignment","samples":38425423,"opsSec":76810363.40520874},{"name":"Using undefined assignment (proto: null)","samples":9259975,"opsSec":18518578.032627877},{"name":"Using undefined property (cached proto: null)","samples":39057591,"opsSec":78098687.55718791}]}-->
