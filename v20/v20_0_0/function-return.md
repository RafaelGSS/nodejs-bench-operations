## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,508,932|754467|
|Function returning explicitly undefined|1,552,979|776490|
|Function returning implicitly undefined|1,540,580|770291|
|Function returning string|1,511,194|755598|
|Function returning integer|1,572,305|786153|
|Function returning float|1,530,382|765192|
|Function returning functions|1,478,878|739440|
|Function returning arrow functions|1,481,533|740767|
|Function returning empty object|1,544,968|772485|
|Function returning empty array|1,548,579|774290|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:33:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1508932.6401163626,"samples":754467},{"name":"Function returning explicitly undefined","opsSec":1552979.0373264558,"samples":776490},{"name":"Function returning implicitly undefined","opsSec":1540580.423535543,"samples":770291},{"name":"Function returning string","opsSec":1511194.4420765,"samples":755598},{"name":"Function returning integer","opsSec":1572305.4766858947,"samples":786153},{"name":"Function returning float","opsSec":1530382.3770511595,"samples":765192},{"name":"Function returning functions","opsSec":1478878.4239133464,"samples":739440},{"name":"Function returning arrow functions","opsSec":1481533.3641948567,"samples":740767},{"name":"Function returning empty object","opsSec":1544968.3637930222,"samples":772485},{"name":"Function returning empty array","opsSec":1548579.0127324392,"samples":774290}]}-->
