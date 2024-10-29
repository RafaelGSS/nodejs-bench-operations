## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,755,576|1877790|
|Adding property in the object creation - small object|3,742,401|1871306|
|Adding property after the function creation - small class|227,703|113877|
|Adding property in the function creation - small class|229,939|114975|
|Adding property after the class creation - small class|202,705|101353|
|Adding property in the class creation - small class|198,003|99003|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:45:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3755576.807759714,"samples":1877790},{"name":"Adding property in the object creation - small object","opsSec":3742401.3626817027,"samples":1871306},{"name":"Adding property after the function creation - small class","opsSec":227703.12793337592,"samples":113877},{"name":"Adding property in the function creation - small class","opsSec":229939.87896628745,"samples":114975},{"name":"Adding property after the class creation - small class","opsSec":202705.5978320939,"samples":101353},{"name":"Adding property in the class creation - small class","opsSec":198003.46674364645,"samples":99003}]}-->
