## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|9,696,757|4848379|
|Using indexof|20,942,070|10471036|
|Using RegExp.test|8,753,845|4376923|
|Using RegExp.text with cached regex pattern|9,364,932|4682467|
|Using new RegExp.test|3,054,547|1527274|
|Using new RegExp.test with cached regex pattern|3,379,154|1689578|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:19:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":9696757.620850503,"samples":4848379},{"name":"Using indexof","opsSec":20942070.64190979,"samples":10471036},{"name":"Using RegExp.test","opsSec":8753845.87477523,"samples":4376923},{"name":"Using RegExp.text with cached regex pattern","opsSec":9364932.16465992,"samples":4682467},{"name":"Using new RegExp.test","opsSec":3054547.533913035,"samples":1527274},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3379154.474092824,"samples":1689578}]}-->
