## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|93,452,460|46728349|
|Setter|11,568,815|5785366|
|Method|90,783,559|45556830|
|DefineProperty (setter)|93,885,319|46956185|
|DefineProperty (setter & enumerable=false)|11,645,545|5822880|
|DefineProperty (setter & configurable=false)|11,734,695|5867590|
|DefineProperty (setter & enumerable=false & configurable=false)|11,711,792|5856048|
|DefineProperty (writable)|93,746,017|46933518|
|DefineProperty (writable & enumerable=false)|93,579,336|46798000|
|DefineProperty (writable & enumerable=false & configurable=false)|93,639,524|46830959|
|DefineProperties (setter)|91,550,884|45775473|
|DefineProperties (setter & enumerable=false)|11,466,690|5733347|
|DefineProperties (setter & enumerable=false & configurable=false)|11,538,382|5769262|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:51:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Setter (class)","samples":46728349,"opsSec":93452460.86542436},{"name":"Setter","samples":5785366,"opsSec":11568815.093614249},{"name":"Method","samples":45556830,"opsSec":90783559.17696984},{"name":"DefineProperty (setter)","samples":46956185,"opsSec":93885319.01080406},{"name":"DefineProperty (setter & enumerable=false)","samples":5822880,"opsSec":11645545.186273495},{"name":"DefineProperty (setter & configurable=false)","samples":5867590,"opsSec":11734695.310144909},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5856048,"opsSec":11711792.664569987},{"name":"DefineProperty (writable)","samples":46933518,"opsSec":93746017.95298025},{"name":"DefineProperty (writable & enumerable=false)","samples":46798000,"opsSec":93579336.1404548},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":46830959,"opsSec":93639524.2950439},{"name":"DefineProperties (setter)","samples":45775473,"opsSec":91550884.66090728},{"name":"DefineProperties (setter & enumerable=false)","samples":5733347,"opsSec":11466690.949860208},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5769262,"opsSec":11538382.216359327}]}-->
