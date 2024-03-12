## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,046,384|94|
|Adding property in the object creation - small object|5,090,051|96|
|Adding property after the function creation - small class|260,564|89|
|Adding property in the function creation - small class|266,825|90|
|Adding property after the class creation - small class|226,140|85|
|Adding property in the class creation - small class|225,012|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:02:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5046384.246029757,"samples":4},{"name":"Adding property in the object creation - small object","opsSec":5090050.743961978,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":260564.44044226583,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":266824.89082881476,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":226139.5793038871,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":225011.9384997395,"samples":3}]}-->
