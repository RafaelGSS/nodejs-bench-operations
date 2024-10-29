## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,581,046|21294519|
|Object.create({})|2,098,922|1053956|
|Cached Empty.prototype|82,121,110|41062559|
|Empty.prototype|2,491,134|1246281|
|Empty class|1,710,118|855060|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:21:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":42581046.72979812,"samples":21294519},{"name":"Object.create({})","opsSec":2098922.729536097,"samples":1053956},{"name":"Cached Empty.prototype","opsSec":82121110.32557389,"samples":41062559},{"name":"Empty.prototype","opsSec":2491134.520132736,"samples":1246281},{"name":"Empty class","opsSec":1710118.8781620157,"samples":855060}]}-->
