## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|821,910,412|98|
|Using indexof|822,028,642|97|
|Using RegExp.test|16,915,604|94|
|Using RegExp.text with cached regex pattern|17,682,302|97|
|Using new RegExp.test|4,758,805|97|
|Using new RegExp.test with cached regex pattern|5,517,466|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:25:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using includes","opsSec":821910412.4523641,"samples":7},{"name":"Using indexof","opsSec":822028641.9327419,"samples":7},{"name":"Using RegExp.test","opsSec":16915603.83072449,"samples":7},{"name":"Using RegExp.text with cached regex pattern","opsSec":17682302.400918946,"samples":6},{"name":"Using new RegExp.test","opsSec":4758805.211934894,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5517466.088890914,"samples":5}]}-->
