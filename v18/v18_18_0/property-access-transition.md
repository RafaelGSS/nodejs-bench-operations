## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,485,262|98|
|Adding property in the object creation - small object|3,523,308|94|
|Adding property after the function creation - small class|202,008|90|
|Adding property in the function creation - small class|201,234|88|
|Adding property after the class creation - small class|171,041|86|
|Adding property in the class creation - small class|171,608|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:05:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3485261.723325689,"samples":4},{"name":"Adding property in the object creation - small object","opsSec":3523308.155703917,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":202008.48245321124,"samples":5},{"name":"Adding property in the function creation - small class","opsSec":201233.88726697277,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":171040.9354857288,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":171607.96834151322,"samples":4}]}-->
