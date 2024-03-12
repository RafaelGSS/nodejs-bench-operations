## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|824,566,452|96|
|Using indexof|823,541,626|95|
|Using RegExp.test|14,994,503|94|
|Using RegExp.text with cached regex pattern|15,550,794|97|
|Using new RegExp.test|4,347,699|96|
|Using new RegExp.test with cached regex pattern|5,197,494|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:28:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using includes","opsSec":824566452.0837116,"samples":6},{"name":"Using indexof","opsSec":823541625.9079466,"samples":6},{"name":"Using RegExp.test","opsSec":14994503.249165468,"samples":7},{"name":"Using RegExp.text with cached regex pattern","opsSec":15550794.483596783,"samples":5},{"name":"Using new RegExp.test","opsSec":4347698.744021544,"samples":8},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5197494.14267201,"samples":5}]}-->
