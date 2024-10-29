## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,672,523|836263|
|Function returning explicitly undefined|1,576,618|788805|
|Function returning implicitly undefined|1,612,441|806293|
|Function returning string|1,596,578|798330|
|Function returning integer|1,623,309|811655|
|Function returning float|1,609,957|805021|
|Function returning functions|1,556,193|778150|
|Function returning arrow functions|1,563,626|781895|
|Function returning empty object|1,618,813|809407|
|Function returning empty array|1,625,682|812842|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:49:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1672523.7186776476,"samples":836263},{"name":"Function returning explicitly undefined","opsSec":1576618.3638074263,"samples":788805},{"name":"Function returning implicitly undefined","opsSec":1612441.5478114977,"samples":806293},{"name":"Function returning string","opsSec":1596578.641545584,"samples":798330},{"name":"Function returning integer","opsSec":1623309.7597501555,"samples":811655},{"name":"Function returning float","opsSec":1609957.9054587663,"samples":805021},{"name":"Function returning functions","opsSec":1556193.6746233753,"samples":778150},{"name":"Function returning arrow functions","opsSec":1563626.2289160357,"samples":781895},{"name":"Function returning empty object","opsSec":1618813.216494403,"samples":809407},{"name":"Function returning empty array","opsSec":1625682.9303006318,"samples":812842}]}-->
