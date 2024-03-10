## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,130,501|88|
|Adding property in the object creation - small object|5,302,208|92|
|Adding property after the function creation - small class|271,038|90|
|Adding property in the function creation - small class|274,340|90|
|Adding property after the class creation - small class|274,900|87|
|Adding property in the class creation - small class|274,206|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:05:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5130500.851268233,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5302208.23742757,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":271038.1030965287,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":274340.238880486,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":274899.9482947969,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":274205.9211553847,"samples":5}]}-->
