## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,705,588|7852797|
|Using indexof|15,753,735|7879027|
|Using RegExp.test|13,569,820|6785200|
|Using RegExp.text with cached regex pattern|14,158,304|7079710|
|Using new RegExp.test|4,366,038|2183351|
|Using new RegExp.test with cached regex pattern|4,915,264|2458281|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:01:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":7852797,"opsSec":15705588.691511022},{"name":"Using indexof","samples":7879027,"opsSec":15753735.743495349},{"name":"Using RegExp.test","samples":6785200,"opsSec":13569820.948600482},{"name":"Using RegExp.text with cached regex pattern","samples":7079710,"opsSec":14158304.240676008},{"name":"Using new RegExp.test","samples":2183351,"opsSec":4366038.4931302},{"name":"Using new RegExp.test with cached regex pattern","samples":2458281,"opsSec":4915264.370206266}]}-->
