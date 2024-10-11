## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,763,041|1881523|
|Adding property in the object creation - small object|3,707,293|1853980|
|Adding property after the function creation - small class|184,101|92758|
|Adding property in the function creation - small class|187,011|93650|
|Adding property after the class creation - small class|161,179|80730|
|Adding property in the class creation - small class|159,922|79974|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:24:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3763041.6875542263,"samples":1881523},{"name":"Adding property in the object creation - small object","opsSec":3707293.0060861027,"samples":1853980},{"name":"Adding property after the function creation - small class","opsSec":184101.4809407899,"samples":92758},{"name":"Adding property in the function creation - small class","opsSec":187011.37449907587,"samples":93650},{"name":"Adding property after the class creation - small class","opsSec":161179.62996782653,"samples":80730},{"name":"Adding property in the class creation - small class","opsSec":159922.39482536452,"samples":79974}]}-->
