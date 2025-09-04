## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,948,451|1974573|
|Using delete property (proto: null)|16,417,320|8208664|
|Using delete property (cached proto: null)|3,884,938|1943063|
|Using undefined assignment|74,582,070|37291039|
|Using undefined assignment (proto: null)|17,792,482|8896245|
|Using undefined property (cached proto: null)|75,380,877|37690447|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:01:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1974573,"opsSec":3948451.2305214778},{"name":"Using delete property (proto: null)","samples":8208664,"opsSec":16417320.283859465},{"name":"Using delete property (cached proto: null)","samples":1943063,"opsSec":3884938.405408974},{"name":"Using undefined assignment","samples":37291039,"opsSec":74582070.39262882},{"name":"Using undefined assignment (proto: null)","samples":8896245,"opsSec":17792482.384817537},{"name":"Using undefined property (cached proto: null)","samples":37690447,"opsSec":75380877.56696868}]}-->
