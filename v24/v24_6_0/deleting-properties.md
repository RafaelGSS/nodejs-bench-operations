## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,165,052|2085403|
|Using delete property (proto: null)|17,284,697|8643608|
|Using delete property (cached proto: null)|4,220,550|2110301|
|Using undefined assignment|79,340,514|39682738|
|Using undefined assignment (proto: null)|19,173,499|9589340|
|Using undefined property (cached proto: null)|79,228,790|39628498|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:01:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":2085403,"opsSec":4165052.3716634703},{"name":"Using delete property (proto: null)","samples":8643608,"opsSec":17284697.34304196},{"name":"Using delete property (cached proto: null)","samples":2110301,"opsSec":4220550.23073087},{"name":"Using undefined assignment","samples":39682738,"opsSec":79340514.20478295},{"name":"Using undefined assignment (proto: null)","samples":9589340,"opsSec":19173499.7805233},{"name":"Using undefined property (cached proto: null)","samples":39628498,"opsSec":79228790.70896518}]}-->
