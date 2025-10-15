## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|90,514,917|45257483|
|Setter|10,491,199|5245603|
|Method|90,010,790|45005397|
|DefineProperty (setter)|90,484,057|45242860|
|DefineProperty (setter & enumerable=false)|10,533,931|5267045|
|DefineProperty (setter & configurable=false)|10,614,540|5307479|
|DefineProperty (setter & enumerable=false & configurable=false)|10,620,809|5310654|
|DefineProperty (writable)|90,478,471|45257623|
|DefineProperty (writable & enumerable=false)|89,407,968|44704164|
|DefineProperty (writable & enumerable=false & configurable=false)|90,798,983|45400091|
|DefineProperties (setter)|90,821,200|45415624|
|DefineProperties (setter & enumerable=false)|10,478,683|5239345|
|DefineProperties (setter & enumerable=false & configurable=false)|10,489,036|5244521|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:20:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":45257483,"opsSec":90514917.48400423},{"name":"Setter","samples":5245603,"opsSec":10491199.390544385},{"name":"Method","samples":45005397,"opsSec":90010790.93963312},{"name":"DefineProperty (setter)","samples":45242860,"opsSec":90484057.80785806},{"name":"DefineProperty (setter & enumerable=false)","samples":5267045,"opsSec":10533931.59073674},{"name":"DefineProperty (setter & configurable=false)","samples":5307479,"opsSec":10614540.105556043},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5310654,"opsSec":10620809.119354045},{"name":"DefineProperty (writable)","samples":45257623,"opsSec":90478471.56810197},{"name":"DefineProperty (writable & enumerable=false)","samples":44704164,"opsSec":89407968.22233586},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":45400091,"opsSec":90798983.27182284},{"name":"DefineProperties (setter)","samples":45415624,"opsSec":90821200.81383878},{"name":"DefineProperties (setter & enumerable=false)","samples":5239345,"opsSec":10478683.503216228},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5244521,"opsSec":10489036.021249468}]}-->
