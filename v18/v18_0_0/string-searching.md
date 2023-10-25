## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|10,416,419|92|
|Using indexof|588,356,966|95|
|Using RegExp.test|9,866,735|95|
|Using RegExp.text with cached regex pattern|10,569,205|94|
|Using new RegExp.test|2,515,304|92|
|Using new RegExp.test with cached regex pattern|2,790,895|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:07:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":10416418.63997306,"samples":6},{"name":"Using indexof","opsSec":588356966.0677289,"samples":7},{"name":"Using RegExp.test","opsSec":9866735.262199836,"samples":7},{"name":"Using RegExp.text with cached regex pattern","opsSec":10569205.313924706,"samples":7},{"name":"Using new RegExp.test","opsSec":2515304.3492302345,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":2790895.482937912,"samples":5}]}-->
