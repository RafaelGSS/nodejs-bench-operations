## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,247,486|3623769|
|Adding property in the object creation - small object|6,967,745|3483876|
|Adding property after the function creation - small class|254,292|127541|
|Adding property in the function creation - small class|269,824|134913|
|Adding property after the class creation - small class|256,082|128332|
|Adding property in the class creation - small class|259,991|131921|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:49:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7247486.296432761,"samples":3623769},{"name":"Adding property in the object creation - small object","opsSec":6967745.129803302,"samples":3483876},{"name":"Adding property after the function creation - small class","opsSec":254292.72116618996,"samples":127541},{"name":"Adding property in the function creation - small class","opsSec":269824.7825505811,"samples":134913},{"name":"Adding property after the class creation - small class","opsSec":256082.92735120593,"samples":128332},{"name":"Adding property in the class creation - small class","opsSec":259991.53011878827,"samples":131921}]}-->
