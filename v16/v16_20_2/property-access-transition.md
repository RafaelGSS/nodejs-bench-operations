## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,438,169|93|
|Adding property in the object creation - small object|3,432,285|98|
|Adding property after the function creation - small class|226,241|90|
|Adding property in the function creation - small class|228,514|91|
|Adding property after the class creation - small class|194,336|88|
|Adding property in the class creation - small class|194,215|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:05:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3438168.6858248324,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":3432284.702201356,"samples":4},{"name":"Adding property after the function creation - small class","opsSec":226240.59927681176,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":228514.21384616842,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":194336.4752208137,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":194215.4630586782,"samples":4}]}-->
