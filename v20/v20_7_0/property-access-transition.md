## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,349,103|96|
|Adding property in the object creation - small object|8,503,698|98|
|Adding property after the function creation - small class|261,654|89|
|Adding property in the function creation - small class|262,058|92|
|Adding property after the class creation - small class|219,086|87|
|Adding property in the class creation - small class|218,033|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:43:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":8349103.281725993,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":8503698.489176273,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":261654.2157907303,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":262058.32723621346,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":219085.71493845485,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":218032.53016660258,"samples":3}]}-->
