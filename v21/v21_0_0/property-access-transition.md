## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,932,181|1966091|
|Adding property in the object creation - small object|3,944,214|1972108|
|Adding property after the function creation - small class|270,005|135003|
|Adding property in the function creation - small class|258,766|129384|
|Adding property after the class creation - small class|273,437|136719|
|Adding property in the class creation - small class|261,847|130924|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:42:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3932181.497497253,"samples":1966091},{"name":"Adding property in the object creation - small object","opsSec":3944214.9825151893,"samples":1972108},{"name":"Adding property after the function creation - small class","opsSec":270005.58015051036,"samples":135003},{"name":"Adding property in the function creation - small class","opsSec":258766.17371457233,"samples":129384},{"name":"Adding property after the class creation - small class","opsSec":273437.7615253134,"samples":136719},{"name":"Adding property in the class creation - small class","opsSec":261847.27731893485,"samples":130924}]}-->
