## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,836,334|7918171|
|Using indexof|15,785,434|7893880|
|Using RegExp.test|13,392,923|6696463|
|Using RegExp.text with cached regex pattern|14,328,362|7164269|
|Using new RegExp.test|4,791,835|2395919|
|Using new RegExp.test with cached regex pattern|5,467,630|2734144|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:04:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":7918171,"opsSec":15836334.968667272},{"name":"Using indexof","samples":7893880,"opsSec":15785434.61605584},{"name":"Using RegExp.test","samples":6696463,"opsSec":13392923.508916227},{"name":"Using RegExp.text with cached regex pattern","samples":7164269,"opsSec":14328362.706810646},{"name":"Using new RegExp.test","samples":2395919,"opsSec":4791835.441159874},{"name":"Using new RegExp.test with cached regex pattern","samples":2734144,"opsSec":5467630.222213747}]}-->
