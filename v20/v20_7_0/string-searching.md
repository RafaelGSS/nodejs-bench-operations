## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|657,658,363|87|
|Using indexof|676,991,838|89|
|Using RegExp.test|9,289,925|88|
|Using RegExp.text with cached regex pattern|9,589,013|85|
|Using new RegExp.test|2,433,106|88|
|Using new RegExp.test with cached regex pattern|2,902,319|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:55:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Using includes","opsSec":657658362.5447141,"samples":7},{"name":"Using indexof","opsSec":676991837.5555575,"samples":7},{"name":"Using RegExp.test","opsSec":9289925.05903833,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":9589012.739106322,"samples":4},{"name":"Using new RegExp.test","opsSec":2433105.561568116,"samples":7},{"name":"Using new RegExp.test with cached regex pattern","opsSec":2902319.0837026057,"samples":7}]}-->
