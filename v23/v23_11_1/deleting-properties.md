## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,017,764|2009144|
|Using delete property (proto: null)|17,460,846|8730636|
|Using delete property (cached proto: null)|4,018,646|2009683|
|Using undefined assignment|75,383,320|37691765|
|Using undefined assignment (proto: null)|19,465,831|9732917|
|Using undefined property (cached proto: null)|75,492,084|37746048|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:00:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":2009144,"opsSec":4017764.7182875606},{"name":"Using delete property (proto: null)","samples":8730636,"opsSec":17460846.02520037},{"name":"Using delete property (cached proto: null)","samples":2009683,"opsSec":4018646.9515382554},{"name":"Using undefined assignment","samples":37691765,"opsSec":75383320.28360298},{"name":"Using undefined assignment (proto: null)","samples":9732917,"opsSec":19465831.70303186},{"name":"Using undefined property (cached proto: null)","samples":37746048,"opsSec":75492084.82717144}]}-->
