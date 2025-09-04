## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,986,477|1994757|
|Using delete property (proto: null)|17,549,199|8775059|
|Using delete property (cached proto: null)|4,091,760|2045884|
|Using undefined assignment|71,271,738|35636874|
|Using undefined assignment (proto: null)|19,351,063|9676723|
|Using undefined property (cached proto: null)|72,086,829|36053985|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:59:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1994757,"opsSec":3986477.5638232767},{"name":"Using delete property (proto: null)","samples":8775059,"opsSec":17549199.720575422},{"name":"Using delete property (cached proto: null)","samples":2045884,"opsSec":4091760.823051517},{"name":"Using undefined assignment","samples":35636874,"opsSec":71271738.13698454},{"name":"Using undefined assignment (proto: null)","samples":9676723,"opsSec":19351063.148785986},{"name":"Using undefined property (cached proto: null)","samples":36053985,"opsSec":72086829.3838939}]}-->
