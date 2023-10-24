## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|859,889,626|82|
|Using indexof|889,424,557|86|
|Using RegExp.test|11,928,037|87|
|Using RegExp.text with cached regex pattern|11,731,346|84|
|Using new RegExp.test|3,100,196|84|
|Using new RegExp.test with cached regex pattern|3,607,684|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:54:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Using includes","opsSec":859889626.3908443,"samples":6},{"name":"Using indexof","opsSec":889424556.5375124,"samples":7},{"name":"Using RegExp.test","opsSec":11928036.9169415,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":11731345.739124604,"samples":4},{"name":"Using new RegExp.test","opsSec":3100196.056478156,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3607684.498821265,"samples":4}]}-->
