## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|36,516,010|18260793|
|Object.create({})|2,042,687|1022876|
|new Function with empty prototype|71,006,315|35504833|
|Empty class|79,159,846|39587322|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:57:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":18260793,"opsSec":36516010.516418286},{"name":"Object.create({})","samples":1022876,"opsSec":2042687.596835604},{"name":"new Function with empty prototype","samples":35504833,"opsSec":71006315.9220148},{"name":"Empty class","samples":39587322,"opsSec":79159846.49157563}]}-->
