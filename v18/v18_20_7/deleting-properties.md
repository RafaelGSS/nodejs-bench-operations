## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,303,514|1652195|
|Using delete property (proto: null)|18,260,352|9130682|
|Using delete property (cached proto: null)|3,318,446|1659657|
|Using undefined assignment|82,013,361|41006682|
|Using undefined assignment (proto: null)|20,576,402|10291045|
|Using undefined property (cached proto: null)|81,768,768|40884403|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:42:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using delete property","samples":1652195,"opsSec":3303514.046822373},{"name":"Using delete property (proto: null)","samples":9130682,"opsSec":18260352.157366257},{"name":"Using delete property (cached proto: null)","samples":1659657,"opsSec":3318446.7305838554},{"name":"Using undefined assignment","samples":41006682,"opsSec":82013361.37557244},{"name":"Using undefined assignment (proto: null)","samples":10291045,"opsSec":20576402.47659145},{"name":"Using undefined property (cached proto: null)","samples":40884403,"opsSec":81768768.549904}]}-->
