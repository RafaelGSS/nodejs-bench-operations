## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|712,971,087|90|
|Using indexof|718,759,859|96|
|Using RegExp.test|12,323,312|97|
|Using RegExp.text with cached regex pattern|12,759,046|96|
|Using new RegExp.test|3,317,757|99|
|Using new RegExp.test with cached regex pattern|4,018,924|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:54:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using includes","opsSec":712971087.3715091,"samples":6},{"name":"Using indexof","opsSec":718759858.9620582,"samples":6},{"name":"Using RegExp.test","opsSec":12323312.217163512,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":12759046.390152972,"samples":5},{"name":"Using new RegExp.test","opsSec":3317756.9641114897,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4018924.475365215,"samples":4}]}-->
