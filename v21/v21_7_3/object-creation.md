## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|45,921,144|22960573|
|Object.create({})|2,057,137|1042896|
|Cached Empty.prototype|115,699,846|57850337|
|Empty.prototype|2,204,891|1102470|
|Empty class|1,377,975|688995|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:19:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":45921144.438681096,"samples":22960573},{"name":"Object.create({})","opsSec":2057137.8065786676,"samples":1042896},{"name":"Cached Empty.prototype","opsSec":115699846.2832997,"samples":57850337},{"name":"Empty.prototype","opsSec":2204891.8539814767,"samples":1102470},{"name":"Empty class","opsSec":1377975.1757430595,"samples":688995}]}-->
