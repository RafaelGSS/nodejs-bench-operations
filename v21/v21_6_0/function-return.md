## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,818,106|95|
|Function returning explicitly undefined|1,798,279|94|
|Function returning implicitly undefined|1,830,442|95|
|Function returning string|1,824,834|97|
|Function returning integer|1,830,620|95|
|Function returning float|1,836,272|93|
|Function returning functions|1,776,136|95|
|Function returning arrow functions|1,823,750|96|
|Function returning empty object|1,852,128|90|
|Function returning empty array|1,776,879|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:47:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1818106.3248672395,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1798278.7735379592,"samples":4},{"name":"Function returning implicitly undefined","opsSec":1830441.9404392887,"samples":4},{"name":"Function returning string","opsSec":1824834.0268365622,"samples":9},{"name":"Function returning integer","opsSec":1830619.934200613,"samples":5},{"name":"Function returning float","opsSec":1836271.7538500582,"samples":5},{"name":"Function returning functions","opsSec":1776135.9585136746,"samples":5},{"name":"Function returning arrow functions","opsSec":1823750.0832966578,"samples":5},{"name":"Function returning empty object","opsSec":1852127.5704021032,"samples":5},{"name":"Function returning empty array","opsSec":1776879.1613653614,"samples":5}]}-->
