## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,048,121|86|
|Adding property in the object creation - small object|2,088,206|90|
|Adding property after the function creation - small class|119,615|80|
|Adding property in the function creation - small class|116,065|80|
|Adding property after the class creation - small class|94,531|76|
|Adding property in the class creation - small class|96,268|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:32:39 GMT+0000 (Coordinated Universal Time)
</details>

