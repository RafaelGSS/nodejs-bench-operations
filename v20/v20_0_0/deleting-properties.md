## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,686,735|1845348|
|Using delete property (proto: null)|17,721,321|8861541|
|Using delete property (cached proto: null)|3,701,310|1850855|
|Using undefined assignment|84,922,224|42468086|
|Using undefined assignment (proto: null)|17,652,571|8826574|
|Using undefined property (cached proto: null)|84,956,696|42478360|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:57:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1845348,"opsSec":3686735.7674264032},{"name":"Using delete property (proto: null)","samples":8861541,"opsSec":17721321.493037596},{"name":"Using delete property (cached proto: null)","samples":1850855,"opsSec":3701310.295501189},{"name":"Using undefined assignment","samples":42468086,"opsSec":84922224.03423572},{"name":"Using undefined assignment (proto: null)","samples":8826574,"opsSec":17652571.184583973},{"name":"Using undefined property (cached proto: null)","samples":42478360,"opsSec":84956696.55195175}]}-->
