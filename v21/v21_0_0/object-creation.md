## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|12,919,273|6459637|
|Object.create({})|1,855,643|927822|
|Cached Empty.prototype|16,352,228|8176115|
|Empty.prototype|1,865,039|932520|
|Empty class|1,252,707|626354|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:06:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":12919273.907594152,"samples":6459637},{"name":"Object.create({})","opsSec":1855643.5248410355,"samples":927822},{"name":"Cached Empty.prototype","opsSec":16352228.495111419,"samples":8176115},{"name":"Empty.prototype","opsSec":1865039.017301505,"samples":932520},{"name":"Empty class","opsSec":1252707.7431448319,"samples":626354}]}-->
