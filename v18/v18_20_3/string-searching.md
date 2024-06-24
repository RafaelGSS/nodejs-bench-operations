## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|17,251,437|8625719|
|Using indexof|15,427,674|7713838|
|Using RegExp.test|8,541,000|4270501|
|Using RegExp.text with cached regex pattern|8,720,098|4360050|
|Using new RegExp.test|2,878,975|1439488|
|Using new RegExp.test with cached regex pattern|3,019,846|1509924|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:40:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":17251437.225330263,"samples":8625719},{"name":"Using indexof","opsSec":15427674.670946894,"samples":7713838},{"name":"Using RegExp.test","opsSec":8541000.99666039,"samples":4270501},{"name":"Using RegExp.text with cached regex pattern","opsSec":8720098.457292184,"samples":4360050},{"name":"Using new RegExp.test","opsSec":2878975.086089045,"samples":1439488},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3019846.318278021,"samples":1509924}]}-->
