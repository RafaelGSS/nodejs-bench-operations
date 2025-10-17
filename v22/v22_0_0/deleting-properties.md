## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,166,794|2083401|
|Using delete property (proto: null)|17,878,938|8940691|
|Using delete property (cached proto: null)|4,165,612|2082808|
|Using undefined assignment|79,748,987|39888898|
|Using undefined assignment (proto: null)|19,982,673|9991341|
|Using undefined property (cached proto: null)|80,025,123|40012682|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:13:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using delete property","samples":2083401,"opsSec":4166794.7331099855},{"name":"Using delete property (proto: null)","samples":8940691,"opsSec":17878938.699995138},{"name":"Using delete property (cached proto: null)","samples":2082808,"opsSec":4165612.4009108855},{"name":"Using undefined assignment","samples":39888898,"opsSec":79748987.47576426},{"name":"Using undefined assignment (proto: null)","samples":9991341,"opsSec":19982673.926999737},{"name":"Using undefined property (cached proto: null)","samples":40012682,"opsSec":80025123.60452868}]}-->
