## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,078,031|8039016|
|Using indexof|16,210,477|8105239|
|Using RegExp.test|8,278,224|4139113|
|Using RegExp.text with cached regex pattern|8,317,119|4158560|
|Using new RegExp.test|3,835,205|1917603|
|Using new RegExp.test with cached regex pattern|4,010,162|2005082|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:44:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":16078031.099637171,"samples":8039016},{"name":"Using indexof","opsSec":16210477.124602506,"samples":8105239},{"name":"Using RegExp.test","opsSec":8278224.576139742,"samples":4139113},{"name":"Using RegExp.text with cached regex pattern","opsSec":8317119.9500935115,"samples":4158560},{"name":"Using new RegExp.test","opsSec":3835205.5014206045,"samples":1917603},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4010162.8931937767,"samples":2005082}]}-->
