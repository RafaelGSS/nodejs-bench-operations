## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,721,168|1861669|
|Using delete property (proto: null)|16,717,603|8358802|
|Using delete property (cached proto: null)|3,767,528|1884126|
|Using undefined assignment|84,178,566|42089290|
|Using undefined assignment (proto: null)|17,721,800|8861356|
|Using undefined property (cached proto: null)|84,437,456|42218768|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:00:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1861669,"opsSec":3721168.8562503145},{"name":"Using delete property (proto: null)","samples":8358802,"opsSec":16717603.699083135},{"name":"Using delete property (cached proto: null)","samples":1884126,"opsSec":3767528.2050864077},{"name":"Using undefined assignment","samples":42089290,"opsSec":84178566.69978647},{"name":"Using undefined assignment (proto: null)","samples":8861356,"opsSec":17721800.319704354},{"name":"Using undefined property (cached proto: null)","samples":42218768,"opsSec":84437456.62879077}]}-->
