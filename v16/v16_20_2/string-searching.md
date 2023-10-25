## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|10,794,983|93|
|Using indexof|584,493,564|92|
|Using RegExp.test|9,916,209|90|
|Using RegExp.text with cached regex pattern|9,682,478|88|
|Using new RegExp.test|2,668,620|93|
|Using new RegExp.test with cached regex pattern|3,271,948|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:07:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":10794983.317444354,"samples":4},{"name":"Using indexof","opsSec":584493564.4688821,"samples":7},{"name":"Using RegExp.test","opsSec":9916209.058142655,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":9682478.120173505,"samples":6},{"name":"Using new RegExp.test","opsSec":2668620.0150880856,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3271948.2336071804,"samples":5}]}-->
