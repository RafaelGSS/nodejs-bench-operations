## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,832,964|7916484|
|Using indexof|15,965,578|7982790|
|Using RegExp.test|13,458,347|6729286|
|Using RegExp.text with cached regex pattern|14,501,073|7254200|
|Using new RegExp.test|4,761,047|2380525|
|Using new RegExp.test with cached regex pattern|5,372,986|2686495|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:03:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":7916484,"opsSec":15832964.516747806},{"name":"Using indexof","samples":7982790,"opsSec":15965578.116061782},{"name":"Using RegExp.test","samples":6729286,"opsSec":13458347.89159091},{"name":"Using RegExp.text with cached regex pattern","samples":7254200,"opsSec":14501073.100798652},{"name":"Using new RegExp.test","samples":2380525,"opsSec":4761047.562343649},{"name":"Using new RegExp.test with cached regex pattern","samples":2686495,"opsSec":5372986.206671738}]}-->
