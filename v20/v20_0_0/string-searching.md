## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,887,795|7943898|
|Using indexof|15,950,901|7975451|
|Using RegExp.test|7,574,880|3787441|
|Using RegExp.text with cached regex pattern|7,823,738|3911870|
|Using new RegExp.test|3,508,606|1754304|
|Using new RegExp.test with cached regex pattern|3,807,786|1903894|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:20:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":15887795.59847776,"samples":7943898},{"name":"Using indexof","opsSec":15950901.117706047,"samples":7975451},{"name":"Using RegExp.test","opsSec":7574880.190395844,"samples":3787441},{"name":"Using RegExp.text with cached regex pattern","opsSec":7823738.86588258,"samples":3911870},{"name":"Using new RegExp.test","opsSec":3508606.485904279,"samples":1754304},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3807786.569233028,"samples":1903894}]}-->
