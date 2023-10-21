## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,192,633|95|
|Function returning explicitly undefined|1,188,604|94|
|Function returning implicitly undefined|1,218,532|93|
|Function returning string|1,209,242|93|
|Function returning integer|1,166,656|90|
|Function returning float|1,222,481|92|
|Function returning functions|1,201,665|97|
|Function returning arrow functions|1,189,531|89|
|Function returning empty object|1,104,999|91|
|Function returning empty array|1,183,348|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1192632.6773569826,"samples":8},{"name":"Function returning explicitly undefined","opsSec":1188603.6314714584,"samples":8},{"name":"Function returning implicitly undefined","opsSec":1218531.615960447,"samples":8},{"name":"Function returning string","opsSec":1209241.8966656774,"samples":6},{"name":"Function returning integer","opsSec":1166656.3320186571,"samples":6},{"name":"Function returning float","opsSec":1222481.1450092224,"samples":6},{"name":"Function returning functions","opsSec":1201664.5961100226,"samples":7},{"name":"Function returning arrow functions","opsSec":1189530.5139626844,"samples":5},{"name":"Function returning empty object","opsSec":1104999.0533820763,"samples":6},{"name":"Function returning empty array","opsSec":1183348.4558748575,"samples":4}]}-->
