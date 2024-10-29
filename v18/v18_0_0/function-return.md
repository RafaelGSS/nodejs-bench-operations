## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,891,460|945731|
|Function returning explicitly undefined|1,826,097|913701|
|Function returning implicitly undefined|1,911,986|956042|
|Function returning string|1,874,292|937310|
|Function returning integer|1,915,848|957925|
|Function returning float|1,891,441|945749|
|Function returning functions|1,828,238|914241|
|Function returning arrow functions|1,830,240|915162|
|Function returning empty object|1,931,854|965987|
|Function returning empty array|1,924,723|962539|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:48:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1891460.1236715575,"samples":945731},{"name":"Function returning explicitly undefined","opsSec":1826097.5272314223,"samples":913701},{"name":"Function returning implicitly undefined","opsSec":1911986.0030693987,"samples":956042},{"name":"Function returning string","opsSec":1874292.3287179244,"samples":937310},{"name":"Function returning integer","opsSec":1915848.6435791603,"samples":957925},{"name":"Function returning float","opsSec":1891441.6312565051,"samples":945749},{"name":"Function returning functions","opsSec":1828238.8003618207,"samples":914241},{"name":"Function returning arrow functions","opsSec":1830240.7533295758,"samples":915162},{"name":"Function returning empty object","opsSec":1931854.4027576342,"samples":965987},{"name":"Function returning empty array","opsSec":1924723.0541226969,"samples":962539}]}-->
