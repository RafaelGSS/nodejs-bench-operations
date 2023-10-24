## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,445,237|95|
|Function returning explicitly undefined|1,446,403|96|
|Function returning implicitly undefined|1,453,168|94|
|Function returning string|1,446,815|97|
|Function returning integer|1,457,518|97|
|Function returning float|1,426,363|97|
|Function returning functions|1,423,992|95|
|Function returning arrow functions|1,442,628|95|
|Function returning empty object|1,452,961|95|
|Function returning empty array|1,451,858|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:24:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1445236.8772207655,"samples":9},{"name":"Function returning explicitly undefined","opsSec":1446402.6197286756,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1453167.827475097,"samples":5},{"name":"Function returning string","opsSec":1446815.2577408822,"samples":6},{"name":"Function returning integer","opsSec":1457517.6644332577,"samples":7},{"name":"Function returning float","opsSec":1426362.910868644,"samples":9},{"name":"Function returning functions","opsSec":1423992.147210448,"samples":5},{"name":"Function returning arrow functions","opsSec":1442628.174388818,"samples":5},{"name":"Function returning empty object","opsSec":1452961.4650884236,"samples":5},{"name":"Function returning empty array","opsSec":1451857.506352341,"samples":5}]}-->
