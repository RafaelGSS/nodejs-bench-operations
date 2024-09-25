## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,474,655|737328|
|Function returning explicitly undefined|1,529,787|764894|
|Function returning implicitly undefined|1,536,913|768457|
|Function returning string|1,517,923|758963|
|Function returning integer|1,553,105|776554|
|Function returning float|1,508,339|754170|
|Function returning functions|1,496,060|748031|
|Function returning arrow functions|1,509,926|754964|
|Function returning empty object|1,534,358|767180|
|Function returning empty array|1,446,440|723221|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:10:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Function returning null","opsSec":1474655.4381310558,"samples":737328},{"name":"Function returning explicitly undefined","opsSec":1529787.8878997094,"samples":764894},{"name":"Function returning implicitly undefined","opsSec":1536913.763461624,"samples":768457},{"name":"Function returning string","opsSec":1517923.8430487833,"samples":758963},{"name":"Function returning integer","opsSec":1553105.431402246,"samples":776554},{"name":"Function returning float","opsSec":1508339.874724308,"samples":754170},{"name":"Function returning functions","opsSec":1496060.5744520652,"samples":748031},{"name":"Function returning arrow functions","opsSec":1509926.9261247623,"samples":754964},{"name":"Function returning empty object","opsSec":1534358.5631806909,"samples":767180},{"name":"Function returning empty array","opsSec":1446440.5603243525,"samples":723221}]}-->
