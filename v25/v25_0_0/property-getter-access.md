## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|91,760,488|45937032|
|Getter|53,350,976|26675495|
|Method|94,445,640|47222849|
|DefineProperty (getter)|86,556,564|43278594|
|DefineProperty (getter & enumerable=false)|53,117,084|26558548|
|DefineProperty (getter & configurable=false)|90,256,746|45128379|
|DefineProperty (getter & enumerable=false & configurable=false)|53,603,169|26801606|
|DefineProperty (writable)|93,296,762|47029426|
|DefineProperty (writable & enumerable=false)|93,052,229|46536700|
|DefineProperty (writable & enumerable=false & configurable=false)|90,894,532|45452114|
|DefineProperties (getter)|50,504,200|25252182|
|DefineProperties (getter & enumerable=false)|49,009,417|24504802|
|DefineProperties (getter & enumerable=false & configurable=false)|49,402,187|24764093|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:47:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Getter (class)","samples":45937032,"opsSec":91760488.55641517},{"name":"Getter","samples":26675495,"opsSec":53350976.76895776},{"name":"Method","samples":47222849,"opsSec":94445640.38815935},{"name":"DefineProperty (getter)","samples":43278594,"opsSec":86556564.44650972},{"name":"DefineProperty (getter & enumerable=false)","samples":26558548,"opsSec":53117084.73917803},{"name":"DefineProperty (getter & configurable=false)","samples":45128379,"opsSec":90256746.80816339},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":26801606,"opsSec":53603169.33187722},{"name":"DefineProperty (writable)","samples":47029426,"opsSec":93296762.61916406},{"name":"DefineProperty (writable & enumerable=false)","samples":46536700,"opsSec":93052229.12903747},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":45452114,"opsSec":90894532.09847198},{"name":"DefineProperties (getter)","samples":25252182,"opsSec":50504200.46739889},{"name":"DefineProperties (getter & enumerable=false)","samples":24504802,"opsSec":49009417.7642125},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":24764093,"opsSec":49402187.89347396}]}-->
