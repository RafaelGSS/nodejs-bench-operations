## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,276,426|4138215|
|Using indexof|8,118,718|4059360|
|Using RegExp.test|7,577,325|3788663|
|Using RegExp.text with cached regex pattern|7,667,493|3833747|
|Using new RegExp.test|3,511,989|1755995|
|Using new RegExp.test with cached regex pattern|3,875,500|1937751|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:59:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":8276426.441121334,"samples":4138215},{"name":"Using indexof","opsSec":8118718.489909284,"samples":4059360},{"name":"Using RegExp.test","opsSec":7577325.136173781,"samples":3788663},{"name":"Using RegExp.text with cached regex pattern","opsSec":7667493.248640247,"samples":3833747},{"name":"Using new RegExp.test","opsSec":3511989.9367909315,"samples":1755995},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3875500.395550809,"samples":1937751}]}-->
