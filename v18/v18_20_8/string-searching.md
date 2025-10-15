## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,115,427|8058966|
|Using indexof|16,189,176|8094790|
|Using RegExp.test|14,013,296|7006696|
|Using RegExp.text with cached regex pattern|14,733,112|7367104|
|Using new RegExp.test|4,325,937|2163362|
|Using new RegExp.test with cached regex pattern|4,898,595|2449768|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:02:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":8058966,"opsSec":16115427.5658637},{"name":"Using indexof","samples":8094790,"opsSec":16189176.468587343},{"name":"Using RegExp.test","samples":7006696,"opsSec":14013296.289186345},{"name":"Using RegExp.text with cached regex pattern","samples":7367104,"opsSec":14733112.327902399},{"name":"Using new RegExp.test","samples":2163362,"opsSec":4325937.613756821},{"name":"Using new RegExp.test with cached regex pattern","samples":2449768,"opsSec":4898595.283558936}]}-->
