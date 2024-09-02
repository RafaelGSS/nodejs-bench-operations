## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,471,319|735660|
|Function returning explicitly undefined|1,457,468|728735|
|Function returning implicitly undefined|1,482,715|741358|
|Function returning string|1,447,601|723801|
|Function returning integer|1,484,945|742473|
|Function returning float|1,456,619|728310|
|Function returning functions|1,470,393|735197|
|Function returning arrow functions|1,479,196|739599|
|Function returning empty object|1,494,389|747195|
|Function returning empty array|1,471,218|735610|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:33:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Function returning null","opsSec":1471319.111322576,"samples":735660},{"name":"Function returning explicitly undefined","opsSec":1457468.1665064567,"samples":728735},{"name":"Function returning implicitly undefined","opsSec":1482715.8339370487,"samples":741358},{"name":"Function returning string","opsSec":1447601.67573573,"samples":723801},{"name":"Function returning integer","opsSec":1484945.2100078652,"samples":742473},{"name":"Function returning float","opsSec":1456619.7465526462,"samples":728310},{"name":"Function returning functions","opsSec":1470393.6059328075,"samples":735197},{"name":"Function returning arrow functions","opsSec":1479196.378798455,"samples":739599},{"name":"Function returning empty object","opsSec":1494389.6712364662,"samples":747195},{"name":"Function returning empty array","opsSec":1471218.6935595202,"samples":735610}]}-->
