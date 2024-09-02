## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,011,135|2505568|
|Adding property in the object creation - small object|5,012,539|2506270|
|Adding property after the function creation - small class|247,568|123785|
|Adding property in the function creation - small class|237,604|119655|
|Adding property after the class creation - small class|235,216|117609|
|Adding property in the class creation - small class|234,249|117125|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:12:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5011135.0933358325,"samples":2505568},{"name":"Adding property in the object creation - small object","opsSec":5012539.353740459,"samples":2506270},{"name":"Adding property after the function creation - small class","opsSec":247568.67749938194,"samples":123785},{"name":"Adding property in the function creation - small class","opsSec":237604.74065595228,"samples":119655},{"name":"Adding property after the class creation - small class","opsSec":235216.88720830885,"samples":117609},{"name":"Adding property in the class creation - small class","opsSec":234249.43292334583,"samples":117125}]}-->
