## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,069,472|2034737|
|Adding property in the object creation - small object|4,015,772|2007887|
|Adding property after the function creation - small class|284,472|142237|
|Adding property in the function creation - small class|324,232|162117|
|Adding property after the class creation - small class|315,996|158760|
|Adding property in the class creation - small class|316,535|158268|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:15:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4069472.9337984454,"samples":2034737},{"name":"Adding property in the object creation - small object","opsSec":4015772.8514891276,"samples":2007887},{"name":"Adding property after the function creation - small class","opsSec":284472.70508029475,"samples":142237},{"name":"Adding property in the function creation - small class","opsSec":324232.3172339976,"samples":162117},{"name":"Adding property after the class creation - small class","opsSec":315996.3156931137,"samples":158760},{"name":"Adding property in the class creation - small class","opsSec":316535.74360608065,"samples":158268}]}-->
