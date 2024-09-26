## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,234,221|4117111|
|Using indexof|8,157,862|4078932|
|Using RegExp.test|7,513,995|3756998|
|Using RegExp.text with cached regex pattern|7,676,740|3838453|
|Using new RegExp.test|3,143,441|1571721|
|Using new RegExp.test with cached regex pattern|3,501,367|1750684|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:51:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":8234221.304355417,"samples":4117111},{"name":"Using indexof","opsSec":8157862.875311802,"samples":4078932},{"name":"Using RegExp.test","opsSec":7513995.379701399,"samples":3756998},{"name":"Using RegExp.text with cached regex pattern","opsSec":7676740.104107891,"samples":3838453},{"name":"Using new RegExp.test","opsSec":3143441.325537508,"samples":1571721},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3501367.2109138113,"samples":1750684}]}-->
