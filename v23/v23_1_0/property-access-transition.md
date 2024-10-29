## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,868,359|3934251|
|Adding property in the object creation - small object|7,629,791|3815008|
|Adding property after the function creation - small class|272,414|136208|
|Adding property in the function creation - small class|282,905|141456|
|Adding property after the class creation - small class|277,672|138837|
|Adding property in the class creation - small class|279,712|139857|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:49:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7868359.299435745,"samples":3934251},{"name":"Adding property in the object creation - small object","opsSec":7629791.638347084,"samples":3815008},{"name":"Adding property after the function creation - small class","opsSec":272414.09854959213,"samples":136208},{"name":"Adding property in the function creation - small class","opsSec":282905.0631678511,"samples":141456},{"name":"Adding property after the class creation - small class","opsSec":277672.12015974656,"samples":138837},{"name":"Adding property in the class creation - small class","opsSec":279712.9007283001,"samples":139857}]}-->
