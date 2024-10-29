## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,811,203|905924|
|Function returning explicitly undefined|1,784,775|893213|
|Function returning implicitly undefined|1,832,402|916294|
|Function returning string|1,827,705|913877|
|Function returning integer|1,867,870|933936|
|Function returning float|1,847,745|924136|
|Function returning functions|1,785,991|893079|
|Function returning arrow functions|1,828,574|914480|
|Function returning empty object|1,850,883|925443|
|Function returning empty array|1,859,734|929969|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:48:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1811203.6461908312,"samples":905924},{"name":"Function returning explicitly undefined","opsSec":1784775.9282501587,"samples":893213},{"name":"Function returning implicitly undefined","opsSec":1832402.7404181384,"samples":916294},{"name":"Function returning string","opsSec":1827705.766844813,"samples":913877},{"name":"Function returning integer","opsSec":1867870.539325238,"samples":933936},{"name":"Function returning float","opsSec":1847745.451674127,"samples":924136},{"name":"Function returning functions","opsSec":1785991.842034968,"samples":893079},{"name":"Function returning arrow functions","opsSec":1828574.8253416403,"samples":914480},{"name":"Function returning empty object","opsSec":1850883.734518309,"samples":925443},{"name":"Function returning empty array","opsSec":1859734.5227263994,"samples":929969}]}-->
