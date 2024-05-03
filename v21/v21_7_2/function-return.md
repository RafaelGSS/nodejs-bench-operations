## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|2,073,290|93|
|Function returning explicitly undefined|2,063,461|100|
|Function returning implicitly undefined|2,071,198|92|
|Function returning string|2,059,156|99|
|Function returning integer|2,104,544|97|
|Function returning float|2,058,774|97|
|Function returning functions|2,022,414|96|
|Function returning arrow functions|2,004,047|98|
|Function returning empty object|2,074,759|96|
|Function returning empty array|2,081,346|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:16:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":2073290.4554126777,"samples":4},{"name":"Function returning explicitly undefined","opsSec":2063461.3251809606,"samples":6},{"name":"Function returning implicitly undefined","opsSec":2071197.5829306021,"samples":5},{"name":"Function returning string","opsSec":2059155.6141818399,"samples":7},{"name":"Function returning integer","opsSec":2104543.6086637382,"samples":5},{"name":"Function returning float","opsSec":2058773.7054486047,"samples":8},{"name":"Function returning functions","opsSec":2022414.2676370803,"samples":5},{"name":"Function returning arrow functions","opsSec":2004046.6989999698,"samples":5},{"name":"Function returning empty object","opsSec":2074758.6687134474,"samples":7},{"name":"Function returning empty array","opsSec":2081346.055283039,"samples":7}]}-->
