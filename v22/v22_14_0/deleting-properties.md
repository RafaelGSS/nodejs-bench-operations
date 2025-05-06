## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,866,176|1933097|
|Using delete property (proto: null)|16,721,067|8362868|
|Using delete property (cached proto: null)|3,987,514|1993759|
|Using undefined assignment|74,316,624|37162799|
|Using undefined assignment (proto: null)|17,849,822|8925877|
|Using undefined property (cached proto: null)|74,307,504|37157214|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:42:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using delete property","samples":1933097,"opsSec":3866176.43982661},{"name":"Using delete property (proto: null)","samples":8362868,"opsSec":16721067.377661752},{"name":"Using delete property (cached proto: null)","samples":1993759,"opsSec":3987514.331486815},{"name":"Using undefined assignment","samples":37162799,"opsSec":74316624.11900438},{"name":"Using undefined assignment (proto: null)","samples":8925877,"opsSec":17849822.470710445},{"name":"Using undefined property (cached proto: null)","samples":37157214,"opsSec":74307504.0267748}]}-->
