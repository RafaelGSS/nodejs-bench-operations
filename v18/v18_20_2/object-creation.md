## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|13,217,762|6608882|
|Object.create({})|1,453,169|726585|
|Cached Empty.prototype|16,085,565|8042783|
|Empty.prototype|1,556,309|778155|
|Empty class|979,061|489531|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:55:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":13217762.570021082,"samples":6608882},{"name":"Object.create({})","opsSec":1453169.0817173638,"samples":726585},{"name":"Cached Empty.prototype","opsSec":16085565.735198485,"samples":8042783},{"name":"Empty.prototype","opsSec":1556309.8355741608,"samples":778155},{"name":"Empty class","opsSec":979061.5973192706,"samples":489531}]}-->
