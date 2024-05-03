## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,890,110|97|
|Adding property in the object creation - small object|3,909,711|97|
|Adding property after the function creation - small class|217,050|88|
|Adding property in the function creation - small class|217,608|90|
|Adding property after the class creation - small class|184,051|84|
|Adding property in the class creation - small class|183,977|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:29:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3890110.3814761955,"samples":9},{"name":"Adding property in the object creation - small object","opsSec":3909711.4533382277,"samples":7},{"name":"Adding property after the function creation - small class","opsSec":217050.4959187755,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":217607.72539266423,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":184050.89370818017,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":183976.76580390352,"samples":4}]}-->
