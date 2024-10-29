## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,657,039|1829967|
|Adding property in the object creation - small object|3,609,189|1805194|
|Adding property after the function creation - small class|181,176|90595|
|Adding property in the function creation - small class|190,718|95827|
|Adding property after the class creation - small class|160,567|80296|
|Adding property in the class creation - small class|161,757|80879|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:45:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3657039.76752942,"samples":1829967},{"name":"Adding property in the object creation - small object","opsSec":3609189.431500072,"samples":1805194},{"name":"Adding property after the function creation - small class","opsSec":181176.9150408419,"samples":90595},{"name":"Adding property in the function creation - small class","opsSec":190718.69188587388,"samples":95827},{"name":"Adding property after the class creation - small class","opsSec":160567.1942952877,"samples":80296},{"name":"Adding property in the class creation - small class","opsSec":161757.04013372384,"samples":80879}]}-->
