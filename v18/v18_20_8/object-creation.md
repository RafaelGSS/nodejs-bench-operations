## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|36,851,731|18438604|
|Object.create({})|1,325,559|665091|
|new Function with empty prototype|82,090,781|41045894|
|Empty class|84,026,883|42033955|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:54:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":18438604,"opsSec":36851731.80817331},{"name":"Object.create({})","samples":665091,"opsSec":1325559.0808919712},{"name":"new Function with empty prototype","samples":41045894,"opsSec":82090781.07447934},{"name":"Empty class","samples":42033955,"opsSec":84026883.70597678}]}-->
