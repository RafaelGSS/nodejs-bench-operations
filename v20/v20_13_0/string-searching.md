## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|19,964,637|9982319|
|Using indexof|19,905,462|9952732|
|Using RegExp.test|9,262,800|4631401|
|Using RegExp.text with cached regex pattern|9,409,758|4704880|
|Using new RegExp.test|3,514,424|1757213|
|Using new RegExp.test with cached regex pattern|4,099,707|2049854|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:20:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":19964637.76040973,"samples":9982319},{"name":"Using indexof","opsSec":19905462.407566343,"samples":9952732},{"name":"Using RegExp.test","opsSec":9262800.18445739,"samples":4631401},{"name":"Using RegExp.text with cached regex pattern","opsSec":9409758.118031478,"samples":4704880},{"name":"Using new RegExp.test","opsSec":3514424.727778125,"samples":1757213},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4099707.713013532,"samples":2049854}]}-->
