## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,944,438|94|
|Adding property in the object creation - small object|1,950,655|96|
|Adding property after the function creation - small class|169,383|84|
|Adding property in the function creation - small class|171,171|83|
|Adding property after the class creation - small class|137,582|78|
|Adding property in the class creation - small class|138,873|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:14:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1944438.322679529,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":1950655.3614728283,"samples":7},{"name":"Adding property after the function creation - small class","opsSec":169383.3550001924,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":171171.40506722417,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":137582.44516747614,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":138872.69254427802,"samples":3}]}-->
