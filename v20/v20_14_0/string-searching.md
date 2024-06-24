## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|19,838,366|9919184|
|Using indexof|20,072,948|10036475|
|Using RegExp.test|8,910,692|4455360|
|Using RegExp.text with cached regex pattern|9,187,254|4593628|
|Using new RegExp.test|3,592,421|1796211|
|Using new RegExp.test with cached regex pattern|4,166,024|2083013|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:42:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":19838366.690639265,"samples":9919184},{"name":"Using indexof","opsSec":20072948.113144465,"samples":10036475},{"name":"Using RegExp.test","opsSec":8910692.430329682,"samples":4455360},{"name":"Using RegExp.text with cached regex pattern","opsSec":9187254.695408255,"samples":4593628},{"name":"Using new RegExp.test","opsSec":3592421.1737400927,"samples":1796211},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4166024.875166977,"samples":2083013}]}-->
