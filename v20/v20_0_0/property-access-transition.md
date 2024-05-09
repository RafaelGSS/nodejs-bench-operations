## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,773,469|1886735|
|Adding property in the object creation - small object|3,721,012|1860507|
|Adding property after the function creation - small class|260,234|130118|
|Adding property in the function creation - small class|256,331|128168|
|Adding property after the class creation - small class|223,968|111985|
|Adding property in the class creation - small class|223,291|111646|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:42:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3773469.5681606787,"samples":1886735},{"name":"Adding property in the object creation - small object","opsSec":3721012.646196056,"samples":1860507},{"name":"Adding property after the function creation - small class","opsSec":260234.84546995055,"samples":130118},{"name":"Adding property in the function creation - small class","opsSec":256331.7799382047,"samples":128168},{"name":"Adding property after the class creation - small class","opsSec":223968.4503830838,"samples":111985},{"name":"Adding property in the class creation - small class","opsSec":223291.55259747314,"samples":111646}]}-->
