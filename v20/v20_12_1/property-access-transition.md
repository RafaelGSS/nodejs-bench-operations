## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,643,138|94|
|Adding property in the object creation - small object|5,703,498|98|
|Adding property after the function creation - small class|285,501|90|
|Adding property in the function creation - small class|286,445|88|
|Adding property after the class creation - small class|292,221|93|
|Adding property in the class creation - small class|290,992|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:31:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5643137.864553242,"samples":4},{"name":"Adding property in the object creation - small object","opsSec":5703498.175731662,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":285500.6124923958,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":286444.64222665207,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":292221.39296101156,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":290992.2047241277,"samples":4}]}-->
