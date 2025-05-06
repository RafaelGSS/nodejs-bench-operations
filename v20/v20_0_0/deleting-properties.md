## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,639,920|1819964|
|Using delete property (proto: null)|17,100,501|8550251|
|Using delete property (cached proto: null)|3,654,782|1827392|
|Using undefined assignment|77,680,360|38840228|
|Using undefined assignment (proto: null)|17,536,315|8769404|
|Using undefined property (cached proto: null)|77,848,767|38935018|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:41:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using delete property","samples":1819964,"opsSec":3639920.530883071},{"name":"Using delete property (proto: null)","samples":8550251,"opsSec":17100501.657989964},{"name":"Using delete property (cached proto: null)","samples":1827392,"opsSec":3654782.1506802323},{"name":"Using undefined assignment","samples":38840228,"opsSec":77680360.29779612},{"name":"Using undefined assignment (proto: null)","samples":8769404,"opsSec":17536315.52840132},{"name":"Using undefined property (cached proto: null)","samples":38935018,"opsSec":77848767.24969478}]}-->
