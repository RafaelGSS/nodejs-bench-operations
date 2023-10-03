## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,256,185|95|
|Adding property in the object creation - small object|2,289,521|93|
|Adding property after the function creation - small class|154,556|80|
|Adding property in the function creation - small class|159,558|83|
|Adding property after the class creation - small class|130,796|77|
|Adding property in the class creation - small class|125,648|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:32:43 GMT+0000 (Coordinated Universal Time)
</details>

