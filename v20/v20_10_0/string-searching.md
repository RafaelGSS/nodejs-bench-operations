## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|838,344,540|96|
|Using indexof|843,918,476|96|
|Using RegExp.test|14,917,807|95|
|Using RegExp.text with cached regex pattern|15,635,648|99|
|Using new RegExp.test|4,110,011|97|
|Using new RegExp.test with cached regex pattern|4,980,896|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:28:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using includes","opsSec":838344540.206021,"samples":6},{"name":"Using indexof","opsSec":843918475.5690277,"samples":6},{"name":"Using RegExp.test","opsSec":14917807.297351062,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":15635648.279158473,"samples":5},{"name":"Using new RegExp.test","opsSec":4110010.7189938147,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4980895.512072894,"samples":5}]}-->
