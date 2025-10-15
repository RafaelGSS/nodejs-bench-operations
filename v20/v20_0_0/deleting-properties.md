## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,758,207|1880185|
|Using delete property (proto: null)|17,211,229|8605616|
|Using delete property (cached proto: null)|3,778,609|1889448|
|Using undefined assignment|85,298,342|42649177|
|Using undefined assignment (proto: null)|17,121,761|8563719|
|Using undefined property (cached proto: null)|85,410,962|42713964|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:33:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1880185,"opsSec":3758207.4898282783},{"name":"Using delete property (proto: null)","samples":8605616,"opsSec":17211229.005246155},{"name":"Using delete property (cached proto: null)","samples":1889448,"opsSec":3778609.853433019},{"name":"Using undefined assignment","samples":42649177,"opsSec":85298342.91121541},{"name":"Using undefined assignment (proto: null)","samples":8563719,"opsSec":17121761.41697629},{"name":"Using undefined property (cached proto: null)","samples":42713964,"opsSec":85410962.13730296}]}-->
