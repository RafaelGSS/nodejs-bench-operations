## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|89,348,261|44674140|
|Getter|47,458,994|23729501|
|Method|89,055,039|44527694|
|DefineProperty (getter)|87,685,540|43842784|
|DefineProperty (getter & enumerable=false)|50,121,793|25061471|
|DefineProperty (getter & configurable=false)|89,625,175|44812772|
|DefineProperty (getter & enumerable=false & configurable=false)|50,163,269|25081705|
|DefineProperty (writable)|89,606,063|44803181|
|DefineProperty (writable & enumerable=false)|89,242,215|44621113|
|DefineProperty (writable & enumerable=false & configurable=false)|89,196,921|44598469|
|DefineProperties (getter)|50,277,111|25138568|
|DefineProperties (getter & enumerable=false)|47,204,287|23602147|
|DefineProperties (getter & enumerable=false & configurable=false)|49,760,080|24880222|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:26:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Getter (class)","samples":44674140,"opsSec":89348261.23686513},{"name":"Getter","samples":23729501,"opsSec":47458994.97606874},{"name":"Method","samples":44527694,"opsSec":89055039.08235687},{"name":"DefineProperty (getter)","samples":43842784,"opsSec":87685540.64211132},{"name":"DefineProperty (getter & enumerable=false)","samples":25061471,"opsSec":50121793.008017085},{"name":"DefineProperty (getter & configurable=false)","samples":44812772,"opsSec":89625175.99902734},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":25081705,"opsSec":50163269.84382405},{"name":"DefineProperty (writable)","samples":44803181,"opsSec":89606063.61180818},{"name":"DefineProperty (writable & enumerable=false)","samples":44621113,"opsSec":89242215.82638739},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":44598469,"opsSec":89196921.58776644},{"name":"DefineProperties (getter)","samples":25138568,"opsSec":50277111.062552914},{"name":"DefineProperties (getter & enumerable=false)","samples":23602147,"opsSec":47204287.95785114},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":24880222,"opsSec":49760080.452852204}]}-->
