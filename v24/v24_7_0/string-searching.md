## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,181,299|8090652|
|Using indexof|15,843,177|7921595|
|Using RegExp.test|12,213,720|6130621|
|Using RegExp.text with cached regex pattern|13,009,507|6504806|
|Using new RegExp.test|4,626,203|2313589|
|Using new RegExp.test with cached regex pattern|5,293,076|2646664|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:40:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":8090652,"opsSec":16181299.53396133},{"name":"Using indexof","samples":7921595,"opsSec":15843177.167026496},{"name":"Using RegExp.test","samples":6130621,"opsSec":12213720.027583715},{"name":"Using RegExp.text with cached regex pattern","samples":6504806,"opsSec":13009507.37754167},{"name":"Using new RegExp.test","samples":2313589,"opsSec":4626203.925006366},{"name":"Using new RegExp.test with cached regex pattern","samples":2646664,"opsSec":5293076.240121715}]}-->
