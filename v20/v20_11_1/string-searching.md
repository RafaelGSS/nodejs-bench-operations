## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|845,252,711|97|
|Using indexof|845,216,959|94|
|Using RegExp.test|17,313,193|98|
|Using RegExp.text with cached regex pattern|17,892,493|97|
|Using new RegExp.test|4,438,498|92|
|Using new RegExp.test with cached regex pattern|5,445,225|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:25:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using includes","opsSec":845252711.3781153,"samples":7},{"name":"Using indexof","opsSec":845216958.6724998,"samples":7},{"name":"Using RegExp.test","opsSec":17313192.677493673,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":17892492.62843501,"samples":5},{"name":"Using new RegExp.test","opsSec":4438497.827684165,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5445225.014519787,"samples":6}]}-->
