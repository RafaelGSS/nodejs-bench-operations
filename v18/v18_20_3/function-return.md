## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,561,266|780634|
|Function returning explicitly undefined|1,464,321|732161|
|Function returning implicitly undefined|1,460,889|730445|
|Function returning string|1,552,607|776304|
|Function returning integer|1,573,792|786897|
|Function returning float|1,552,831|776416|
|Function returning functions|1,519,846|759924|
|Function returning arrow functions|1,541,020|770511|
|Function returning empty object|1,549,562|774782|
|Function returning empty array|1,544,860|772431|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:08:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Function returning null","opsSec":1561266.341722589,"samples":780634},{"name":"Function returning explicitly undefined","opsSec":1464321.2935310225,"samples":732161},{"name":"Function returning implicitly undefined","opsSec":1460889.775997463,"samples":730445},{"name":"Function returning string","opsSec":1552607.9016965781,"samples":776304},{"name":"Function returning integer","opsSec":1573792.68348583,"samples":786897},{"name":"Function returning float","opsSec":1552831.3295130576,"samples":776416},{"name":"Function returning functions","opsSec":1519846.3207718246,"samples":759924},{"name":"Function returning arrow functions","opsSec":1541020.4425722456,"samples":770511},{"name":"Function returning empty object","opsSec":1549562.3637304998,"samples":774782},{"name":"Function returning empty array","opsSec":1544860.1121385123,"samples":772431}]}-->
