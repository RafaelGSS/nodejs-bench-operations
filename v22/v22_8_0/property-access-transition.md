## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,693,128|3846565|
|Adding property in the object creation - small object|7,461,310|3730664|
|Adding property after the function creation - small class|257,625|128813|
|Adding property in the function creation - small class|272,486|136244|
|Adding property after the class creation - small class|264,485|132254|
|Adding property in the class creation - small class|261,686|130844|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:41:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7693128.553691831,"samples":3846565},{"name":"Adding property in the object creation - small object","opsSec":7461310.122700946,"samples":3730664},{"name":"Adding property after the function creation - small class","opsSec":257625.91807495803,"samples":128813},{"name":"Adding property in the function creation - small class","opsSec":272486.3754362297,"samples":136244},{"name":"Adding property after the class creation - small class","opsSec":264485.2135409126,"samples":132254},{"name":"Adding property in the class creation - small class","opsSec":261686.7622216147,"samples":130844}]}-->
