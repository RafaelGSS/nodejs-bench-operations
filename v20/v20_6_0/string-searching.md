## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|662,477,634|86|
|Using indexof|677,329,995|88|
|Using RegExp.test|10,881,996|89|
|Using RegExp.text with cached regex pattern|10,956,050|86|
|Using new RegExp.test|3,085,860|83|
|Using new RegExp.test with cached regex pattern|3,815,702|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:54:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using includes","opsSec":662477634.3273591,"samples":6},{"name":"Using indexof","opsSec":677329995.2760417,"samples":6},{"name":"Using RegExp.test","opsSec":10881995.833005153,"samples":4},{"name":"Using RegExp.text with cached regex pattern","opsSec":10956050.026911795,"samples":4},{"name":"Using new RegExp.test","opsSec":3085860.0015142895,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3815701.7677389225,"samples":5}]}-->
